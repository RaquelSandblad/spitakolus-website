import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grävspelet – Spitakolus AB',
  description: 'Ett mysigt grävspel där en liten lila skalbagge gräver sig ner mot jordens hjärta. Bygg ditt hem, hitta kartans fyra bitar och spela ihop med kompisar.',
};

// Grävspelets egna färger (samma som i spelet).
export default function GravspeletLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#1b1030] text-[#fff4d6]" style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>
      {children}
    </div>
  );
}
