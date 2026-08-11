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
        '<input id="dl-e" type="email" placeholder="E-post" autocomplete="username" required ' +
          'style="width:100%;padding:.7rem;margin-bottom:.6rem;border-radius:.5rem;border:1px solid #3d3a33;background:#12100c;color:#F5EFE2;box-sizing:border-box">' +
        '<input id="dl-p" type="password" placeholder="Lösenord" autocomplete="current-password" required ' +
          'style="width:100%;padding:.7rem;margin-bottom:.9rem;border-radius:.5rem;border:1px solid #3d3a33;background:#12100c;color:#F5EFE2;box-sizing:border-box">' +
        '<button type="submit" id="dl-btn" style="width:100%;padding:.75rem;border:0;border-radius:999px;background:#8BA45D;color:#12100c;font-weight:700;cursor:pointer">Logga in</button>' +
        '<p id="dl-fel" style="color:#e8927c;font-size:.85rem;margin:.9rem 0 0;min-height:1.2em">' + (felmeddelande || '') + '</p>' +
      '</form>';
    document.body.appendChild(d);

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
