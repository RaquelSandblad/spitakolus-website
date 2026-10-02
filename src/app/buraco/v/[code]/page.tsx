import type { Metadata } from 'next';
import { formatFriendCode, normalizeFriendCode } from '@/lib/buraco';
import { getLang, type SearchParams } from '../../lang';
import { Shell } from '../../Shell';
import { APP_NAME, t } from '../../texts';
import { Card, Eyebrow, Notice, Rich } from '../../ui';
import CopyCode from './CopyCode';

type Props = { params: Promise<{ code: string }>; searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const fl = t(await getLang(searchParams)).friendLink;
  // Vänkoder ska inte hamna i sökmotorer, och adressen (med koden) skickas inte vidare till andra sidor.
  return {
    title: fl.metaTitle,
    description: fl.metaDescription,
    robots: { index: false, follow: false },
    referrer: 'no-referrer',
    openGraph: { title: fl.metaTitle, description: fl.metaDescription, siteName: APP_NAME, type: 'website' },
  };
}

/** Koden ur adressen (…/buraco/v/K7QM4XPD), eller null om den inte är en giltig vänkod. */
function codeFromPath(raw: string): string | null {
  let s = raw;
  try {
    s = decodeURIComponent(raw);
  } catch {
    // Trasig %-kodning – prova med texten som den är.
  }
  return s.length <= 64 ? normalizeFriendCode(s) : null;
}

// Sidan som länken och QR-koden från "Spela med vänner" i appen öppnar: visar vänkoden, hur man lägger
// till den i appen och knappar till butikerna. Sidan frågar aldrig spelservern – den vet inte vems
// koden är eller om den finns, och visar därför aldrig något användarnamn.
export default async function BuracoVanLank({ params, searchParams }: Props) {
  const lang = await getLang(searchParams);
  const { friendLink: fl, home } = t(lang);
  const code = codeFromPath((await params).code);
  const shown = code ? formatFriendCode(code) : null;

  return (
    <Shell lang={lang}>
      <Card className="mx-auto max-w-xl">
        <Eyebrow>{APP_NAME}</Eyebrow>
        <h1 className="mt-1 text-3xl font-extrabold text-[#14231e] sm:text-4xl">{fl.title}</h1>

        {shown ? (
          <div className="mt-6 rounded-2xl border-2 border-dashed border-[#d9a441] bg-[#fff6e0] p-4 text-center sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#6b7a73]">{fl.codeLabel}</p>
            {/* Koden ska aldrig brytas vid bindestrecket, så storleken följer skärmbredden på smala telefoner. */}
            <p
              translate="no"
              className="mt-1 select-all whitespace-nowrap font-mono text-[clamp(1.25rem,8.5vw,1.875rem)] font-bold tracking-[0.1em] text-[#14231e] sm:text-5xl"
            >
              {shown}
            </p>
            <CopyCode code={shown} texts={fl.copy} />
          </div>
        ) : (
          <div className="mt-6">
            <Notice kind="info">
              <strong>{fl.invalidTitle}</strong> {fl.invalidText}
            </Notice>
          </div>
        )}

        <h2 className="mt-8 text-lg font-bold text-[#14231e]">{fl.stepsTitle}</h2>
        <ol className="mt-3 space-y-3 leading-relaxed">
          {fl.steps.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#14231e] text-sm font-bold text-[#f2b84b]"
              >
                {i + 1}
              </span>
              <span>
                <Rich text={step} lang={lang} />
              </span>
            </li>
          ))}
        </ol>

        {/* Appen finns på Google Play; App Store-knappen blir en länk när Apple har godkänt appen. */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={home.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#f2b84b] px-6 py-3 text-center font-bold text-[#14231e] shadow-[0_4px_0_#9a6a12] transition-transform hover:-translate-y-0.5"
          >
            {home.playButton}
          </a>
          <span className="rounded-full border-2 border-dashed border-[#c9c0ae] px-6 py-2.5 text-center font-semibold text-[#6b7a73]">
            {fl.appStoreSoon}
          </span>
        </div>

        <p className="mt-6 border-t border-[#e4dccb] pt-4 text-sm leading-relaxed text-[#6b7a73]">{fl.note}</p>
      </Card>
    </Shell>
  );
}
