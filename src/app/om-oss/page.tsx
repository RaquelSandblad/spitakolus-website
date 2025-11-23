export default function OmOss() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Om Spitakolus AB
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ett svenskt teknikföretag som utvecklar innovativa mobilappar för framtiden
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Vår Mission</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Spitakolus AB är ett svenskt teknikföretag grundat för att utveckla innovativa
                mobilappar som förenklar människors vardag. Vår vision är att skapa stabila,
                moderna och användarvänliga lösningar för både privatpersoner och företag.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Våra Värderingar</h2>
            <p className="text-xl text-gray-600">
              Det här driver oss varje dag
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kvalitet</h3>
              <p className="text-gray-600">
                Vi strävar efter högsta kvalitet i allt vi gör, från kod till kundservice
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-secondary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Användarvänlighet</h3>
              <p className="text-gray-600">
                Användaren i centrum - vi skapar intuitiva och lättanvända lösningar
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Vi utforskar nya teknologier och lösningar för framtidens behov
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="mb-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vad vi gör</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Spitakolus AB utvecklar mobilappar som hjälper människor i deras vardag.
                Vi fokuserar på att skapa lösningar som är både kraftfulla och enkla att använda.
              </p>
              <p className="text-lg leading-relaxed">
                Våra appar spänner över olika områden - från fastighetshantering till
                djurvård. Det vi har gemensamt är fokus på användarvänlighet, säkerhet
                och modern teknologi.
              </p>
              <p className="text-lg leading-relaxed">
                Vi arbetar enligt agila metoder och ser till att våra produkter kontinuerligt
                utvecklas baserat på användarfeedback och nya teknologiska möjligheter.
              </p>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Företagsinformation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>E-post:</strong>{' '}
                    <a href="mailto:support@spitakolus.se" className="text-primary hover:underline">
                      support@spitakolus.se
                    </a>
                  </p>
                  <p>
                    <strong>Webbplats:</strong>{' '}
                    <span className="text-primary">spitakolus.com</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Företagsdetaljer</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Företagsnamn:</strong> Spitakolus AB
                  </p>
                  <p>
                    <strong>Organisationsnummer:</strong> 559554-6101
                  </p>
                  <p>
                    <strong>Land:</strong> Sverige
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Apps Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Våra Produkter</h2>
            <p className="text-xl text-gray-600">
              Upptäck de appar vi utvecklar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nästa Hem</h3>
              <p className="text-blue-100 mb-6">
                Peer-to-peer fastighetsplattform som kopplar samman köpare och säljare 
                direkt utan mellanhänder - demokratiserar bostadsmarknaden
              </p>
              <a
                href="/produkter"
                className="inline-flex items-center text-white font-semibold hover:underline"
              >
                Läs mer om Nästa Hem
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Flocken</h3>
              <p className="text-green-100 mb-6">
                Kompletta plattformen för hundägare med parning, hundvakt, hundvänliga 
                platser och GPS-promenadstråk - allt baserat på geografisk närhet
              </p>
              <a
                href="/produkter"
                className="inline-flex items-center text-white font-semibold hover:underline"
              >
                Läs mer om Flocken
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vill du veta mer?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontakta oss gärna om du har frågor om våra tjänster eller vill diskutera
              ett eventuellt samarbete
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
