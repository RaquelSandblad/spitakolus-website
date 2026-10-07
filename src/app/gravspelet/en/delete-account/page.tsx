import type { Metadata } from 'next';
import DeleteAccount from '../../DeleteAccount';

export const metadata: Metadata = {
  title: 'Delete your Glimmerbaggen account – Spitakolus AB',
  description: 'Delete your Glimmerbaggen account, username and cloud save.',
};

// Engelska versionen av /gravspelet/ta-bort-konto.
export default function GravspeletDeleteAccount() {
  return <DeleteAccount lang="en" />;
}
