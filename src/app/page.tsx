import Link from 'next/link';

const APP_LINKS = {
  nastahem: {
    website: 'https://www.nastahem.com',
    ios: 'https://apps.apple.com/se/app/n%C3%A4sta-hem/id6749783267',
    android: 'https://play.google.com/store/apps/details?id=com.nastahem.app&hl=sv',
  },
  flocken: {
    website: 'https://flocken.info',
    ios: 'https://apps.apple.com/se/app/flocken/id6755424578',
    android: 'https://play.google.com/store/apps/details?id=com.bastavan.app&hl=sv',
  },
};

function StoreBadges({ ios, android }: { ios: string; android: string }) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <a
        href={ios}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        App Store
      </a>
      <a
        href={android}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.04c-.35 0-.7-.12-.98-.37-.49-.44-.56-1.18-.15-1.7L5.7 16.5H2.25c-.46 0-.87-.27-1.06-.69s-.1-.9.22-1.23L15.3.69c.49-.44 1.23-.4 1.68.09.44.49.4 1.23-.09 1.68L8.06 11.5h4.19c.46 0 .87.27 1.06.69s.1.9-.22 1.23L4.2 22.67c-.28.25-.64.37-1.02.37z" />
        </svg>
        Google Play
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/15 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Våra appar finns nu på iOS och Android
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Välkommen till Spitakolus AB
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Vi bygger smarta mobilappar som förenklar vardagen — nu lanserade och tillgängliga för alla
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
              Tillgängliga nu på App Store och Google Play
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nästa Hem */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Nästa Hem
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sveriges första peer-to-peer-fastighetsplattform som kopplar samman
                köpare och säljare direkt — utan mäklare. Sök, boka visningar och
                hantera hela fastighetsprocessen på ett säkert och transparent sätt.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href={APP_LINKS.nastahem.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center"
                >
                  nastahem.com
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/produkter"
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  Läs mer →
                </Link>
              </div>
              <div className="mt-auto">
                <StoreBadges ios={APP_LINKS.nastahem.ios} android={APP_LINKS.nastahem.android} />
              </div>
            </div>

            {/* Flocken */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Flocken
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Sveriges första kompletta plattform för hundägare. Hitta kompisar för parning,
                lek eller promenader. Inkluderar hundvaktstjänster, guide till hundvänliga platser
                och GPS-spårade promenadstråk — allt baserat på geografisk närhet.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <a
                  href={APP_LINKS.flocken.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-semibold hover:text-secondary-dark transition-colors inline-flex items-center"
                >
                  flocken.info
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/produkter"
                  className="text-gray-500 hover:text-primary transition-colors text-sm"
                >
                  Läs mer →
                </Link>
              </div>
              <div className="mt-auto">
                <StoreBadges ios={APP_LINKS.flocken.ios} android={APP_LINKS.flocken.android} />
              </div>
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
