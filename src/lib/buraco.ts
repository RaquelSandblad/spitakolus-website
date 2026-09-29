// Buracos konton – används av sidorna under /buraco (nytt lösenord, ta bort konto).
// Lösenord byts direkt mot Supabase Auth (REST), så att hemsidan inte behöver något extra paket.
// Konton tas bort via spelservern, som också rensar profil och statistik.

export type Lang = 'sv' | 'en' | 'pt';

// Projektet för Buraco (Supabase, EU/Stockholm). Den publika nyckeln är gjord för att synas i
// webbläsare och appar – databasens radsäkerhet skyddar allt. Kan bytas med miljövariabler.
export const BURACO_SUPABASE_URL = (process.env.NEXT_PUBLIC_BURACO_SUPABASE_URL ?? 'https://vcqoguzpkboqwjfrihll.supabase.co').replace(/\/$/, '');
export const BURACO_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_BURACO_SUPABASE_ANON_KEY ?? 'sb_publishable_GKG3K2n-Ayq8XnuCGt0G9Q__fmmGKeE';

// Spelservern (Railway, EU). Tillåter anrop från spitakolus.com och Vercels förhandsadresser.
export const BURACO_SERVER_URL = (process.env.NEXT_PUBLIC_BURACO_SERVER_URL ?? 'https://buraco-server-production.up.railway.app').replace(/\/$/, '');

export const MIN_PASSWORD_LENGTH = 8;

export function isBuracoConfigured(): boolean {
  return BURACO_SUPABASE_URL !== '' && BURACO_SUPABASE_ANON_KEY !== '';
}

// Felmeddelanden på tre språk.
const ERRORS = {
  linkExpired: {
    sv: 'Länken har gått ut eller redan använts. Tryck på ”Glömt lösenordet?” i appen igen för att få en ny länk.',
    en: 'The link has expired or has already been used. Tap “Forgot your password?” in the app again to get a new link.',
    pt: 'O link expirou ou já foi usado. Toque em “Esqueceu a senha?” no app de novo para receber um novo link.',
  },
  linkBroken: {
    sv: 'Länken fungerade inte. Tryck på ”Glömt lösenordet?” i appen igen för att få en ny länk.',
    en: 'The link did not work. Tap “Forgot your password?” in the app again to get a new link.',
    pt: 'O link não funcionou. Toque em “Esqueceu a senha?” no app de novo para receber um novo link.',
  },
  samePassword: {
    sv: 'Välj ett annat lösenord än det du hade förut.',
    en: 'Choose a different password from the one you had before.',
    pt: 'Escolha uma senha diferente da que você tinha antes.',
  },
  weakPassword: {
    sv: `Lösenordet är för svagt – använd minst ${MIN_PASSWORD_LENGTH} tecken.`,
    en: `The password is too weak – use at least ${MIN_PASSWORD_LENGTH} characters.`,
    pt: `A senha é fraca demais – use pelo menos ${MIN_PASSWORD_LENGTH} caracteres.`,
  },
  tooMany: {
    sv: 'För många försök. Vänta en stund och prova igen.',
    en: 'Too many attempts. Wait a moment and try again.',
    pt: 'Tentativas demais. Espere um pouco e tente de novo.',
  },
  wrongLogin: {
    sv: 'Fel användarnamn/e-post eller lösenord.',
    en: 'Wrong username/email or password.',
    pt: 'Usuário/e-mail ou senha incorretos.',
  },
  loginRequired: {
    sv: 'Inloggningen gick inte igenom. Försök igen.',
    en: 'The login did not go through. Please try again.',
    pt: 'O login não deu certo. Tente de novo.',
  },
  noConnection: {
    sv: 'Ingen kontakt med servern. Kontrollera att du är ansluten till internet och försök igen.',
    en: 'No contact with the server. Check that you are connected to the internet and try again.',
    pt: 'Sem contato com o servidor. Verifique se você está conectado à internet e tente de novo.',
  },
  generic: {
    sv: 'Något gick fel. Försök igen, eller mejla support@spitakolus.com.',
    en: 'Something went wrong. Please try again, or email support@spitakolus.com.',
    pt: 'Algo deu errado. Tente de novo ou envie um e-mail para support@spitakolus.com.',
  },
} satisfies Record<string, Record<Lang, string>>;

export type BuracoErrorKey = keyof typeof ERRORS;

export function errorText(key: BuracoErrorKey, lang: Lang): string {
  return ERRORS[key][lang];
}

// ---------- Supabase Auth (nytt lösenord) ----------

export type VerifyType = 'email' | 'signup' | 'recovery' | 'email_change';

export type AuthResult = { ok: true; accessToken: string } | { ok: false; error: string };

type SupabaseError = { error_code?: string; code?: string | number; msg?: string; message?: string; error_description?: string };

