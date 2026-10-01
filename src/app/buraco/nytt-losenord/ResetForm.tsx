'use client';

import { useState, useSyncExternalStore } from 'react';
import { errorText, isBuracoConfigured, MIN_PASSWORD_LENGTH, parseRedirectHash, updatePassword, verifyToken, type Lang } from '@/lib/buraco';
import type { ResetFormTexts } from '../texts';
import { Notice, PrimaryButton, Rich, inputClass } from '../ui';

// Hit leder länken i mejlet när man tryckt på "Glömt lösenordet?" i appen Mesa 11. Två fall:
// 1. Länken har token_hash i adressen (egna mejlmallar) – den används först när man sparar,
//    eftersom den bara går att använda en gång.
// 2. Supabases standardmejl har redan bekräftat länken – inloggningen står efter # i adressen.
export default function ResetForm({ lang, tokenHash, texts }: { lang: Lang; tokenHash: string; texts: ResetFormTexts }) {
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const redirect = parseRedirectHash(useHash());
  const [verifiedToken, setVerifiedToken] = useState('');
  const accessToken = verifiedToken || redirect.accessToken;
  const [state, setState] = useState<'ready' | 'working' | 'done'>('ready');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(texts.tooShort);
      return;
    }
    if (password !== repeat) {
      setError(texts.mismatch);
      return;
    }
    setState('working');
    let token = accessToken;
    if (!token) {
      const verified = await verifyToken(tokenHash, 'recovery', lang);
      if (!verified.ok) {
        setError(verified.error);
        setState('ready');
        return;
      }
      token = verified.accessToken;
      setVerifiedToken(token); // går det inte att byta nu kan man försöka igen utan ny länk
    }
    const result = await updatePassword(token, password, lang);
    if (result.ok) {
      setState('done');
    } else {
      setError(result.error);
      setState('ready');
    }
  }

  if (!isBuracoConfigured()) {
    return <Notice kind="info">{texts.notConfigured}</Notice>;
  }

  if (redirect.error) {
    return <Notice kind="error">{errorText(redirect.error, lang)}</Notice>;
  }

  if (!tokenHash && !accessToken) {
    return (
      <Notice kind="info">
        <Rich text={texts.noLink} lang={lang} />
      </Notice>
    );
  }

  if (state === 'done') {
    return (
      <Notice kind="ok">
        <strong>{texts.doneTitle}</strong> {texts.doneText}
      </Notice>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      {/* Hjälper lösenordshanterare att spara det nya lösenordet */}
      <input type="text" name="username" autoComplete="username" hidden readOnly />
      <label className="block">
        <span className="text-sm font-semibold text-[#14231e]">{texts.newPassword}</span>
        <input
          type="password"
          name="new-password"
          autoComplete="new-password"
          minLength={MIN_PASSWORD_LENGTH}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={texts.placeholder}
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-[#14231e]">{texts.repeat}</span>
        <input
          type="password"
          name="repeat-password"
          autoComplete="new-password"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
          className={inputClass}
        />
      </label>
      {error && (
        <Notice kind="error">
          <Rich text={error} lang={lang} />
        </Notice>
      )}
      <PrimaryButton type="submit" disabled={state === 'working'}>
        {state === 'working' ? texts.saving : texts.save}
      </PrimaryButton>
    </form>
  );
}

// Delen efter # finns bara i webbläsaren – på servern räknas den som tom (så blir det ingen krock).
function useHash(): string {
  return useSyncExternalStore(
    (onChange) => {
      window.addEventListener('hashchange', onChange);
      return () => window.removeEventListener('hashchange', onChange);
    },
    () => window.location.hash,
    () => '',
  );
}
