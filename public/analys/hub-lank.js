/**
 * Liten "till alla dashboards"-länk (2026-08-29).
 *
 * Läggs in på varje dashboard med en rad före </body>:
 *   <script src="/analys/hub-lank.js"></script>
 *
 * Medvetet NERE till vänster. Uppe till höger sitter Flockens regionväxlare,
 * Näras utloggning och rapportens temaknapp — och uppe till vänster ligger
 * varje dashboards rubrik, som pillret la sig ovanpå. Nere till vänster är
 * fritt på alla sidor (Nästa Hems statusruta är bottencentrerad).
 *
 * Helt fristående — rör ingen befintlig logik, och allt är inlindat i
 * try/catch så en dashboard aldrig kan fällas av den här filen.
 */
(function () {
  'use strict';
  try {
    if (window.top !== window.self) return;              // inte i inbäddad ram
    if (location.pathname.indexOf('/analys') === 0) return; // inte på navet självt

    /* Visa länken ENDAST för den som varit inne i navet. Flockens
       Brasilien-dashboard används av brasilianska medarbetare (Patricia,
       Julia) som bara har behörighet till sin egen region — för dem vore en
       svensk länk till ett nav de inte har lösenord till bara förvirrande.
       Har man aldrig låst upp navet ser sidan exakt ut som förut. */
    if (localStorage.getItem('spitakolus_analys_ok') !== '1') return;

    var rita = function () {
      try {
        if (document.getElementById('hub-lank')) return;
        var a = document.createElement('a');
        a.id = 'hub-lank';
        /* Utan avslutande snedstreck: Next.js svarar 308 på "/analys/" och
           skickar vidare hit ändå — den här vägen hoppar över omdirigeringen. */
        a.href = '/analys';
        a.textContent = '← Alla dashboards';
        a.style.cssText =
          /* Över dashboardernas egna inloggningsrutor (z-index 99999): landar
             man på en sida utan session ska man ändå kunna ta sig till navet
             och logga in där i stället. Rutorna är centrerade, så nere till
             vänster skymmer pillret dem inte. */
          'position:fixed;bottom:.9rem;left:.9rem;z-index:100000;' +
          'padding:.35rem .8rem;border-radius:999px;text-decoration:none;' +
          'background:rgba(30,27,36,.92);border:1px solid rgba(140,130,155,.35);' +
          'color:#ECE8F0;font-size:.8rem;font-weight:500;' +
          'font-family:system-ui,-apple-system,sans-serif;' +
          'box-shadow:0 2px 10px rgba(0,0,0,.22);opacity:.85';
        a.addEventListener('mouseenter', function () { a.style.opacity = '1'; });
        a.addEventListener('mouseleave', function () { a.style.opacity = '.85'; });
        (document.body || document.documentElement).appendChild(a);
      } catch (e) {}
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', rita);
    } else {
      rita();
    }
  } catch (e) {}
})();
