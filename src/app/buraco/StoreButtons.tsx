import type { Lang } from '@/lib/buraco';
import { t } from './texts';

const PLAY_ICON =
  'M3.6 2.2c-.3.3-.4.8-.4 1.4v16.8c0 .6.1 1.1.4 1.4l.1.1 9.4-9.4v-.2L3.7 2.1l-.1.1zm12.6 12.6-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1-.1-.1zm.1-.1L13.1 11.5 3.6 21c.4.4.9.4 1.6.1l11.1-6.4M16.3 8.3 5.2 1.9c-.7-.4-1.2-.3-1.6.1l9.5 9.5 3.2-3.2z';
const APPLE_ICON =
  'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z';

/**
 * Knapparna till Google Play och App Store, sida vid sida (under varandra på smala telefoner). De fyller raden,
 * så att de är jämna även när de svenska texterna inte får plats bredvid varandra.
 */
export function StoreButtons({ lang, className = '' }: { lang: Lang; className?: string }) {
  const { home } = t(lang);
  const stores = [
    { href: home.playUrl, label: home.playButton, icon: PLAY_ICON },
    { href: home.appStoreUrl, label: home.appStoreButton, icon: APPLE_ICON },
  ];
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      {stores.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f2b84b] px-6 py-3 text-base font-semibold text-[#04150f] shadow-[0_4px_0_#b07d22] transition-transform hover:-translate-y-0.5 sm:flex-auto"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={s.icon} />
          </svg>
          {s.label}
        </a>
      ))}
    </div>
  );
}
