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

function StoreBadges({ ios, android, color }: { ios: string; android: string; color: 'primary' | 'secondary' }) {
  const bgClass = color === 'primary'
    ? 'bg-primary hover:bg-primary-dark'
    : 'bg-secondary hover:bg-secondary-dark';

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={ios}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${bgClass} text-white px-5 py-3 rounded-lg transition-colors font-medium`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        Ladda ner på App Store
      </a>
      <a
        href={android}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 ${bgClass} text-white px-5 py-3 rounded-lg transition-colors font-medium`}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.608 1.51a.999.999 0 010 1.764l-2.608 1.509-2.533-2.533 2.533-2.25zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
        </svg>
        Ladda ner på Google Play
      </a>
    </div>
  );
}

export default function Produkter() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Våra Produkter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Båda våra appar är lanserade och tillgängliga på iOS och Android.
            Ladda ner dem idag!
          </p>
        </div>

        <div className="space-y-16">
          {/* Nästa Hem */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gradient-to-br from-primary to-primary-dark md:w-1/3 flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h2 className="text-3xl font-bold">Nästa Hem</h2>
                  <a
                    href={APP_LINKS.nastahem.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-200 hover:text-white transition-colors text-sm underline underline-offset-2"
                  >
                    www.nastahem.com
                  </a>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Peer-to-peer fastighetsplattform
                </h3>
                <p className="text-gray-600 mb-6">
                  Nästa Hem är Sveriges första kompletta peer-to-peer-fastighetsplattform som
                  möjliggör direkta kopplingar mellan köpare och säljare — helt utan mäklare.
                  En modern lösning som demokratiserar bostadsmarknaden.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Målgrupp:</h4>
                  <p className="text-gray-600">
                    Bostadsköpare och säljare som vill ha full kontroll, direktkontakt och
                    spara tiotusentals kronor i mäklarkostnader
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Syfte:</h4>
                  <p className="text-gray-600">
                    Att förenkla och demokratisera fastighetsmarknaden genom att skapa
                    direkta kopplingar mellan köpare och säljare med transparent kommunikation
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-2">Hur appen fungerar:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Sök bostäder med avancerade filter och interaktiv karta</li>
                    <li>Boka visningar direkt i appen</li>
                    <li>Lägg säkra bud med transparent budgivning</li>
                    <li>Kommunicera direkt med säljare via säker chatt</li>
                    <li>Säljare skapar professionella annonser och hanterar försäljningen själva</li>
                    <li>BankID-verifiering för alla användare garanterar säkerhet</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-900 mb-3">Ladda ner Nästa Hem:</p>
                  <StoreBadges ios={APP_LINKS.nastahem.ios} android={APP_LINKS.nastahem.android} color="primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Flocken */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-dark md:w-1/3 flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h2 className="text-3xl font-bold">Flocken</h2>
                  <a
                    href={APP_LINKS.flocken.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-green-200 hover:text-white transition-colors text-sm underline underline-offset-2"
                  >
                    flocken.info
                  </a>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sveriges första kompletta plattform för hundägare
                </h3>
                <p className="text-gray-600 mb-6">
                  Flocken förenklar vardagen för hundägare genom att samla fyra viktiga tjänster
                  på ett ställe: hundparning för avelsändamål, pålitliga hundvaktstjänster,
                  en guide till hundvänliga platser, och GPS-spårade promenadstråk att utforska.
                  Allt du behöver som hundägare, baserat på geografisk närhet och lätt att använda.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Målgrupp:</h4>
                  <p className="text-gray-600">
                    Privatpersoner och kennlar/uppfödare. Prenumerationsbaserad tjänst med
                    betalning per månad eller per år. Lanserad i Sverige, Norge och Danmark.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-2">Huvudfunktioner:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Hitta kompisar för parning, lek och promenader</li>
                    <li>Hundparning för avelsändamål med detaljerade profiler</li>
                    <li>Pålitliga hundvaktstjänster och dagpassning</li>
                    <li>Guide till hundvänliga platser i närområdet</li>
                    <li>GPS-spårade promenadstråk att upptäcka</li>
                    <li>Real-time chat och geografisk sökning</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-900 mb-3">Ladda ner Flocken:</p>
                  <StoreBadges ios={APP_LINKS.flocken.ios} android={APP_LINKS.flocken.android} color="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Besök apparnas hemsidor
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vill du veta mer om våra appar? Besök deras dedikerade hemsidor för mer information,
              guider och nyheter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={APP_LINKS.nastahem.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Nästa Hem — nastahem.com
              </a>
              <a
                href={APP_LINKS.flocken.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Flocken — flocken.info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
