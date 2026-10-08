import type { Metadata } from 'next';
import { getLang, type SearchParams } from '../lang';
import { t } from '../texts';
import { Legal } from '../ui';

type Props = { searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const texts = t(await getLang(searchParams)).terms;
  return { title: texts.metaTitle, description: texts.metaDescription };
}

// Användarvillkoren för CLUCKWARDS! (KACKLÄNGES!).
export default async function CluckwardsVillkor({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  return <Legal lang={lang} texts={t(lang).terms} />;
}
