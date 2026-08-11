/**
 * Inloggning för dashboarderna (2026-08-11).
 *
 * BAKGRUND: dashboard_*-funktionerna gick tidigare att anropa med projektets
 * PUBLIKA anon-nyckel, som ligger i varje installerad app. Affärssiffrorna var
 * därmed i praktiken offentliga. Sedan migration 156 kräver funktionerna att
 * anroparen är inloggad OCH står på tabellen dashboard_admins.
 *
 * Filen lägger en inloggningsruta över sidan och byter ut anon-nyckeln mot
 * användarens access-token i Authorization-huvudet. apikey-huvudet ska
 * fortfarande vara anon-nyckeln — så vill Supabase ha det.
 *
 * Klarar FLERA projekt (rapportsidan läser både Europa och Brasilien). Samma
 * inloggningsuppgifter provas mot alla; behövs olika konton frågar rutan igen
 * för det som återstår.
 *
 * Ingen extern kod hämtas — allt sker med fetch mot Supabase auth-API.
 *
 * ANVÄNDNING:
 *   <script src="dashboard-auth.js"></script>
 *   DashAuth.init({
 *     targets: [{ url: SUPABASE_URL, anonKey: SUPABASE_ANON_KEY, namn: 'Europa' }],
 *     onReady: startaDashboarden
 *   });
 *   // och i rpc(): headers: DashAuth.headers(SUPABASE_URL)
 */
