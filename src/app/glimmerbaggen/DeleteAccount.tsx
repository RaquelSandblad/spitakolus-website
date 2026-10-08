'use client';

import { useState } from 'react';
import Link from 'next/link';
import AuthCard, { Notice, PrimaryButton } from './AuthCard';
import LangSwitch, { LEGAL_PAGES, type GravspeletLang } from './LangSwitch';
import { deleteAccount, isGravspeletConfigured } from '@/lib/gravspelet';

const inputClass =
  'mt-1 w-full rounded-xl border-2 border-[#1b1030] bg-white px-4 py-3 text-[#1b1030] outline-none focus:border-[#a066f2]';

const SUPPORT = 'support@spitakolus.com';

// Texterna på tre språk. Felen från lib/gravspelet är på svenska och översätts här (se translateError).
const TEXT = {
  sv: {
    title: 'Ta bort ditt konto',
    doneTitle: 'Kontot är borttaget',
    doneLead: 'Klart!',
    done: 'Ditt konto, ditt användarnamn och ditt sparade spel i molnet är borttagna för alltid.',
    intro: 'Här tar du bort ditt konto i Glimmerbaggen. Då försvinner direkt och för alltid:',
    items: ['kontot och e-postadressen', 'användarnamnet', 'det sparade spelet i molnet'],
    kept: 'Spelet som är sparat i din telefon finns kvar. Du kan också ta bort kontot i spelet:',
    menu: 'Meny → Konto → Ta bort konto',
    notConfigured: 'Mejla support@spitakolus.com så tar vi bort kontot.',
    email: 'E-post',
    password: 'Lösenord',
    confirm: 'Jag förstår att kontot och det sparade spelet i molnet försvinner för alltid.',
    working: 'Tar bort …',
    button: 'Ta bort kontot',
    missing: 'Skriv e-postadressen och lösenordet till ditt konto.',
    notConfirmed: 'Kryssa i rutan för att bekräfta att kontot ska tas bort.',
    forgotLead: 'Glömt lösenordet? Tryck på',
    forgotButton: 'Glömt lösenordet?',
    forgotRest: 'under Meny → Konto i spelet, eller mejla',
    fromAddress: 'från adressen du har kontot på. Läs mer om',
    privacyLink: 'vilka uppgifter spelet sparar',
    about: 'Om Glimmerbaggen',
  },
  en: {
    title: 'Delete your account',
    doneTitle: 'Your account is deleted',
    doneLead: 'Done!',
    done: 'Your account, your username and your saved game in the cloud have been deleted for good.',
    intro: 'Here you can delete your Glimmerbaggen account. This immediately and permanently removes:',
    items: ['the account and the email address', 'the username', 'the saved game in the cloud'],
    kept: 'The game saved on your phone stays. You can also delete the account in the game:',
    menu: 'Menu → Account → Delete account',
    notConfigured: 'Email support@spitakolus.com and we will delete the account.',
    email: 'Email',
    password: 'Password',
    confirm: 'I understand that the account and the saved game in the cloud will be gone for good.',
    working: 'Deleting …',
    button: 'Delete the account',
    missing: 'Enter the email address and password of your account.',
    notConfirmed: 'Tick the box to confirm that the account should be deleted.',
    forgotLead: 'Forgot your password? Tap',
    forgotButton: 'Forgot password?',
    forgotRest: 'under Menu → Account in the game, or email',
    fromAddress: 'from the address you have the account on. Read more about',
    privacyLink: 'what the game stores',
    about: 'About Glimmerbaggen',
  },
  pt: {
    title: 'Excluir sua conta',
    doneTitle: 'Sua conta foi excluída',
    doneLead: 'Pronto!',
    done: 'Sua conta, seu nome de usuário e seu jogo salvo na nuvem foram excluídos para sempre.',
    intro: 'Aqui você exclui sua conta do Glimmerbaggen. Isso remove na hora e para sempre:',
    items: ['a conta e o endereço de e-mail', 'o nome de usuário', 'o jogo salvo na nuvem'],
    kept: 'O jogo salvo no seu celular continua lá. Você também pode excluir a conta no jogo:',
    menu: 'Menu → Conta → Excluir conta',
    notConfigured: 'Envie um e-mail para support@spitakolus.com e nós excluímos a conta.',
    email: 'E-mail',
    password: 'Senha',
    confirm: 'Entendo que a conta e o jogo salvo na nuvem serão apagados para sempre.',
    working: 'Excluindo …',
    button: 'Excluir a conta',
    missing: 'Digite o e-mail e a senha da sua conta.',
    notConfirmed: 'Marque a caixa para confirmar que a conta deve ser excluída.',
    forgotLead: 'Esqueceu a senha? Toque em',
    forgotButton: 'Esqueceu a senha?',
    forgotRest: 'em Menu → Conta no jogo, ou envie um e-mail para',
    fromAddress: 'a partir do endereço da sua conta. Saiba mais sobre',
    privacyLink: 'quais dados o jogo guarda',
    about: 'Sobre o Glimmerbaggen',
  },
} as const;

