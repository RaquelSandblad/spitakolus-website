// Grävspelets konton (Supabase Auth) – används av sidorna under /gravspelet.
// Pratar direkt med Supabase REST-gränssnitt, så att hemsidan inte behöver något extra paket.

export const GRAVSPELET_SUPABASE_URL = (process.env.NEXT_PUBLIC_GRAVSPELET_SUPABASE_URL ?? '').replace(/\/$/, '');
export const GRAVSPELET_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_GRAVSPELET_SUPABASE_ANON_KEY ?? '';

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
