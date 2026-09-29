import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Integritet i Glimmerbaggen – Spitakolus AB',
  description: 'Vilka uppgifter Glimmerbaggen sparar och varför.',
};

// Kort integritetstext för Glimmerbaggens konton. (Utkast – granskas innan spelet släpps.)
export default function GravspeletIntegritet() {
  return (
    <div className="px-5 py-14">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Integritet</h1>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            Glimmerbaggen går att spela utan konto. Då sparas allt bara i din telefon eller webbläsare och ingenting skickas
            till oss.
          </p>
          <h2 className="text-xl font-bold text-[#1b1030]">Om du skapar ett konto</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>E-postadress och lösenord</strong> – för att du ska kunna logga in och få mejl för att bekräfta
              kontot eller välja ett nytt lösenord. Lösenordet sparas krypterat och ingen kan läsa det.
            </li>
            <li>
              <strong>Användarnamn</strong> – det syns för dem du spelar ihop med.
            </li>
            <li>
              <strong>Ditt sparade spel</strong> – din värld, din väska och det du byggt upp, så att du kan fortsätta på en
              annan enhet.
            </li>
          </ul>
          <p>
            Uppgifterna sparas hos vår leverantör Supabase på servrar inom EU och används bara för att spelet ska fungera.
            Vi säljer dem inte och visar ingen reklam. Mejl skickas via vår e-postleverantör.
          </p>
          <h2 className="text-xl font-bold text-[#1b1030]">Spela ihop</h2>
          <p>
            När du spelar ihop skickas din skalbagges position, det du gräver och bygger och dina signaler till de andra i
            samma spel. Inget av det sparas efter att spelet är slut.
          </p>
          <h2 className="text-xl font-bold text-[#1b1030]">Ta bort ditt konto</h2>
          <p>
            I spelet: <strong>Meny → Konto → Ta bort konto</strong> (tryck två gånger). Då tas kontot, användarnamnet och
            ditt sparade spel i molnet bort direkt och för alltid. Spelet som är sparat i din telefon finns kvar.
          </p>
          <p>
            Kommer du inte åt spelet? Mejla{' '}
            <a href="mailto:support@spitakolus.com" className="font-semibold text-[#6d3ccc] underline">
              support@spitakolus.com
            </a>{' '}
            från adressen du har kontot på, så tar vi bort kontot och allt som hör till det.
          </p>
          <p className="text-sm">
            Mer om hur Spitakolus AB hanterar personuppgifter finns i vår{' '}
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
