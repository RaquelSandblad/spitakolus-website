/**
 * Inloggning för Nästa Hems dashboard (2026-10-18). Kopia av Klenods.
 *
 * Ersätter den gamla lösenordsrutan (NH-analises/index.html), som bara fanns
 * i webbläsaren medan siffrorna gick att hämta med den publika anon-nyckeln.
 * Nu ligger siffrorna bakom RPC:er som kräver ett inloggat Nästa Hem-konto
 * som står i dashboard_admins (migrering 20261018120000_dashboard_admin_las
 * i Appen-repot). Samma modell som Flocken, Nära och Klenod.
 *
 * Filen lägger en inloggningsruta över sidan. Efter lyckad inloggning
 * anropas onReady, och RPC-anrop görs med DashAuth.headers() som byter ut
 * publishable-nyckeln mot användarens access-token i Authorization-huvudet
 * (apikey-huvudet ska fortfarande vara publishable-nyckeln).
 *
 * Ingen extern kod hämtas — allt sker med fetch mot Supabase auth-API.
 *
 * ANVÄNDNING:
 *   <script src="dashboard-auth.js"></script>
 *   DashAuth.init({
 *     url: SUPABASE_URL, anonKey: SUPABASE_KEY,
 *     onReady: startaDashboarden
 *   });
 *   // i rpc(): headers: DashAuth.headers()
 */
