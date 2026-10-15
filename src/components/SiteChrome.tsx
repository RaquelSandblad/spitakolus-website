'use client';

import { usePathname } from 'next/navigation';

// Sidor med en egen ram (eget sidhuvud och egen sidfot) visar inte företagets sidhuvud och sidfot.
// Mesa 11 (/buraco) har egen ram på svenska, engelska och portugisiska – annars fick den portugisiska
// sidan svenska menyer överst och nederst.
const OWN_FRAME = ['/buraco'];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '';
  if (OWN_FRAME.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  return <>{children}</>;
}
