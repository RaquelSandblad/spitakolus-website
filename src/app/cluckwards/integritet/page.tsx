import type { Metadata } from 'next';
import { t } from '../texts';
import { BilingualLegal } from '../ui';

export const metadata: Metadata = {
  title: 'Integritetspolicy / Privacy Policy – CLUCKWARDS! – Spitakolus AB',
  description:
    'KACKLÄNGES! (CLUCKWARDS!) samlar inte in några uppgifter om dig. CLUCKWARDS! does not collect any information about you. Inget konto, ingen reklam, ingen analys och inga köp. No account, no ads, no analytics and no purchases.',
};

// Integritetspolicyn för CLUCKWARDS! (KACKLÄNGES!). Spelet, App Store och Google Play länkar hit, till en enda
// adress, så sidan har svenska först och engelska under (#english).
export default function CluckwardsIntegritet() {
  return <BilingualLegal sv={t('sv').privacy} en={t('en').privacy} />;
}
