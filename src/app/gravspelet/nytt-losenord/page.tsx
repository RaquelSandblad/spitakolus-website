'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthCard, { Notice, PrimaryButton } from '../AuthCard';
import { isGravspeletConfigured, MIN_PASSWORD_LENGTH, updatePassword, verifyToken } from '@/lib/gravspelet';

// Hit leder länken i mejlet när man tryckt på "Glömt lösenordet?" i Grävspelet.
// Länken används först när man skickar det nya lösenordet (den går bara att använda en gång).
function ResetContent() {
  const params = useSearchParams();
  const tokenHash = params.get('token_hash') ?? '';
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [state, setState] = useState<'ready' | 'working' | 'done'>('ready');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(`Lösenordet måste vara minst ${MIN_PASSWORD_LENGTH} tecken.`);
      return;
    }
    if (password !== repeat) {
      setError('Lösenorden är inte likadana.');
      return;
    }
    setState('working');
    let token = accessToken;
    if (!token) {
      const verified = await verifyToken(tokenHash, 'recovery');
      if (!verified.ok) {
        setError(verified.error);
        setState('ready');
        return;
      }
      token = verified.accessToken;
      setAccessToken(token); // går det inte att byta nu kan man försöka igen utan ny länk
    }
    const result = await updatePassword(token, password);
    if (result.ok) {
      setState('done');
    } else {
      setError(result.error);
      setState('ready');
    }
  }

  if (!isGravspeletConfigured()) {
    return (
      <AuthCard title="Nytt lösenord">
        <Notice kind="info">Konton i Grävspelet är inte påslagna än. Försök igen lite senare.</Notice>
      </AuthCard>
    );
  }

  if (!tokenHash) {
    return (
      <AuthCard title="Nytt lösenord">
        <Notice kind="info">
          Tryck på <strong>Glömt lösenordet?</strong> under Meny → Konto i Grävspelet, så får du ett mejl med en länk hit.
        </Notice>
      </AuthCard>
    );
  }

  if (state === 'done') {
    return (
      <AuthCard title="Nytt lösenord">
        <Notice kind="ok">
          <strong>Klart!</strong> Ditt lösenord är bytt. Öppna Grävspelet, gå till <strong>Meny → Konto</strong> och logga in
          med det nya lösenordet.
        </Notice>
      </AuthCard>
    );
  }

  return (
    <AuthCard title="Nytt lösenord">
      <form onSubmit={submit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-semibold">Nytt lösenord</span>
          <input
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border-2 border-[#1b1030] bg-white px-4 py-3 text-[#1b1030] outline-none focus:border-[#a066f2]"
            placeholder={`Minst ${MIN_PASSWORD_LENGTH} tecken`}
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Samma lösenord igen</span>
          <input
            type="password"
            autoComplete="new-password"
            value={repeat}
            onChange={(e) => setRepeat(e.target.value)}
            className="mt-1 w-full rounded-xl border-2 border-[#1b1030] bg-white px-4 py-3 text-[#1b1030] outline-none focus:border-[#a066f2]"
          />
        </label>
        {error && <Notice kind="error">{error}</Notice>}
        <PrimaryButton type="submit" disabled={state === 'working'}>
          {state === 'working' ? 'Sparar …' : 'Spara nytt lösenord'}
        </PrimaryButton>
      </form>
    </AuthCard>
  );
}

export default function GravspeletNyttLosenord() {
  return (
    <Suspense fallback={<AuthCard title="Nytt lösenord">Laddar …</AuthCard>}>
      <ResetContent />
    </Suspense>
  );
}
