import { MIN_PASSWORD_LENGTH, type Lang } from '@/lib/buraco';

// Alla texter för Buracos sidor på svenska, engelska och portugisiska (Brasilien).
// Enkel märkning i texterna: **fet**, [länktext](/buraco/...) och e-postadresser blir länkar.

export type Block = {
  h: string;
  p?: string[];
  ul?: string[];
  after?: string[];
};

export type LegalTexts = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  intro: string[];
  sections: Block[];
};

export type DeleteFormTexts = {
  formTitle: string;
  loginLabel: string;
  loginPlaceholder: string;
  passwordLabel: string;
  confirmLabel: string;
  submit: string;
  working: string;
  missingFields: string;
  needConfirm: string;
  doneTitle: string;
  doneText: string;
};

export type ResetFormTexts = {
  newPassword: string;
  placeholder: string;
  repeat: string;
  save: string;
  saving: string;
  tooShort: string;
  mismatch: string;
  noLink: string;
  doneTitle: string;
  doneText: string;
  notConfigured: string;
};

export type Texts = {
  common: {
    languageLabel: string;
    about: string;
    privacy: string;
    terms: string;
    deleteAccount: string;
    contact: string;
    company: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    lead: string;
    features: { title: string; text: string }[];
    freeTitle: string;
    freeText: string;
    accountTitle: string;
    accountItems: string[];
    linksTitle: string;
  };
  privacy: LegalTexts;
  terms: LegalTexts;
  del: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    whatTitle: string;
    what: string[];
    warning: string;
    appTitle: string;
    appText: string;
    mailTitle: string;
    mailText: string;
    form: DeleteFormTexts;
  };
  reset: {
    metaTitle: string;
    title: string;
    form: ResetFormTexts;
  };
};

const MIN = MIN_PASSWORD_LENGTH;

