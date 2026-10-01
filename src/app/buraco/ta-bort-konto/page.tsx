import type { Metadata } from 'next';
import { getLang, type SearchParams } from '../lang';
import { Shell } from '../Shell';
import { APP_NAME, t } from '../texts';
import { Card, Eyebrow, Rich } from '../ui';
import DeleteForm from './DeleteForm';

type Props = { searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const del = t(await getLang(searchParams)).del;
  return { title: del.metaTitle, description: del.metaDescription };
}

// Ta bort sitt konto i Mesa 11 från webben (krav från Google Play och App Store).
export default async function BuracoTaBortKonto({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  const del = t(lang).del;

  return (
    <Shell lang={lang}>
      <Card className="mx-auto max-w-2xl">
        <Eyebrow>{APP_NAME}</Eyebrow>
        <h1 className="mt-1 text-3xl font-extrabold text-[#14231e] sm:text-4xl">{del.title}</h1>
        <p className="mt-4 leading-relaxed">{del.intro}</p>

        <h2 className="mt-6 text-lg font-bold text-[#14231e]">{del.whatTitle}</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed marker:text-[#c8322b]">
          {del.what.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        <p className="mt-4 rounded-xl border-l-4 border-[#c8322b] bg-[#fdf1ef] p-3 text-sm leading-relaxed text-[#7a1a15]">{del.warning}</p>

        <section className="mt-8 border-t border-[#e4dccb] pt-6">
          <h2 className="text-xl font-bold text-[#14231e]">{del.form.formTitle}</h2>
          <div className="mt-4">
            <DeleteForm lang={lang} texts={del.form} />
          </div>
        </section>

        <section className="mt-8 grid gap-5 border-t border-[#e4dccb] pt-6 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-[#14231e]">{del.appTitle}</h2>
            <p className="mt-2 leading-relaxed">
              <Rich text={del.appText} lang={lang} />
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#14231e]">{del.mailTitle}</h2>
            <p className="mt-2 leading-relaxed">
              <Rich text={del.mailText} lang={lang} />
            </p>
          </div>
        </section>
      </Card>
    </Shell>
  );
}
