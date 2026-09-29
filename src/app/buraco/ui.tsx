import Link from 'next/link';
import type { Lang } from '@/lib/buraco';

// Byggstenar för Buracos sidor, i spelets färger: mörkgrön filt, elfenbensvita kort och guld.
// Filen har inget som bara fungerar på servern, så formulären (klientkomponenter) kan också använda den.

export const linkClass = 'font-semibold text-[#11694f] underline decoration-[#11694f]/40 underline-offset-2 hover:decoration-[#11694f]';

export function withLang(path: string, lang: Lang): string {
  return `${path}?lang=${lang}`;
}

const TOKEN = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)|([\w.+-]+@spitakolus\.com)/g;

/** Enkel märkning: **fet**, [text](/buraco/...) och e-postadresser blir länkar. */
export function Rich({ text, lang }: { text: string; lang: Lang }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<strong key={key++} className="font-semibold text-[#14231e]">{m[1]}</strong>);
    } else if (m[2] !== undefined) {
      const target = m[3];
      if (target.startsWith('/')) {
        parts.push(
          <Link key={key++} href={withLang(target, lang)} className={linkClass}>
            {m[2]}
          </Link>,
        );
      } else {
        parts.push(
          <a key={key++} href={target} className={linkClass} target="_blank" rel="noopener noreferrer">
            {m[2]}
          </a>,
        );
      }
    } else if (m[4] !== undefined) {
      parts.push(
        <a key={key++} href={`mailto:${m[4]}`} className={linkClass}>
          {m[4]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Ett elfenbensvitt kort, som ett spelkort på filten. */
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-[#d9d2c4] bg-[#fbf8f1] p-6 text-[#2b3a34] shadow-[0_6px_0_#04150f,0_18px_40px_rgba(0,0,0,0.35)] sm:p-9 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-wider text-[#9a6a12]">{children}</p>;
}

export function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'gold' | 'danger' }) {
  const { tone = 'gold', ...rest } = props;
  const colors = tone === 'danger' ? 'bg-[#c8322b] text-white shadow-[0_4px_0_#7a1a15]' : 'bg-[#f2b84b] text-[#14231e] shadow-[0_4px_0_#9a6a12]';
  return (
    <button
      {...rest}
      className={`mt-2 w-full rounded-full px-6 py-3 text-lg font-bold transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60 ${colors}`}
    />
  );
}

export function Notice({ kind, children }: { kind: 'ok' | 'error' | 'info'; children: React.ReactNode }) {
  const colors = {
    ok: 'border-[#2f8a5b] bg-[#e3f4ea] text-[#1c5236]',
    error: 'border-[#c8322b] bg-[#fde8e6] text-[#7a1a15]',
    info: 'border-[#d9d2c4] bg-white/80 text-[#2b3a34]',
  };
  return (
    <div role={kind === 'error' ? 'alert' : 'status'} className={`rounded-2xl border-2 p-4 leading-relaxed ${colors[kind]}`}>
      {children}
    </div>
  );
}

export const inputClass =
  'mt-1 w-full rounded-xl border-2 border-[#c9c0ae] bg-white px-4 py-3 text-[#14231e] outline-none focus:border-[#1d7a62] focus:ring-2 focus:ring-[#1d7a62]/20';
