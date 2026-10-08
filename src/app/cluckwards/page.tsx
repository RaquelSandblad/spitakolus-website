import type { Metadata } from 'next';
import { getLang, type SearchParams } from './lang';
import { t } from './texts';
import { Card, Hen, Rich, Shell } from './ui';

type Props = { searchParams: SearchParams };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const texts = t(await getLang(searchParams)).home;
  return { title: texts.metaTitle, description: texts.metaDescription };
}

// Spelets egen sida. Inga butikslänkar än: spelet finns inte i butikerna.
export default async function Cluckwards({ searchParams }: Props) {
  const lang = await getLang(searchParams);
  const tx = t(lang);
  const h = tx.home;
  return (
    <Shell lang={lang}>
      <section className="py-8 text-center sm:py-12">
        <Hen className="mx-auto h-32 w-32 rounded-[32px] border-[4px] border-[#3a1f0b] shadow-[0_6px_0_#3a1f0b] sm:h-40 sm:w-40" />
        <span className="mt-8 inline-block rounded-full border-[3px] border-[#3a1f0b] bg-[#fff8e7] px-4 py-1 text-sm font-semibold">
          {h.badge}
        </span>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">{tx.name}</h1>
        <p className="mt-2 text-sm font-semibold text-[#6b4a2b]">{h.otherName}</p>
        <p className="mt-5 text-2xl font-extrabold text-[#c2311f] sm:text-3xl">{h.tagline}</p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#5a3a1c]">{h.lead}</p>
        <p className="mx-auto mt-3 max-w-xl text-lg font-semibold leading-relaxed">{h.stores}</p>
      </section>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-extrabold">{h.factsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[#5a3a1c] marker:text-[#d7372b]">
            {h.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-2xl font-extrabold">{h.supportTitle}</h2>
          <p className="mt-4 leading-relaxed text-[#5a3a1c]">
            <Rich text={h.support} lang={lang} />
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#8a6a48]">
            <Rich text={h.legal} lang={lang} />
          </p>
        </Card>
      </div>
    </Shell>
  );
}
