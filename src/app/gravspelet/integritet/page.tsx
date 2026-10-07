import type { Metadata } from 'next';
import Link from 'next/link';
import LangSwitch from '../LangSwitch';

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
        <LangSwitch page="privacy" current="sv" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Integritet</h1>
        <p className="mt-2 text-sm text-[#8a7aa0]">Senast ändrad 1 oktober 2026</p>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            Glimmerbaggen görs av Spitakolus AB. Spelet går att spela utan konto. Då sparas din värld bara i din telefon eller
            webbläsare och ingenting om dig skickas till oss. Spelet har ingen reklam och ingen statistik som följer dig. Den
            som vill kan köpa <strong>Hela spelet</strong> (ett engångsköp, se nedan).
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

          <h2 className="text-xl font-bold text-[#1b1030]">Köpet Hela spelet</h2>
          <p>
            Början av spelet är gratis. Resten av äventyret låser du upp med ett engångsköp, <strong>Hela spelet</strong>.
            Köpet görs i Google Play eller App Store, och det är Google eller Apple som tar betalt och hanterar dina
            betalningsuppgifter. Vi får aldrig se ditt kortnummer eller andra betalningsuppgifter.
          </p>
          <p>
            För att spelet ska veta att du har köpt Hela spelet, och för att du ska kunna <strong>återställa köpet</strong>{' '}
            på en ny telefon, kontrolleras köpet av <strong>RevenueCat</strong>. RevenueCat får:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Ett id-nummer</strong> – ett slumpat id som inte säger något om dig, eller ditt kontos id-nummer om
              du är inloggad (så att köpet följer med ditt konto).
            </li>
            <li>
              <strong>Köphistoriken</strong> – vad som har köpts och när, och kvittot från butiken.
            </li>
          </ul>
          <p>
            RevenueCat får inte ditt namn, din e-postadress eller ditt användarnamn. Som alla tjänster på nätet ser
            RevenueCat också tekniska uppgifter som behövs för att köpet ska fungera, till exempel IP-adress, appversion och
            vilken butik och vilket land köpet gäller. Uppgifterna används bara för att låsa upp det du har köpt och för att
            du ska kunna återställa köpet.
          </p>
          <p>
            Uppgifterna om köpet sparas hos RevenueCat och i Google Play eller App Store så länge det behövs för köpet,
            bokföring och reklamationer, enligt deras villkor. Vill du att vi tar bort det som finns om dig hos RevenueCat,
            mejla{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            . Själva köpet finns kvar hos Google eller Apple, så du kan fortfarande återställa det.
          </p>

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
            <li>
              <strong>RevenueCat</strong> (RevenueCat Inc.) – kontrollerar köpet Hela spelet (se ovan). RevenueCat är ett
              amerikanskt bolag, så uppgifterna förs över till USA. Överföringen skyddas med EU:s standardavtalsklausuler.
            </li>
            <li>
              <strong>Google Play och Apple App Store</strong> – själva köpet och betalningen. De hanterar den som egna
              personuppgiftsansvariga enligt sina egna villkor.
            </li>
          </ul>
          <p>
            Supabase, Railway, Resend och RevenueCat hanterar uppgifterna åt oss och får inte använda dem till något annat.
            Vi säljer inga uppgifter och delar dem inte med någon annan. Allt skickas krypterat.
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
          <p>
            När kontot är borttaget finns inget kvar hos oss som kopplar kontots id-nummer till dig. Köphistoriken som
            RevenueCat har under det id-numret finns kvar enligt avsnittet om köpet ovan – mejla oss om du vill att den
            också tas bort. Har du köpt Hela spelet finns köpet kvar hos Google eller Apple, och du kan återställa det i
            spelet (<strong>Meny → Konto → Återställ köp</strong>).
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
