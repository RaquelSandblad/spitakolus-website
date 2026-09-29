import Image from 'next/image';
import Link from 'next/link';
import type { Lang } from '@/lib/buraco';
import { t } from './texts';
import LangSwitcher from './LangSwitcher';
import { withLang } from './ui';

/** Sidans ram: överst Buraco och språkväljaren, underst länkarna. */
export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const c = t(lang).common;
  return (
    <div lang={lang === 'pt' ? 'pt-BR' : lang} className="px-4 pb-14 pt-6 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <Link href={withLang('/buraco', lang)} className="flex items-center gap-3">
          <Image src="/buraco/icon.svg" alt="" width={40} height={40} className="h-10 w-10 rounded-xl shadow-[0_3px_0_#04150f]" />
          <span className="font-[family-name:var(--font-buraco-display)] text-2xl font-semibold italic text-[#fbf8f1]">Buraco</span>
        </Link>
        <LangSwitcher current={lang} label={c.languageLabel} />
      </div>
      <div className="mx-auto mt-8 max-w-5xl">{children}</div>
      <FooterLinks lang={lang} />
    </div>
  );
}

export function FooterLinks({ lang }: { lang: Lang }) {
  const c = t(lang).common;
  const links = [
    { href: withLang('/buraco', lang), label: c.about },
    { href: withLang('/buraco/integritet', lang), label: c.privacy },
    { href: withLang('/buraco/villkor', lang), label: c.terms },
    { href: withLang('/buraco/ta-bort-konto', lang), label: c.deleteAccount },
  ];
  return (
    <footer className="mx-auto mt-12 max-w-5xl border-t border-[#fbf8f1]/15 pt-6 text-sm text-[#cfe3da]">
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-[#f2b84b] hover:underline">
            {l.label}
          </Link>
        ))}
        <a href="mailto:support@spitakolus.com" className="hover:text-[#f2b84b] hover:underline">
          {c.contact}: support@spitakolus.com
        </a>
      </nav>
      <p className="mt-3 text-[#9fbcb0]">{c.company}</p>
    </footer>
  );
}
