import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Välkommen till Spitakolus AB
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Vi utvecklar moderna mobilappar som hjälper användare att förenkla sin vardag
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/produkter"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Utforska våra appar
              </Link>
              <Link
                href="/kontakt"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Kontakta oss
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Våra Appar
            </h2>
            <p className="text-xl text-gray-600">
              Vi erbjuder innovativa lösningar för olika behov
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* App 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Nästa Hem
              </h3>
              <p className="text-gray-600 mb-6">
                Sveriges första peer-to-peer-fastighetsplattform som kopplar samman 
                köpare och säljare direkt - utan mäklare. Sök, boka visningar och 
                hantera hela fastighetsprocessen på ett säkert och transparent sätt.
              </p>
              <Link
                href="/produkter"
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
              >
                Läs mer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* App 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Flocken
              </h3>
              <p className="text-gray-600 mb-6">
                Sveriges första kompletta plattform för hundägare. Hitta kompisar för parning, 
                lek eller promenader. Inkluderar hundvaktstjänster, guide till hundvänliga platser 
                och GPS-spårade promenadstråk - allt baserat på geografisk närhet.
              </p>
              <Link
                href="/produkter"
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
              >
                Läs mer
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Har du frågor?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontakta oss så hjälper vi dig gärna
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </div>
  );
}
