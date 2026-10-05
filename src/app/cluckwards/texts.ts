import type { Lang } from './lang';

// Alla texter för sidorna om CLUCKWARDS! (på svenska KACKLÄNGES!) på svenska och engelska.
// Enkel märkning: **fet**, [länktext](/cluckwards/...) eller [länktext](https://...), och e-postadresser blir länkar.
//
// Integritetspolicyn bygger på hur spelet faktiskt fungerar (honspelet, docs/REGLER_UNDERLAG.md):
// inget konto, ingen server, ingen analys, ingen reklam, inga köp, och bara en sparfil på telefonen.
// Ändras något av det måste texten här ändras innan den versionen av spelet släpps.

export const SUPPORT_EMAIL = 'support@spitakolus.com';

export type Block = { h: string; p?: string[]; ul?: string[]; after?: string[] };

export type LegalTexts = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  intro: string[];
  sections: Block[];
};

export type Texts = {
  name: string;
  common: { languageLabel: string; about: string; privacy: string; terms: string; contact: string; company: string };
  home: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    otherName: string;
    tagline: string;
    lead: string;
    stores: string;
    factsTitle: string;
    facts: string[];
    supportTitle: string;
    support: string;
    legal: string;
  };
  privacy: LegalTexts;
  terms: LegalTexts;
};

