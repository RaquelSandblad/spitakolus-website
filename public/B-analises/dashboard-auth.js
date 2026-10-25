/**
 * Inloggning för butikstavlan (2026-10-25). Kopia av Klenods dashboard-auth.js.
 *
 * Siffrorna ligger i Klenods databas (migrering 20261025120000_butikstavla i klenod-repot)
 * bakom RPC:er som kräver ett inloggat Klenod-konto som är administratör ELLER finns i
 * private.store_board_viewers (så kan Torbjörn se tavlan utan att bli Klenod-administratör).
 * Ingen anon-läsning.
 *
 * Sessionen sparas under samma nyckel som Klenods dashboard, så den som redan loggat in där
 * (eller i navet /analys) kommer direkt in.
 *
 * ANVÄNDNING:
 *   <script src="dashboard-auth.js"></script>
 *   DashAuth.init({ url: SUPABASE_URL, anonKey: SUPABASE_KEY, onReady: start });
 *   // i rpc(): headers: DashAuth.headers()
 */
(function (global) {
  'use strict';

  var PREFIX = 'klenod_dash_session_';
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

  /* Svarar databasen 404 på is_store_board_viewer finns funktionen inte — migreringen
     är inte körd. Då ska rutan säga det, inte att kontot saknar behörighet. */
  var SAKNAS = 'Butikstavlans funktioner finns inte i databasen än (migreringen ' +
    '20261025120000_butikstavla är inte körd). Se docs/BUTIKSTAVLA.md i klenod-repot.';
  var saknasFunktion = false;

  /** Är den sparade sessionen giltig OCH får kontot se tavlan? */
  function arAdmin() {
    return fetch(cfg.url + '/rest/v1/rpc/is_store_board_viewer', {
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
    d.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#15131a;display:flex;' +
      'align-items:center;justify-content:center;font-family:system-ui,-apple-system,sans-serif;padding:1.5rem';
    d.innerHTML =
      '<form id="dl-form" style="background:#1e1b24;padding:2rem;border-radius:1rem;max-width:22rem;width:100%;border:1px solid #332e3d">' +
        '<h2 style="margin:0 0 .35rem;color:#ECE8F0;font-size:1.3rem">Butikstavla</h2>' +
        '<p style="margin:0 0 1.25rem;color:#A49CAF;font-size:.9rem;line-height:1.5">' +
          'App Store och Google Play för alla sju appar. Logga in med ditt Klenod-konto (e-post och lösenord).</p>' +
        '<input id="dl-e" type="email" placeholder="E-post" autocomplete="username" required ' +
          'style="width:100%;padding:.7rem;margin-bottom:.6rem;border-radius:.5rem;border:1px solid #332e3d;background:#15131a;color:#ECE8F0;box-sizing:border-box">' +
        '<div style="position:relative;margin-bottom:.9rem">' +
          '<input id="dl-p" type="password" placeholder="Lösenord" autocomplete="current-password" required ' +
            'style="width:100%;padding:.7rem 3.4rem .7rem .7rem;border-radius:.5rem;border:1px solid #332e3d;background:#15131a;color:#ECE8F0;box-sizing:border-box">' +
          '<button type="button" id="dl-visa" aria-label="Visa lösenordet" style="position:absolute;right:.45rem;top:50%;transform:translateY(-50%);' +
            'padding:.25rem .55rem;border:0;border-radius:.4rem;background:transparent;color:#A49CAF;font-size:.8rem;cursor:pointer">Visa</button>' +
        '</div>' +
        '<button type="submit" id="dl-btn" style="width:100%;padding:.75rem;border:0;border-radius:999px;background:#3987e5;color:#fff;font-weight:700;cursor:pointer">Logga in</button>' +
        '<p id="dl-fel" style="color:#E0796C;font-size:.85rem;margin:.9rem 0 0;min-height:1.2em">' + (felmeddelande || '') + '</p>' +
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
          fel.textContent = saknasFunktion ? SAKNAS : 'Kontot får inte se butikstavlan. Raquel kan lägga till det.';
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
      'border:1px solid rgba(120,100,85,.45);border-radius:999px;background:rgba(36,29,24,.06);' +
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
