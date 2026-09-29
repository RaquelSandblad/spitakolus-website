'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AuthCard, { Notice, PrimaryButton } from '../AuthCard';
import { isGravspeletConfigured, parseVerifyType, useRedirectResult, verifyToken } from '@/lib/gravspelet';

// Hit leder länken i mejlet när man skapat ett konto (eller bytt e-post) i Grävspelet.
// Bekräftelsen görs först när man trycker på knappen, så att mejlprogram som "förhandsgranskar"
// länkar inte råkar använda upp den.
function ConfirmContent() {
  const params = useSearchParams();
  const tokenHash = params.get('token_hash') ?? '';
  const type = parseVerifyType(params.get('type'), 'email');
  // Kom man hit från Supabases standardmejl är e-posten redan bekräftad (eller så står felet efter #).
  const redirect = useRedirectResult();
  const redirected = redirect.accessToken !== '' || redirect.error !== '';
  const [ownState, setState] = useState<'ready' | 'working' | 'done' | 'error'>('ready');
  const [ownError, setError] = useState('');
  const state = redirect.accessToken ? 'done' : redirect.error ? 'error' : ownState;
  const error = redirect.error || ownError;

  async function confirm() {
    setState('working');
    const result = await verifyToken(tokenHash, type);
    if (result.ok) {
      setState('done');
    } else {
      setError(result.error);
      setState('error');
    }
  }

  if (!isGravspeletConfigured()) {
    return (
      <AuthCard title="Bekräfta e-post">
        <Notice kind="info">Konton i Grävspelet är inte påslagna än. Försök igen lite senare.</Notice>
      </AuthCard>
    );
  }

  if (redirected && state === 'error') {
    return (
      <AuthCard title="Bekräfta e-post">
        <Notice kind="error">{error}</Notice>
      </AuthCard>
    );
  }

  if (!tokenHash && !redirected) {
    return (
      <AuthCard title="Bekräfta e-post">
        <Notice kind="info">
          Den här sidan öppnas från länken i mejlet du fick när du skapade ditt konto. Använd hela länken från mejlet.
        </Notice>
      </AuthCard>
    );
  }

  return (
    <AuthCard title={type === 'email_change' ? 'Bekräfta ny e-post' : 'Bekräfta e-post'}>
      {state === 'done' ? (
        <Notice kind="ok">
          <strong>Klart!</strong> Din e-post är bekräftad. Öppna Grävspelet, gå till <strong>Meny → Konto</strong> och logga
          in.
        </Notice>
      ) : (
        <>
          <p className="mb-5">Tryck på knappen för att bekräfta din e-postadress.</p>
          {state === 'error' && (
            <div className="mb-4">
              <Notice kind="error">{error}</Notice>
            </div>
          )}
          <PrimaryButton onClick={confirm} disabled={state === 'working'}>
            {state === 'working' ? 'Bekräftar …' : 'Bekräfta min e-post'}
          </PrimaryButton>
        </>
      )}
    </AuthCard>
  );
}

export default function GravspeletKonto() {
  return (
    <Suspense fallback={<AuthCard title="Bekräfta e-post">Laddar …</AuthCard>}>
      <ConfirmContent />
    </Suspense>
  );
}
