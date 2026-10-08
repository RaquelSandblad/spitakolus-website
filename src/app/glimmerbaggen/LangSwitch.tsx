import Link from 'next/link';

// Språkväljaren överst på Glimmerbaggens juridiska sidor (svenska, engelska, portugisiska).
// Samma sida finns på tre språk, så varje sida anger sina tre adresser.
export type GravspeletLang = 'sv' | 'en' | 'pt';

export const LEGAL_PAGES = {
  privacy: { sv: '/glimmerbaggen/integritet', en: '/glimmerbaggen/en/privacy', pt: '/glimmerbaggen/pt/privacidade' },
  terms: { sv: '/glimmerbaggen/villkor', en: '/glimmerbaggen/en/terms', pt: '/glimmerbaggen/pt/termos' },
  deleteAccount: { sv: '/glimmerbaggen/ta-bort-konto', en: '/glimmerbaggen/en/delete-account', pt: '/glimmerbaggen/pt/excluir-conta' },
} as const;

const LABELS: Record<GravspeletLang, string> = { sv: 'Svenska', en: 'English', pt: 'Português' };

export default function LangSwitch({ page, current }: { page: keyof typeof LEGAL_PAGES; current: GravspeletLang }) {
  const langs: GravspeletLang[] = ['sv', 'en', 'pt'];
  return (
    <nav aria-label="Language" className="mb-6 flex flex-wrap gap-2 text-sm">
      {langs.map((lang) =>
        lang === current ? (
          <span
            key={lang}
            aria-current="page"
            className="rounded-full border-2 border-[#1b1030] bg-[#a066f2] px-3 py-1 font-semibold text-white"
          >
            {LABELS[lang]}
          </span>
        ) : (
          <Link
            key={lang}
            href={LEGAL_PAGES[page][lang]}
            hrefLang={lang === 'pt' ? 'pt-BR' : lang}
            className="rounded-full border-2 border-[#1b1030] bg-white px-3 py-1 font-semibold text-[#1b1030] hover:bg-[#f1e6ff]"
          >
            {LABELS[lang]}
          </Link>
        ),
      )}
    </nav>
  );
}
