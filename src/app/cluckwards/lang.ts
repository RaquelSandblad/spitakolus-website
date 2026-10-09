import { headers } from 'next/headers';

// Språket på sidorna om CLUCKWARDS! (svenska, engelska och portugisiska från Brasilien, som i spelet).
export type Lang = 'sv' | 'en' | 'pt';
export type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const LANGS: Lang[] = ['sv', 'en', 'pt'];

function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? '';
}

/** Väljer språk efter webbläsarens önskemål: sv* → svenska, pt* → portugisiska, annars engelska. */
function langFromAcceptLanguage(header: string | null): Lang {
  if (!header) return 'en';
  const wanted = header
    .split(',')
    .map((part, index) => {
      const [tag, ...rest] = part.trim().toLowerCase().split(';');
      const q = rest.find((r) => r.trim().startsWith('q='));
      return { tag, q: q ? Number(q.trim().slice(2)) || 0 : 1, index };
    })
    .filter((w) => w.tag && w.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  for (const { tag } of wanted) {
    if (tag.startsWith('sv')) return 'sv';
    if (tag.startsWith('en')) return 'en';
    if (tag.startsWith('pt')) return 'pt';
  }
  return 'en';
}

/** Språket för en sida: ?lang=sv|en|pt (även pt-BR) bestämmer, annars webbläsarens språk. */
export async function getLang(searchParams: SearchParams): Promise<Lang> {
  const forced = first((await searchParams).lang).toLowerCase().slice(0, 2);
  if ((LANGS as string[]).includes(forced)) return forced as Lang;
  return langFromAcceptLanguage((await headers()).get('accept-language'));
}

/** Språkkoden i HTML (lang och hreflang): portugisiskan är från Brasilien. */
export function htmlLang(lang: Lang): string {
  return lang === 'pt' ? 'pt-BR' : lang;
}

/** Lägger till ?lang= före ett eventuellt #ankare (t.ex. /cluckwards/integritet#english). */
export function withLang(path: string, lang: Lang): string {
  const [base, hash] = path.split('#');
  return `${base}?lang=${lang}${hash ? `#${hash}` : ''}`;
}
