'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthCard, { Notice, PrimaryButton } from '../AuthCard';
import { deleteAccount, isGravspeletConfigured } from '@/lib/gravspelet';

const inputClass =
  'mt-1 w-full rounded-xl border-2 border-[#1b1030] bg-white px-4 py-3 text-[#1b1030] outline-none focus:border-[#a066f2]';

// Ta bort sitt Glimmerbaggen-konto från webben (krav från Google Play och App Store).
// Samma sak som Meny → Konto → Ta bort konto i spelet.
export default function GravspeletTaBortKonto() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [state, setState] = useState<'ready' | 'working' | 'done'>('ready');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email.includes('@') || !password) {
      setError('Skriv e-postadressen och lösenordet till ditt konto.');
      return;
    }
    if (!confirmed) {
      setError('Kryssa i rutan för att bekräfta att kontot ska tas bort.');
      return;
    }
    setState('working');
    const result = await deleteAccount(email, password);
    if (result.ok) {
      setPassword('');
      setState('done');
    } else {
      setError(result.error);
      setState('ready');
    }
  }

  if (state === 'done') {
    return (
      <AuthCard title="Kontot är borttaget">
        <Notice kind="ok">
          <strong>Klart!</strong> Ditt konto, ditt användarnamn och ditt sparade spel i molnet är borttagna för alltid.
        </Notice>
      </AuthCard>
    );
  }

  return (
    <AuthCard title="Ta bort ditt konto">
      <p>
        Här tar du bort ditt konto i Glimmerbaggen. Då försvinner direkt och för alltid:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>kontot och e-postadressen</li>
        <li>användarnamnet</li>
        <li>det sparade spelet i molnet</li>
      </ul>
      <p className="mt-3 text-sm">
        Spelet som är sparat i din telefon finns kvar. Du kan också ta bort kontot i spelet: <strong>Meny → Konto → Ta bort
        konto</strong>.
      </p>
      {!isGravspeletConfigured() ? (
        <div className="mt-5">
          <Notice kind="info">Mejla support@spitakolus.com så tar vi bort kontot.</Notice>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-5 space-y-4" noValidate>
          <label className="block">
            <span className="text-sm font-semibold">E-post</span>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Lösenord</span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </label>
          <label className="flex items-start gap-3 rounded-xl bg-white/70 p-3">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 accent-[#c93f7f]"
            />
            <span className="text-sm">Jag förstår att kontot och det sparade spelet i molnet försvinner för alltid.</span>
          </label>
          {error && <Notice kind="error">{error}</Notice>}
          <PrimaryButton type="submit" disabled={state === 'working'}>
            {state === 'working' ? 'Tar bort …' : 'Ta bort kontot'}
          </PrimaryButton>
        </form>
      )}
      <p className="mt-5 text-sm">
        Glömt lösenordet? Tryck på <em>Glömt lösenordet?</em> under Meny → Konto i spelet, eller mejla{' '}
        <a href="mailto:support@spitakolus.com" className="underline">
          support@spitakolus.com
        </a>{' '}
        från adressen du har kontot på. Läs mer om{' '}
        <Link href="/gravspelet/integritet" className="underline">
          vilka uppgifter spelet sparar
        </Link>
        .
      </p>
    </AuthCard>
  );
}
