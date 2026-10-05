import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CLUCKWARDS! – Spitakolus AB',
  description: 'Wrong way. Full speed. Eggs away. En höna som flyger baklänges och skjuter ägg.',
};

// Hönans färger: majsgul bakgrund, gräddvita kort och mörkbrun kant.
export default function CluckwardsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#ffd23f] text-[#3a1f0b]" style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>
      {children}
    </div>
  );
}
