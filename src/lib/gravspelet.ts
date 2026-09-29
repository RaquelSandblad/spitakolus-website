import { useSyncExternalStore } from 'react';

// Glimmerbaggens (förut Grävspelet) konton (Supabase Auth) – används av sidorna under /gravspelet.
// Pratar direkt med Supabase REST-gränssnitt, så att hemsidan inte behöver något extra paket.

// Projektet "gravspelet" (organisationen Grävspelet). Den publika nyckeln är gjord för att synas
// i webbläsare och appar – databasens radsäkerhet skyddar allt. Kan bytas med miljövariabler.
export const GRAVSPELET_SUPABASE_URL = (process.env.NEXT_PUBLIC_GRAVSPELET_SUPABASE_URL ?? 'https://ztibbevpkmhhbkwunpzo.supabase.co').replace(/\/$/, '');
export const GRAVSPELET_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_GRAVSPELET_SUPABASE_ANON_KEY ?? 'sb_publishable_39mQlJLW-u5uoE2U_cjBJw_Zv0zc0u0';

export const MIN_PASSWORD_LENGTH = 6;

export function isGravspeletConfigured(): boolean {
  return GRAVSPELET_SUPABASE_URL !== '' && GRAVSPELET_SUPABASE_ANON_KEY !== '';
}

export type VerifyType = 'email' | 'signup' | 'recovery' | 'email_change';

export type AuthResult =
  | { ok: true; accessToken: string }
  | { ok: false; error: string };

const VERIFY_TYPES: VerifyType[] = ['email', 'signup', 'recovery', 'email_change'];

export function parseVerifyType(value: string | null, fallback: VerifyType): VerifyType {
  return VERIFY_TYPES.includes(value as VerifyType) ? (value as VerifyType) : fallback;
}

type SupabaseError = { error_code?: string; code?: string | number; msg?: string; message?: string; error_description?: string };

function swedishError(body: SupabaseError | null, status: number): string {
  const code = String(body?.error_code ?? body?.code ?? '');
  switch (code) {
    case 'otp_expired':
    case 'flow_state_expired':
      return 'Länken har gått ut eller redan använts. Be om en ny länk i spelet.';
    case 'same_password':
      return 'Välj ett annat lösenord än det du hade förut.';
    case 'weak_password':
      return `Lösenordet är för svagt – minst ${MIN_PASSWORD_LENGTH} tecken.`;
    case 'over_request_rate_limit':
    case 'over_email_send_rate_limit':
      return 'För många försök. Vänta en stund och prova igen.';
  }
  if (status === 403 || status === 401) {
    return 'Länken har gått ut eller redan använts. Be om en ny länk i spelet.';
  }
  return body?.msg ?? body?.message ?? body?.error_description ?? `Något gick fel (${status}). Försök igen.`;
}

async function call(path: string, init: RequestInit & { token?: string }): Promise<{ status: number; body: unknown }> {
  const headers: Record<string, string> = {
    apikey: GRAVSPELET_SUPABASE_ANON_KEY,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${init.token ?? GRAVSPELET_SUPABASE_ANON_KEY}`,
  };
  const res = await fetch(`${GRAVSPELET_SUPABASE_URL}${path}`, { ...init, headers });
  const text = await res.text();
  let body: unknown = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = null;
  }
  return { status: res.status, body };
}

/** Bekräftar en länk från ett mejl (token_hash). Ger en inloggning tillbaka. */
export async function verifyToken(tokenHash: string, type: VerifyType): Promise<AuthResult> {
  try {
    const { status, body } = await call('/auth/v1/verify', {
      method: 'POST',
      body: JSON.stringify({ type, token_hash: tokenHash }),
    });
    const data = body as { access_token?: string } & SupabaseError;
    if (status >= 200 && status < 300 && data?.access_token) {
      return { ok: true, accessToken: data.access_token };
    }
    return { ok: false, error: swedishError(data, status) };
  } catch {
    return { ok: false, error: 'Ingen kontakt med servern. Kontrollera att du är ansluten till internet.' };
  }
}

/**
 * Supabases egna standardmejl (innan spelets svenska mejl är påslagna) bekräftar länken hos
 * Supabase och skickar sedan hit med resultatet efter #: antingen en inloggning (access_token)
 * eller ett fel. Läser det som står efter # i adressen.
 */
export function useRedirectResult(): { accessToken: string; error: string } {
  // delen efter # finns bara i webbläsaren – på servern räknas den som tom (så blir det ingen krock)
  const hash = useSyncExternalStore(
    (onChange) => {
      window.addEventListener('hashchange', onChange);
      return () => window.removeEventListener('hashchange', onChange);
    },
    () => window.location.hash,
    () => '',
  );
  return parseRedirectHash(hash);
}

export function parseRedirectHash(hash: string): { accessToken: string; error: string } {
  if (hash.length < 2) {
    return { accessToken: '', error: '' };
  }
  const params = new URLSearchParams(hash.slice(1));
  const code = params.get('error_code') ?? '';
  let error = '';
  if (params.get('error') || code) {
    error = code === 'otp_expired'
      ? 'Länken har gått ut eller redan använts. Be om en ny länk i spelet.'
      : params.get('error_description')?.replace(/\+/g, ' ') ?? 'Länken fungerade inte. Be om en ny länk i spelet.';
  }
  return { accessToken: params.get('access_token') ?? '', error };
}

/** Byter lösenord för den som just verifierade en länk för nytt lösenord. */
export async function updatePassword(accessToken: string, password: string): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { status, body } = await call('/auth/v1/user', {
      method: 'PUT',
      token: accessToken,
      body: JSON.stringify({ password }),
    });
    if (status >= 200 && status < 300) {
      return { ok: true };
    }
    return { ok: false, error: swedishError(body as SupabaseError, status) };
  } catch {
    return { ok: false, error: 'Ingen kontakt med servern. Kontrollera att du är ansluten till internet.' };
  }
}

/** Tar bort kontot från webben: loggar in med e-post och lösenord och tar sedan bort kontot
 *  (samma som Meny → Konto → Ta bort konto i spelet). Profilen och det sparade spelet följer med. */
export async function deleteAccount(email: string, password: string): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const login = await call('/auth/v1/token?grant_type=password', {
      method: 'POST',
      body: JSON.stringify({ email: email.trim(), password }),
    });
    const data = login.body as { access_token?: string } & SupabaseError;
    if (login.status < 200 || login.status >= 300 || !data?.access_token) {
      const code = String(data?.error_code ?? data?.code ?? '');
      if (code === 'email_not_confirmed') {
        return { ok: false, error: 'E-posten är inte bekräftad än. Mejla support@spitakolus.com så tar vi bort kontot.' };
      }
      if (code === 'invalid_credentials' || login.status === 400) {
        return { ok: false, error: 'Fel e-post eller lösenord.' };
      }
      return { ok: false, error: swedishError(data, login.status) };
    }
    const del = await call('/rest/v1/rpc/delete_my_account', { method: 'POST', token: data.access_token, body: '{}' });
    if (del.status >= 200 && del.status < 300) {
      return { ok: true };
    }
    return { ok: false, error: `Kunde inte ta bort kontot (${del.status}). Mejla support@spitakolus.com så hjälper vi dig.` };
  } catch {
    return { ok: false, error: 'Ingen kontakt med servern. Kontrollera att du är ansluten till internet.' };
  }
}
