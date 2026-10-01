import type { Metadata } from 'next';
import Legal from '../Legal';
import { getLang, type SearchParams } from '../lang';
import { t } from '../texts';

type Props = { searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const texts = t(await getLang(searchParams)).terms;
  return { title: texts.metaTitle, description: texts.metaDescription };
}

// Användarvillkoren för appen Mesa 11 (kortspelet Buraco).
export default async function BuracoVillkor({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  return <Legal lang={lang} texts={t(lang).terms} />;
}
