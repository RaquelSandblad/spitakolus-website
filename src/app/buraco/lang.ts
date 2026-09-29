import { headers } from 'next/headers';
import type { Lang } from '@/lib/buraco';

export type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export const LANGS: Lang[] = ['sv', 'en', 'pt'];

function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? '';
}

/** Väljer språk efter webbläsarens önskemål: pt* → pt, sv* → sv, annars engelska. */
export function langFromAcceptLanguage(header: string | null): Lang {
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
    if (tag.startsWith('pt')) return 'pt';
    if (tag.startsWith('sv')) return 'sv';
    if (tag.startsWith('en')) return 'en';
  }
  return 'en';
}

/** Språket för en sida: ?lang=sv|en|pt bestämmer, annars webbläsarens språk. */
export async function getLang(searchParams: SearchParams): Promise<Lang> {
  const forced = first((await searchParams).lang).toLowerCase();
  if ((LANGS as string[]).includes(forced)) return forced as Lang;
  return langFromAcceptLanguage((await headers()).get('accept-language'));
}

