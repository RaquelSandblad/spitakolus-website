import { NextResponse, type NextRequest } from 'next/server';
import { LANGS, langFromAcceptLanguage, type Lang } from '../lang';

// Nedladdningslänken för CLUCKWARDS!/KACKLÄNGES!: https://www.spitakolus.com/cluckwards/download
// Samma idé som /buraco/download. Meta tillåter inte en direktlänk till Google Play i en trafikkampanj
// (fel 1487810, Halloweenannonsen 23 okt), så annonserna länkar hit:
//   Android → Google Play, med utm_*-parametrarna som referrer så att Play Console visar kampanjen
//   allt annat (iPhone tills spelet finns i App Store, datorer och länkförhandsvisningar) → spelets sida /cluckwards
// Språket (?lang=sv|en|pt, annars webbläsarens) väljer Google Plays språk.

export const dynamic = 'force-dynamic';

const PLAY = 'https://play.google.com/store/apps/details?id=com.spitakolus.cluckwards';
const PLAY_HL: Record<Lang, string> = { sv: 'sv', en: 'en', pt: 'pt-BR' };

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const forced = (params.get('lang') ?? '').toLowerCase().slice(0, 2);
  const chosen = (LANGS as string[]).includes(forced) ? (forced as Lang) : null;
  const lang = chosen ?? langFromAcceptLanguage(req.headers.get('accept-language'));

  let target: URL;
  if (/Android/i.test(req.headers.get('user-agent') ?? '')) {
    target = new URL(PLAY);
    target.searchParams.set('hl', PLAY_HL[lang]);
    const utm = new URLSearchParams();
    params.forEach((value, key) => {
      if (key.startsWith('utm_')) utm.append(key, value);
    });
    const referrer = params.get('referrer') ?? utm.toString();
    if (referrer) target.searchParams.set('referrer', referrer);
  } else {
    target = new URL('/cluckwards', req.nextUrl.origin);
    if (chosen) target.searchParams.set('lang', chosen);
  }

  // Svaret beror på telefonen och språket och får därför inte sparas i någon cache.
  const res = NextResponse.redirect(target, 302);
  res.headers.set('Cache-Control', 'private, no-store, max-age=0');
  res.headers.set('Vary', 'User-Agent, Accept-Language');
  return res;
}

export const HEAD = GET;
