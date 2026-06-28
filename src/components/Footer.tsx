import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Spitakolus AB</h3>
            <p className="text-gray-400 mb-4">
              Vi bygger smarta mobilappar som förenklar vardagen.
            </p>
            <p className="text-sm text-gray-500">
              Organisationsnummer: 559554-6101
            </p>
          </div>

          {/* Our Apps */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Våra Appar</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300 font-medium block text-sm">Nästa Hem</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                  <a href="https://www.nastahem.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs">
                    Hemsida
                  </a>
                  <a href="https://apps.apple.com/se/app/n%C3%A4sta-hem/id6749783267" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs">
                    App Store
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.nastahem.app&hl=sv" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs">
                    Google Play
                  </a>
                </div>
              </li>
              <li>
                <span className="text-gray-300 font-medium block text-sm">Flocken</span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                  <a href="https://flocken.info" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs">
                    Hemsida
                  </a>
                  <a href="https://apps.apple.com/se/app/flocken/id6755424578" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs">
                    App Store
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.bastavan.app&hl=sv" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs">
                    Google Play
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-400 hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Juridiskt</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/integritetspolicy" className="text-gray-400 hover:text-white transition-colors">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link href="/anvandarvillkor" className="text-gray-400 hover:text-white transition-colors">
                  Användarvillkor
                </Link>
              </li>
              <li>
                <Link href="/aterbetalning" className="text-gray-400 hover:text-white transition-colors">
                  Återbetalning & Avbokning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Spitakolus AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
