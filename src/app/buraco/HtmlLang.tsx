'use client';

import { useEffect } from 'react';

// Webbplatsens <html> har lang="sv" (rotlayouten gäller alla sidor). Sidorna om Mesa 11 finns på tre språk, så här
// sätts sidans språk när den har laddats – för webbläsarens översättning, skärmläsare och sökmotorer som kör JavaScript.
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const html = document.documentElement;
    const before = html.lang;
    html.lang = lang;
    return () => {
      html.lang = before;
    };
  }, [lang]);
  return null;
}
