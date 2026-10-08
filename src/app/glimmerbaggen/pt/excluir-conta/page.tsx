import type { Metadata } from 'next';
import DeleteAccount from '../../DeleteAccount';

export const metadata: Metadata = {
  title: 'Excluir sua conta do Glimmerbaggen – Spitakolus AB',
  description: 'Exclua sua conta do Glimmerbaggen, o nome de usuário e o jogo salvo na nuvem.',
};

// Portugisiska (Brasilien) versionen av /glimmerbaggen/ta-bort-konto.
export default function GravspeletExcluirConta() {
  return <DeleteAccount lang="pt" />;
}
