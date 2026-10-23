import type { Lang } from './lang';

// Alla texter för sidorna om CLUCKWARDS! (på svenska KACKLÄNGES!) på svenska, engelska och portugisiska (Brasilien).
// Enkel märkning: **fet**, [länktext](/cluckwards/...) eller [länktext](https://...), och e-postadresser blir länkar.
//
// Integritetspolicyn och villkoren är juristens texter (9 okt 2026, via Raquel) på svenska, med trogna
// översättningar till engelska och portugisiska. Policyn beskriver spelet som det blir vid lanseringen (honspelet H-022, H-023, H-025):
// inget konto och ingen egen server, sparfilen på telefonen, frivillig barnsäker reklam via Google AdMob
// (ingen anpassad reklam, inget annonserings-id) och köp av kosmetik via App Store/Google Play och RevenueCat.
// Den ska stämma med Google Plays Datasäkerhet och Apples App Privacy. Ändras något av det måste texten
// här ändras innan den versionen av spelet släpps.

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
    metaDescription: 'Fel håll. Full fart. Ägg iväg! En höna som flyger baklänges och skjuter ägg. Finns på Google Play och kommer snart till App Store.',
    badge: 'Under utveckling',
    otherName: 'Heter CLUCKWARDS! på engelska',
    tagline: 'Fel håll. Full fart. Ägg iväg!',
    lead: 'En höna flyger baklänges över bondgården i full fart och skjuter ägg på allt som står i vägen.',
    stores: 'Spelet finns på Google Play och kommer snart till App Store.',
    factsTitle: 'Bra att veta',
    facts: [
      'Gratis att spela. Inget konto och ingen inloggning.',
      'Reklam bara om du själv väljer att titta, för extra majs.',
      'Roliga kläder till hönan kan köpas, men allt i spelet går att klara utan köp.',
      'Ditt spel sparas på din egen telefon.',
    ],
    supportTitle: 'Frågor?',
    support: 'Mejla support@spitakolus.com.',
    legal: 'Läs [integritetspolicyn](/cluckwards/integritet) och [villkoren](/cluckwards/villkor).',
  },
  privacy: {
    metaTitle: "Integritetspolicy för KACKLÄNGES! (CLUCKWARDS!) – Spitakolus AB",
    metaDescription: "Så hanterar KACKLÄNGES! uppgifter. Inget konto, frivillig barnsäker reklam och köp via App Store och Google Play.",
    title: "Integritetspolicy",
    updated: "Senast uppdaterad 9 oktober 2026",
    intro: [
      "KACKLÄNGES! (CLUCKWARDS! på engelska) görs av Spitakolus AB, org.nr 559554-6101. Spitakolus AB är personuppgiftsansvarigt för den behandling som beskrivs här.",
      "Spelet har inget användarkonto och ingen egen spelserver. Vi ber inte om ditt namn eller din e-postadress när du spelar och kan normalt inte koppla spelets tekniska uppgifter till dig som person.",
    ],
    sections: [
      {
        h: "Kort sagt",
        ul: [
          "Ditt spel sparas på din egen telefon.",
          "Reklam visas bara om du själv väljer att titta.",
          "Reklamen är inte personanpassad och annonsförfrågningarna behandlas som riktade till barn.",
          "Köp görs genom App Store eller Google Play.",
          "Vi säljer inte personuppgifter.",
        ],
      },
      {
        h: "Det här sparas på din telefon",
        p: [
          "Spelet sparar följande lokalt på din telefon:",
        ],
        ul: [
          "ditt bästa resultat, din bästa combo och den högsta checkpoint du har nått",
          "dina majskorn, vilka kläder och saker hönan har och vad hon har på sig",
          "hur långt du har kommit i utmaningarna",
          "hur många belönade annonser du har sett under dagen, så att gränsen på högst fyra per dag kan följas",
          "om du har sett introduktionen",
          "om ljudet är på eller av.",
        ],
        after: [
          "Vi har inte tillgång till den lokala spelfilen och den skickas inte till Spitakolus.",
          "Om du säkerhetskopierar telefonen kan filen ingå i din säkerhetskopia hos exempelvis Apple eller Google enligt dina inställningar och deras regler.",
        ],
      },
      {
        h: "Reklam från Google AdMob",
        p: [
          "Efter en runda kan du välja att titta på en kort reklamfilm och få extra majskorn. Reklamfilmen startar bara om du själv trycker på knappen.",
          "Reklamen tillhandahålls av Google AdMob. Vi har ställt in annonsförfrågningarna så att de behandlas som riktade till barn. Det innebär att annonserna inte är personanpassade och att telefonens annonserings-id inte används för annonsförfrågningarna.",
          "När Google förbereder eller visar en annons kan Google ändå få vissa tekniska uppgifter, till exempel:",
        ],
        ul: [
          "IP-adress, som kan visa ett ungefärligt geografiskt område",
          "uppgifter om telefonen och appen, exempelvis modell, språk, operativsystem och appversion",
          "begränsade tekniska identifierare som behövs för annonstjänsten",
          "uppgifter om annonsen laddades, visades eller spelades färdigt",
          "diagnostik och felinformation.",
        ],
        after: [
          "Uppgifterna används för att visa annonsen, kontrollera att spelaren ska få sin belöning, räkna annonsvisningar och motverka fusk.",
          "Där lagen kräver det frågar spelet om lov innan relevant information lagras eller läses på telefonen. Spelet följer det val du gör. Du kan alltid avstå från reklam och fortsätta spela utan annonsbelöningen.",
          "Google behandlar också uppgifter enligt sina egna regler. Läs mer i [Så använder Google information från appar som använder Googles tjänster](https://policies.google.com/technologies/partner-sites?hl=sv).",
        ],
      },
      {
        h: "Köp genom App Store, Google Play och RevenueCat",
        p: [
          "Du kan köpa kläder och andra saker till hönan. Betalningen görs genom App Store eller Google Play. Spitakolus får inte dina kortuppgifter och får normalt inte heller ditt namn eller din e-postadress från butiken.",
          "För att kontrollera och återställa köp använder vi RevenueCat. RevenueCat får en slumpmässig identifierare för appinstallationen, uppgifter om genomförda köp och tekniska uppgifter som behövs för att tjänsten ska fungera. RevenueCat får inte dina kortuppgifter från oss.",
          "RevenueCat behandlar uppgifter i USA och skyddar överföringen, när det behövs, genom EU:s standardavtalsklausuler. Läs mer i [RevenueCats integritetspolicy](https://www.revenuecat.com/privacy/).",
        ],
      },
      {
        h: "App Store och Google Play",
        p: [
          "Apple och Google kan behandla uppgifter enligt sina egna villkor när du laddar ned spelet, gör ett köp eller använder deras tjänster.",
          "Vi kan få sammanställd statistik, transaktionsuppgifter som behövs för att kontrollera köp och tekniska kraschrapporter. Sådana uppgifter innehåller normalt inte ditt namn eller dina kortuppgifter.",
        ],
      },
      {
        h: "När du kontaktar oss",
        p: [
          "Om du mejlar vår support behandlar vi din e-postadress, ditt meddelande och det du själv väljer att skicka med.",
          "Uppgifterna används för att besvara frågan och lösa eventuella problem med spelet eller ett köp. Vi sparar uppgifterna så länge de behövs för att hantera ärendet och därefter under en begränsad tid om det behövs för uppföljning eller rättsliga krav.",
          "Skicka inte känsliga personuppgifter eller andra uppgifter som inte behövs för supportärendet.",
        ],
      },
      {
        h: "Hur länge sparas uppgifterna?",
        p: [
          "Spelfilen på telefonen sparas tills du tar bort spelet eller rensar dess lagrade data.",
          "RevenueCat sparar köpidentifieraren och köpuppgifterna så länge de behövs för att kontrollera och återställa köp. Google sparar annonsuppgifter enligt sina egna lagringsregler.",
          "Supportuppgifter sparas så länge de behövs för att hantera och följa upp ärendet eller rättsliga krav.",
        ],
      },
      {
        h: "Barn",
        p: [
          "Spelet passar alla åldrar och har inget konto, ingen chatt och inget sätt att dela innehåll med andra spelare. Vi ber inte spelaren att lämna namn, e-postadress eller födelsedatum.",
          "Annonsförfrågningarna behandlas som riktade till barn och annonserna är inte personanpassade.",
          "Köp kan begränsas genom telefonens föräldrakontroller, exempelvis Be om köp hos Apple eller Family Link hos Google.",
        ],
      },
      {
        h: "Varför uppgifterna får behandlas",
        p: [
          "Köpuppgifter behandlas för att genomföra, kontrollera och återställa köp.",
          "Tekniska annonsuppgifter, säkerhetsuppgifter och supportuppgifter behandlas eftersom vi har ett berättigat intresse av att finansiera, skydda och ge support för spelet. När lagen kräver samtycke använder vi samtycke i stället.",
          "Google och RevenueCat kan behandla uppgifter utanför EU och EES. Skyddet för sådana överföringar beskrivs i deras länkade integritetspolicyer.",
        ],
      },
      {
        h: "Dina rättigheter",
        p: [
          "Beroende på omständigheterna kan du ha rätt att:",
        ],
        ul: [
          "få veta vilka personuppgifter vi behandlar om dig",
          "få felaktiga uppgifter rättade",
          "begära att uppgifter raderas",
          "begära att behandlingen begränsas",
          "invända mot behandling som bygger på berättigat intresse",
          "få ut vissa uppgifter i ett användbart format",
          "återkalla ett samtycke.",
        ],
        after: [
          "Eftersom spelet saknar konto kan vi behöva hjälp av dig för att hitta rätt uppgifter.",
          "Lokala speluppgifter som vi inte har tillgång till kan du radera genom att ta bort spelet eller rensa dess lagrade data.",
          "Mejla support@spitakolus.com om du vill använda dina rättigheter.",
          "Du kan också lämna klagomål till Integritetsskyddsmyndigheten, [imy.se](https://www.imy.se/).",
        ],
      },
      {
        h: "Om policyn ändras",
        p: [
          "Om spelets funktioner eller behandlingen av personuppgifter förändras uppdaterar vi policyn och datumet ovan.",
          "Vid en större förändring informerar vi på lämpligt sätt och ber om nytt samtycke där lagen kräver det.",
        ],
      },
      {
        h: "Kontakt",
        p: [
          "Spitakolus AB",
          "Organisationsnummer: 559554-6101",
          "Momsregistreringsnummer: SE559554610101",
          "Adress: Svängrumsgatan 46, 421 71 Västra Frölunda, Sverige",
          "E-post: support@spitakolus.com",
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Villkor för KACKLÄNGES! (CLUCKWARDS!) – Spitakolus AB",
    metaDescription: "Villkoren när du spelar KACKLÄNGES!. Gratis, inget konto, frivillig reklam och köp via butikerna.",
    title: "Användarvillkor",
    updated: "Senast uppdaterade 9 oktober 2026",
    intro: [
      "KACKLÄNGES! (CLUCKWARDS! på engelska) tillhandahålls av Spitakolus AB, org.nr 559554-6101.",
      "Genom att ladda ned eller använda spelet godkänner du dessa villkor. Om du inte godkänner villkoren ska du inte använda spelet.",
      "Läs också vår [integritetspolicy](/cluckwards/integritet).",
    ],
    sections: [
      {
        h: "Spelet och din rätt att använda det",
        p: [
          "Spelet är gratis och har inget användarkonto. Du kan välja att titta på reklam för att få extra majskorn, men du måste aldrig titta på reklam för att spela.",
          "Du får en personlig, begränsad och icke överlåtbar rätt att använda spelet för privat och icke-kommersiellt bruk.",
          "Spelet säljs inte till dig och du får ingen äganderätt till spelet eller dess innehåll.",
        ],
      },
      {
        h: "Barn och köp",
        p: [
          "Barn får spela spelet. Köp som görs av ett barn måste vara godkända av en vårdnadshavare när lagen kräver det.",
          "Föräldrar och vårdnadshavare kan använda telefonens inställningar, exempelvis Be om köp hos Apple eller Family Link hos Google, för att begränsa köp.",
        ],
      },
      {
        h: "Majskorn",
        p: [
          "Majskorn är spelets egen valuta och tjänas genom att spela eller genom att frivilligt titta på belönad reklam.",
          "Majskorn:",
        ],
        ul: [
          "kan inte köpas för riktiga pengar",
          "kan inte säljas eller överlåtas",
          "kan inte växlas till riktiga pengar",
          "har inget värde utanför spelet.",
        ],
        after: [
          "Majskorn som har tjänats i spelet är inte ett köpt föremål och kan försvinna om spelets lokala data raderas.",
        ],
      },
      {
        h: "Köp",
        p: [
          "Kläder och andra saker till hönan kan köpas genom App Store eller Google Play.",
          "De köpta föremålen är kosmetiska och gör det inte lättare att vinna. Ett köp ger dig rätt att använda föremålet i spelet men innebär inte att du får äganderätt till spelets bilder, figurer eller andra tillgångar.",
          "Betalningen behandlas av App Store eller Google Play. Butikens betalningsvillkor gäller tillsammans med dessa villkor.",
          "Begäran om återbetalning görs normalt genom den butik där köpet genomfördes. Detta begränsar inte de rättigheter du har enligt tvingande konsumentlagstiftning. Du kan även kontakta oss om det uppstår problem med ett köp.",
          "Köp kan normalt återställas med samma Apple- eller Google-konto och på samma plattform. Eftersom spelet saknar eget konto kan vi inte lova att köp kan flyttas mellan iPhone och Android.",
        ],
      },
      {
        h: "Ditt sparade spel",
        p: [
          "Ditt resultat, dina majskorn, dina inställningar och hur långt du har kommit sparas lokalt på telefonen.",
          "Om du tar bort spelet, rensar dess data eller byter telefon kan den lokala spelinformationen försvinna. Spitakolus har ingen kopia och kan därför inte återskapa den.",
          "Köpta föremål kan normalt återställas genom butikens funktion för att återställa köp. Majskorn och andra saker som har tjänats genom att spela kan inte alltid återställas.",
        ],
      },
      {
        h: "Det här får du inte göra",
        p: [
          "Du får inte:",
        ],
        ul: [
          "kopiera, sälja, hyra ut eller sprida spelet eller ändrade versioner av det",
          "försöka kringgå spelets köp-, reklam- eller säkerhetsfunktioner",
          "ändra spelet eller dess sparade data i syfte att fuska",
          "använda spelet eller dess innehåll i kommersiellt syfte utan vårt tillstånd",
          "försöka komma åt spelets kod på ett sätt som inte är tillåtet enligt lag",
          "använda spelet på ett olagligt sätt",
          "ge sken av att något kommer från Spitakolus när det inte gör det.",
        ],
      },
      {
        h: "App Store och Google Play",
        p: [
          "När du laddar ned spelet genom App Store eller Google Play gäller även den aktuella butikens villkor.",
          "Apple och Google ansvarar för sina respektive butiker och betalningssystem. Spitakolus ansvarar för själva spelet och för support som gäller spelet.",
        ],
      },
      {
        h: "Ändringar och tillgänglighet",
        p: [
          "Vi arbetar för att spelet ska fungera, men kan inte lova att det alltid är felfritt eller fungerar på alla telefoner och framtida operativsystem.",
          "Vi kan uppdatera spelet och ändra, lägga till eller ta bort funktioner av tekniska, säkerhetsmässiga, juridiska eller spelmässiga skäl.",
          "Vi kan även behöva sluta stödja spelet eller vissa äldre enheter. Om en förändring har betydelse för köpt innehåll tar vi hänsyn till tillämplig konsumentlagstiftning.",
          "Villkoren kan uppdateras när spelet eller lagstiftningen förändras. Datumet högst upp visar när de senast ändrades. Vid en större förändring informerar vi på lämpligt sätt.",
        ],
      },
      {
        h: "Rättigheter till spelet",
        p: [
          "Spelet och dess innehåll, inklusive kod, hönan, grafik, animationer, texter, ljud och musik, ägs av eller används med tillstånd av Spitakolus AB.",
          "Ingenting i dessa villkor överför någon immateriell rättighet till dig utöver den begränsade rätten att använda spelet.",
        ],
      },
      {
        h: "Ansvar och konsumenträttigheter",
        p: [
          "Ingenting i dessa villkor begränsar rättigheter som du har enligt tvingande konsumentlagstiftning.",
          "Spitakolus ansvarar i övrigt i den omfattning som följer av tillämplig lag. Vi ansvarar inte för problem som orsakas av App Store, Google Play, din internetanslutning, din telefon eller ändringar som du själv har gjort i enheten eller spelet.",
        ],
      },
      {
        h: "Tillämplig lag och tvister",
        p: [
          "Svensk lag gäller för villkoren. Om du är konsument i ett annat land påverkar detta inte det tvingande konsumentskydd som gäller där du bor.",
          "Om ett problem uppstår ber vi dig först kontakta oss så att vi kan försöka lösa det.",
          "En svensk konsument kan även vända sig till Allmänna reklamationsnämnden, [arn.se](https://www.arn.se/), eller till behörig domstol.",
        ],
      },
      {
        h: "Kontakt",
        p: [
          "Spitakolus AB",
          "Organisationsnummer: 559554-6101",
          "Momsregistreringsnummer: SE559554610101",
          "Adress: Svängrumsgatan 46, 421 71 Västra Frölunda, Sverige",
          "E-post: support@spitakolus.com",
        ],
      },
    ],
  }
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
    metaDescription: 'Wrong way. Full speed. Eggs away! A hen that flies backwards and fires eggs. On Google Play now, coming soon to the App Store.',
    badge: 'In development',
    otherName: 'Called KACKLÄNGES! in Swedish',
    tagline: 'Wrong way. Full speed. Eggs away!',
    lead: 'A hen flies backwards across the farm at full speed and fires eggs at everything in her way.',
    stores: 'The game is on Google Play now and coming soon to the App Store.',
    factsTitle: 'Good to know',
    facts: [
      'Free to play. No account and no sign-in.',
      'Ads only if you choose to watch one, for extra corn.',
      'Silly outfits for the hen can be bought, but you can enjoy everything in the game without paying.',
      'Your game is saved on your own phone.',
    ],
    supportTitle: 'Questions?',
    support: 'Email support@spitakolus.com.',
    legal: 'Read the [privacy policy](/cluckwards/integritet#english) and the [terms](/cluckwards/villkor).',
  },
  privacy: {
    metaTitle: "Privacy Policy for CLUCKWARDS! – Spitakolus AB",
    metaDescription: "How CLUCKWARDS! handles information. No account, optional child-safe ads and purchases through the App Store and Google Play.",
    title: "Privacy Policy",
    updated: "Last updated 9 October 2026",
    intro: [
      "CLUCKWARDS! (KACKLÄNGES! in Swedish) is made by Spitakolus AB, Swedish company registration number 559554-6101. Spitakolus AB is the data controller for the processing described here.",
      "The game has no user account and no game server of its own. We do not ask for your name or email address when you play, and we normally cannot link the game's technical information to you as a person.",
    ],
    sections: [
      {
        h: "In short",
        ul: [
          "Your game is saved on your own phone.",
          "Ads are only shown if you choose to watch one.",
          "The ads are not personalised, and ad requests are treated as directed to children.",
          "Purchases are made through the App Store or Google Play.",
          "We do not sell personal data.",
        ],
      },
      {
        h: "What is saved on your phone",
        p: [
          "The game saves the following locally on your phone:",
        ],
        ul: [
          "your best score, your best combo and the highest checkpoint you have reached",
          "your corn, which outfits and items the hen has and what she is wearing",
          "how far you have got in the challenges",
          "how many rewarded ads you have watched during the day, so that the limit of at most four a day can be kept",
          "whether you have seen the introduction",
          "whether the sound is on or off.",
        ],
        after: [
          "We do not have access to the local game file, and it is not sent to Spitakolus.",
          "If you back up your phone, the file may be included in your backup with, for example, Apple or Google, according to your settings and their rules.",
        ],
      },
      {
        h: "Ads from Google AdMob",
        p: [
          "After a run you can choose to watch a short video ad and get extra corn. The video only starts if you tap the button yourself.",
          "The ads are provided by Google AdMob. We have set up the ad requests so that they are treated as directed to children. This means that the ads are not personalised and that the phone's advertising ID is not used for the ad requests.",
          "When Google prepares or shows an ad, Google may still receive some technical information, for example:",
        ],
        ul: [
          "the IP address, which can show an approximate geographical area",
          "information about the phone and the app, such as model, language, operating system and app version",
          "limited technical identifiers needed for the ad service",
          "whether the ad was loaded, shown or played to the end",
          "diagnostics and error information.",
        ],
        after: [
          "The information is used to show the ad, check that the player should get their reward, count ad views and prevent fraud.",
          "Where the law requires it, the game asks for permission before relevant information is stored on or read from the phone. The game follows the choice you make. You can always skip ads and keep playing without the ad reward.",
          "Google also processes information under its own rules. Read more in [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites).",
        ],
      },
      {
        h: "Purchases through the App Store, Google Play and RevenueCat",
        p: [
          "You can buy outfits and other items for the hen. Payment is made through the App Store or Google Play. Spitakolus does not receive your card details and normally does not receive your name or email address from the store either.",
          "To check and restore purchases we use RevenueCat. RevenueCat receives a random identifier for the app installation, information about completed purchases and technical information needed for the service to work. RevenueCat does not receive your card details from us.",
          "RevenueCat processes data in the USA and, where needed, protects the transfer with the EU Standard Contractual Clauses. Read more in [RevenueCat's privacy policy](https://www.revenuecat.com/privacy/).",
        ],
      },
      {
        h: "The App Store and Google Play",
        p: [
          "Apple and Google may process information under their own terms when you download the game, make a purchase or use their services.",
          "We may receive aggregated statistics, transaction information needed to check purchases, and technical crash reports. Such information does not normally include your name or your card details.",
        ],
      },
      {
        h: "When you contact us",
        p: [
          "If you email our support, we process your email address, your message and anything you choose to include.",
          "The information is used to answer your question and to solve any problems with the game or a purchase. We keep it for as long as it is needed to handle the matter, and after that for a limited time if it is needed for follow-up or legal claims.",
          "Please do not send sensitive personal data or other information that is not needed for the support matter.",
        ],
      },
      {
        h: "How long is the information kept?",
        p: [
          "The game file on the phone is kept until you delete the game or clear its stored data.",
          "RevenueCat keeps the purchase identifier and the purchase information for as long as they are needed to check and restore purchases. Google keeps ad information under its own retention rules.",
          "Support information is kept for as long as it is needed to handle and follow up the matter or legal claims.",
        ],
      },
      {
        h: "Children",
        p: [
          "The game is suitable for all ages and has no account, no chat and no way to share content with other players. We do not ask the player for a name, an email address or a date of birth.",
          "Ad requests are treated as directed to children, and the ads are not personalised.",
          "Purchases can be limited with the phone's parental controls, for example Ask to Buy on Apple devices or Family Link on Google devices.",
        ],
      },
      {
        h: "Why the information may be processed",
        p: [
          "Purchase information is processed to complete, check and restore purchases.",
          "Technical ad information, security information and support information are processed because we have a legitimate interest in funding, protecting and supporting the game. Where the law requires consent, we use consent instead.",
          "Google and RevenueCat may process data outside the EU and the EEA. The safeguards for such transfers are described in their linked privacy policies.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "Depending on the circumstances, you may have the right to:",
        ],
        ul: [
          "know which personal data we process about you",
          "have incorrect data corrected",
          "request that data is erased",
          "request that the processing is restricted",
          "object to processing based on legitimate interest",
          "receive certain data in a usable format",
          "withdraw a consent.",
        ],
        after: [
          "Because the game has no account, we may need your help to find the right information.",
          "Local game data that we do not have access to can be deleted by deleting the game or clearing its stored data.",
          "Email support@spitakolus.com if you want to use your rights.",
          "You can also lodge a complaint with the Swedish Authority for Privacy Protection, [imy.se](https://www.imy.se/en/).",
        ],
      },
      {
        h: "If this policy changes",
        p: [
          "If the game's features or the processing of personal data change, we will update this policy and the date above.",
          "In the event of a major change, we will inform you in a suitable way and ask for new consent where the law requires it.",
        ],
      },
      {
        h: "Contact",
        p: [
          "Spitakolus AB",
          "Company registration number: 559554-6101",
          "VAT number: SE559554610101",
          "Address: Svängrumsgatan 46, 421 71 Västra Frölunda, Sweden",
          "Email: support@spitakolus.com",
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Terms for CLUCKWARDS! – Spitakolus AB",
    metaDescription: "The terms for playing CLUCKWARDS!. Free, no account, optional ads and purchases through the stores.",
    title: "Terms of Use",
    updated: "Last updated 9 October 2026",
    intro: [
      "CLUCKWARDS! (KACKLÄNGES! in Swedish) is provided by Spitakolus AB, Swedish company registration number 559554-6101.",
      "By downloading or using the game you accept these terms. If you do not accept the terms, you should not use the game.",
      "Please also read our [privacy policy](/cluckwards/integritet#english).",
    ],
    sections: [
      {
        h: "The game and your right to use it",
        p: [
          "The game is free and has no user account. You can choose to watch ads to get extra corn, but you never have to watch ads to play.",
          "You get a personal, limited and non-transferable right to use the game for private, non-commercial purposes.",
          "The game is not sold to you, and you do not get ownership of the game or its content.",
        ],
      },
      {
        h: "Children and purchases",
        p: [
          "Children may play the game. Purchases made by a child must be approved by a parent or guardian where the law requires it.",
          "Parents and guardians can use the phone's settings, for example Ask to Buy on Apple devices or Family Link on Google devices, to limit purchases.",
        ],
      },
      {
        h: "Corn",
        p: [
          "Corn is the game's own currency and is earned by playing or by choosing to watch a rewarded ad.",
          "Corn:",
        ],
        ul: [
          "cannot be bought for real money",
          "cannot be sold or transferred",
          "cannot be exchanged for real money",
          "has no value outside the game.",
        ],
        after: [
          "Corn earned in the game is not a purchased item and may be lost if the game's local data is deleted.",
        ],
      },
      {
        h: "Purchases",
        p: [
          "Outfits and other items for the hen can be bought through the App Store or Google Play.",
          "The purchased items are cosmetic and do not make the game easier to win. A purchase gives you the right to use the item in the game, but it does not give you ownership of the game's images, characters or other assets.",
          "Payment is handled by the App Store or Google Play. The store's payment terms apply together with these terms.",
          "Refund requests are normally made through the store where the purchase was made. This does not limit the rights you have under mandatory consumer law. You can also contact us if there is a problem with a purchase.",
          "Purchases can normally be restored with the same Apple or Google account and on the same platform. Because the game has no account of its own, we cannot promise that purchases can be moved between iPhone and Android.",
        ],
      },
      {
        h: "Your saved game",
        p: [
          "Your score, your corn, your settings and how far you have got are saved locally on the phone.",
          "If you delete the game, clear its data or change phones, the local game information may be lost. Spitakolus has no copy and therefore cannot restore it.",
          "Purchased items can normally be restored with the store's restore purchases feature. Corn and other things earned by playing cannot always be restored.",
        ],
      },
      {
        h: "What you may not do",
        p: [
          "You may not:",
        ],
        ul: [
          "copy, sell, rent out or distribute the game or modified versions of it",
          "try to bypass the game's purchase, ad or security features",
          "modify the game or its saved data in order to cheat",
          "use the game or its content for commercial purposes without our permission",
          "try to access the game's code in a way that is not permitted by law",
          "use the game in an unlawful way",
          "make something appear to come from Spitakolus when it does not.",
        ],
      },
      {
        h: "The App Store and Google Play",
        p: [
          "When you download the game through the App Store or Google Play, that store's terms also apply.",
          "Apple and Google are responsible for their own stores and payment systems. Spitakolus is responsible for the game itself and for support related to the game.",
        ],
      },
      {
        h: "Changes and availability",
        p: [
          "We work to make the game work, but we cannot promise that it is always free of errors or that it works on all phones and future operating systems.",
          "We may update the game and change, add or remove features for technical, security, legal or gameplay reasons.",
          "We may also need to stop supporting the game or certain older devices. If a change affects purchased content, we take applicable consumer law into account.",
          "These terms may be updated when the game or the law changes. The date at the top shows when they were last changed. In the event of a major change, we will inform you in a suitable way.",
        ],
      },
      {
        h: "Rights to the game",
        p: [
          "The game and its content, including code, the hen, graphics, animations, texts, sounds and music, are owned by or used with permission by Spitakolus AB.",
          "Nothing in these terms transfers any intellectual property right to you beyond the limited right to use the game.",
        ],
      },
      {
        h: "Liability and consumer rights",
        p: [
          "Nothing in these terms limits rights that you have under mandatory consumer law.",
          "Otherwise, Spitakolus is liable to the extent that follows from applicable law. We are not responsible for problems caused by the App Store, Google Play, your internet connection, your phone or changes that you have made yourself to the device or the game.",
        ],
      },
      {
        h: "Applicable law and disputes",
        p: [
          "Swedish law applies to these terms. If you are a consumer in another country, this does not affect the mandatory consumer protection that applies where you live.",
          "If a problem arises, please contact us first so that we can try to solve it.",
          "A Swedish consumer can also turn to the National Board for Consumer Disputes (Allmänna reklamationsnämnden), [arn.se](https://www.arn.se/), or to a competent court.",
        ],
      },
      {
        h: "Contact",
        p: [
          "Spitakolus AB",
          "Company registration number: 559554-6101",
          "VAT number: SE559554610101",
          "Address: Svängrumsgatan 46, 421 71 Västra Frölunda, Sweden",
          "Email: support@spitakolus.com",
        ],
      },
    ],
  }
};

const pt: Texts = {
  name: 'CÓ-CÓ-RÉ!',
  common: {
    languageLabel: 'Idioma',
    about: 'Sobre o jogo',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    contact: 'Contato',
    company: 'CÓ-CÓ-RÉ! (CLUCKWARDS!) é feito pela Spitakolus AB (empresa sueca, nº de registro 559554-6101).',
  },
  home: {
    metaTitle: 'CÓ-CÓ-RÉ! (CLUCKWARDS!) – Spitakolus AB',
    metaDescription: 'Direção errada. Velocidade máxima. Ovos voando! Uma galinha que voa de ré e lança ovos. Já no Google Play, em breve na App Store.',
    badge: 'Em desenvolvimento',
    otherName: 'Em inglês se chama CLUCKWARDS! e em sueco, KACKLÄNGES!',
    tagline: 'Direção errada. Velocidade máxima. Ovos voando!',
    lead: 'Uma galinha voa de ré pela fazenda a toda velocidade e lança ovos em tudo o que estiver no caminho.',
    stores: 'O jogo já está no Google Play e chega em breve à App Store.',
    factsTitle: 'Bom saber',
    facts: [
      'Grátis para jogar. Sem conta e sem login.',
      'Anúncios só se você quiser assistir, para ganhar milho extra.',
      'Roupas divertidas para a galinha podem ser compradas, mas dá para aproveitar tudo no jogo sem pagar nada.',
      'Seu jogo fica salvo no seu próprio celular.',
    ],
    supportTitle: 'Dúvidas?',
    support: 'Envie um e-mail para support@spitakolus.com.',
    legal: 'Leia a [Política de Privacidade](/cluckwards/integritet#portugues) e os [Termos de Uso](/cluckwards/villkor).',
  },
  privacy: {
    metaTitle: "Política de Privacidade do CÓ-CÓ-RÉ! (CLUCKWARDS!) – Spitakolus AB",
    metaDescription: "Como o CLUCKWARDS! trata informações. Sem conta, anúncios opcionais e seguros para crianças e compras pela App Store e pelo Google Play.",
    title: "Política de Privacidade",
    updated: "Atualizada em 9 de outubro de 2026",
    intro: [
      "O CÓ-CÓ-RÉ! (CLUCKWARDS! em inglês, KACKLÄNGES! em sueco) é feito pela Spitakolus AB, empresa sueca, número de registro 559554-6101. A Spitakolus AB é a controladora do tratamento de dados descrito aqui.",
      "O jogo não tem conta de usuário nem servidor de jogo próprio. Não pedimos seu nome nem seu e-mail quando você joga e, normalmente, não conseguimos associar as informações técnicas do jogo a você como pessoa.",
    ],
    sections: [
      {
        h: "Resumindo",
        ul: [
          "Seu jogo fica salvo no seu próprio celular.",
          "Anúncios só aparecem se você escolher assistir.",
          "Os anúncios não são personalizados, e as solicitações de anúncio são tratadas como direcionadas a crianças.",
          "As compras são feitas pela App Store ou pelo Google Play.",
          "Não vendemos dados pessoais.",
        ],
      },
      {
        h: "O que fica salvo no seu celular",
        p: [
          "O jogo salva o seguinte localmente no seu celular:",
        ],
        ul: [
          "sua melhor pontuação, seu melhor combo e o checkpoint mais alto que você alcançou",
          "seu milho, quais roupas e acessórios a galinha tem e o que ela está usando",
          "até onde você chegou nos desafios",
          "quantos anúncios premiados você viu durante o dia, para que o limite de no máximo quatro por dia seja respeitado",
          "se você já viu a introdução",
          "se o som está ligado ou desligado.",
        ],
        after: [
          "Não temos acesso ao arquivo local do jogo, e ele não é enviado para a Spitakolus.",
          "Se você faz backup do celular, o arquivo pode ser incluído no seu backup, por exemplo na Apple ou no Google, de acordo com as suas configurações e as regras deles.",
        ],
      },
      {
        h: "Anúncios do Google AdMob",
        p: [
          "Depois de uma partida, você pode escolher assistir a um vídeo curto de anúncio e ganhar milho extra. O vídeo só começa se você mesmo tocar no botão.",
          "Os anúncios são fornecidos pelo Google AdMob. Configuramos as solicitações de anúncio para que sejam tratadas como direcionadas a crianças. Isso significa que os anúncios não são personalizados e que o ID de publicidade do celular não é usado nas solicitações de anúncio.",
          "Quando o Google prepara ou mostra um anúncio, ainda pode receber algumas informações técnicas, por exemplo:",
        ],
        ul: [
          "o endereço IP, que pode indicar uma área geográfica aproximada",
          "informações sobre o celular e o app, como modelo, idioma, sistema operacional e versão do app",
          "identificadores técnicos limitados necessários para o serviço de anúncios",
          "se o anúncio foi carregado, mostrado ou assistido até o fim",
          "diagnósticos e informações de erro.",
        ],
        after: [
          "As informações são usadas para mostrar o anúncio, verificar se o jogador deve receber sua recompensa, contar as visualizações de anúncios e evitar fraudes.",
          "Quando a lei exige, o jogo pede permissão antes que informações relevantes sejam armazenadas no celular ou lidas dele. O jogo respeita a escolha que você fizer. Você sempre pode recusar os anúncios e continuar jogando sem a recompensa do anúncio.",
          "O Google também trata informações de acordo com as próprias regras. Saiba mais em [Como o Google usa informações de sites ou apps que usam nossos serviços](https://policies.google.com/technologies/partner-sites?hl=pt-BR).",
        ],
      },
      {
        h: "Compras pela App Store, pelo Google Play e pela RevenueCat",
        p: [
          "Você pode comprar roupas e outros itens para a galinha. O pagamento é feito pela App Store ou pelo Google Play. A Spitakolus não recebe os dados do seu cartão e, normalmente, também não recebe seu nome nem seu e-mail da loja.",
          "Para verificar e restaurar compras, usamos a RevenueCat. A RevenueCat recebe um identificador aleatório da instalação do app, informações sobre as compras realizadas e informações técnicas necessárias para que o serviço funcione. A RevenueCat não recebe os dados do seu cartão de nós.",
          "A RevenueCat trata dados nos Estados Unidos e, quando necessário, protege a transferência com as Cláusulas Contratuais Padrão da União Europeia. Saiba mais na [Política de Privacidade da RevenueCat](https://www.revenuecat.com/privacy/).",
        ],
      },
      {
        h: "App Store e Google Play",
        p: [
          "A Apple e o Google podem tratar informações de acordo com os próprios termos quando você baixa o jogo, faz uma compra ou usa os serviços deles.",
          "Podemos receber estatísticas agregadas, informações de transação necessárias para verificar compras e relatórios técnicos de falhas. Essas informações normalmente não incluem seu nome nem os dados do seu cartão.",
        ],
      },
      {
        h: "Quando você entra em contato conosco",
        p: [
          "Se você enviar um e-mail para o nosso suporte, tratamos seu endereço de e-mail, sua mensagem e o que você escolher enviar junto.",
          "As informações são usadas para responder à sua pergunta e resolver eventuais problemas com o jogo ou com uma compra. Guardamos as informações pelo tempo necessário para tratar o caso e, depois, por um tempo limitado se for necessário para acompanhamento ou exigências legais.",
          "Não envie dados pessoais sensíveis nem outras informações que não sejam necessárias para o atendimento.",
        ],
      },
      {
        h: "Por quanto tempo as informações ficam guardadas?",
        p: [
          "O arquivo do jogo no celular fica guardado até você apagar o jogo ou limpar os dados armazenados dele.",
          "A RevenueCat guarda o identificador de compra e as informações das compras pelo tempo necessário para verificar e restaurar compras. O Google guarda as informações de anúncios de acordo com as próprias regras de armazenamento.",
          "As informações de suporte ficam guardadas pelo tempo necessário para tratar e acompanhar o caso ou exigências legais.",
        ],
      },
      {
        h: "Crianças",
        p: [
          "O jogo é para todas as idades e não tem conta, chat nem forma de compartilhar conteúdo com outros jogadores. Não pedimos ao jogador nome, e-mail nem data de nascimento.",
          "As solicitações de anúncio são tratadas como direcionadas a crianças, e os anúncios não são personalizados.",
          "As compras podem ser limitadas com o controle parental do celular, por exemplo o Pedir para Comprar da Apple ou o Family Link do Google.",
        ],
      },
      {
        h: "Por que as informações podem ser tratadas",
        p: [
          "As informações de compra são tratadas para realizar, verificar e restaurar compras.",
          "Informações técnicas de anúncios, informações de segurança e informações de suporte são tratadas porque temos um interesse legítimo em financiar, proteger e dar suporte ao jogo. Quando a lei exige consentimento, usamos o consentimento.",
          "O Google e a RevenueCat podem tratar dados fora da União Europeia e do Espaço Econômico Europeu. A proteção dessas transferências é descrita nas políticas de privacidade deles, indicadas acima.",
        ],
      },
      {
        h: "Seus direitos",
        p: [
          "Dependendo das circunstâncias, você pode ter o direito de:",
        ],
        ul: [
          "saber quais dados pessoais tratamos sobre você",
          "corrigir dados incorretos",
          "pedir que dados sejam apagados",
          "pedir que o tratamento seja limitado",
          "se opor a um tratamento baseado em interesse legítimo",
          "receber certos dados em um formato utilizável",
          "retirar um consentimento.",
        ],
        after: [
          "Como o jogo não tem conta, talvez precisemos da sua ajuda para encontrar as informações certas.",
          "Os dados locais do jogo, aos quais não temos acesso, podem ser apagados quando você apaga o jogo ou limpa os dados armazenados dele.",
          "Envie um e-mail para support@spitakolus.com se quiser exercer seus direitos.",
          "Você também pode apresentar uma reclamação à autoridade sueca de proteção de dados (Integritetsskyddsmyndigheten), [imy.se](https://www.imy.se/en/).",
        ],
      },
      {
        h: "Se esta política mudar",
        p: [
          "Se as funções do jogo ou o tratamento de dados pessoais mudarem, atualizaremos esta política e a data acima.",
          "Em caso de uma mudança maior, informaremos de forma adequada e pediremos um novo consentimento quando a lei exigir.",
        ],
      },
      {
        h: "Contato",
        p: [
          "Spitakolus AB",
          "Número de registro da empresa: 559554-6101",
          "Número de IVA: SE559554610101",
          "Endereço: Svängrumsgatan 46, 421 71 Västra Frölunda, Suécia",
          "E-mail: support@spitakolus.com",
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Termos de Uso do CÓ-CÓ-RÉ! (CLUCKWARDS!) – Spitakolus AB",
    metaDescription: "Os termos para jogar CLUCKWARDS!. Grátis, sem conta, anúncios opcionais e compras pelas lojas.",
    title: "Termos de Uso",
    updated: "Atualizados em 9 de outubro de 2026",
    intro: [
      "O CÓ-CÓ-RÉ! (CLUCKWARDS! em inglês, KACKLÄNGES! em sueco) é oferecido pela Spitakolus AB, empresa sueca, número de registro 559554-6101.",
      "Ao baixar ou usar o jogo, você aceita estes termos. Se você não aceitar os termos, não deve usar o jogo.",
      "Leia também a nossa [Política de Privacidade](/cluckwards/integritet#portugues).",
    ],
    sections: [
      {
        h: "O jogo e o seu direito de usá-lo",
        p: [
          "O jogo é grátis e não tem conta de usuário. Você pode escolher assistir a anúncios para ganhar milho extra, mas nunca precisa assistir a anúncios para jogar.",
          "Você recebe um direito pessoal, limitado e intransferível de usar o jogo para uso privado e não comercial.",
          "O jogo não é vendido a você, e você não se torna proprietário do jogo nem do seu conteúdo.",
        ],
      },
      {
        h: "Crianças e compras",
        p: [
          "Crianças podem jogar o jogo. Compras feitas por uma criança precisam ser aprovadas por um responsável quando a lei exige.",
          "Pais e responsáveis podem usar as configurações do celular, por exemplo o Pedir para Comprar da Apple ou o Family Link do Google, para limitar compras.",
        ],
      },
      {
        h: "Milho",
        p: [
          "O milho é a moeda do próprio jogo e é ganho jogando ou assistindo, por vontade própria, a anúncios premiados.",
          "O milho:",
        ],
        ul: [
          "não pode ser comprado com dinheiro de verdade",
          "não pode ser vendido nem transferido",
          "não pode ser trocado por dinheiro de verdade",
          "não tem valor fora do jogo.",
        ],
        after: [
          "O milho ganho no jogo não é um item comprado e pode desaparecer se os dados locais do jogo forem apagados.",
        ],
      },
      {
        h: "Compras",
        p: [
          "Roupas e outros itens para a galinha podem ser comprados pela App Store ou pelo Google Play.",
          "Os itens comprados são cosméticos e não tornam o jogo mais fácil de vencer. Uma compra dá a você o direito de usar o item no jogo, mas não dá a você a propriedade das imagens, personagens ou outros recursos do jogo.",
          "O pagamento é processado pela App Store ou pelo Google Play. Os termos de pagamento da loja valem junto com estes termos.",
          "Pedidos de reembolso normalmente são feitos pela loja onde a compra foi realizada. Isso não limita os direitos que você tem pela legislação obrigatória de defesa do consumidor. Você também pode falar conosco se houver um problema com uma compra.",
          "As compras normalmente podem ser restauradas com a mesma conta da Apple ou do Google e na mesma plataforma. Como o jogo não tem conta própria, não podemos prometer que as compras possam ser transferidas entre iPhone e Android.",
        ],
      },
      {
        h: "Seu jogo salvo",
        p: [
          "Sua pontuação, seu milho, suas configurações e até onde você chegou ficam salvos localmente no celular.",
          "Se você apagar o jogo, limpar os dados dele ou trocar de celular, as informações locais do jogo podem se perder. A Spitakolus não tem uma cópia e, por isso, não consegue recuperá-las.",
          "Os itens comprados normalmente podem ser restaurados com a função de restaurar compras da loja. O milho e outras coisas ganhas jogando nem sempre podem ser restaurados.",
        ],
      },
      {
        h: "O que você não pode fazer",
        p: [
          "Você não pode:",
        ],
        ul: [
          "copiar, vender, alugar ou distribuir o jogo ou versões modificadas dele",
          "tentar burlar as funções de compra, anúncios ou segurança do jogo",
          "modificar o jogo ou os dados salvos dele para trapacear",
          "usar o jogo ou o seu conteúdo para fins comerciais sem a nossa permissão",
          "tentar acessar o código do jogo de uma forma que a lei não permite",
          "usar o jogo de forma ilegal",
          "fazer parecer que algo vem da Spitakolus quando não vem.",
        ],
      },
      {
        h: "App Store e Google Play",
        p: [
          "Quando você baixa o jogo pela App Store ou pelo Google Play, os termos da loja também valem.",
          "A Apple e o Google são responsáveis pelas próprias lojas e sistemas de pagamento. A Spitakolus é responsável pelo jogo em si e pelo suporte relacionado ao jogo.",
        ],
      },
      {
        h: "Mudanças e disponibilidade",
        p: [
          "Trabalhamos para que o jogo funcione, mas não podemos prometer que ele esteja sempre livre de erros ou que funcione em todos os celulares e sistemas operacionais futuros.",
          "Podemos atualizar o jogo e mudar, adicionar ou remover funções por motivos técnicos, de segurança, legais ou de jogabilidade.",
          "Também podemos precisar parar de dar suporte ao jogo ou a alguns aparelhos mais antigos. Se uma mudança afetar conteúdo comprado, levamos em conta a legislação de defesa do consumidor aplicável.",
          "Estes termos podem ser atualizados quando o jogo ou a legislação mudarem. A data no topo mostra quando foram alterados pela última vez. Em caso de uma mudança maior, informaremos de forma adequada.",
        ],
      },
      {
        h: "Direitos sobre o jogo",
        p: [
          "O jogo e o seu conteúdo, incluindo código, a galinha, gráficos, animações, textos, sons e música, pertencem à Spitakolus AB ou são usados com permissão dela.",
          "Nada nestes termos transfere a você qualquer direito de propriedade intelectual além do direito limitado de usar o jogo.",
        ],
      },
      {
        h: "Responsabilidade e direitos do consumidor",
        p: [
          "Nada nestes termos limita os direitos que você tem pela legislação obrigatória de defesa do consumidor.",
          "No mais, a Spitakolus responde na medida prevista pela lei aplicável. Não somos responsáveis por problemas causados pela App Store, pelo Google Play, pela sua conexão com a internet, pelo seu celular ou por alterações que você mesmo fez no aparelho ou no jogo.",
        ],
      },
      {
        h: "Lei aplicável e disputas",
        p: [
          "A lei sueca se aplica a estes termos. Se você é consumidor em outro país, isso não afeta a proteção obrigatória ao consumidor que vale onde você mora.",
          "Se surgir um problema, pedimos que você fale conosco primeiro para que possamos tentar resolvê-lo.",
          "Um consumidor sueco também pode recorrer à Comissão Nacional de Reclamações do Consumidor da Suécia (Allmänna reklamationsnämnden), [arn.se](https://www.arn.se/), ou a um tribunal competente.",
        ],
      },
      {
        h: "Contato",
        p: [
          "Spitakolus AB",
          "Número de registro da empresa: 559554-6101",
          "Número de IVA: SE559554610101",
          "Endereço: Svängrumsgatan 46, 421 71 Västra Frölunda, Suécia",
          "E-mail: support@spitakolus.com",
        ],
      },
    ],
  }
};

export function t(lang: Lang): Texts {
  return lang === 'sv' ? sv : lang === 'pt' ? pt : en;
}
