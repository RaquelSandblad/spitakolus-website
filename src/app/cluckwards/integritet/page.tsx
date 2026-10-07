import type { Metadata } from 'next';
import { t } from '../texts';
import { BilingualLegal } from '../ui';

export const metadata: Metadata = {
  title: 'Integritetspolicy / Privacy Policy – CLUCKWARDS! – Spitakolus AB',
  description:
    'Så hanterar KACKLÄNGES! (CLUCKWARDS!) uppgifter: inget konto, frivillig barnsäker reklam och köp via App Store och Google Play. How CLUCKWARDS! handles information: no account, optional child-safe ads and purchases through the App Store and Google Play.',
};

// Integritetspolicyn för CLUCKWARDS! (KACKLÄNGES!). Spelet, App Store och Google Play länkar hit, till en enda
// adress, så sidan har svenska först och engelska under (#english).
export default function CluckwardsIntegritet() {
  return <BilingualLegal sv={t('sv').privacy} en={t('en').privacy} />;
}
