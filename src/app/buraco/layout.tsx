import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Mesa 11 – Spitakolus AB',
  description: 'Mesa 11 – kortspelet Buraco två mot två, online.',
  icons: { icon: '/buraco/icon.svg' },
};

// Samma kursiva rubrikstil som i spelet.
const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['600'],
  variable: '--font-buraco-display',
});

// Appens egna färger (samma som i spelet): mörkgrön filt och guld.
export default function BuracoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${fraunces.variable} min-h-screen bg-[#072720] bg-[radial-gradient(ellipse_at_50%_0%,#1d7a62_0%,#0f4a3d_45%,#072720_100%)] text-[#fbf8f1]`}
      style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
    >
      {children}
    </div>
  );
}