const sv: Texts = {
  common: {
    languageLabel: 'Språk',
    about: 'Om Buraco',
    privacy: 'Integritet',
    terms: 'Villkor',
    deleteAccount: 'Ta bort konto',
    contact: 'Kontakt',
    company: 'Buraco görs av Spitakolus AB (org.nr 559554-6101).',
  },
  home: {
    metaTitle: 'Buraco – kortspelet två mot två, online',
    metaDescription: 'Buraco är kortspelet två mot två, online. Kommer snart på Google Play och App Store.',
    badge: 'Kommer snart på Google Play och App Store',
    lead: 'Det klassiska kortspelet två mot två, online. Samarbeta med din partner, lägg ut serier och bygg kanastor innan motståndarna hinner före.',
    features: [
      {
        title: 'Två mot två',
        text: 'Du och din partner mot två andra spelare. Är en plats fortfarande tom efter 30 sekunder tar en datorspelare den, så du väntar aldrig länge.',
      },
      {
        title: 'Öva mot datorn',
        text: 'Spela mot datorspelare när du vill lära dig spelet eller bara spela i lugn och ro.',
      },
      {
        title: 'Nybörjarbord och Mästarbord',
        text: 'Välj Nybörjarbord om du är ny, eller Mästarbord om du är van – så hamnar du med spelare på din nivå.',
      },
      {
        title: 'Öppen, Stängd eller Strikt',
        text: 'Tre spelsätt som bestämmer hur slänghögen och serierna fungerar. Välj det du tycker om.',
      },
    ],
    freeTitle: 'Gratis att spela',
    freeText: 'Buraco är gratis och har reklam. Med **Premium** slipper du all reklam – i övrigt är spelet precis likadant för alla. Inga riktiga pengar, inga vinster.',
    accountTitle: 'Ditt konto',
    accountItems: [
      'Du skapar ett konto i appen med e-post, användarnamn och lösenord. Användarnamnet syns för de andra vid bordet.',
      '**Glömt lösenordet?** Tryck på ”Glömt lösenordet?” i appen, så får du ett mejl med en länk där du väljer ett nytt.',
      '**Ta bort kontot:** i appen under profilmenyn → Ta bort konto, eller [här på webben](/buraco/ta-bort-konto).',
    ],
    linksTitle: 'Mer om Buraco',
  },
  privacy: {
    metaTitle: 'Integritetspolicy för Buraco – Spitakolus AB',
    metaDescription: 'Vilka uppgifter Buraco sparar, varför, var de finns och hur du tar bort dem.',
    title: 'Integritetspolicy',
    updated: 'Senast ändrad 29 september 2026',
    intro: [
      'Här beskriver vi vilka personuppgifter kortspelet Buraco (appen och spelservern) behandlar, varför, var de finns och vilka rättigheter du har enligt dataskyddsförordningen (GDPR).',
    ],
    sections: [
      {
        h: 'Vem ansvarar för dina uppgifter?',
        p: [
          'Spitakolus AB, organisationsnummer 559554-6101, är personuppgiftsansvarig. Du når oss på support@spitakolus.com.',
        ],
      },
      {
        h: 'Vilka uppgifter sparar vi?',
        p: ['Du behöver ett konto för att spela. Till kontot sparar vi:'],
        ul: [
          '**E-postadress** – för att du ska kunna logga in och få mejl när du vill välja ett nytt lösenord.',
          '**Användarnamn** – det syns för de andra spelarna vid bordet.',
          '**Lösenord** – sköts av Supabase Auth och lagras bara hashat. Ingen, inte heller vi, kan läsa det.',
          '**Statistik** – hur många partier du har spelat och vunnit.',
          '**Premium** – om du har köpt Premium (inga annonser).',
          '**Tidsspärr** – om du har lämnat ett pågående parti, så att tiden på 10 minuter innan nästa parti kan räknas.',
        ],
        after: [
          'Det finns ingen chatt i spelet. Pågående partier – korten, dragen och vilka som sitter vid bordet – finns bara i spelserverns minne och sparas inte när partiet är slut. För att spelet ska kunna skicka data till din telefon behöver spelservern tekniska uppgifter som din IP-adress medan du är ansluten.',
        ],
      },
      {
        h: 'Annonser',
        p: [
          'Om du inte har Premium visas en reklamrad och en helskärmsannons efter varje parti. Annonserna kommer från **Google AdMob**. I EU/EES frågar appen först om ditt samtycke. Om du samtycker kan Google använda telefonens annons-id och din ungefärliga plats för att visa och mäta annonser. Om du inte samtycker visas ändå annonser, men de anpassas inte efter dig.',
          'Du kan när som helst ta tillbaka ditt samtycke. Hittar du inte valet i appen, mejla support@spitakolus.com. Läs mer om hur Google använder uppgifter på [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).',
        ],
      },
      {
        h: 'Köp av Premium',
        p: [
          'Premium köps via Google Play eller App Store. Det är Google respektive Apple som tar betalt och hanterar dina betalningsuppgifter. Vi får bara veta att köpet är gjort – aldrig ditt kortnummer eller andra betalningsuppgifter.',
        ],
      },
      {
        h: 'Varför och med vilken rätt?',
        ul: [
          '**För att ge dig spelet** (konto, inloggning, användarnamn, partier, statistik, tidsspärr och Premium): det behövs för att uppfylla avtalet med dig, alltså användarvillkoren (artikel 6.1 b GDPR).',
          '**Anpassade annonser**: ditt samtycke (artikel 6.1 a GDPR).',
          '**Säkerhet och att stoppa fusk och missbruk**: vårt berättigade intresse av en trygg och schysst tjänst (artikel 6.1 f GDPR).',
        ],
      },
      {
        h: 'Var finns uppgifterna och vilka hjälper oss?',
        ul: [
          '**Supabase** – konton (e-post, användarnamn, hashat lösenord, statistik, Premium och tidsspärr), på servrar i EU (Stockholm, Sverige).',
          '**Railway** – spelservern, i EU-regionen (Amsterdam, Nederländerna). Railway är ett amerikanskt bolag, så uppgifter kan föras över till USA. Överföringen skyddas med EU:s standardavtalsklausuler.',
          '**Google AdMob** – annonser, för dig som inte har Premium (se ovan).',
          '**Google Play och Apple App Store** – köp av Premium. De hanterar betalningen som egna personuppgiftsansvariga enligt sina egna villkor.',
        ],
        after: [
          'Supabase och Railway behandlar uppgifterna bara för vår räkning och får inte använda dem till något annat. Vi säljer aldrig dina uppgifter. Allt skickas krypterat.',
        ],
      },
      {
        h: 'Hur länge sparar vi uppgifterna?',
        p: [
          'Kontouppgifterna sparas så länge du har kvar ditt konto. Pågående partier finns bara kvar medan partiet pågår. När du tar bort ditt konto raderas kontot, användarnamnet och statistiken direkt och för alltid.',
        ],
      },
      {
        h: 'Ta bort ditt konto',
        p: ['Du kan ta bort ditt konto på tre sätt:'],
        ul: [
          'I appen: profilmenyn → **Ta bort konto**.',
          'På webben: [spitakolus.com/buraco/ta-bort-konto](/buraco/ta-bort-konto).',
          'Genom att mejla support@spitakolus.com från adressen du har kontot på.',
        ],
        after: ['Allt som hör till kontot – konto, användarnamn och statistik – raderas. Det går inte att ångra.'],
      },
      {
        h: 'Dina rättigheter',
        p: ['Du har rätt att:'],
        ul: [
          'få veta vilka uppgifter vi har om dig och få en kopia av dem,',
          'få felaktiga uppgifter rättade,',
          'få dina uppgifter raderade,',
          'begära att behandlingen begränsas och invända mot behandling som bygger på vårt berättigade intresse,',
          'få ut uppgifter du har gett oss i ett maskinläsbart format (dataportabilitet),',
          'när som helst ta tillbaka ett samtycke.',
        ],
        after: ['Mejla support@spitakolus.com. Vi svarar inom en månad.'],
      },
      {
        h: 'Klagomål',
        p: [
          'Tycker du att vi behandlar dina uppgifter fel får du gärna höra av dig till oss först. Du har också rätt att klaga hos Integritetsskyddsmyndigheten (IMY), [www.imy.se](https://www.imy.se).',
        ],
      },
      {
        h: 'Ålder',
        p: ['Buraco är till för dig som är 13 år eller äldre.'],
      },
      {
        h: 'Ändringar',
        p: [
          'Om vi ändrar den här policyn uppdaterar vi datumet överst. Vid större ändringar berättar vi det också i appen.',
        ],
      },
      {
        h: 'Kontakt',
        p: ['Spitakolus AB, org.nr 559554-6101. E-post: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Användarvillkor för Buraco – Spitakolus AB',
    metaDescription: 'Reglerna för att spela Buraco: schysst spel, användarnamn, Premium och mer.',
    title: 'Användarvillkor',
    updated: 'Senast ändrade 29 september 2026',
    intro: [
      'De här villkoren gäller när du använder kortspelet Buraco från Spitakolus AB (org.nr 559554-6101). När du skapar ett konto godkänner du villkoren. Läs också vår [integritetspolicy](/buraco/integritet).',
    ],
    sections: [
      {
        h: 'Tjänsten',
        p: [
          'Buraco är ett kortspel online, två mot två. Är en plats tom efter 30 sekunder tar en datorspelare den. Du kan också öva mot datorn. Du väljer nivå (Nybörjarbord eller Mästarbord) och spelsätt (Öppen, Stängd eller Strikt).',
        ],
      },
      {
        h: 'Ålder och konto',
        ul: [
          'Du måste vara 13 år eller äldre.',
          'Du behöver ett konto med e-post, användarnamn och lösenord för att spela.',
          'Håll ditt lösenord hemligt. Du ansvarar för det som görs med ditt konto.',
        ],
      },
      {
        h: 'Användarnamn',
        p: ['Ditt användarnamn syns för andra spelare. Det får inte:'],
        ul: [
          'vara stötande, kränkande, hotfullt, sexuellt eller rasistiskt,',
          'utge sig för att vara någon annan, till exempel en annan spelare eller Spitakolus,',
          'innehålla personuppgifter, reklam eller länkar.',
        ],
        after: ['Vi kan ändra eller ta bort ett användarnamn som bryter mot det här.'],
      },
      {
        h: 'Schysst spel',
        ul: [
          'Spela för att vinna med ditt eget lag – samarbeta inte med motståndarna och sabotera inte för din partner med flit.',
          'Fuska inte: inga program, robotar eller verktyg som spelar åt dig eller ger dig fördelar.',
          'Utnyttja inte fel i spelet. Hittar du ett fel, berätta det gärna för oss.',
          'Försök inte ta dig in i andras konton, störa spelservern eller kringgå reklam eller tidsspärr.',
        ],
      },
      {
        h: 'Om du lämnar ett parti',
        p: [
          'Lämnar du ett pågående parti får du vänta **10 minuter** innan du kan börja nästa. Det gäller alla, även den som har Premium, så att partierna inte förstörs för de andra.',
        ],
      },
      {
        h: 'Reklam och Premium',
        ul: [
          'Buraco är gratis och har reklam: en reklamrad och en helskärmsannons efter varje parti.',
          '**Premium** tar bort all reklam. Det ger inga andra fördelar i spelet.',
          'Premium köps via Google Play eller App Store. Priset visas där innan du köper. Betalning, kvitton och återbetalningar sköts av butiken enligt dess villkor.',
        ],
      },
      {
        h: 'Inga riktiga pengar',
        p: [
          'Buraco är inte hasardspel. Du spelar inte om riktiga pengar och kan inte vinna pengar eller priser. Poäng och statistik i spelet har inget värde utanför spelet.',
        ],
      },
      {
        h: 'Ändringar av tjänsten',
        p: [
          'Vi utvecklar spelet hela tiden och kan ändra, lägga till eller ta bort funktioner, göra uppehåll eller avsluta tjänsten. Om vi ändrar villkoren uppdaterar vi datumet överst, och vid större ändringar berättar vi det i appen.',
        ],
      },
      {
        h: 'Avstängning',
        p: [
          'Om du bryter mot villkoren, till exempel fuskar, missbrukar tjänsten eller har ett stötande användarnamn, kan vi varna dig, stänga av dig en tid eller ta bort ditt konto.',
        ],
      },
      {
        h: 'Ansvar',
        p: [
          'Vi gör vårt bästa för att spelet ska fungera, men vi kan inte lova att det alltid är tillgängligt eller helt utan fel. Villkoren begränsar inte de rättigheter du har som konsument enligt lag.',
        ],
      },
      {
        h: 'Ta bort ditt konto',
        p: [
          'Du kan när som helst ta bort ditt konto i appen (profilmenyn → Ta bort konto), [på webben](/buraco/ta-bort-konto) eller genom att mejla support@spitakolus.com.',
        ],
      },
      {
        h: 'Lag och kontakt',
        p: [
          'Svensk lag gäller för villkoren. Som konsument behåller du det skydd som tvingande lag i ditt land ger dig. Frågor? Mejla support@spitakolus.com.',
        ],
      },
    ],
  },
  del: {
    metaTitle: 'Ta bort ditt Buraco-konto – Spitakolus AB',
    metaDescription: 'Så tar du bort ditt konto i Buraco och allt som hör till det.',
    title: 'Ta bort ditt konto',
    intro: 'Här kan du ta bort ditt konto i Buraco direkt och för alltid.',
    whatTitle: 'Det här raderas',
    what: ['ditt konto, e-postadress och lösenord,', 'ditt användarnamn,', 'din statistik (spelade och vunna partier),', 'din Premium och din eventuella tidsspärr.'],
    warning: 'Det går inte att ångra. Har du köpt Premium försvinner det också. Avsluta i så fall en eventuell prenumeration i Google Play eller App Store.',
    appTitle: 'I appen',
    appText: 'Öppna Buraco, gå till profilmenyn och tryck på **Ta bort konto**.',
    mailTitle: 'Kommer du inte åt kontot?',
    mailText: 'Mejla support@spitakolus.com från e-postadressen du har kontot på, så tar vi bort kontot och allt som hör till det.',
    form: {
      formTitle: 'Här på webben',
      loginLabel: 'E-post eller användarnamn',
      loginPlaceholder: 'namn@exempel.se',
      passwordLabel: 'Lösenord',
      confirmLabel: 'Jag förstår att mitt konto, mitt användarnamn och min statistik tas bort för alltid.',
      submit: 'Ta bort mitt konto för alltid',
      working: 'Tar bort …',
      missingFields: 'Skriv din e-post eller ditt användarnamn och ditt lösenord.',
      needConfirm: 'Kryssa i rutan för att bekräfta att du vill ta bort kontot.',
      doneTitle: 'Kontot är borttaget.',
      doneText: 'Ditt konto, ditt användarnamn och din statistik är raderade. Tack för att du har spelat Buraco!',
    },
  },
  reset: {
    metaTitle: 'Nytt lösenord – Buraco',
    title: 'Nytt lösenord',
    form: {
      newPassword: 'Nytt lösenord',
      placeholder: `Minst ${MIN} tecken`,
      repeat: 'Samma lösenord igen',
      save: 'Spara nytt lösenord',
      saving: 'Sparar …',
      tooShort: `Lösenordet måste vara minst ${MIN} tecken.`,
      mismatch: 'Lösenorden är inte likadana. Skriv samma lösenord i båda fälten.',
      noLink: 'Tryck på **Glömt lösenordet?** när du loggar in i Buraco, så får du ett mejl med en länk hit.',
      doneTitle: 'Klart!',
      doneText: 'Ditt lösenord är bytt. Öppna Buraco och logga in med det nya lösenordet.',
      notConfigured: 'Det går inte att byta lösenord just nu. Försök igen lite senare.',
    },
  },
};

const en: Texts = {
  common: {
    languageLabel: 'Language',
    about: 'About Buraco',
    privacy: 'Privacy',
    terms: 'Terms',
    deleteAccount: 'Delete account',
    contact: 'Contact',
    company: 'Buraco is made by Spitakolus AB (Swedish company reg. no. 559554-6101).',
  },
  home: {
    metaTitle: 'Buraco – the card game two against two, online',
    metaDescription: 'Buraco is the card game two against two, online. Coming soon to Google Play and the App Store.',
    badge: 'Coming soon to Google Play and the App Store',
    lead: 'The classic card game, two against two, online. Team up with your partner, lay down melds and build canastas before your opponents do.',
    features: [
      {
        title: 'Two against two',
        text: 'You and your partner against two other players. If a seat is still empty after 30 seconds, a computer player takes it, so you never wait long.',
      },
      {
        title: 'Practise against the computer',
        text: 'Play against computer players when you want to learn the game or just play at your own pace.',
      },
      {
        title: 'Beginner table and Master table',
        text: 'Choose the Beginner table if you are new, or the Master table if you are experienced – and play with people at your level.',
      },
      {
        title: 'Open, Closed or Strict',
        text: 'Three modes that decide how the discard pile and the melds work. Pick the one you like.',
      },
    ],
    freeTitle: 'Free to play',
    freeText: 'Buraco is free and shows ads. With **Premium** you get no ads at all – otherwise the game is exactly the same for everyone. No real money, no prizes.',
    accountTitle: 'Your account',
    accountItems: [
      'You create an account in the app with an email address, a username and a password. Your username is shown to the other players at the table.',
      '**Forgot your password?** Tap “Forgot your password?” in the app and we will email you a link where you can choose a new one.',
      '**Delete your account:** in the app via the profile menu → Delete account, or [here on the web](/buraco/ta-bort-konto).',
    ],
    linksTitle: 'More about Buraco',
  },
  privacy: {
    metaTitle: 'Buraco Privacy Policy – Spitakolus AB',
    metaDescription: 'What data Buraco stores, why, where it is kept and how to delete it.',
    title: 'Privacy Policy',
    updated: 'Last updated 29 September 2026',
    intro: [
      'This policy explains what personal data the card game Buraco (the app and the game server) processes, why, where it is kept and what rights you have under the General Data Protection Regulation (GDPR).',
    ],
    sections: [
      {
        h: 'Who is responsible for your data?',
        p: [
          'Spitakolus AB, Swedish company registration number 559554-6101, is the data controller. You can reach us at support@spitakolus.com.',
        ],
      },
      {
        h: 'What data do we store?',
        p: ['You need an account to play. With your account we store:'],
        ul: [
          '**Email address** – so that you can log in and receive an email when you want to choose a new password.',
          '**Username** – shown to the other players at the table.',
          '**Password** – handled by Supabase Auth and stored only in hashed form. Nobody, not even we, can read it.',
          '**Statistics** – how many games you have played and won.',
          '**Premium** – whether you have bought Premium (no ads).',
          '**Time-out** – whether you have left a game in progress, so that the 10-minute wait before your next game can be counted.',
        ],
        after: [
          'There is no chat in the game. Games in progress – the cards, the moves and who is at the table – exist only in the game server’s memory and are not stored once the game is over. To send data to your phone, the game server needs technical data such as your IP address while you are connected.',
        ],
      },
      {
        h: 'Ads',
        p: [
          'If you do not have Premium, a banner ad is shown and a full-screen ad appears after each game. The ads come from **Google AdMob**. In the EU/EEA the app asks for your consent first. If you consent, Google may use your device’s advertising ID and your approximate location to show and measure ads. If you do not consent, ads are still shown, but they are not personalised.',
          'You can withdraw your consent at any time. If you cannot find the option in the app, email support@spitakolus.com. Read more about how Google uses data at [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).',
        ],
      },
      {
        h: 'Buying Premium',
        p: [
          'Premium is bought through Google Play or the App Store. Google or Apple takes the payment and handles your payment details. We only learn that the purchase has been made – never your card number or other payment details.',
        ],
      },
      {
        h: 'Why, and on what legal basis?',
        ul: [
          '**To provide the game** (account, login, username, games, statistics, time-out and Premium): necessary to perform our contract with you, i.e. the terms of use (Article 6(1)(b) GDPR).',
          '**Personalised ads**: your consent (Article 6(1)(a) GDPR).',
          '**Security and stopping cheating and abuse**: our legitimate interest in a safe and fair service (Article 6(1)(f) GDPR).',
        ],
      },
      {
        h: 'Where is the data kept, and who helps us?',
        ul: [
          '**Supabase** – accounts (email, username, hashed password, statistics, Premium and time-out), on servers in the EU (Stockholm, Sweden).',
          '**Railway** – the game server, in the EU region (Amsterdam, the Netherlands). Railway is a US company, so data may be transferred to the United States. The transfer is protected by the EU Standard Contractual Clauses.',
          '**Google AdMob** – ads, for players without Premium (see above).',
          '**Google Play and the Apple App Store** – Premium purchases. They handle the payment as independent controllers under their own terms.',
        ],
        after: [
          'Supabase and Railway process the data only on our behalf and may not use it for anything else. We never sell your data. Everything is sent encrypted.',
        ],
      },
      {
        h: 'How long do we keep the data?',
        p: [
          'Account data is kept for as long as you keep your account. Games in progress exist only while the game is being played. When you delete your account, the account, the username and the statistics are deleted immediately and permanently.',
        ],
      },
      {
        h: 'Deleting your account',
        p: ['You can delete your account in three ways:'],
        ul: [
          'In the app: profile menu → **Delete account**.',
          'On the web: [spitakolus.com/buraco/ta-bort-konto](/buraco/ta-bort-konto).',
          'By emailing support@spitakolus.com from the address your account uses.',
        ],
        after: ['Everything that belongs to the account – account, username and statistics – is deleted. This cannot be undone.'],
      },
      {
        h: 'Your rights',
        p: ['You have the right to:'],
        ul: [
          'know what data we hold about you and get a copy of it,',
          'have incorrect data corrected,',
          'have your data deleted,',
          'ask us to restrict processing, and object to processing based on our legitimate interest,',
          'receive data you have given us in a machine-readable format (data portability),',
          'withdraw your consent at any time.',
        ],
        after: ['Email support@spitakolus.com. We reply within one month.'],
      },
      {
        h: 'Complaints',
        p: [
          'If you think we handle your data incorrectly, please contact us first. You also have the right to lodge a complaint with the Swedish Authority for Privacy Protection (IMY), [www.imy.se](https://www.imy.se), or with the data protection authority in your own country.',
        ],
      },
      {
        h: 'Age',
        p: ['Buraco is for people aged 13 or older.'],
      },
      {
        h: 'Changes',
        p: ['If we change this policy we update the date at the top. For bigger changes we also tell you in the app.'],
      },
      {
        h: 'Contact',
        p: ['Spitakolus AB, company reg. no. 559554-6101. Email: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Buraco Terms of Use – Spitakolus AB',
    metaDescription: 'The rules for playing Buraco: fair play, usernames, Premium and more.',
    title: 'Terms of Use',
    updated: 'Last updated 29 September 2026',
    intro: [
      'These terms apply when you use the card game Buraco from Spitakolus AB (Swedish company reg. no. 559554-6101). By creating an account you accept these terms. Please also read our [privacy policy](/buraco/integritet).',
    ],
    sections: [
      {
        h: 'The service',
        p: [
          'Buraco is an online card game, two against two. If a seat is empty after 30 seconds, a computer player takes it. You can also practise against the computer. You choose a level (Beginner table or Master table) and a mode (Open, Closed or Strict).',
        ],
      },
      {
        h: 'Age and account',
        ul: [
          'You must be 13 or older.',
          'You need an account with an email address, a username and a password to play.',
          'Keep your password secret. You are responsible for what is done with your account.',
        ],
      },
      {
        h: 'Usernames',
        p: ['Your username is visible to other players. It must not:'],
        ul: [
          'be offensive, insulting, threatening, sexual or racist,',
          'pretend to be someone else, such as another player or Spitakolus,',
          'contain personal data, advertising or links.',
        ],
        after: ['We may change or remove a username that breaks these rules.'],
      },
      {
        h: 'Fair play',
        ul: [
          'Play to win with your own team – do not cooperate with your opponents or deliberately sabotage your partner.',
          'Do not cheat: no programs, bots or tools that play for you or give you an advantage.',
          'Do not exploit bugs. If you find one, please tell us.',
          'Do not try to access other people’s accounts, disrupt the game server or get around the ads or the time-out.',
        ],
      },
      {
        h: 'If you leave a game',
        p: [
          'If you leave a game in progress, you must wait **10 minutes** before you can start your next one. This applies to everyone, including Premium players, so that games are not spoiled for the others.',
        ],
      },
      {
        h: 'Ads and Premium',
        ul: [
          'Buraco is free and shows ads: a banner ad and a full-screen ad after each game.',
          '**Premium** removes all ads. It gives no other advantage in the game.',
          'Premium is bought through Google Play or the App Store. The price is shown there before you buy. Payment, receipts and refunds are handled by the store under its own terms.',
        ],
      },
      {
        h: 'No real money',
        p: [
          'Buraco is not gambling. You do not play for real money and cannot win money or prizes. Points and statistics in the game have no value outside the game.',
        ],
      },
      {
        h: 'Changes to the service',
        p: [
          'We keep developing the game and may change, add or remove features, pause the service or end it. If we change these terms we update the date at the top, and for bigger changes we tell you in the app.',
        ],
      },
      {
        h: 'Suspension',
        p: [
          'If you break these terms – for example by cheating, abusing the service or using an offensive username – we may warn you, suspend you for a period or delete your account.',
        ],
      },
      {
        h: 'Liability',
        p: [
          'We do our best to keep the game working, but we cannot promise that it will always be available or free of errors. These terms do not limit your statutory rights as a consumer.',
        ],
      },
      {
        h: 'Deleting your account',
        p: [
          'You can delete your account at any time in the app (profile menu → Delete account), [on the web](/buraco/ta-bort-konto) or by emailing support@spitakolus.com.',
        ],
      },
      {
        h: 'Law and contact',
        p: [
          'These terms are governed by Swedish law. As a consumer you keep the protection given to you by the mandatory law of your country. Questions? Email support@spitakolus.com.',
        ],
      },
    ],
  },
  del: {
    metaTitle: 'Delete your Buraco account – Spitakolus AB',
    metaDescription: 'How to delete your Buraco account and everything that belongs to it.',
    title: 'Delete your account',
    intro: 'Here you can delete your Buraco account immediately and permanently.',
    whatTitle: 'What is deleted',
    what: ['your account, email address and password,', 'your username,', 'your statistics (games played and won),', 'your Premium and any time-out.'],
    warning: 'This cannot be undone. If you have bought Premium, it is lost as well. If you have a subscription, cancel it in Google Play or the App Store.',
    appTitle: 'In the app',
    appText: 'Open Buraco, go to the profile menu and tap **Delete account**.',
    mailTitle: 'Can’t access your account?',
    mailText: 'Email support@spitakolus.com from the email address your account uses, and we will delete the account and everything that belongs to it.',
    form: {
      formTitle: 'Here on the web',
      loginLabel: 'Email or username',
      loginPlaceholder: 'name@example.com',
      passwordLabel: 'Password',
      confirmLabel: 'I understand that my account, my username and my statistics will be deleted permanently.',
      submit: 'Delete my account permanently',
      working: 'Deleting …',
      missingFields: 'Enter your email or username and your password.',
      needConfirm: 'Tick the box to confirm that you want to delete your account.',
      doneTitle: 'Your account has been deleted.',
      doneText: 'Your account, your username and your statistics have been deleted. Thank you for playing Buraco!',
    },
  },
  reset: {
    metaTitle: 'New password – Buraco',
    title: 'New password',
    form: {
      newPassword: 'New password',
      placeholder: `At least ${MIN} characters`,
      repeat: 'Repeat the password',
      save: 'Save new password',
      saving: 'Saving …',
      tooShort: `The password must be at least ${MIN} characters.`,
      mismatch: 'The passwords do not match. Type the same password in both fields.',
      noLink: 'Tap **Forgot your password?** when you log in to Buraco and we will email you a link to this page.',
      doneTitle: 'Done!',
      doneText: 'Your password has been changed. Open Buraco and log in with your new password.',
      notConfigured: 'Changing passwords is not possible right now. Please try again a little later.',
    },
  },
};

const pt: Texts = {
  common: {
    languageLabel: 'Idioma',
    about: 'Sobre o Buraco',
    privacy: 'Privacidade',
    terms: 'Termos',
    deleteAccount: 'Excluir conta',
    contact: 'Contato',
    company: 'O Buraco é feito pela Spitakolus AB (empresa sueca, nº de registro 559554-6101).',
  },
  home: {
    metaTitle: 'Buraco – o jogo de cartas em dupla, online',
    metaDescription: 'Buraco é o jogo de cartas em dupla, dois contra dois, online. Em breve no Google Play e na App Store.',
    badge: 'Em breve no Google Play e na App Store',
    lead: 'O clássico jogo de cartas em dupla, dois contra dois, online. Jogue junto com seu parceiro, baixe jogos e forme canastras antes dos adversários.',
    features: [
      {
        title: 'Dois contra dois',
        text: 'Você e seu parceiro contra outros dois jogadores. Se um lugar continuar vazio depois de 30 segundos, um jogador do computador ocupa o lugar – você nunca espera muito.',
      },
      {
        title: 'Treine contra o computador',
        text: 'Jogue contra o computador quando quiser aprender o jogo ou só jogar com calma.',
      },
      {
        title: 'Mesa de iniciantes e Mesa de mestres',
        text: 'Escolha a Mesa de iniciantes se você está começando, ou a Mesa de mestres se já tem experiência – e jogue com gente do seu nível.',
      },
      {
        title: 'Aberto, Fechado ou Rigoroso',
        text: 'Três modos que definem como funcionam o lixo e os jogos na mesa. Escolha o que você prefere.',
      },
    ],
    freeTitle: 'Grátis para jogar',
    freeText: 'O Buraco é grátis e tem anúncios. Com o **Premium** você não vê nenhum anúncio – fora isso, o jogo é igualzinho para todos. Sem dinheiro de verdade, sem prêmios.',
    accountTitle: 'Sua conta',
    accountItems: [
      'Você cria uma conta no app com e-mail, nome de usuário e senha. O nome de usuário aparece para os outros jogadores na mesa.',
      '**Esqueceu a senha?** Toque em “Esqueceu a senha?” no app e você recebe um e-mail com um link para escolher uma nova.',
      '**Excluir a conta:** no app, pelo menu do perfil → Excluir conta, ou [aqui na web](/buraco/ta-bort-konto).',
    ],
    linksTitle: 'Mais sobre o Buraco',
  },
  privacy: {
    metaTitle: 'Política de Privacidade do Buraco – Spitakolus AB',
    metaDescription: 'Quais dados o Buraco guarda, por quê, onde ficam e como excluí-los.',
    title: 'Política de Privacidade',
    updated: 'Atualizada em 29 de setembro de 2026',
    intro: [
      'Esta política explica quais dados pessoais o jogo de cartas Buraco (o app e o servidor do jogo) trata, por quê, onde ficam e quais direitos você tem pelo Regulamento Geral de Proteção de Dados da UE (GDPR) e pela LGPD.',
    ],
    sections: [
      {
        h: 'Quem é responsável pelos seus dados?',
        p: [
          'A Spitakolus AB, empresa sueca com número de registro 559554-6101, é a controladora dos dados. Fale com a gente pelo e-mail support@spitakolus.com.',
        ],
      },
      {
        h: 'Quais dados guardamos?',
        p: ['Você precisa de uma conta para jogar. Com a sua conta guardamos:'],
        ul: [
          '**E-mail** – para você entrar na conta e receber um e-mail quando quiser escolher uma nova senha.',
          '**Nome de usuário** – aparece para os outros jogadores na mesa.',
          '**Senha** – gerenciada pelo Supabase Auth e guardada só em forma de hash. Ninguém, nem nós, consegue lê-la.',
          '**Estatísticas** – quantas partidas você jogou e ganhou.',
          '**Premium** – se você comprou o Premium (sem anúncios).',
          '**Bloqueio de tempo** – se você saiu de uma partida em andamento, para contar os 10 minutos de espera até a próxima partida.',
        ],
        after: [
          'Não há chat no jogo. As partidas em andamento – as cartas, as jogadas e quem está na mesa – ficam só na memória do servidor do jogo e não são guardadas quando a partida termina. Para enviar dados ao seu celular, o servidor precisa de dados técnicos, como o seu endereço IP, enquanto você está conectado.',
        ],
      },
      {
        h: 'Anúncios',
        p: [
          'Se você não tem o Premium, aparece uma faixa de anúncio e um anúncio em tela cheia depois de cada partida. Os anúncios vêm do **Google AdMob**. Na UE/EEE o app pede o seu consentimento primeiro. Se você consentir, o Google pode usar o ID de publicidade do aparelho e a sua localização aproximada para mostrar e medir anúncios. Se você não consentir, os anúncios continuam aparecendo, mas não são personalizados.',
          'Você pode retirar o consentimento a qualquer momento. Se não encontrar a opção no app, envie um e-mail para support@spitakolus.com. Saiba mais sobre como o Google usa dados em [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).',
        ],
      },
      {
        h: 'Compra do Premium',
        p: [
          'O Premium é comprado pelo Google Play ou pela App Store. É o Google ou a Apple que faz a cobrança e cuida dos seus dados de pagamento. Nós só ficamos sabendo que a compra foi feita – nunca o número do seu cartão ou outros dados de pagamento.',
        ],
      },
      {
        h: 'Por quê e com qual base legal?',
        ul: [
          '**Para oferecer o jogo** (conta, login, nome de usuário, partidas, estatísticas, bloqueio de tempo e Premium): necessário para cumprir o contrato com você, ou seja, os termos de uso (artigo 6.1 b do GDPR).',
          '**Anúncios personalizados**: o seu consentimento (artigo 6.1 a do GDPR).',
          '**Segurança e combate a trapaças e abusos**: o nosso interesse legítimo em um serviço seguro e justo (artigo 6.1 f do GDPR).',
        ],
      },
      {
        h: 'Onde ficam os dados e quem nos ajuda?',
        ul: [
          '**Supabase** – contas (e-mail, nome de usuário, hash da senha, estatísticas, Premium e bloqueio de tempo), em servidores na UE (Estocolmo, Suécia).',
          '**Railway** – o servidor do jogo, na região da UE (Amsterdã, Holanda). A Railway é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE.',
          '**Google AdMob** – anúncios, para quem não tem o Premium (veja acima).',
          '**Google Play e Apple App Store** – compras do Premium. Eles cuidam do pagamento como controladores independentes, pelos próprios termos.',
        ],
        after: [
          'A Supabase e a Railway tratam os dados só em nosso nome e não podem usá-los para mais nada. Nunca vendemos os seus dados. Tudo é enviado de forma criptografada.',
        ],
      },
      {
        h: 'Por quanto tempo guardamos os dados?',
        p: [
          'Os dados da conta ficam guardados enquanto você tiver a conta. As partidas em andamento só existem enquanto a partida está sendo jogada. Quando você exclui a conta, a conta, o nome de usuário e as estatísticas são apagados na hora e para sempre.',
        ],
      },
      {
        h: 'Excluir a sua conta',
        p: ['Você pode excluir a sua conta de três formas:'],
        ul: [
          'No app: menu do perfil → **Excluir conta**.',
          'Na web: [spitakolus.com/buraco/ta-bort-konto](/buraco/ta-bort-konto).',
          'Enviando um e-mail para support@spitakolus.com a partir do endereço da sua conta.',
        ],
        after: ['Tudo o que pertence à conta – conta, nome de usuário e estatísticas – é apagado. Não dá para desfazer.'],
      },
      {
        h: 'Os seus direitos',
        p: ['Você tem direito de:'],
        ul: [
          'saber quais dados temos sobre você e receber uma cópia deles,',
          'corrigir dados incorretos,',
          'ter os seus dados apagados,',
          'pedir a limitação do tratamento e se opor ao tratamento baseado no nosso interesse legítimo,',
          'receber os dados que você nos deu em formato legível por máquina (portabilidade),',
          'retirar o seu consentimento a qualquer momento.',
        ],
        after: ['Envie um e-mail para support@spitakolus.com. Respondemos em até um mês.'],
      },
      {
        h: 'Reclamações',
        p: [
          'Se você achar que tratamos os seus dados de forma errada, fale com a gente primeiro. Você também pode reclamar à autoridade sueca de proteção de dados (IMY), [www.imy.se](https://www.imy.se), ou à autoridade de proteção de dados do seu país – no Brasil, a ANPD.',
        ],
      },
      {
        h: 'Idade',
        p: ['O Buraco é para pessoas com 13 anos ou mais.'],
      },
      {
        h: 'Mudanças',
        p: ['Se mudarmos esta política, atualizamos a data no topo. Em mudanças maiores, também avisamos no app.'],
      },
      {
        h: 'Contato',
        p: ['Spitakolus AB, nº de registro 559554-6101. E-mail: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Termos de Uso do Buraco – Spitakolus AB',
    metaDescription: 'As regras para jogar Buraco: jogo limpo, nomes de usuário, Premium e mais.',
    title: 'Termos de Uso',
    updated: 'Atualizados em 29 de setembro de 2026',
    intro: [
      'Estes termos valem quando você usa o jogo de cartas Buraco da Spitakolus AB (empresa sueca, nº de registro 559554-6101). Ao criar uma conta você aceita os termos. Leia também a nossa [política de privacidade](/buraco/integritet).',
    ],
    sections: [
      {
        h: 'O serviço',
        p: [
          'O Buraco é um jogo de cartas online, dois contra dois. Se um lugar ficar vazio por 30 segundos, um jogador do computador ocupa o lugar. Você também pode treinar contra o computador. Você escolhe o nível (Mesa de iniciantes ou Mesa de mestres) e o modo (Aberto, Fechado ou Rigoroso).',
        ],
      },
      {
        h: 'Idade e conta',
        ul: [
          'Você precisa ter 13 anos ou mais.',
          'Para jogar, você precisa de uma conta com e-mail, nome de usuário e senha.',
          'Mantenha a sua senha em segredo. Você é responsável pelo que é feito com a sua conta.',
        ],
      },
      {
        h: 'Nomes de usuário',
        p: ['O seu nome de usuário aparece para os outros jogadores. Ele não pode:'],
        ul: [
          'ser ofensivo, insultuoso, ameaçador, sexual ou racista,',
          'se passar por outra pessoa, por exemplo outro jogador ou a Spitakolus,',
          'conter dados pessoais, propaganda ou links.',
        ],
        after: ['Podemos mudar ou remover um nome de usuário que quebre essas regras.'],
      },
      {
        h: 'Jogo limpo',
        ul: [
          'Jogue para ganhar com a sua própria dupla – não combine jogadas com os adversários nem atrapalhe o seu parceiro de propósito.',
          'Não trapaceie: nada de programas, robôs ou ferramentas que joguem por você ou deem vantagem.',
          'Não se aproveite de erros do jogo. Se encontrar um, conte para a gente.',
          'Não tente entrar na conta de outras pessoas, atrapalhar o servidor do jogo nem burlar os anúncios ou o bloqueio de tempo.',
        ],
      },
      {
        h: 'Se você sair de uma partida',
        p: [
          'Se você sair de uma partida em andamento, precisa esperar **10 minutos** antes de começar a próxima. Isso vale para todos, inclusive quem tem o Premium, para que a partida não seja estragada para os outros.',
        ],
      },
      {
        h: 'Anúncios e Premium',
        ul: [
          'O Buraco é grátis e tem anúncios: uma faixa de anúncio e um anúncio em tela cheia depois de cada partida.',
          'O **Premium** remove todos os anúncios. Ele não dá nenhuma outra vantagem no jogo.',
          'O Premium é comprado pelo Google Play ou pela App Store. O preço aparece lá antes da compra. Pagamento, recibos e reembolsos são feitos pela loja, pelos termos dela.',
        ],
      },
      {
        h: 'Sem dinheiro de verdade',
        p: [
          'O Buraco não é jogo de azar. Você não joga valendo dinheiro de verdade e não pode ganhar dinheiro nem prêmios. Pontos e estatísticas do jogo não têm valor fora do jogo.',
        ],
      },
      {
        h: 'Mudanças no serviço',
        p: [
          'Estamos sempre desenvolvendo o jogo e podemos mudar, incluir ou remover funções, pausar o serviço ou encerrá-lo. Se mudarmos os termos, atualizamos a data no topo, e em mudanças maiores avisamos no app.',
        ],
      },
      {
        h: 'Suspensão',
        p: [
          'Se você quebrar os termos – por exemplo, trapaceando, abusando do serviço ou usando um nome de usuário ofensivo – podemos te avisar, suspender a conta por um tempo ou excluí-la.',
        ],
      },
      {
        h: 'Responsabilidade',
        p: [
          'Fazemos o possível para o jogo funcionar, mas não podemos prometer que ele estará sempre disponível ou sem erros. Estes termos não limitam os direitos que você tem como consumidor por lei.',
        ],
      },
      {
        h: 'Excluir a sua conta',
        p: [
          'Você pode excluir a sua conta quando quiser no app (menu do perfil → Excluir conta), [na web](/buraco/ta-bort-konto) ou enviando um e-mail para support@spitakolus.com.',
        ],
      },
      {
        h: 'Lei e contato',
        p: [
          'Estes termos seguem a lei sueca. Como consumidor, você mantém a proteção que a lei obrigatória do seu país lhe garante. Dúvidas? Envie um e-mail para support@spitakolus.com.',
        ],
      },
    ],
  },
  del: {
    metaTitle: 'Excluir a sua conta do Buraco – Spitakolus AB',
    metaDescription: 'Como excluir a sua conta do Buraco e tudo o que pertence a ela.',
    title: 'Excluir a sua conta',
    intro: 'Aqui você pode excluir a sua conta do Buraco na hora e para sempre.',
    whatTitle: 'O que é apagado',
    what: ['a sua conta, o e-mail e a senha,', 'o seu nome de usuário,', 'as suas estatísticas (partidas jogadas e ganhas),', 'o seu Premium e um eventual bloqueio de tempo.'],
    warning: 'Não dá para desfazer. Se você comprou o Premium, ele também é perdido. Se tiver uma assinatura, cancele-a no Google Play ou na App Store.',
    appTitle: 'No app',
    appText: 'Abra o Buraco, vá ao menu do perfil e toque em **Excluir conta**.',
    mailTitle: 'Não consegue acessar a conta?',
    mailText: 'Envie um e-mail para support@spitakolus.com a partir do endereço da sua conta, e nós excluímos a conta e tudo o que pertence a ela.',
    form: {
      formTitle: 'Aqui na web',
      loginLabel: 'E-mail ou nome de usuário',
      loginPlaceholder: 'nome@exemplo.com.br',
      passwordLabel: 'Senha',
      confirmLabel: 'Entendo que a minha conta, o meu nome de usuário e as minhas estatísticas serão apagados para sempre.',
      submit: 'Excluir minha conta para sempre',
      working: 'Excluindo …',
      missingFields: 'Digite o seu e-mail ou nome de usuário e a sua senha.',
      needConfirm: 'Marque a caixa para confirmar que você quer excluir a conta.',
      doneTitle: 'A conta foi excluída.',
      doneText: 'A sua conta, o seu nome de usuário e as suas estatísticas foram apagados. Obrigado por jogar Buraco!',
    },
  },
  reset: {
    metaTitle: 'Nova senha – Buraco',
    title: 'Nova senha',
    form: {
      newPassword: 'Nova senha',
      placeholder: `Pelo menos ${MIN} caracteres`,
      repeat: 'Repita a senha',
      save: 'Salvar nova senha',
      saving: 'Salvando …',
      tooShort: `A senha deve ter pelo menos ${MIN} caracteres.`,
      mismatch: 'As senhas não são iguais. Digite a mesma senha nos dois campos.',
      noLink: 'Toque em **Esqueceu a senha?** ao entrar no Buraco e você recebe um e-mail com um link para esta página.',
      doneTitle: 'Pronto!',
      doneText: 'A sua senha foi trocada. Abra o Buraco e entre com a nova senha.',
      notConfigured: 'Não é possível trocar a senha agora. Tente de novo mais tarde.',
    },
  },
};

export const TEXTS: Record<Lang, Texts> = { sv, en, pt };

export function t(lang: Lang): Texts {
  return TEXTS[lang];
}
