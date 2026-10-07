import type { Metadata } from 'next';
import Link from 'next/link';
import LangSwitch from '../LangSwitch';

export const metadata: Metadata = {
  title: 'Villkor för Glimmerbaggen – Spitakolus AB',
  description: 'Regler när du spelar Glimmerbaggen och spelar ihop med andra.',
};

const link = 'font-semibold text-[#6d3ccc] underline';

// Villkoren och reglerna för Glimmerbaggen. Spelet länkar hit från Spela ihop (Läs villkoren)
// och man godkänner reglerna där innan man spelar ihop första gången.
export default function GravspeletVillkor() {
  return (
    <div className="px-5 py-14">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <LangSwitch page="terms" current="sv" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Villkor och regler</h1>
        <p className="mt-2 text-sm text-[#8a7aa0]">Senast ändrad 1 oktober 2026</p>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            Glimmerbaggen görs av Spitakolus AB. När du spelar Glimmerbaggen, skapar ett konto eller spelar ihop med andra
            godkänner du de här villkoren.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Regler när du spelar ihop</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Var schysst mot dem du spelar med.</li>
            <li>
              Välj ett snällt användarnamn. Inga svordomar, inga elaka eller sexuella ord och inte någon annans namn.
            </li>
            <li>Fuska inte och ändra inte i spelet för att förstöra för andra.</li>
            <li>Lägg aldrig ut någon annans personliga uppgifter.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1b1030]">Blockera och rapportera</h2>
          <p>
            Är någon elak, fuskar eller har ett olämpligt namn kan du i spelet gå till{' '}
            <strong>Meny → Spela ihop → Rapportera / blockera</strong>. Blockerar du någon lämnar ni varandras spel och
            hamnar inte ihop igen. Rapporterar du någon får vi veta det. Du kan också mejla{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            .
          </p>
          <p>
            Vi läser alla rapporter. Den som bryter mot reglerna kan få sitt användarnamn ändrat eller sitt konto avstängt
            eller borttaget.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Ditt konto</h2>
          <p>
            Konton är till för dig som är 13 år eller äldre. Du ansvarar för ditt lösenord. Du kan ta bort kontot när du vill
            i spelet (<strong>Meny → Konto → Ta bort konto</strong>).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Köpet Hela spelet</h2>
          <p>
            Början av spelet är gratis. <strong>Hela spelet</strong> är ett engångsköp som låser upp resten av äventyret för
            alltid – det är ingen prenumeration. Köpet görs i Google Play eller App Store, och deras villkor gäller för
            betalningen och för återbetalningar. Vill du ha pengarna tillbaka frågar du Google eller Apple.
          </p>
          <p>
            Köpet hör till ditt Google- eller Apple-konto. Byter du telefon eller installerar om spelet trycker du på{' '}
            <strong>Meny → Konto → Återställ köp</strong>. Är du inloggad i spelet följer köpet också med ditt konto. Spela
            ihop som gäst och lagspel är gratis för alla.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Spelet</h2>
          <p>
            Vi gör vårt bästa för att spelet och molnsparningen ska fungera, men vi kan inte lova att de alltid gör det.
            Spelet kan ändras, och funktioner kan läggas till eller tas bort. Spelet och allt i det tillhör Spitakolus AB.
          </p>

          <p className="text-sm">
            Läs också{' '}
            <Link href="/gravspelet/integritet" className="underline">
              vilka uppgifter spelet sparar
            </Link>
            . Frågor? Mejla{' '}
            <a href="mailto:support@spitakolus.com" className="underline">
              support@spitakolus.com
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
