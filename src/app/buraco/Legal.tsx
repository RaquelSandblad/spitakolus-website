import type { Lang } from '@/lib/buraco';
import { APP_NAME, type LegalTexts } from './texts';
import { Shell } from './Shell';
import { Card, Eyebrow, Rich } from './ui';

// Gemensam uppställning för integritetspolicyn och villkoren.
export default function Legal({ lang, texts }: { lang: Lang; texts: LegalTexts }) {
  return (
    <Shell lang={lang}>
      <Card className="mx-auto max-w-3xl">
        <article>
          <Eyebrow>{APP_NAME}</Eyebrow>
          <h1 className="mt-1 text-3xl font-extrabold text-[#14231e] sm:text-4xl">{texts.title}</h1>
          <p className="mt-2 text-sm text-[#6b7a73]">{texts.updated}</p>
          <div className="mt-6 space-y-4 leading-relaxed">
            {texts.intro.map((p) => (
              <p key={p}>
                <Rich text={p} lang={lang} />
              </p>
            ))}
          </div>
          {texts.sections.map((s, i) => (
            <section key={s.h} className="mt-8 space-y-3 leading-relaxed">
              <h2 className="text-xl font-bold text-[#14231e]">
                <span className="mr-2 text-[#9a6a12]">{i + 1}.</span>
                {s.h}
              </h2>
              {s.p?.map((p) => (
                <p key={p}>
                  <Rich text={p} lang={lang} />
                </p>
              ))}
              {s.ul && (
                <ul className="list-disc space-y-2 pl-5 marker:text-[#9a6a12]">
                  {s.ul.map((li) => (
                    <li key={li}>
                      <Rich text={li} lang={lang} />
                    </li>
                  ))}
                </ul>
              )}
              {s.after?.map((p) => (
                <p key={p}>
                  <Rich text={p} lang={lang} />
                </p>
              ))}
            </section>
          ))}
        </article>
      </Card>
    </Shell>
  );
}
