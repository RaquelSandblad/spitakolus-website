'use client';

import { useState } from 'react';
import { deleteAccount, type Lang } from '@/lib/buraco';
import type { DeleteFormTexts } from '../texts';
import { Notice, PrimaryButton, Rich, inputClass } from '../ui';

// Loggar in på spelservern med e-post/användarnamn och lösenord och tar sedan bort kontot.
export default function DeleteForm({ lang, texts }: { lang: Lang; texts: DeleteFormTexts }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [state, setState] = useState<'ready' | 'working' | 'done'>('ready');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!login.trim() || !password) {
      setError(texts.missingFields);
      return;
    }
    if (!confirmed) {
      setError(texts.needConfirm);
      return;
    }
    setState('working');
    const result = await deleteAccount(login, password, lang);
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
      <Notice kind="ok">
        <strong>{texts.doneTitle}</strong> {texts.doneText}
      </Notice>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <label className="block">
        <span className="text-sm font-semibold text-[#14231e]">{texts.loginLabel}</span>
        <input
          type="text"
          name="username"
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder={texts.loginPlaceholder}
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-[#14231e]">{texts.passwordLabel}</span>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
      </label>
      <label className="flex items-start gap-3 rounded-xl bg-[#f3eee3] p-3">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-[#c8322b]"
        />
        <span className="text-sm leading-relaxed">{texts.confirmLabel}</span>
      </label>
      {error && (
        <Notice kind="error">
          <Rich text={error} lang={lang} />
        </Notice>
      )}
      <PrimaryButton type="submit" tone="danger" disabled={state === 'working'}>
        {state === 'working' ? texts.working : texts.submit}
      </PrimaryButton>
    </form>
  );
}