(function (global) {
  'use strict';

  var PREFIX = 'nastahem_dash_session_';
  var cfg = null;
  var onReady = function () {};

  function spara(s) {
    try { localStorage.setItem(PREFIX + cfg.url, JSON.stringify(s)); } catch (e) {}
  }
  function ladda() {
    try { var r = localStorage.getItem(PREFIX + cfg.url); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function rensa() {
    try { localStorage.removeItem(PREFIX + cfg.url); } catch (e) {}
  }

  function headers() {
    var s = ladda();
    return {
      'apikey': cfg.anonKey,
      'Authorization': 'Bearer ' + (s && s.access_token ? s.access_token : cfg.anonKey),
      'Content-Type': 'application/json'
    };
  }

  function loggaIn(epost, losenord) {
    return fetch(cfg.url + '/auth/v1/token?grant_type=password', {
      method: 'POST',
      headers: { 'apikey': cfg.anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: epost, password: losenord })
    }).then(function (r) {
      return r.json().then(function (j) {
        if (!r.ok || !j.access_token) {
          var m = j.error_description || j.msg || j.message || '';
          if (/invalid login credentials/i.test(m)) m = 'Fel e-post eller lösenord';
          else if (/email not confirmed/i.test(m)) m = 'E-postadressen är inte bekräftad';
          else if (/rate limit|too many/i.test(m)) m = 'För många försök — vänta en stund';
          throw new Error(m || 'Inloggningen misslyckades');
        }
        return j;
      });
    });
  }

  function fornya() {
    var s = ladda();
    if (!s || !s.refresh_token) return Promise.resolve(false);
    return fetch(cfg.url + '/auth/v1/token?grant_type=refresh_token', {
      method: 'POST',
      headers: { 'apikey': cfg.anonKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh_token: s.refresh_token })
    }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (j && j.access_token) { spara(j); return true; } rensa(); return false; })
      .catch(function () { return false; });
  }

  /* Svarar databasen 404 på is_dashboard_admin finns funktionen inte — migreringen
     är inte körd. Då ska rutan säga det, inte att kontot saknar behörighet. */
  var SAKNAS = 'Nästa Hems databas saknar ännu inloggningsfunktionen (migreringen ' +
    '20261018120000_dashboard_admin_las i Appen-repot är inte körd).';
  var saknasFunktion = false;

  /** Är den sparade sessionen giltig OCH är kontot administratör? */
  function arAdmin() {
    return fetch(cfg.url + '/rest/v1/rpc/is_dashboard_admin', {
      method: 'POST', headers: headers(), body: '{}'
    }).then(function (r) {
        saknasFunktion = r.status === 404;
        return r.ok ? r.json() : false;
      })
      .then(function (v) { return v === true; })
      .catch(function () { return false; });
  }

  function visaRuta(felmeddelande) {
    var befintlig = document.getElementById('dash-login');
    if (befintlig) befintlig.remove();

    var d = document.createElement('div');
    d.id = 'dash-login';
    d.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#0e1013;display:flex;' +
      'align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;padding:1.5rem';
    d.innerHTML =
      '<form id="dl-form" style="background:#15181e;padding:2rem;border-radius:1rem;max-width:22rem;width:100%;border:1px solid #242a35">' +
        '<h2 style="margin:0 0 .35rem;color:#e8eaed;font-size:1.3rem">Nästa Hem · statistik</h2>' +
        '<p style="margin:0 0 1.25rem;color:#98a1b0;font-size:.9rem;line-height:1.5">' +
          'Logga in med ditt Nästa Hem-konto (e-post och lösenord). Bara administratörer kan se siffrorna.</p>' +
        '<input id="dl-e" type="email" placeholder="E-post" autocomplete="username" required ' +
          'style="width:100%;padding:.7rem;margin-bottom:.6rem;border-radius:.5rem;border:1px solid #242a35;background:#0e1013;color:#e8eaed;box-sizing:border-box">' +
        '<div style="position:relative;margin-bottom:.9rem">' +
          '<input id="dl-p" type="password" placeholder="Lösenord" autocomplete="current-password" required ' +
            'style="width:100%;padding:.7rem 3.4rem .7rem .7rem;border-radius:.5rem;border:1px solid #242a35;background:#0e1013;color:#e8eaed;box-sizing:border-box">' +
          '<button type="button" id="dl-visa" aria-label="Visa lösenordet" style="position:absolute;right:.45rem;top:50%;transform:translateY(-50%);' +
            'padding:.25rem .55rem;border:0;border-radius:.4rem;background:transparent;color:#98a1b0;font-size:.8rem;cursor:pointer">Visa</button>' +
        '</div>' +
        '<button type="submit" id="dl-btn" style="width:100%;padding:.75rem;border:0;border-radius:999px;background:#d4a574;color:#0e1013;font-weight:700;cursor:pointer">Logga in</button>' +
        '<p id="dl-fel" style="color:#e0796c;font-size:.85rem;margin:.9rem 0 0;min-height:1.2em">' + (felmeddelande || '') + '</p>' +
      '</form>';
    document.body.appendChild(d);

    d.querySelector('#dl-visa').addEventListener('click', function () {
      var p = d.querySelector('#dl-p');
      var visas = p.type === 'text';
      p.type = visas ? 'password' : 'text';
      this.textContent = visas ? 'Visa' : 'Dölj';
      this.setAttribute('aria-label', visas ? 'Visa lösenordet' : 'Dölj lösenordet');
      p.focus();
    });

    d.querySelector('#dl-form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var btn = d.querySelector('#dl-btn');
      var fel = d.querySelector('#dl-fel');
      btn.disabled = true; btn.textContent = 'Loggar in…'; fel.textContent = '';

      loggaIn(d.querySelector('#dl-e').value.trim(), d.querySelector('#dl-p').value)
        .then(function (s) { spara(s); return arAdmin(); })
        .then(function (ok) {
          if (ok) { d.remove(); visaUtloggning(); onReady(); return; }
          rensa();
          btn.disabled = false; btn.textContent = 'Logga in';
          fel.textContent = saknasFunktion ? SAKNAS : 'Kontot saknar administratörsbehörighet.';
        })
        .catch(function (e) {
          btn.disabled = false; btn.textContent = 'Logga in';
          fel.textContent = e.message || 'Inloggningen misslyckades';
        });
    });
  }

  function visaUtloggning() {
    if (document.getElementById('dash-ut')) return;
    var b = document.createElement('button');
    b.id = 'dash-ut';
    b.textContent = 'Logga ut';
    b.style.cssText = 'position:fixed;top:.6rem;right:.6rem;z-index:9998;padding:.35rem .8rem;' +
      'border:1px solid rgba(152,161,176,.45);border-radius:999px;background:rgba(21,24,30,.06);' +
      'color:inherit;cursor:pointer;font-size:.8rem;font-family:system-ui,-apple-system,sans-serif;opacity:.75';
    b.addEventListener('click', loggaUt);
    document.body.appendChild(b);
  }

  function init(options) {
    cfg = options;
    onReady = options.onReady;

    arAdmin().then(function (ok) {
      if (ok) { visaUtloggning(); onReady(); return; }
      return fornya().then(function (f) {
        if (!f) { visaRuta(saknasFunktion ? SAKNAS : ''); return; }
        return arAdmin().then(function (ok2) {
          if (ok2) { visaUtloggning(); onReady(); } else visaRuta(saknasFunktion ? SAKNAS : '');
        });
      });
    });
  }

  function loggaUt() {
    rensa();
    location.reload();
  }

  global.DashAuth = { init: init, headers: headers, loggaUt: loggaUt };
})(window);
