import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integritet i Glimmerbaggen – Spitakolus AB',
  description: 'Vilka uppgifter Glimmerbaggen sparar och varför.',
};

const link = 'font-semibold text-[#6d3ccc] underline';

// Integritetstexten för Glimmerbaggen. Spelet länkar hit (Meny → Konto → Integritet och villkor),
// och det gör också Google Play och App Store.
export default function GravspeletIntegritet() {
  return (
    <div className="px-5 py-14">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Integritet</h1>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            Glimmerbaggen görs av Spitakolus AB. Spelet går att spela utan konto. Då sparas din värld bara i din telefon eller
            webbläsare och ingenting om dig skickas till oss. Spelet har ingen reklam, inga köp och ingen statistik som följer
            dig.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Om du skapar ett konto</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>E-postadress och lösenord</strong> – för att du ska kunna logga in och få mejl för att bekräfta
              kontot eller välja ett nytt lösenord. Lösenordet sparas krypterat och ingen kan läsa det.
            </li>
            <li>
              <strong>Användarnamn och färg</strong> – användarnamnet syns för andra spelare, till exempel i lagspelets
              väntrum.
            </li>
            <li>
              <strong>Ditt sparade spel</strong> – din värld, din väska och det du byggt upp, så att du kan fortsätta på en
              annan enhet.
            </li>
          </ul>
          <p>Konton är till för dig som är 13 år eller äldre.</p>

          <h2 className="text-xl font-bold text-[#1b1030]">Spela ihop</h2>
          <p>
            När du spelar ihop skickas din skalbagges position, det du gräver och bygger, dina signaler och ditt användarnamn
            (om du är inloggad) till de andra i samma spel via vår spelserver. Servern sparar inget av det – allt försvinner
            när spelet är slut. För att meddelandena ska komma fram ser servern din IP-adress medan du är ansluten.
          </p>
          <p>
            Om du <strong>blockerar</strong> någon sparas namnet bara i din egen telefon. Om du <strong>rapporterar</strong>{' '}
            någon sparar vi namnet på den du rapporterade, skälet, vilket slags spel det var och ditt användarnamn (om du är
            inloggad), så att vi kan titta på det. Rapporter tas bort när de är färdigbehandlade, senast efter ett år.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Var uppgifterna finns</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Supabase</strong> – konton, sparade spel och rapporter, på servrar i Sverige (EU).
            </li>
            <li>
              <strong>Railway</strong> – spelservern för Spela ihop, i Nederländerna (EU). Sparar ingenting.
            </li>
            <li>
              <strong>Resend</strong> – skickar spelets mejl, från Irland (EU).
            </li>
          </ul>
          <p>
            De här företagen hanterar uppgifterna åt oss och får inte använda dem till något annat. Vi säljer inga
            uppgifter och delar dem inte med någon annan. Allt skickas krypterat.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Ta bort ditt konto</h2>
          <p>
            I spelet: <strong>Meny → Konto → Ta bort konto</strong> (tryck två gånger). Då tas kontot, användarnamnet och
            ditt sparade spel i molnet bort direkt och för alltid. Spelet som är sparat i din telefon finns kvar.
          </p>
          <p>
            På webben:{' '}
            <Link href="/gravspelet/ta-bort-konto" className={link}>
              spitakolus.com/gravspelet/ta-bort-konto
            </Link>{' '}
            – logga in med e-post och lösenord och ta bort kontot direkt.
          </p>
          <p>
            Kommer du inte åt kontot? Mejla{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>{' '}
            från adressen du har kontot på, så tar vi bort kontot och allt som hör till det inom 30 dagar.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Dina rättigheter</h2>
          <p>
            Du kan när som helst be att få se, rätta eller ta bort dina uppgifter – mejla{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            . Tycker du att vi hanterar dina uppgifter fel kan du klaga hos Integritetsskyddsmyndigheten (IMY).
          </p>
          <p className="text-sm">
            Läs också{' '}
            <Link href="/gravspelet/villkor" className="underline">
              villkoren och reglerna för Glimmerbaggen
            </Link>{' '}
            och Spitakolus AB:s{' '}
            <Link href="/integritetspolicy" className="underline">
              integritetspolicy
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
