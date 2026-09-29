import Image from 'next/image';
import Link from 'next/link';

// Ett kort i Grävspelets stil för kontosidorna (bekräfta e-post, nytt lösenord).
export default function AuthCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 py-14">
      <div className="w-full max-w-md rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-center text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <Image
          src="/gravspelet/skalbagge.svg"
          alt="Grävspelet"
          width={72}
          height={72}
          className="mx-auto mb-4 h-[72px] w-[72px]"
          priority
        />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Grävspelet</p>
        <h1 className="mt-1 text-3xl font-extrabold">{title}</h1>
        <div className="mt-5 text-left leading-relaxed text-[#4a3d5c]">{children}</div>
        <p className="mt-8 text-sm text-[#8a7aa0]">
          <Link href="/gravspelet" className="underline">
            Om Grävspelet
          </Link>{' '}
          ·{' '}
          <a href="mailto:support@spitakolus.com" className="underline">
            support@spitakolus.com
          </a>
        </p>
      </div>
    </div>
  );
}

export function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="mt-2 w-full rounded-full border-[3px] border-[#1b1030] bg-[#a066f2] px-6 py-3 text-lg font-bold text-white shadow-[0_4px_0_#1b1030] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
    />
  );
}

export function Notice({ kind, children }: { kind: 'ok' | 'error' | 'info'; children: React.ReactNode }) {
  const colors = {
    ok: 'border-[#3e9a3c] bg-[#e4f7d6] text-[#245b22]',
    error: 'border-[#c93f7f] bg-[#ffe3ef] text-[#8a2455]',
    info: 'border-[#8a7aa0] bg-white/70 text-[#4a3d5c]',
  };
  return <div className={`rounded-2xl border-2 p-4 ${colors[kind]}`}>{children}</div>;
}