(function (global) {
  'use strict';

  var PREFIX = 'flocken_dash_session_';
  var targets = [];
  var onReady = function () {};

  function spara(url, s) {
    try { localStorage.setItem(PREFIX + url, JSON.stringify(s)); } catch (e) {}
  }
  function ladda(url) {
    try { var r = localStorage.getItem(PREFIX + url); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function rensa(url) {
    try { localStorage.removeItem(PREFIX + url); } catch (e) {}
  }
  function target(url) {
    for (var i = 0; i < targets.length; i++) if (targets[i].url === url) return targets[i];
    return targets[0];
  }

  /** Headers för RPC-anrop mot ett visst projekt. */
  function headers(url) {
    var t = target(url);
    var s = ladda(t.url);
    return {
      'apikey': t.anonKey,
      'Authorization': 'Bearer ' + (s && s.access_token ? s.access_token : t.anonKey),
      'Content-Type': 'application/json'
    };
  }

  function loggaIn(t, epost, losenord) {
    return fetch(t.url + '/auth/v1/token?grant_type=password', {
      method: 'POST',
      headers: { 'apikey': t.anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: epost, password: losenord })
    }).then(function (r) {
      return r.json().then(function (j) {
        if (!r.ok || !j.access_token) {
          var m = j.error_description || j.msg || j.message || '';
          // Supabase svarar på engelska — översätt de vanligaste.
          if (/invalid login credentials/i.test(m)) m = 'Fel e-post eller lösenord';
          else if (/email not confirmed/i.test(m)) m = 'E-postadressen är inte bekräftad';
          else if (/rate limit|too many/i.test(m)) m = 'För många försök — vänta en stund';
          throw new Error(m || 'Inloggningen misslyckades');
        }
        return j;
      });
    });
  }

  function fornya(t) {
    var s = ladda(t.url);
    if (!s || !s.refresh_token) return Promise.resolve(false);
    return fetch(t.url + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: { 'apikey': t.anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: s.refresh_token })
    }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (j && j.access_token) { spara(t.url, j); return true; } rensa(t.url); return false; })
      .catch(function () { return false; });
  }

  /** Är den sparade sessionen giltig OCH admin i det projektet? */
  // ─── Google/Apple ────────────────────────────────────────────────────────
  // Flera konton (Torbjorn, Patricia) ar skapade med Google eller Apple och har
  // DARFOR INGET LOSENORD — utan de har knapparna kan de inte logga in alls.
  //
  // Supabase skickar tillbaka tokens i adressens hash (#access_token=...).
  // Hashen sager inte VILKET projekt de galler, sa vi lagger en markor i
  // localStorage innan omdirigeringen och laser den nar vi kommer tillbaka.
  var OAUTH_MARKOR = 'flocken_dash_oauth_target';

  function loggaInMed(t, provider) {
    try { localStorage.setItem(OAUTH_MARKOR, t.url); } catch (e) {}
    var retur = location.origin + location.pathname;
    location.href = t.url + '/auth/v1/authorize?provider=' + provider +
      '&redirect_to=' + encodeURIComponent(retur);
  }

  /** Plockar upp tokens efter aterkomst fran Google/Apple. Returnerar true om nagot togs emot. */
  function fangaOAuthSvar() {
    if (!location.hash || location.hash.indexOf('access_token=') === -1) return false;
    var p = new URLSearchParams(location.hash.substring(1));
    var url;
    try { url = localStorage.getItem(OAUTH_MARKOR); } catch (e) {}
    if (!url) url = targets[0].url;
    spara(url, {
      access_token: p.get('access_token'),
      refresh_token: p.get('refresh_token'),
      expires_in: p.get('expires_in')
    });
    try { localStorage.removeItem(OAUTH_MARKOR); } catch (e) {}
    // Stada adressfaltet sa token inte ligger kvar synlig eller hamnar i historiken
    history.replaceState(null, '', location.origin + location.pathname + location.search);
    return true;
  }

  function arAdmin(t) {
    return fetch(t.url + '/rest/v1/rpc/is_dashboard_admin', {
      method: 'POST', headers: headers(t.url), body: '{}'
    }).then(function (r) { return r.ok ? r.json() : false; })
      .then(function (v) { return v === true; })
      .catch(function () { return false; });
  }

  /** Redan inloggad? Annars försök förnya token en gång. */
  function sakraTarget(t) {
    return arAdmin(t).then(function (ok) {
      if (ok) return true;
      return fornya(t).then(function (f) { return f ? arAdmin(t) : false; });
    });
  }

  function visaRuta(kvar, felmeddelande) {
    var befintlig = document.getElementById('dash-login');
    if (befintlig) befintlig.remove();

    var flera = targets.length > 1;
    var vilka = kvar.map(function (t) { return t.namn; }).join(' och ');

    var d = document.createElement('div');
    d.id = 'dash-login';
    d.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#12100c;display:flex;' +
      'align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;padding:1.5rem';
    d.innerHTML =
      '<form id="dl-form" style="background:#1c1a15;padding:2rem;border-radius:1rem;max-width:22rem;width:100%;border:1px solid #33302a">' +
        '<h2 style="margin:0 0 .35rem;color:#F5EFE2;font-size:1.3rem">Flocken · statistik</h2>' +
        '<p style="margin:0 0 1.25rem;color:#9a958a;font-size:.9rem;line-height:1.5">' +
          'Logga in med ditt Flocken-konto' + (flera ? ' för <strong style="color:#c9c3b6">' + vilka + '</strong>' : '') + '.</p>' +
        '<button type="button" id="dl-google" style="width:100%;display:flex;align-items:center;justify-content:center;gap:.55rem;padding:.7rem;margin-bottom:.5rem;border-radius:999px;border:1px solid #3d3a33;background:#F5EFE2;color:#12100c;font-weight:600;cursor:pointer">' +
          '<svg width="17" height="17" viewBox="0 0 18 18" aria-hidden="true">' +
          '<path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"/>' +
          '<path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z"/>' +
          '<path fill="#FBBC05" d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z"/>' +
          '<path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z"/></svg>' +
          'Fortsätt med Google</button>' +
        '<button type="button" id="dl-apple" style="width:100%;display:flex;align-items:center;justify-content:center;gap:.55rem;padding:.7rem;margin-bottom:.9rem;border-radius:999px;border:1px solid #3d3a33;background:#F5EFE2;color:#12100c;font-weight:600;cursor:pointer">' +
          '<svg width="16" height="16" viewBox="0 0 384 512" aria-hidden="true"><path fill="#000" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>' +
          'Fortsätt med Apple</button>' +
        '<div style="display:flex;align-items:center;gap:.7rem;margin:0 0 .9rem"><span style="flex:1;height:1px;background:#3d3a33"></span>' +
          '<span style="color:#79736a;font-size:.8rem">eller med lösenord</span>' +
          '<span style="flex:1;height:1px;background:#3d3a33"></span></div>' +
        '<input id="dl-e" type="email" placeholder="E-post" autocomplete="username" required ' +
          'style="width:100%;padding:.7rem;margin-bottom:.6rem;border-radius:.5rem;border:1px solid #3d3a33;background:#12100c;color:#F5EFE2;box-sizing:border-box">' +
        '<input id="dl-p" type="password" placeholder="Lösenord" autocomplete="current-password" required ' +
          'style="width:100%;padding:.7rem;margin-bottom:.9rem;border-radius:.5rem;border:1px solid #3d3a33;background:#12100c;color:#F5EFE2;box-sizing:border-box">' +
        '<button type="submit" id="dl-btn" style="width:100%;padding:.75rem;border:0;border-radius:999px;background:#8BA45D;color:#12100c;font-weight:700;cursor:pointer">Logga in</button>' +
        '<p id="dl-fel" style="color:#e8927c;font-size:.85rem;margin:.9rem 0 0;min-height:1.2em">' + (felmeddelande || '') + '</p>' +
      '</form>';
    document.body.appendChild(d);

    // Google/Apple loggar in mot FORSTA projektet som saknas. Behovs bada
    // (rapportsidan) visas rutan igen for det som aterstar efter aterkomsten.
    d.querySelector('#dl-google').addEventListener('click', function () { loggaInMed(kvar[0], 'google'); });
    d.querySelector('#dl-apple').addEventListener('click', function () { loggaInMed(kvar[0], 'apple'); });

    d.querySelector('#dl-form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = d.querySelector('#dl-btn');
      var fel = d.querySelector('#dl-fel');
      var epost = d.querySelector('#dl-e').value.trim();
      var losen = d.querySelector('#dl-p').value;
      btn.disabled = true; btn.textContent = 'Loggar in…'; fel.textContent = '';

      // Prova uppgifterna mot varje projekt som ännu inte är inloggat.
      var kvarEfter = [];
      var sistaFel = '';
      var kedja = Promise.resolve();
      kvar.forEach(function (t) {
        kedja = kedja.then(function () {
          return loggaIn(t, epost, losen)
            .then(function (s) { spara(t.url, s); return arAdmin(t); })
            .then(function (ok) {
              if (!ok) { rensa(t.url); kvarEfter.push(t); sistaFel = 'Kontot saknar behörighet till ' + t.namn + '.'; }
            })
            .catch(function (e) { kvarEfter.push(t); sistaFel = e.message; });
        });
      });

      kedja.then(function () {
        if (kvarEfter.length === 0) { d.remove(); onReady(); return; }
        if (kvarEfter.length < kvar.length) { visaRuta(kvarEfter, 'Kvar att logga in på: ' + kvarEfter.map(function (t) { return t.namn; }).join(', ')); return; }
        btn.disabled = false; btn.textContent = 'Logga in';
        fel.textContent = sistaFel || 'Inloggningen misslyckades';
      });
    });
  }

  function init(options) {
    targets = options.targets;
    onReady = options.onReady;

    fangaOAuthSvar(); // tar emot tokens om vi just kom tillbaka fran Google/Apple

    Promise.all(targets.map(function (t) {
      return sakraTarget(t).then(function (ok) { return ok ? null : t; });
    })).then(function (res) {
      var kvar = res.filter(Boolean);
      if (kvar.length === 0) onReady();
      else visaRuta(kvar);
    });
  }

  function loggaUt() {
    targets.forEach(function (t) { rensa(t.url); });
    location.reload();
  }

  global.DashAuth = { init: init, headers: headers, loggaUt: loggaUt };
})(window);
