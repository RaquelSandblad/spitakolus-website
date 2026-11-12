import { NextResponse, type NextRequest } from 'next/server';

// Nedladdningslänken för Glimmerbaggen: https://www.spitakolus.com/glimmerbaggen/download
// Samma idé som /buraco/download och /cluckwards/download:
//   Android      → Google Play, på telefonens språk, med utm_*-parametrarna som referrer så att Play Console
//                  visar varifrån installationerna kommer
//   allt annat (iPhone, iPad, datorer, och länkförhandsvisningar från Facebook och WhatsApp) → spelets sida /glimmerbaggen

export const dynamic = 'force-dynamic';

const PLAY = 'https://play.google.com/store/apps/details?id=com.spitakolus.glimmerbaggen';

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  let target: URL;
  if (/Android/i.test(req.headers.get('user-agent') ?? '')) {
    target = new URL(PLAY);
    const utm = new URLSearchParams();
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) utm.append(key, value);
    });
    const referrer = params.get('referrer') ?? utm.toString();
    if (referrer) target.searchParams.set('referrer', referrer);
  } else {
    target = new URL('/glimmerbaggen', req.nextUrl.origin);
  }

  // Svaret beror på telefonen och får därför inte sparas i någon cache.
  const res = NextResponse.redirect(target, 302);
  res.headers.set('Cache-Control', 'private, no-store, max-age=0');
  res.headers.set('Vary', 'User-Agent');
  return res;
}

export const HEAD = GET;
