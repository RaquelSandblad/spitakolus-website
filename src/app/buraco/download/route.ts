import { NextResponse, type NextRequest } from 'next/server';
import type { Lang } from '@/lib/buraco';
import { LANGS, langFromAcceptLanguage } from '../lang';
import { t } from '../texts';

// Nedladdningslänken för Mesa 11: https://www.spitakolus.com/buraco/download (Facebooksidans knapp, inlägg, QR-koder).
// Samma idé som flocken.info/download och nastahem.com/download:
//   iPhone, iPad och iPod → App Store
//   Android               → Google Play
//   allt annat (datorer, och länkförhandsvisningar från Facebook och WhatsApp) → spelets sida /buraco
// Språket (?lang=sv|en|pt, annars webbläsarens) väljer butikens land och språk, som på sidan.
// utm_*-parametrarna går till Google Play som referrer, så att Play Console visar varifrån installationerna kommer.
// Apple läser inte utm_*; har länken Apples egna kampanjparametrar (pt och ct) skickas de vidare till App Store.
// En iPad med Safaris datorläge säger att den är en Mac och hamnar på sidan, som har en knapp till App Store.

export const dynamic = 'force-dynamic';

function platformOf(userAgent: string): 'ios' | 'android' | 'other' {
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'ios';
  if (/Android/i.test(userAgent)) return 'android';
  return 'other';
}

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const forced = (params.get('lang') ?? '').toLowerCase();
  const chosen = (LANGS as string[]).includes(forced) ? (forced as Lang) : null;
  const lang = chosen ?? langFromAcceptLanguage(req.headers.get('accept-language'));
  const { home } = t(lang);

  let target: URL;
  switch (platformOf(req.headers.get('user-agent') ?? '')) {
    case 'ios': {
      target = new URL(home.appStoreUrl);
      for (const key of ['pt', 'ct']) {
        const value = params.get(key);
        if (value) target.searchParams.set(key, value);
      }
      break;
    }
    case 'android': {
      target = new URL(home.playUrl);
      const utm = new URLSearchParams();
      params.forEach((value, key) => {
        if (key.startsWith('utm_')) utm.append(key, value);
      });
      const referrer = params.get('referrer') ?? utm.toString();
      if (referrer) target.searchParams.set('referrer', referrer);
      break;
    }
    default: {
      target = new URL('/buraco', req.nextUrl.origin);
      if (chosen) target.searchParams.set('lang', chosen);
    }
  }

  // Svaret beror på telefonen och språket och får därför inte sparas i någon cache.
  const res = NextResponse.redirect(target, 302);
  res.headers.set('Cache-Control', 'private, no-store, max-age=0');
  res.headers.set('Vary', 'User-Agent, Accept-Language');
  return res;
}

export const HEAD = GET;
