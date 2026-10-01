import type { Metadata } from 'next';
import { getLang, type SearchParams } from '../lang';
import { Shell } from '../Shell';
import { APP_NAME, t } from '../texts';
import { Card, Eyebrow } from '../ui';
import ResetForm from './ResetForm';

type Props = { searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const reset = t(await getLang(searchParams)).reset;
  // Adressen kan innehålla en engångslänk – skicka den inte vidare och visa inte sidan i sökmotorer.
  return { title: reset.metaTitle, referrer: 'no-referrer', robots: { index: false, follow: false } };
}

// Välj nytt lösenord från länken i "Glömt lösenordet?"-mejlet.
export default async function BuracoNyttLosenord({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  const params = await searchParams;
  const tokenHash = typeof params.token_hash === 'string' ? params.token_hash : '';
  const reset = t(lang).reset;

  return (
    <Shell lang={lang}>
      <Card className="mx-auto max-w-md">
        <Eyebrow>{APP_NAME}</Eyebrow>
        <h1 className="mt-1 text-3xl font-extrabold text-[#14231e]">{reset.title}</h1>
        <div className="mt-5">
          <ResetForm lang={lang} tokenHash={tokenHash} texts={reset.form} />
        </div>
      </Card>
    </Shell>
  );
}
