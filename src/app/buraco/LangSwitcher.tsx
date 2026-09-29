'use client';

import type { Lang } from '@/lib/buraco';

const NAMES: { lang: Lang; short: string; name: string }[] = [
  { lang: 'sv', short: 'SV', name: 'Svenska' },
  { lang: 'en', short: 'EN', name: 'English' },
  { lang: 'pt', short: 'PT', name: 'Português' },
];

// Liten språkväljare. Byter bara ?lang= och behåller resten av adressen – även det som står efter #,
// eftersom länken för nytt lösenord kan ha inloggningen där.
export default function LangSwitcher({ current, label }: { current: Lang; label: string }) {
  function choose(e: React.MouseEvent<HTMLAnchorElement>, lang: Lang) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.assign(url.toString());
  }

  return (
    <nav aria-label={label} className="flex rounded-full border border-[#fbf8f1]/25 bg-[#04150f]/40 p-1 text-sm font-semibold">
      {NAMES.map((n) => (
        <a
          key={n.lang}
          href={`?lang=${n.lang}`}
          hrefLang={n.lang === 'pt' ? 'pt-BR' : n.lang}
          lang={n.lang === 'pt' ? 'pt-BR' : n.lang}
          title={n.name}
          aria-label={n.name}
          aria-current={n.lang === current ? 'true' : undefined}
          onClick={(e) => choose(e, n.lang)}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            n.lang === current ? 'bg-[#f2b84b] text-[#14231e]' : 'text-[#cfe3da] hover:text-[#fbf8f1]'
          }`}
        >
          {n.short}
        </a>
      ))}
    </nav>
  );
}
