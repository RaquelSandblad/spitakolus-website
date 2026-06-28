import Link from 'next/link';

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
