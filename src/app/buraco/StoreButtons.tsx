import type { Lang } from '@/lib/buraco';
import { t } from './texts';

const PLAY_ICON =
  'M3.6 2.2c-.3.3-.4.8-.4 1.4v16.8c0 .6.1 1.1.4 1.4l.1.1 9.4-9.4v-.2L3.7 2.1l-.1.1zm12.6 12.6-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1-.1-.1zm.1-.1L13.1 11.5 3.6 21c.4.4.9.4 1.6.1l11.1-6.4M16.3 8.3 5.2 1.9c-.7-.4-1.2-.3-1.6.1l9.5 9.5 3.2-3.2z';

/**
 * Knappen till Google Play, som fyller raden, och under den en rad om att spelet finns för Android.
 */
export function StoreButtons({ lang, className = '' }: { lang: Lang; className?: string }) {
  const { home } = t(lang);
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={home.playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f2b84b] px-6 py-3 text-base font-semibold text-[#04150f] shadow-[0_4px_0_#b07d22] transition-transform hover:-translate-y-0.5 sm:flex-auto"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={PLAY_ICON} />
          </svg>
          {home.playButton}
        </a>
      </div>
      <p className="mt-3 text-sm leading-relaxed opacity-80">{home.androidOnly}</p>
    </div>
  );
}
