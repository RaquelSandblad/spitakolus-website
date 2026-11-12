import { NextResponse, type NextRequest } from 'next/server';
import type { Lang } from '@/lib/buraco';
import { LANGS, langFromAcceptLanguage } from '../lang';
import { t } from '../texts';

// Nedladdningslänken för Mesa 11: https://www.spitakolus.com/buraco/download (Facebooksidans knapp, inlägg, QR-koder).
//   Android      → Google Play
//   allt annat (iPhone, iPad, datorer, och länkförhandsvisningar från Facebook och WhatsApp) → spelets sida /buraco
// Språket (?lang=sv|en|pt, annars webbläsarens) väljer Google Plays språk, som på sidan.
// utm_*-parametrarna går till Google Play som referrer, så att Play Console visar varifrån installationerna kommer.

export const dynamic = 'force-dynamic';

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const forced = (params.get('lang') ?? '').toLowerCase();
  const chosen = (LANGS as string[]).includes(forced) ? (forced as Lang) : null;
  const lang = chosen ?? langFromAcceptLanguage(req.headers.get('accept-language'));
  const { home } = t(lang);

  let target: URL;
  if (/Android/i.test(req.headers.get('user-agent') ?? '')) {
    target = new URL(home.playUrl);
    const utm = new URLSearchParams();
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) utm.append(key, value);
    });
    const referrer = params.get('referrer') ?? utm.toString();
    if (referrer) target.searchParams.set('referrer', referrer);
  } else {
    target = new URL('/buraco', req.nextUrl.origin);
    if (chosen) target.searchParams.set('lang', chosen);
  }

  // Svaret beror på telefonen och språket och får därför inte sparas i någon cache.
  const res = NextResponse.redirect(target, 302);
  res.headers.set('Cache-Control', 'private, no-store, max-age=0');
  res.headers.set('Vary', 'User-Agent, Accept-Language');
  return res;
}

export const HEAD = GET;
