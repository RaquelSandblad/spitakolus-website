import type { Metadata } from 'next';
import Legal from '../Legal';
import { getLang, type SearchParams } from '../lang';
import { t } from '../texts';

type Props = { searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const texts = t(await getLang(searchParams)).privacy;
  return { title: texts.metaTitle, description: texts.metaDescription };
}

// Integritetspolicyn för Buraco. Appen, Google Play och App Store länkar hit.
export default async function BuracoIntegritet({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  return <Legal lang={lang} texts={t(lang).privacy} />;
}
