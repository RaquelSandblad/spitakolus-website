export default function Aterbetalning() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Återbetalning, Avbeställning & Tvister
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Senast uppdaterad:</strong> November 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Återbetalningar
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Alla köp i våra appar gäller digitala tjänster och innehåll.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Rätt till återbetalning</h3>
                <p className="text-gray-700 mb-2">
                  Om du upplever tekniska problem eller är missnöjd med tjänsten kan du
                  kontakta oss inom <strong>14 dagar</strong> från köpet.
                </p>
                <p className="text-gray-700">
                  Kontakta oss på:{' '}
                  <a href="mailto:support@spitakolus.se" className="text-primary hover:underline">
                    support@spitakolus.se
                  </a>
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Återbetalningar bedöms från fall till fall
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vi behandlar alla återbetalningsärenden individuellt. Återbetalning kan beviljas om:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Du upplever allvarliga tekniska problem som vi inte kan lösa</li>
                <li>Tjänsten inte fungerar som utlovat</li>
                <li>Du av misstag gjort ett dubbelt köp</li>
                <li>Appen inte är kompatibel med din enhet (trots att systemkrav uppfyllts)</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Observera</h4>
                <p className="text-gray-700">
                  Återbetalningar kan normalt inte ske efter att du aktivt använt tjänsten
                  under en längre period. Kontakta oss så snart som möjligt om du upplever problem.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Avbeställning av prenumerationer
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Viktigt om prenumerationer</h3>
                <p className="text-gray-700 mb-4">
                  Om du använder prenumerationer via <strong>App Store</strong> eller{' '}
                  <strong>Google Play</strong>:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Prenumerationer hanteras av Apple eller Google</li>
                  <li>Du måste själv avbryta prenumerationen via App Store eller Google Play</li>
                  <li>Spitakolus AB kan inte avbryta prenumerationer åt dig</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Så avbryter du prenumerationer
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store (iPhone/iPad)
                  </h4>
                  <ol className="text-sm text-gray-700 space-y-2 ml-4 list-decimal">
                    <li>Öppna Inställningar på din enhet</li>
                    <li>Tryck på ditt namn längst upp</li>
                    <li>Tryck på &quot;Prenumerationer&quot;</li>
                    <li>Välj prenumerationen du vill avbryta</li>
                    <li>Tryck på &quot;Avbryt prenumeration&quot;</li>
                  </ol>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L.978 0l.124-.248L3.733.066l.128-.066 6.674 12.459L4.86 20.01l4.664-5.259L21.978 24l.916-2.025-11.999-6.402-2.564-1.373 6.263-3.255-.096-.125L3.609 1.814zM.978 24l2.631-1.813 9.892-6.846L21.978 0 21 2.068 9.343 8.346l.096.125 10.889 9.006-2.631 1.814L7.805 6.832 1.872 10.02l-.894.53z"/>
                    </svg>
                    Google Play (Android)
                  </h4>
                  <ol className="text-sm text-gray-700 space-y-2 ml-4 list-decimal">
                    <li>Öppna Google Play Store-appen</li>
                    <li>Tryck på profilikonen längst upp till höger</li>
                    <li>Tryck på &quot;Betalningar och prenumerationer&quot;</li>
                    <li>Tryck på &quot;Prenumerationer&quot;</li>
                    <li>Välj prenumerationen du vill avbryta</li>
                    <li>Tryck på &quot;Avbryt prenumeration&quot;</li>
                  </ol>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Behöver du hjälp?</h4>
                <p className="text-gray-700">
                  Om du har problem med att avbryta din prenumeration, kontakta oss så
                  hjälper vi dig genom processen:{' '}
                  <a href="mailto:support@spitakolus.se" className="text-primary hover:underline">
                    support@spitakolus.se
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tvister och betalningstvister
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Viktigt: Kontakta oss först</h3>
                <p className="text-gray-700">
                  Innan du öppnar en betalningsdispute eller tvist hos din bank eller
                  betalningsleverantör, vänligen kontakta oss först. Vi löser oftast
                  problem snabbare och enklare direkt.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Process för tvister
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Kontakta oss</h4>
                    <p className="text-gray-700">
                      Skicka ett e-postmeddelande till{' '}
                      <a href="mailto:support@spitakolus.se" className="text-primary hover:underline">
                        support@spitakolus.se
                      </a>{' '}
                      med beskrivning av problemet
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Snabb hantering</h4>
                    <p className="text-gray-700">
                      Vi hanterar ärendet inom <strong>2 arbetsdagar</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Lösning</h4>
                    <p className="text-gray-700">
                      Vi erbjuder återbetalning, ersättning eller annan lämplig lösning
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                Betalningar via Stripe
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                För betalningar som gjordes via Stripe följer vi Stripes officiella
                dispute-process. Detta innebär:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Vi får automatiskt notifiering om en dispute öppnas</li>
                <li>Vi granskar ärendet och tillhandahåller nödvändig dokumentation</li>
                <li>Stripe faciliterar kommunikationen mellan dig och oss</li>
                <li>Beslut fattas enligt Stripes riktlinjer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Vårt löfte till dig
              </h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vi svarar på alla förfrågningar inom 24-48 timmar
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vi behandlar alla ärenden rättvist och individuellt
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vi strävar efter att lösa problem innan de blir tvister
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vi är transparenta med vår process och kommunikation
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kontakta oss
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  För alla frågor om återbetalningar, avbeställningar eller tvister:
                </p>
                <p className="text-gray-700">
                  <strong>E-post:</strong>{' '}
                  <a href="mailto:support@spitakolus.se" className="text-primary hover:underline">
                    support@spitakolus.se
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Spitakolus AB</strong><br />
                  Org.nr: 559554-6101
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