const sv: Texts = {
  name: 'KACKLÄNGES!',
  common: {
    languageLabel: 'Språk',
    about: 'Om spelet',
    privacy: 'Integritetspolicy',
    terms: 'Villkor',
    contact: 'Kontakt',
    company: 'KACKLÄNGES! (CLUCKWARDS!) görs av Spitakolus AB (org.nr 559554-6101).',
  },
  home: {
    metaTitle: 'KACKLÄNGES! (CLUCKWARDS!) – Spitakolus AB',
    metaDescription: 'Fel håll. Full fart. Ägg iväg! En höna som flyger baklänges och skjuter ägg. Kommer snart till App Store och Google Play.',
    badge: 'Under utveckling',
    otherName: 'Heter CLUCKWARDS! på engelska',
    tagline: 'Fel håll. Full fart. Ägg iväg!',
    lead: 'En höna flyger baklänges över bondgården i full fart och skjuter ägg på allt som står i vägen.',
    stores: 'Spelet kommer snart till App Store och Google Play.',
    factsTitle: 'Bra att veta',
    facts: ['Inget konto och ingen inloggning.', 'Ingen reklam och inga köp.', 'Ditt bästa resultat sparas bara på din egen telefon.'],
    supportTitle: 'Frågor?',
    support: 'Mejla support@spitakolus.com.',
    legal: 'Läs [integritetspolicyn](/cluckwards/integritet) och [villkoren](/cluckwards/villkor).',
  },
  privacy: {
    metaTitle: 'Integritetspolicy för KACKLÄNGES! (CLUCKWARDS!) – Spitakolus AB',
    metaDescription: 'KACKLÄNGES! samlar inte in några uppgifter om dig. Inget konto, ingen reklam, ingen analys och inga köp.',
    title: 'Integritetspolicy',
    updated: 'Senast ändrad 5 oktober 2026',
    intro: [
      'KACKLÄNGES! (CLUCKWARDS! på engelska) görs av Spitakolus AB (org.nr 559554-6101).',
      '**Vi samlar inte in några uppgifter om dig.**',
    ],
    sections: [
      {
        h: 'Kort sagt',
        ul: [
          'Spelet har inget konto och ingen inloggning.',
          'Spelet har ingen reklam, ingen analys eller statistik och inga köp.',
          'Spelet skickar ingenting från telefonen, varken till oss eller till någon annan.',
        ],
      },
      {
        h: 'Det här sparas på din telefon',
        p: ['Spelet sparar några få saker i en fil på din egen telefon, så att du kan fortsätta där du var:'],
        ul: [
          'ditt bästa resultat och din bästa combo',
          'hur långt du har kommit (den högsta checkpoint du har nått)',
          'om du har sett introduktionen och om ljudet är på eller av.',
        ],
        after: ['Filen stannar på telefonen. Vi kan inte se den, och den skickas inte till oss.'],
      },
      {
        h: 'Hur länge sparas det?',
        p: [
          'Tills du tar bort spelet från telefonen. Då försvinner filen. Om du säkerhetskopierar telefonen (till exempel med iCloud) kan filen följa med i din egen säkerhetskopia. Den hamnar aldrig hos oss.',
        ],
      },
      {
        h: 'Apple och Google',
        p: [
          'App Store och Google Play kan samla in uppgifter enligt sina egna villkor, till exempel om nedladdningar och, om du har tillåtit det i telefonens inställningar, kraschrapporter. Vi kan få se sammanställd statistik och kraschrapporter utan namn eller kontaktuppgifter.',
        ],
      },
      {
        h: 'Barn',
        p: ['Spelet passar alla åldrar. Eftersom vi inte samlar in några uppgifter samlar vi inte heller in något om barn.'],
      },
      {
        h: 'Innan något ändras',
        p: [
          'Spelet har i dag ingen reklam, ingen analys och inga köp. **Om vi någon gång lägger till något av det uppdaterar vi den här policyn först.** Den nya texten finns här och i butikerna innan den versionen av spelet släpps, och vi frågar om lov där lagen kräver det.',
        ],
      },
      {
        h: 'Dina rättigheter',
        p: [
          'Eftersom vi inte har några uppgifter om dig finns det inget hos oss att visa, rätta eller ta bort. Vill du ta bort det som sparats på telefonen tar du bort spelet.',
          'Du kan klaga hos Integritetsskyddsmyndigheten ([imy.se](https://www.imy.se)).',
        ],
      },
      {
        h: 'Kontakt',
        p: ['Spitakolus AB, org.nr 559554-6101. E-post: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Villkor för KACKLÄNGES! (CLUCKWARDS!) – Spitakolus AB',
    metaDescription: 'Villkoren när du spelar KACKLÄNGES!. Inget konto och inga köp.',
    title: 'Villkor',
    updated: 'Senast ändrade 5 oktober 2026',
    intro: [
      'KACKLÄNGES! (CLUCKWARDS! på engelska) görs av Spitakolus AB (org.nr 559554-6101). När du laddar ner och spelar spelet godkänner du de här villkoren. Läs också [integritetspolicyn](/cluckwards/integritet).',
    ],
    sections: [
      {
        h: 'Spelet',
        p: [
          'Spelet är gratis. Det har inget konto, ingen reklam och inga köp, och du behöver inte internet för att spela.',
        ],
      },
      {
        h: 'Ditt sparade spel',
        p: [
          'Ditt bästa resultat och hur långt du har kommit sparas bara på din telefon. Tar du bort spelet eller byter telefon kan det försvinna, och vi kan inte få tillbaka det.',
        ],
      },
      {
        h: 'Det här får du inte göra',
        ul: [
          'Kopiera, sälja eller sprida spelet, eller ändrade versioner av det.',
          'Ändra i spelet för att lura andra eller ge sken av att något kommer från oss.',
        ],
      },
      {
        h: 'App Store och Google Play',
        p: ['Du laddar ner spelet från App Store eller Google Play. Deras villkor gäller också.'],
      },
      {
        h: 'Spelet kan ändras',
        p: [
          'Vi gör vårt bästa för att spelet ska fungera, men vi kan inte lova att det alltid gör det. Spelet kan ändras, och funktioner kan läggas till eller tas bort. Om vi någon gång lägger till köp eller reklam uppdaterar vi villkoren och integritetspolicyn innan den versionen släpps.',
        ],
      },
      {
        h: 'Rättigheter',
        p: ['Spelet och allt i det, till exempel hönan, bilderna, ljuden och musiken, tillhör Spitakolus AB.'],
      },
      {
        h: 'Kontakt',
        p: ['Frågor? Mejla support@spitakolus.com.'],
      },
    ],
  },
};

const en: Texts = {
  name: 'CLUCKWARDS!',
  common: {
    languageLabel: 'Language',
    about: 'About the game',
    privacy: 'Privacy policy',
    terms: 'Terms',
    contact: 'Contact',
    company: 'CLUCKWARDS! is made by Spitakolus AB (Swedish company reg. no. 559554-6101).',
  },
  home: {
    metaTitle: 'CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'Wrong way. Full speed. Eggs away. A chicken that flies backwards and fires eggs. Coming soon to the App Store and Google Play.',
    badge: 'In development',
    otherName: 'Called KACKLÄNGES! in Swedish',
    tagline: 'Wrong way. Full speed. Eggs away.',
    lead: 'A chicken flies backwards across the farm at full speed and fires eggs at everything in her way.',
    stores: 'The game is coming soon to the App Store and Google Play.',
    factsTitle: 'Good to know',
    facts: ['No account and no sign-in.', 'No ads and no purchases.', 'Your best score is only saved on your own phone.'],
    supportTitle: 'Questions?',
    support: 'Email support@spitakolus.com.',
    legal: 'Read the [privacy policy](/cluckwards/integritet#english) and the [terms](/cluckwards/villkor).',
  },
  privacy: {
    metaTitle: 'Privacy Policy for CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'CLUCKWARDS! does not collect any information about you. No account, no ads, no analytics and no purchases.',
    title: 'Privacy Policy',
    updated: 'Last updated 5 October 2026',
    intro: [
      'CLUCKWARDS! (KACKLÄNGES! in Swedish) is made by Spitakolus AB (Swedish company reg. no. 559554-6101).',
      '**We do not collect any information about you.**',
    ],
    sections: [
      {
        h: 'In short',
        ul: [
          'The game has no account and no sign-in.',
          'The game has no ads, no analytics or statistics, and no purchases.',
          'The game does not send anything from your phone, to us or to anyone else.',
        ],
      },
      {
        h: 'What is saved on your phone',
        p: ['The game saves a few things in a file on your own phone, so that you can carry on where you left off:'],
        ul: [
          'your best score and your best combo',
          'how far you have got (the highest checkpoint you have reached)',
          'whether you have seen the introduction, and whether the sound is on or off.',
        ],
        after: ['The file stays on your phone. We cannot see it, and it is not sent to us.'],
      },
      {
        h: 'How long is it kept?',
        p: [
          'Until you delete the game from your phone. Then the file is gone. If you back up your phone (for example with iCloud), the file may be included in your own backup. It never reaches us.',
        ],
      },
      {
        h: 'Apple and Google',
        p: [
          'The App Store and Google Play may collect information under their own terms, for example about downloads and, if you have allowed it in your phone’s settings, crash reports. We may see aggregated statistics and crash reports without names or contact details.',
        ],
      },
      {
        h: 'Children',
        p: ['The game is suitable for all ages. Because we do not collect any information, we do not collect any information from children either.'],
      },
      {
        h: 'Before anything changes',
        p: [
          'Today the game has no ads, no analytics and no purchases. **If we ever add any of these, we will update this policy first.** The new policy will be here and in the store listings before that version of the game is released, and we will ask for permission where the law requires it.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'Because we hold no information about you, there is nothing on our side to show, correct or delete. To remove what is saved on your phone, delete the game.',
          'You can complain to the Swedish Authority for Privacy Protection ([imy.se](https://www.imy.se/en/)) or to the data protection authority where you live.',
        ],
      },
      {
        h: 'Contact',
        p: ['Spitakolus AB, Swedish company reg. no. 559554-6101. Email: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Terms for CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'The terms for playing CLUCKWARDS!. No account and no purchases.',
    title: 'Terms',
    updated: 'Last updated 5 October 2026',
    intro: [
      'CLUCKWARDS! (KACKLÄNGES! in Swedish) is made by Spitakolus AB (Swedish company reg. no. 559554-6101). By downloading and playing the game you accept these terms. Please also read the [privacy policy](/cluckwards/integritet#english).',
    ],
    sections: [
      {
        h: 'The game',
        p: ['The game is free. It has no account, no ads and no purchases, and you do not need the internet to play.'],
      },
      {
        h: 'Your saved game',
        p: [
          'Your best score and how far you have got are only saved on your phone. If you delete the game or change phones, they may be lost, and we cannot get them back.',
        ],
      },
      {
        h: 'What you may not do',
        ul: [
          'Copy, sell or distribute the game, or modified versions of it.',
          'Modify the game to trick others or to make something look as if it comes from us.',
        ],
      },
      {
        h: 'The App Store and Google Play',
        p: ['You download the game from the App Store or Google Play. Their terms apply too.'],
      },
      {
        h: 'The game may change',
        p: [
          'We do our best to make the game work, but we cannot promise that it always will. The game may change, and features may be added or removed. If we ever add purchases or ads, we will update these terms and the privacy policy before that version is released.',
        ],
      },
      {
        h: 'Rights',
        p: ['The game and everything in it, such as the chicken, the pictures, the sounds and the music, belong to Spitakolus AB.'],
      },
      {
        h: 'Contact',
        p: ['Questions? Email support@spitakolus.com.'],
      },
    ],
  },
};

export function t(lang: Lang): Texts {
  return lang === 'sv' ? sv : en;
}