// lib/gravspelet svarar på svenska. På engelska och portugisiska byts de kända felen ut.
function translateError(error: string, lang: GravspeletLang): string {
  if (lang === 'sv') return error;
  const en = lang === 'en';
  if (error.startsWith('Fel e-post eller lösenord')) return en ? 'Wrong email or password.' : 'E-mail ou senha incorretos.';
  if (error.startsWith('E-posten är inte bekräftad'))
    return en
      ? `The email address is not confirmed yet. Email ${SUPPORT} and we will delete the account.`
      : `O e-mail ainda não foi confirmado. Envie um e-mail para ${SUPPORT} e nós excluímos a conta.`;
  if (error.startsWith('Ingen kontakt med servern'))
    return en
      ? 'No connection to the server. Check that you are connected to the internet.'
      : 'Sem conexão com o servidor. Verifique se você está conectado à internet.';
  const status = error.match(/\((\d+)\)/)?.[1];
  return en
    ? `Could not delete the account${status ? ` (${status})` : ''}. Email ${SUPPORT} and we will help you.`
    : `Não foi possível excluir a conta${status ? ` (${status})` : ''}. Envie um e-mail para ${SUPPORT} e nós ajudamos você.`;
}

// Ta bort sitt Glimmerbaggen-konto från webben (krav från Google Play och App Store).
// Samma sak som Meny → Konto → Ta bort konto i spelet. Används av sidorna på svenska, engelska och portugisiska.
export default function DeleteAccount({ lang }: { lang: GravspeletLang }) {
  const t = TEXT[lang];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [state, setState] = useState<'ready' | 'working' | 'done'>('ready');
  const [error, setError] = useState('');
  const top = <LangSwitch page="deleteAccount" current={lang} />;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email.includes('@') || !password) {
      setError(t.missing);
      return;
    }
    if (!confirmed) {
      setError(t.notConfirmed);
      return;
    }
    setState('working');
    const result = await deleteAccount(email, password);
    if (result.ok) {
      setPassword('');
      setState('done');
    } else {
      setError(translateError(result.error, lang));
      setState('ready');
    }
  }

  if (state === 'done') {
    return (
      <div lang={lang === 'pt' ? 'pt-BR' : lang}>
        <AuthCard title={t.doneTitle} top={top} aboutLabel={t.about}>
          <Notice kind="ok">
            <strong>{t.doneLead}</strong> {t.done}
          </Notice>
        </AuthCard>
      </div>
    );
  }

  return (
    <div lang={lang === 'pt' ? 'pt-BR' : lang}>
      <AuthCard title={t.title} top={top} aboutLabel={t.about}>
        <p>{t.intro}</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {t.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm">
          {t.kept} <strong>{t.menu}</strong>.
        </p>
        {!isGravspeletConfigured() ? (
          <div className="mt-5">
            <Notice kind="info">{t.notConfigured}</Notice>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-4" noValidate>
            <label className="block">
              <span className="text-sm font-semibold">{t.email}</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold">{t.password}</span>
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
              <span className="text-sm">{t.confirm}</span>
            </label>
            {error && <Notice kind="error">{error}</Notice>}
            <PrimaryButton type="submit" disabled={state === 'working'}>
              {state === 'working' ? t.working : t.button}
            </PrimaryButton>
          </form>
        )}
        <p className="mt-5 text-sm">
          {t.forgotLead} <em>{t.forgotButton}</em> {t.forgotRest}{' '}
          <a href={`mailto:${SUPPORT}`} className="underline">
            {SUPPORT}
          </a>{' '}
          {t.fromAddress}{' '}
          <Link href={LEGAL_PAGES.privacy[lang]} className="underline">
            {t.privacyLink}
          </Link>
          .
        </p>
      </AuthCard>
    </div>
  );
}
