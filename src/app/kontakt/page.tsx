export default function Kontakt() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kontakta Oss
          </h1>
          <p className="text-xl text-gray-600">
            Vi svarar normalt inom 24–48 timmar
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Kontaktinformation</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">E-post</h3>
                    <a href="mailto:support@spitakolus.se" className="hover:underline">
                      support@spitakolus.se
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Företagsinformation</h3>
                    <p>Spitakolus AB</p>
                    <p className="text-sm text-blue-100 mt-1">
                      Org.nr: 559554-6101
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-1">Svarstid</h3>
                    <p className="text-sm text-blue-100">
                      Vi strävar efter att svara på alla förfrågningar inom 24–48 timmar på vardagar
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-400">
                <h3 className="font-semibold mb-3">Kundservice</h3>
                <p className="text-sm text-blue-100">
                  För frågor om våra appar, teknisk support, eller allmänna förfrågningar,
                  vänligen kontakta oss via e-post så hjälper vi dig gärna.
                </p>
              </div>
            </div>

            {/* Contact Form Info */}
            <div className="p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hur kan vi hjälpa dig?
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Allmänna frågor</h3>
                  <p className="text-gray-600">
                    Frågor om våra tjänster, produkter eller företaget i allmänhet
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Teknisk support</h3>
                  <p className="text-gray-600">
                    Hjälp med användning av våra appar, tekniska problem eller buggar
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Återbetalningar</h3>
                  <p className="text-gray-600">
                    Frågor om betalningar, återbetalningar eller prenumerationer
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Samarbeten</h3>
                  <p className="text-gray-600">
                    Intresserad av samarbeten eller partnerskap? Hör av dig!
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border-2 border-primary">
                <p className="text-gray-700">
                  <strong className="text-primary">Tips:</strong> För snabbare hantering,
                  ange gärna vilket ärende din förfrågan gäller i ämnesraden.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Vi värdesätter din integritet. All kommunikation behandlas konfidentiellt enligt vår{' '}
            <a href="/integritetspolicy" className="text-primary hover:underline">
              integritetspolicy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
