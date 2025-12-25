import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Spitakolus AB</h3>
            <p className="text-gray-400 mb-4">
              Vi utvecklar Smarta mobilappar som hjälper användare att förenkla sin vardag.
            </p>
            <p className="text-sm text-gray-500">
              Organisationsnummer: 559554-6101
            </p>
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
                <Link href="/produkter" className="text-gray-400 hover:text-white transition-colors">
                  Produkter
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

