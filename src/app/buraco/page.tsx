import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'qrcode';
import type { Lang } from '@/lib/buraco';
import { getLang, type SearchParams } from './lang';
import { Shell } from './Shell';
import { StoreButtons } from './StoreButtons';
import { APP_NAME, OG_ICON, t } from './texts';
import { Card, Rich, withLang } from './ui';

type Props = { searchParams: SearchParams };

const OG_LOCALE: Record<Lang, string> = { sv: 'sv_SE', en: 'en_US', pt: 'pt_BR' };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const lang = await getLang(searchParams);
  const home = t(lang).home;
  return {
    title: home.metaTitle,
    description: home.metaDescription,
    // Sidan finns på tre språk (?lang=); utan ?lang= väljer webbläsarens språk. Talar om det för sökmotorerna.
    alternates: {
      languages: { sv: '/buraco?lang=sv', en: '/buraco?lang=en', 'pt-BR': '/buraco?lang=pt', 'x-default': '/buraco' },
    },
    openGraph: { siteName: APP_NAME, type: 'website', images: [OG_ICON], locale: OG_LOCALE[lang] },
  };
}

const ACCENTS = ['#f2b84b', '#6cb6ff', '#ff8a65', '#9be3c1'];

// Sidan om appen Mesa 11 (kortspelet Buraco): kort presentation och länkar till integritet, villkor och konto.
export default async function Buraco({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  const { home, common } = t(lang);
  // QR-koden för den som är på datorn: mobilen öppnar /buraco/download, som skickar vidare till rätt butik.
  const qrSvg = await QRCode.toString(
    `https://www.spitakolus.com/buraco/download?lang=${lang}&utm_source=spitakolus.com&utm_medium=qr`,
    { type: 'svg', margin: 0, color: { dark: '#04150f', light: '#fbf8f1' } },
  ).catch(() => null);
  const links = [
    { href: withLang('/buraco/integritet', lang), label: common.privacy },
    { href: withLang('/buraco/villkor', lang), label: common.terms },
    { href: withLang('/buraco/ta-bort-konto', lang), label: common.deleteAccount },
  ];

  return (
    <Shell lang={lang}>
      {/* Början */}
      <section className="grid items-center gap-10 py-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border border-[#f2b84b]/60 bg-[#04150f]/30 px-4 py-1 text-sm font-semibold text-[#f2b84b]">
            {home.badge}
          </span>
          <h1 className="mt-5 font-[family-name:var(--font-buraco-display)] text-6xl font-semibold italic tracking-tight sm:text-7xl">{APP_NAME}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#cfe3da] lg:mx-0">{home.lead}</p>
          <StoreButtons lang={lang} className="mt-7" />
          {/* Bara på datorn: en telefon har redan knapparna ovanför. */}
          {qrSvg && (
            <div className="mt-8 hidden items-center gap-4 rounded-2xl border border-[#fbf8f1]/15 bg-[#04150f]/35 p-4 text-left lg:flex">
              <div
                className="h-24 w-24 shrink-0 rounded-lg bg-[#fbf8f1] p-1.5 [&>svg]:h-full [&>svg]:w-full"
                role="img"
                aria-label={home.qrTitle}
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
              <div>
                <p className="font-semibold">{home.qrTitle}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#cfe3da]">{home.qrText}</p>
              </div>
            </div>
          )}
        </div>
        <div className="mx-auto w-56 sm:w-72">
          <Image
            src="/buraco/icon.svg"
            alt={APP_NAME}
            width={288}
            height={288}
            priority
            className="h-auto w-full rounded-[22%] shadow-[0_10px_0_#04150f,0_24px_60px_rgba(242,184,75,0.25)]"
          />
        </div>
      </section>

      {/* Hur man spelar */}
      <section className="mt-12 grid gap-5 sm:grid-cols-2">
        {home.features.map((f, i) => (
          <div key={f.title} className="rounded-3xl border border-[#fbf8f1]/10 bg-[#04150f]/35 p-6 shadow-[0_5px_0_#04150f]">
            <div className="mb-3 h-1.5 w-14 rounded-full" style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }} />
            <h2 className="text-xl font-bold">{f.title}</h2>
            <p className="mt-2 leading-relaxed text-[#cfe3da]">{f.text}</p>
          </div>
        ))}
      </section>

      {/* Gratis och konto */}
      <section className="mt-12 grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-extrabold text-[#14231e]">{home.freeTitle}</h2>
          <p className="mt-3 leading-relaxed">
            <Rich text={home.freeText} lang={lang} />
          </p>
        </Card>
        <Card>
          <h2 className="text-2xl font-extrabold text-[#14231e]">{home.accountTitle}</h2>
          <ul className="mt-3 space-y-3 leading-relaxed">
            {home.accountItems.map((item) => (
              <li key={item}>
                <Rich text={item} lang={lang} />
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Länkar */}
      <section className="mt-12 text-center">
        <h2 className="text-lg font-semibold text-[#cfe3da]">{home.linksTitle}</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border-2 border-[#fbf8f1]/70 px-6 py-2.5 font-bold transition-colors hover:bg-[#fbf8f1] hover:text-[#14231e]"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:support@spitakolus.com"
            className="rounded-full bg-[#f2b84b] px-6 py-2.5 font-bold text-[#14231e] shadow-[0_4px_0_#9a6a12] transition-transform hover:-translate-y-0.5"
          >
            {common.contact}
          </a>
        </div>
      </section>
    </Shell>
  );
}