function supabaseError(body: SupabaseError | null, status: number, lang: Lang): string {
  const code = String(body?.error_code ?? body?.code ?? '');
  switch (code) {
    case 'otp_expired':
    case 'flow_state_expired':
      return errorText('linkExpired', lang);
    case 'same_password':
      return errorText('samePassword', lang);
    case 'weak_password':
      return errorText('weakPassword', lang);
    case 'over_request_rate_limit':
    case 'over_email_send_rate_limit':
      return errorText('tooMany', lang);
  }
  if (status === 403 || status === 401) {
    return errorText('linkExpired', lang);
  }
  if (status === 429) {
    return errorText('tooMany', lang);
  }
  return errorText('generic', lang);
}

async function callSupabase(path: string, init: RequestInit & { token?: string }): Promise<{ status: number; body: unknown }> {
  const headers: Record<string, string> = {
    apikey: BURACO_SUPABASE_ANON_KEY,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${init.token ?? BURACO_SUPABASE_ANON_KEY}`,
  };
  const res = await fetch(`${BURACO_SUPABASE_URL}${path}`, { ...init, headers });
  return { status: res.status, body: await readJson(res) };
}

async function readJson(res: Response): Promise<unknown> {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

/** Bekräftar en länk från ett mejl (token_hash). Ger en inloggning tillbaka. */
export async function verifyToken(tokenHash: string, type: VerifyType, lang: Lang): Promise<AuthResult> {
  try {
    const { status, body } = await callSupabase('/auth/v1/verify', {
      method: 'POST',
      body: JSON.stringify({ type, token_hash: tokenHash }),
    });
    const data = body as { access_token?: string } & SupabaseError;
    if (status >= 200 && status < 300 && data?.access_token) {
      return { ok: true, accessToken: data.access_token };
    }
    return { ok: false, error: supabaseError(data, status, lang) };
  } catch {
    return { ok: false, error: errorText('noConnection', lang) };
  }
}

/**
 * Supabases standardmejl bekräftar länken hos Supabase och skickar sedan hit med resultatet
 * efter #: antingen en inloggning (access_token) eller ett fel. Tolkar det som står efter #.
 * Ger en felnyckel (inte text), så att sidan kan visa den på rätt språk.
 */
export function parseRedirectHash(hash: string): { accessToken: string; error: BuracoErrorKey | '' } {
  if (hash.length < 2) {
    return { accessToken: '', error: '' };
  }
  const params = new URLSearchParams(hash.slice(1));
  const code = params.get('error_code') ?? '';
  let error: BuracoErrorKey | '' = '';
  if (params.get('error') || code) {
    error = code === 'otp_expired' ? 'linkExpired' : 'linkBroken';
  }
  return { accessToken: params.get('access_token') ?? '', error };
}

/** Byter lösenord för den som just verifierade en länk för nytt lösenord. */
export async function updatePassword(accessToken: string, password: string, lang: Lang): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const { status, body } = await callSupabase('/auth/v1/user', {
      method: 'PUT',
      token: accessToken,
      body: JSON.stringify({ password }),
    });
    if (status >= 200 && status < 300) {
      return { ok: true };
    }
    return { ok: false, error: supabaseError(body as SupabaseError, status, lang) };
  } catch {
    return { ok: false, error: errorText('noConnection', lang) };
  }
}

// ---------- Spelservern (ta bort konto) ----------

// Spelservern svarar med felkoder som 'err.wrongLogin'.
function serverError(code: unknown, status: number, lang: Lang): string {
  switch (code) {
    case 'err.wrongLogin':
      return errorText('wrongLogin', lang);
    case 'err.loginRequired':
      return errorText('loginRequired', lang);
  }
  if (status === 429) {
    return errorText('tooMany', lang);
  }
  return errorText('generic', lang);
}

/**
 * Loggar in på spelservern (e-post eller användarnamn + lösenord) och tar sedan bort kontot.
 * Allt – konto, användarnamn och statistik – försvinner för alltid.
 */
export async function deleteAccount(login: string, password: string, lang: Lang): Promise<{ ok: true } | { ok: false; error: string }> {
  let token = '';
  try {
    const res = await fetch(`${BURACO_SERVER_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login: login.trim(), password }),
    });
    const body = (await readJson(res)) as { token?: string; error?: string } | null;
    if (!res.ok || !body?.token) {
      return { ok: false, error: serverError(body?.error, res.status, lang) };
    }
    token = body.token;
  } catch {
    return { ok: false, error: errorText('noConnection', lang) };
  }

  try {
    const res = await fetch(`${BURACO_SERVER_URL}/api/me`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    const body = (await readJson(res)) as { ok?: boolean; error?: string } | null;
    if (res.ok && body?.ok) {
      return { ok: true };
    }
    return { ok: false, error: serverError(body?.error, res.status, lang) };
  } catch {
    return { ok: false, error: errorText('noConnection', lang) };
  }
}
