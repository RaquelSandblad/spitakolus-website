import type { Metadata } from 'next';
import Link from 'next/link';
import LangSwitch from '../../LangSwitch';

export const metadata: Metadata = {
  title: 'Terms for Glimmerbaggen – Spitakolus AB',
  description: 'Rules when you play Glimmerbaggen and play together with others.',
};

const link = 'font-semibold text-[#6d3ccc] underline';

// Engelska versionen av /glimmerbaggen/villkor. Samma innehåll – ändras den svenska texten ska den här ändras också.
export default function GravspeletTerms() {
  return (
    <div className="px-5 py-14" lang="en">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <LangSwitch page="terms" current="en" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Terms and rules</h1>
        <p className="mt-2 text-sm text-[#8a7aa0]">Last updated 1 October 2026</p>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            Glimmerbaggen is made by Spitakolus AB (Sweden). When you play Glimmerbaggen, create an account or play
            together with others, you accept these terms.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Rules when playing together</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Be nice to the people you play with.</li>
            <li>Choose a kind username. No swear words, no mean or sexual words and not someone else&apos;s name.</li>
            <li>Don&apos;t cheat and don&apos;t modify the game to spoil it for others.</li>
            <li>Never share anyone else&apos;s personal information.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1b1030]">Block and report</h2>
          <p>
            If someone is mean, cheats or has an inappropriate name, go to <strong>Menu → Play together → Report /
            block</strong> in the game. If you block someone, you leave each other&apos;s game and won&apos;t be matched
            again. If you report someone, we are notified. You can also email{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            .
          </p>
          <p>
            We read every report. Anyone who breaks the rules may have their username changed or their account suspended or
            deleted.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Your account</h2>
          <p>
            Accounts are for people aged 13 or older. You are responsible for your password. You can delete the account
            whenever you want in the game (<strong>Menu → Account → Delete account</strong>).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">The purchase &ldquo;The whole game&rdquo;</h2>
          <p>
            The beginning of the game is free. <strong>The whole game</strong> is a one-time purchase that unlocks the rest
            of the adventure for good – it is not a subscription. The purchase is made in Google Play or the App Store, and
            their terms apply to the payment and to refunds. If you want your money back, ask Google or Apple.
          </p>
          <p>
            The purchase belongs to your Google or Apple account. If you change phones or reinstall the game, tap{' '}
            <strong>Menu → Account → Restore purchase</strong>. If you are logged in to the game, the purchase also follows
            your account. Playing together as a guest and team games are free for everyone.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">The game</h2>
          <p>
            We do our best to make the game and cloud saving work, but we cannot promise that they always do. The game may
            change, and features may be added or removed. The game and everything in it belongs to Spitakolus AB.
          </p>

          <p className="text-sm">
            Also read{' '}
            <Link href="/glimmerbaggen/en/privacy" className="underline">
              what data the game stores
            </Link>
            . Questions? Email{' '}
            <a href="mailto:support@spitakolus.com" className="underline">
              support@spitakolus.com
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
