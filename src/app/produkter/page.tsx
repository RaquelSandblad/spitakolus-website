export default function Produkter() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Våra Produkter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder två innovativa mobilappar som hjälper användare i olika
            vardagssituationer
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
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Peer-to-peer fastighetsplattform
                </h3>
                <p className="text-gray-600 mb-6">
                  Nästa Hem är Sveriges första kompletta peer-to-peer-fastighetsplattform som 
                  möjliggör direkta kopplingar mellan köpare och säljare - helt utan mäklare. 
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

                <div className="mb-6">
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

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Status:</strong> Under utveckling. Säljare väljer annonspaket (3-12 månader), 
                    köpare använder appen gratis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wovven (tidigare Flocken) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-dark md:w-1/3 flex items-center justify-center p-12">
                <div className="text-white text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h2 className="text-3xl font-bold">Wovven</h2>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sveriges första dedikerade hundparningsplattform
                </h3>
                <p className="text-gray-600 mb-6">
                  Wovven är en modern plattform som kopplar samman hundägare som söker parkamrater 
                  för sina hundar. Med geografisk sökning, säker kommunikation och detaljerade 
                  hundprofiler gör vi det enkelt att hitta perfekta matchningar.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Målgrupp:</h4>
                  <p className="text-gray-600">
                    Privatpersoner (22 kr/mån eller 190 kr/år) med en hund och uppfödare 
                    (60 kr/mån eller 580 kr/år) med flera hundar. Lansering i Sverige med 
                    internationell expansion planerad.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Huvudfunktioner:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>🐕 Hundparning med detaljerade profiler (ras, ålder, stamtavla, hälsotester)</li>
                    <li>🗺️ Interaktiv karta med geografisk sökning</li>
                    <li>💬 Real-time chat mellan hundägare</li>
                    <li>📸 Upp till 5 bilder per hundprofil</li>
                    <li>🐾 Hundvaktstjänster och dagpassning</li>
                    <li>⭐ Favoriter och notifikationssystem</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Status:</strong> Under utveckling. iOS och Android med Supabase-backend, 
                    Google Maps och säker betalning via Stripe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intresserad av våra appar?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vi lanserar snart! Håll utkik för mer information om tillgänglighet och priser.
              Kontakta oss gärna om du har frågor eller vill veta mer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
