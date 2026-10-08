import type { Metadata } from 'next';
import Link from 'next/link';
import LangSwitch from '../../LangSwitch';

export const metadata: Metadata = {
  title: 'Privacy in Glimmerbaggen – Spitakolus AB',
  description: 'What data Glimmerbaggen stores and why.',
};

const link = 'font-semibold text-[#6d3ccc] underline';

// Engelska versionen av /glimmerbaggen/integritet. Samma innehåll – ändras den svenska texten ska den här ändras också.
export default function GravspeletPrivacy() {
  return (
    <div className="px-5 py-14" lang="en">
      <article className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#0b0614] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
        <LangSwitch page="privacy" current="en" />
        <p className="text-sm font-semibold uppercase tracking-wider text-[#8a7aa0]">Glimmerbaggen</p>
        <h1 className="mt-1 text-3xl font-extrabold">Privacy</h1>
        <p className="mt-2 text-sm text-[#8a7aa0]">Last updated 1 October 2026</p>
        <div className="mt-6 space-y-5 leading-relaxed text-[#4a3d5c]">
          <p>
            Glimmerbaggen is made by Spitakolus AB (Sweden). You can play the game without an account. Your world is then
            saved only on your phone or in your browser, and nothing about you is sent to us. The game has no ads and no
            tracking. Anyone who wants to can buy <strong>The whole game</strong> (a one-time purchase, see below).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">If you create an account</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Email address and password</strong> – so that you can log in and receive emails to confirm the
              account or choose a new password. The password is stored encrypted and nobody can read it.
            </li>
            <li>
              <strong>Username and colour</strong> – the username is visible to other players, for example in the team
              game lobby.
            </li>
            <li>
              <strong>Your saved game</strong> – your world, your bag and what you have built, so that you can continue on
              another device.
            </li>
          </ul>
          <p>Accounts are for people aged 13 or older.</p>

          <h2 className="text-xl font-bold text-[#1b1030]">The purchase &ldquo;The whole game&rdquo;</h2>
          <p>
            The beginning of the game is free. You unlock the rest of the adventure with a one-time purchase,{' '}
            <strong>The whole game</strong>. The purchase is made in Google Play or the App Store, and Google or Apple
            charges you and handles your payment details. We never see your card number or any other payment details.
          </p>
          <p>
            So that the game knows you have bought The whole game, and so that you can <strong>restore the purchase</strong>{' '}
            on a new phone, the purchase is checked by <strong>RevenueCat</strong>. RevenueCat receives:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>An ID number</strong> – a random ID that says nothing about you, or your account&apos;s ID number if
              you are logged in (so that the purchase follows your account).
            </li>
            <li>
              <strong>The purchase history</strong> – what was bought and when, and the receipt from the store.
            </li>
          </ul>
          <p>
            RevenueCat does not receive your name, your email address or your username. Like all online services,
            RevenueCat also sees technical data needed for the purchase to work, for example IP address, app version and
            which store and country the purchase is for. The data is used only to unlock what you have bought and so that
            you can restore the purchase.
          </p>
          <p>
            The purchase data is kept by RevenueCat and in Google Play or the App Store for as long as it is needed for the
            purchase, accounting and complaints, according to their terms. If you want us to delete what RevenueCat has
            about you, email{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            . The purchase itself stays with Google or Apple, so you can still restore it.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Playing together</h2>
          <p>
            When you play together, your beetle&apos;s position, what you dig and build, your signals and your username (if
            you are logged in) are sent to the others in the same game through our game server. The server stores none of
            it – everything disappears when the game ends. For the messages to arrive, the server sees your IP address while
            you are connected.
          </p>
          <p>
            If you <strong>block</strong> someone, the name is stored only on your own phone. If you <strong>report</strong>{' '}
            someone, we store the name of the person you reported, the reason, what kind of game it was and your username
            (if you are logged in), so that we can look into it. Reports are deleted once they have been handled, at the
            latest after one year.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Where the data is kept</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Supabase</strong> – accounts, saved games and reports, on servers in Sweden (EU).
            </li>
            <li>
              <strong>Railway</strong> – the game server for Play together, in the Netherlands (EU). Stores nothing.
            </li>
            <li>
              <strong>Resend</strong> – sends the game&apos;s emails, from Ireland (EU).
            </li>
            <li>
              <strong>RevenueCat</strong> (RevenueCat Inc.) – checks the purchase The whole game (see above). RevenueCat is
              a US company, so the data is transferred to the USA. The transfer is protected by the EU Standard Contractual
              Clauses.
            </li>
            <li>
              <strong>Google Play and the Apple App Store</strong> – the purchase itself and the payment. They handle it as
              independent data controllers under their own terms.
            </li>
          </ul>
          <p>
            Supabase, Railway, Resend and RevenueCat process the data on our behalf and may not use it for anything else.
            We do not sell any data and do not share it with anyone else. Everything is sent encrypted.
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Delete your account</h2>
          <p>
            In the game: <strong>Menu → Account → Delete account</strong> (tap twice). The account, the username and your
            saved game in the cloud are then deleted immediately and for good. The game saved on your phone stays.
          </p>
          <p>
            On the web:{' '}
            <Link href="/glimmerbaggen/en/delete-account" className={link}>
              spitakolus.com/glimmerbaggen/en/delete-account
            </Link>{' '}
            – log in with email and password and delete the account right away.
          </p>
          <p>
            Can&apos;t access the account? Email{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>{' '}
            from the address the account is on, and we will delete the account and everything that belongs to it within 30
            days.
          </p>
          <p>
            Once the account is deleted, nothing remains with us that links the account&apos;s ID number to you. The
            purchase history RevenueCat has under that ID number remains as described in the section about the purchase
            above – email us if you want it deleted too. If you have bought The whole game, the purchase remains with Google
            or Apple, and you can restore it in the game (<strong>Menu → Account → Restore purchase</strong>).
          </p>

          <h2 className="text-xl font-bold text-[#1b1030]">Your rights</h2>
          <p>
            You can at any time ask to see, correct or delete your data – email{' '}
            <a href="mailto:support@spitakolus.com" className={link}>
              support@spitakolus.com
            </a>
            . If you think we handle your data wrongly, you can complain to the Swedish Authority for Privacy Protection
            (IMY) or to the data protection authority where you live.
          </p>
          <p className="text-sm">
            Also read{' '}
            <Link href="/glimmerbaggen/en/terms" className="underline">
              the terms and rules for Glimmerbaggen
            </Link>{' '}
            and Spitakolus AB&apos;s{' '}
            <Link href="/integritetspolicy" className="underline">
              privacy policy
            </Link>{' '}
            (in Swedish).
          </p>
        </div>
      </article>
    </div>
  );
}
