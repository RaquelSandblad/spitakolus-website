import Link from 'next/link';
import { htmlLang, type Lang, withLang } from './lang';
import { SUPPORT_EMAIL, t, type LegalTexts } from './texts';

// Byggstenar för sidorna om CLUCKWARDS! (under /cluckwards), i samma stil som Glimmerbaggens sidor
// men i hönans färger: majsgult, gräddvitt och kamröd.

export const linkClass = 'font-semibold text-[#c2311f] underline decoration-[#c2311f]/40 underline-offset-2 hover:decoration-[#c2311f]';

const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)|([\w.+-]+@spitakolus\.com)/g;

/** Enkel märkning: **fet**, [text](/cluckwards/...) eller [text](https://...), och e-postadresser blir länkar. */
export function Rich({ text, lang }: { text: string; lang: Lang }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(
        <strong key={key++} className="font-bold text-[#3a1f0b]">
          {m[1]}
        </strong>,
      );
    } else if (m[2] !== undefined) {
      const target = m[3];
      parts.push(
        target.startsWith('/') ? (
          <Link key={key++} href={withLang(target, lang)} className={linkClass}>
            {m[2]}
          </Link>
        ) : (
          <a key={key++} href={target} className={linkClass} target="_blank" rel="noopener noreferrer">
            {m[2]}
          </a>
        ),
      );
    } else if (m[4] !== undefined) {
      parts.push(
        <a key={key++} href={`mailto:${m[4]}`} className={linkClass}>
          {m[4]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Hönan, ritad för webbsidan: hon tittar bakåt medan hon flyger åt andra hållet. */
export function Hen({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-hidden="true">
      <rect width="120" height="120" rx="28" fill="#fff8e7" />
      {/* fartstreck: hon flyger åt höger, baklänges */}
      <path d="M14 52h18M10 64h22M16 76h16" stroke="#e0a800" strokeWidth="5" strokeLinecap="round" />
      {/* kropp och vinge */}
      <ellipse cx="64" cy="66" rx="28" ry="24" fill="#ffffff" stroke="#3a1f0b" strokeWidth="4" />
      <path d="M54 66c6-10 20-10 24 0-6 6-18 6-24 0z" fill="#ffd23f" stroke="#3a1f0b" strokeWidth="3.5" strokeLinejoin="round" />
      {/* kam */}
      <path d="M40 36c0-8 8-10 10-4 2-8 11-7 10 1 5-3 10 2 6 7H42c-2 0-2-2-2-4z" fill="#d7372b" stroke="#3a1f0b" strokeWidth="3.5" strokeLinejoin="round" />
      {/* huvud */}
      <circle cx="52" cy="50" r="13" fill="#ffffff" stroke="#3a1f0b" strokeWidth="4" />
      <circle cx="47" cy="48" r="3" fill="#3a1f0b" />
      {/* näbb, åt vänster: hon tittar bakåt */}
      <path d="M39 51l-9 3 9 4z" fill="#f59e0b" stroke="#3a1f0b" strokeWidth="3" strokeLinejoin="round" />
      {/* ägget på väg */}
      <ellipse cx="102" cy="88" rx="7" ry="9" fill="#fff8e7" stroke="#3a1f0b" strokeWidth="3.5" />
    </svg>
  );
}

function LangSwitcher({ current, label }: { current: Lang; label: string }) {
  const langs: { lang: Lang; short: string; name: string }[] = [
    { lang: 'sv', short: 'SV', name: 'Svenska' },
    { lang: 'en', short: 'EN', name: 'English' },
    { lang: 'pt', short: 'PT', name: 'Português' },
  ];
  return (
    <nav aria-label={label} className="flex rounded-full border-[3px] border-[#3a1f0b] bg-[#fff8e7] p-1 text-sm font-bold">
      {langs.map((l) => (
        <a
          key={l.lang}
          href={`?lang=${l.lang}`}
          hrefLang={htmlLang(l.lang)}
          lang={htmlLang(l.lang)}
          title={l.name}
          aria-label={l.name}
          aria-current={l.lang === current ? 'true' : undefined}
          className={`rounded-full px-3 py-1 transition-colors ${
            l.lang === current ? 'bg-[#d7372b] text-[#fff8e7]' : 'text-[#6b4a2b] hover:text-[#3a1f0b]'
          }`}
        >
          {l.short}
        </a>
      ))}
    </nav>
  );
}

/**
 * Sidans ram: överst spelets namn och språkväljaren, underst länkarna.
 * `bilingual` används på integritetspolicyn, som har svenska, engelska och portugisiska på samma sida (spelet
 * länkar till en enda adress): då byts språkväljaren mot länkar till den engelska och den portugisiska delen,
 * och länkarna väljer språk efter webbläsaren.
 */
export function Shell({ lang, bilingual = false, children }: { lang: Lang; bilingual?: boolean; children: React.ReactNode }) {
  const tx = t(lang);
  const c = tx.common;
  const en = t('en').common;
  const pt = t('pt').common;
  const href = (path: string) => (bilingual ? path : withLang(path, lang));
  const label = (sv: string, eng: string, por: string) => (bilingual ? `${sv} / ${eng} / ${por}` : sv);
  const anchor = lang === 'en' ? '#english' : lang === 'pt' ? '#portugues' : '';
  const links = [
    { href: href('/cluckwards'), label: label(c.about, en.about, pt.about) },
    { href: bilingual ? '/cluckwards/integritet' : withLang(`/cluckwards/integritet${anchor}`, lang), label: label(c.privacy, en.privacy, pt.privacy) },
    { href: href('/cluckwards/villkor'), label: label(c.terms, en.terms, pt.terms) },
  ];
  return (
    <div lang={htmlLang(lang)} className="px-5 pb-14 pt-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <Link href={href('/cluckwards')} className="flex items-center gap-3">
          <Hen className="h-11 w-11 rounded-2xl border-[3px] border-[#3a1f0b] shadow-[0_3px_0_#3a1f0b]" />
          <span className="text-xl font-extrabold tracking-tight">{tx.name}</span>
        </Link>
        {bilingual ? (
          <nav className="flex shrink-0 flex-wrap justify-end gap-2">
            <a href="#english" lang="en" className="whitespace-nowrap rounded-full border-[3px] border-[#3a1f0b] bg-[#fff8e7] px-3 py-1.5 text-sm font-bold hover:bg-[#fff1c2]">
              English ↓
            </a>
            <a href="#portugues" lang="pt-BR" className="whitespace-nowrap rounded-full border-[3px] border-[#3a1f0b] bg-[#fff8e7] px-3 py-1.5 text-sm font-bold hover:bg-[#fff1c2]">
              Português ↓
            </a>
          </nav>
        ) : (
          <LangSwitcher current={lang} label={c.languageLabel} />
        )}
      </div>
      <div className="mx-auto mt-8 max-w-5xl">{children}</div>
      <footer className="mx-auto mt-12 max-w-5xl border-t-[3px] border-[#3a1f0b]/20 pt-6 text-sm text-[#5a3a1c]">
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-[#c2311f] hover:underline">
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-[#c2311f] hover:underline">
            {label(c.contact, en.contact, pt.contact)}: {SUPPORT_EMAIL}
          </a>
        </nav>
        <p className="mt-3">{c.company}</p>
        {bilingual && (
          <>
            <p className="mt-1" lang="en">
              {en.company}
            </p>
            <p className="mt-1" lang="pt-BR">
              {pt.company}
            </p>
          </>
        )}
      </footer>
    </div>
  );
}

/** Ett gräddvitt kort med mörk kant, som korten på Glimmerbaggens sidor. */
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border-[3px] border-[#3a1f0b] bg-[#fff8e7] p-8 text-[#3a1f0b] shadow-[0_6px_0_#3a1f0b] sm:p-10 ${className}`}>
      {children}
    </div>
  );
}

/** En policytext: rubrik, datum, inledning och avsnitt. */
function LegalArticle({ lang, texts, id, top }: { lang: Lang; texts: LegalTexts; id?: string; top?: React.ReactNode }) {
  return (
    <article id={id} lang={htmlLang(lang)} className="scroll-mt-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#b0761a]">{t(lang).name}</p>
      <h1 className="mt-1 text-3xl font-extrabold">{texts.title}</h1>
      <p className="mt-2 text-sm text-[#8a6a48]">{texts.updated}</p>
      {top}
      <div className="mt-6 space-y-5 leading-relaxed text-[#5a3a1c]">
        {texts.intro.map((p) => (
          <p key={p}>
            <Rich text={p} lang={lang} />
          </p>
        ))}
        {texts.sections.map((s) => (
          <section key={s.h} className="space-y-3">
            <h2 className="pt-2 text-xl font-bold text-[#3a1f0b]">{s.h}</h2>
            {s.p?.map((p) => (
              <p key={p}>
                <Rich text={p} lang={lang} />
              </p>
            ))}
            {s.ul && (
              <ul className="list-disc space-y-2 pl-5 marker:text-[#d7372b]">
                {s.ul.map((li) => (
                  <li key={li}>
                    <Rich text={li} lang={lang} />
                  </li>
                ))}
              </ul>
            )}
            {s.after?.map((p) => (
              <p key={p}>
                <Rich text={p} lang={lang} />
              </p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

/** Villkoren: ett språk i taget (?lang=sv|en eller webbläsarens språk). */
export function Legal({ lang, texts }: { lang: Lang; texts: LegalTexts }) {
  return (
    <Shell lang={lang}>
      <Card className="mx-auto max-w-3xl">
        <LegalArticle lang={lang} texts={texts} />
      </Card>
    </Shell>
  );
}

/** Integritetspolicyn: svenska först, engelska och portugisiska under, på samma sida (spelet länkar till en enda adress). */
export function BilingualLegal({ sv, en, pt }: { sv: LegalTexts; en: LegalTexts; pt: LegalTexts }) {
  return (
    <Shell lang="sv" bilingual>
      <Card className="mx-auto max-w-3xl">
        <LegalArticle
          lang="sv"
          texts={sv}
          top={
            <p className="mt-4 flex gap-4 text-sm">
              <a href="#english" lang="en" className={linkClass}>
                English below
              </a>
              <a href="#portugues" lang="pt-BR" className={linkClass}>
                Português abaixo
              </a>
            </p>
          }
        />
        <hr className="my-10 border-t-[3px] border-dashed border-[#3a1f0b]/25" />
        <LegalArticle lang="en" texts={en} id="english" />
        <hr className="my-10 border-t-[3px] border-dashed border-[#3a1f0b]/25" />
        <LegalArticle lang="pt" texts={pt} id="portugues" />
      </Card>
    </Shell>
  );
}
