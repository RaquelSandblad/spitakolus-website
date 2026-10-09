import type { Lang } from './lang';

// Alla texter för sidorna om CLUCKWARDS! (på svenska KACKLÄNGES!) på svenska, engelska och portugisiska (Brasilien).
// Enkel märkning: **fet**, [länktext](/cluckwards/...) eller [länktext](https://...), och e-postadresser blir länkar.
//
// Integritetspolicyn beskriver spelet som det blir vid lanseringen (honspelet H-022, H-023, H-025):
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
    metaDescription: 'Fel håll. Full fart. Ägg iväg! En höna som springer baklänges och skjuter ägg. Kommer snart till App Store och Google Play.',
    badge: 'Under utveckling',
    otherName: 'Heter CLUCKWARDS! på engelska',
    tagline: 'Fel håll. Full fart. Ägg iväg!',
    lead: 'En höna springer baklänges över bondgården i full fart och skjuter ägg på allt som står i vägen.',
    stores: 'Spelet kommer snart till App Store och Google Play.',
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
    metaTitle: 'Integritetspolicy för KACKLÄNGES! (CLUCKWARDS!) – Spitakolus AB',
    metaDescription: 'Så hanterar KACKLÄNGES! uppgifter. Inget konto, frivillig barnsäker reklam och köp via App Store och Google Play.',
    title: 'Integritetspolicy',
    updated: 'Senast ändrad 9 oktober 2026',
    intro: [
      'KACKLÄNGES! (CLUCKWARDS! på engelska) görs av Spitakolus AB (org.nr 559554-6101). Spitakolus AB är personuppgiftsansvarig för det som beskrivs här.',
      '**Vi vet inte vem du är.** Spelet har inget konto, och vi har ingen egen server som tar emot uppgifter om dig.',
    ],
    sections: [
      {
        h: 'Kort sagt',
        ul: [
          'Ditt spel sparas på din egen telefon.',
          'Reklam visas bara om du själv väljer att titta. Den kommer från Google AdMob, är anpassad för barn och bygger inte på vem du är.',
          'Köp görs i App Store eller Google Play. Vi ser aldrig ditt namn eller dina kortuppgifter.',
          'Vi säljer aldrig uppgifter.',
        ],
      },
      {
        h: 'Det här sparas på din telefon',
        p: ['Spelet sparar några saker i en fil på din egen telefon, så att du kan fortsätta där du var:'],
        ul: [
          'ditt bästa resultat, din bästa combo och den högsta checkpoint du har nått',
          'din majs, vilka kläder och saker hönan har och vad hon har på sig',
          'hur långt du har kommit i utmaningarna',
          'när du senast tittade på reklam, så att det finns en gräns per dag',
          'om du har sett introduktionen och om ljudet är på eller av.',
        ],
        after: ['Filen stannar på telefonen. Vi kan inte se den, och den skickas inte till oss.'],
      },
      {
        h: 'Reklam (Google AdMob)',
        p: [
          'Efter en runda kan du välja att titta på en kort reklamfilm och få extra majs. Reklam visas aldrig om du inte själv trycker på knappen.',
          'Reklamen kommer från Google AdMob. Vi har ställt in den så att den är anpassad för barn: **den bygger inte på vem du är eller vad du gör i andra appar, och spelet använder inte telefonens annonserings-id.**',
          'För att kunna visa reklamen, räkna visningar och stoppa fusk får Google ändå vissa tekniska uppgifter från telefonen:',
        ],
        ul: [
          'IP-adressen, som kan visa ungefär var du är (land eller stad, inte exakt plats)',
          'uppgifter om telefonen, till exempel modell, språk och ett id som bara gäller våra appar',
          'hur du använder reklamen, till exempel om filmen visades klart',
          'felrapporter från reklamen.',
        ],
        after: [
          'Google hanterar de uppgifterna enligt sina egna regler: [Så använder Google information från appar som använder Googles tjänster](https://policies.google.com/technologies/partner-sites?hl=sv). Eftersom spelet behandlar alla spelare som barn ber Google inte om samtycke till anpassad reklam, och visar bara reklam som inte bygger på vem du är. Du kan alltid låta bli att titta.',
        ],
      },
      {
        h: 'Köp (App Store, Google Play och RevenueCat)',
        p: [
          'Du kan köpa kläder och saker till hönan. Köpet görs i App Store eller Google Play, och de sköter betalningen. Vi får aldrig ditt namn, din e-post eller dina kortuppgifter.',
          'För att kontrollera köpen och kunna återställa dem om du byter telefon använder vi tjänsten RevenueCat. RevenueCat får ett slumpat id som inte säger vem du är, vilka köp som gjorts och kvittot från butiken. Vi använder uppgifterna för att köpen ska fungera, för att stoppa fusk och för att se hur många som köper vad. RevenueCat finns i USA, och överföringen skyddas med EU:s standardavtalsklausuler. Läs mer i [RevenueCats integritetspolicy](https://www.revenuecat.com/privacy/).',
          'Köp kan stoppas med föräldrakontroll i telefonen, till exempel Be om köp hos Apple eller Family Link hos Google.',
        ],
      },
      {
        h: 'Apple och Google',
        p: [
          'App Store och Google Play kan samla in uppgifter enligt sina egna villkor, till exempel om nedladdningar och, om du har tillåtit det i telefonens inställningar, kraschrapporter. Vi kan få se sammanställd statistik och kraschrapporter utan namn eller kontaktuppgifter.',
        ],
      },
      {
        h: 'Hur länge sparas det?',
        p: [
          'Filen på telefonen sparas tills du tar bort spelet. Om du säkerhetskopierar telefonen (till exempel med iCloud) kan filen följa med i din egen säkerhetskopia. Den hamnar aldrig hos oss.',
          'Uppgifterna om köp sparas hos RevenueCat så länge de behövs för att köpen ska fungera och kunna återställas. Google sparar reklamuppgifterna enligt sina egna regler.',
        ],
      },
      {
        h: 'Barn',
        p: [
          'Spelet passar alla åldrar och är gjort för att vara säkert för barn. Reklamen är inställd för barn, bygger inte på vem man är och använder inte annonserings-id. Spelet har ingen chatt och inget sätt att dela något med andra spelare. Vi ber aldrig om namn, e-post eller annat som visar vem någon är.',
        ],
      },
      {
        h: 'Varför vi får hantera uppgifterna',
        p: [
          'Uppgifterna om köp behövs för att ge dig det du har köpt (avtal). Reklamen och skyddet mot fusk bygger på vårt berättigade intresse av att kunna erbjuda spelet gratis.',
        ],
      },
      {
        h: 'Om något ändras',
        p: [
          '**Om vi lägger till något nytt, till exempel topplistor eller sparning i molnet, uppdaterar vi den här policyn först.** Den nya texten finns här och i butikerna innan den versionen av spelet släpps, och vi frågar om lov där lagen kräver det.',
        ],
      },
      {
        h: 'Dina rättigheter',
        p: [
          'Du har rätt att få veta vilka uppgifter som finns om dig, få dem rättade eller borttagna och invända mot hur de används. Eftersom vi inte vet vem du är kan vi behöva hjälp av dig för att hitta rätt uppgifter. Mejla support@spitakolus.com så hjälper vi dig. Vill du ta bort det som sparats på telefonen tar du bort spelet.',
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
    metaDescription: 'Villkoren när du spelar KACKLÄNGES!. Gratis, inget konto, frivillig reklam och köp via butikerna.',
    title: 'Villkor',
    updated: 'Senast ändrade 7 oktober 2026',
    intro: [
      'KACKLÄNGES! (CLUCKWARDS! på engelska) görs av Spitakolus AB (org.nr 559554-6101). När du laddar ner och spelar spelet godkänner du de här villkoren. Läs också [integritetspolicyn](/cluckwards/integritet).',
    ],
    sections: [
      {
        h: 'Spelet',
        p: [
          'Spelet är gratis och har inget konto. Du kan välja att titta på reklam för extra majs, men du måste aldrig.',
        ],
      },
      {
        h: 'Majs och köp',
        ul: [
          'Majs tjänar du genom att spela. Majs kan inte köpas, säljas eller växlas till pengar.',
          'Kläder och saker till hönan kan köpas i App Store eller Google Play. Köpen är bara för utseendet och gör det inte lättare att vinna.',
          'Butikens villkor gäller för betalning och återbetalning. Vill du ha pengarna tillbaka för ett köp vänder du dig till Apple eller Google.',
          'Köpen hör till ditt Apple- eller Google-konto och kan återställas om du byter telefon.',
        ],
      },
      {
        h: 'Ditt sparade spel',
        p: [
          'Ditt bästa resultat, din majs och hur långt du har kommit sparas bara på din telefon. Tar du bort spelet eller byter telefon kan det försvinna, och vi kan inte få tillbaka det. Det du har köpt kan du återställa.',
        ],
      },
      {
        h: 'Det här får du inte göra',
        ul: [
          'Kopiera, sälja eller sprida spelet, eller ändrade versioner av det.',
          'Ändra i spelet för att fuska, lura andra eller ge sken av att något kommer från oss.',
        ],
      },
      {
        h: 'App Store och Google Play',
        p: ['Du laddar ner spelet från App Store eller Google Play. Deras villkor gäller också.'],
      },
      {
        h: 'Spelet kan ändras',
        p: [
          'Vi gör vårt bästa för att spelet ska fungera, men vi kan inte lova att det alltid gör det. Spelet kan ändras, och funktioner kan läggas till eller tas bort. Ändras villkoren uppdaterar vi den här sidan innan den versionen släpps.',
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
    metaDescription: 'Wrong way. Full speed. Eggs away! A hen that runs backwards and fires eggs. Coming soon to the App Store and Google Play.',
    badge: 'In development',
    otherName: 'Called KACKLÄNGES! in Swedish',
    tagline: 'Wrong way. Full speed. Eggs away!',
    lead: 'A hen runs backwards across the farm at full speed and fires eggs at everything in her way.',
    stores: 'The game is coming soon to the App Store and Google Play.',
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
    metaTitle: 'Privacy Policy for CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'How CLUCKWARDS! handles information. No account, optional child-safe ads and purchases through the App Store and Google Play.',
    title: 'Privacy Policy',
    updated: 'Last updated 9 October 2026',
    intro: [
      'CLUCKWARDS! (KACKLÄNGES! in Swedish) is made by Spitakolus AB (Swedish company reg. no. 559554-6101). Spitakolus AB is the data controller for what is described here.',
      '**We do not know who you are.** The game has no account, and we have no server of our own that receives information about you.',
    ],
    sections: [
      {
        h: 'In short',
        ul: [
          'Your game is saved on your own phone.',
          'Ads are only shown if you choose to watch one. They come from Google AdMob, are set up for children and are not based on who you are.',
          'Purchases are made in the App Store or Google Play. We never see your name or your card details.',
          'We never sell information.',
        ],
      },
      {
        h: 'What is saved on your phone',
        p: ['The game saves a few things in a file on your own phone, so that you can carry on where you left off:'],
        ul: [
          'your best score, your best combo and the highest checkpoint you have reached',
          'your corn, which outfits and items the hen has and what she is wearing',
          'your progress in the challenges',
          'when you last watched an ad, so that there is a daily limit',
          'whether you have seen the introduction, and whether the sound is on or off.',
        ],
        after: ['The file stays on your phone. We cannot see it, and it is not sent to us.'],
      },
      {
        h: 'Ads (Google AdMob)',
        p: [
          'After a run you can choose to watch a short video ad and get extra corn. An ad is never shown unless you tap the button yourself.',
          'The ads come from Google AdMob. We have set them up for children: **they are not based on who you are or what you do in other apps, and the game does not use your phone’s advertising ID.**',
          'To show the ad, count views and prevent fraud, Google still receives some technical information from the phone:',
        ],
        ul: [
          'the IP address, which can show roughly where you are (country or city, not your exact location)',
          'information about the phone, such as model, language and an ID that only applies to our apps',
          'how you interact with the ad, for example whether the video was watched to the end',
          'error reports from the ad.',
        ],
        after: [
          'Google handles that information under its own rules: [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites). Because the game treats every player as a child, Google does not ask for consent to personalised ads and only shows ads that are not based on who you are. You can always choose not to watch.',
        ],
      },
      {
        h: 'Purchases (App Store, Google Play and RevenueCat)',
        p: [
          'You can buy outfits and items for the hen. The purchase is made in the App Store or Google Play, and they handle the payment. We never receive your name, your email or your card details.',
          'To check purchases and to restore them if you change phones, we use a service called RevenueCat. RevenueCat receives a random ID that does not say who you are, which purchases have been made and the receipt from the store. We use this to make purchases work, to prevent fraud and to see how many people buy what. RevenueCat is based in the USA, and the transfer is protected by the EU Standard Contractual Clauses. Read more in [RevenueCat’s privacy policy](https://www.revenuecat.com/privacy/).',
          'Purchases can be blocked with parental controls on the phone, such as Ask to Buy on Apple devices or Family Link on Google devices.',
        ],
      },
      {
        h: 'Apple and Google',
        p: [
          'The App Store and Google Play may collect information under their own terms, for example about downloads and, if you have allowed it in your phone’s settings, crash reports. We may see aggregated statistics and crash reports without names or contact details.',
        ],
      },
      {
        h: 'How long is it kept?',
        p: [
          'The file on your phone is kept until you delete the game. If you back up your phone (for example with iCloud), the file may be included in your own backup. It never reaches us.',
          'Purchase information is kept by RevenueCat for as long as it is needed to make purchases work and to restore them. Google keeps ad information under its own rules.',
        ],
      },
      {
        h: 'Children',
        p: [
          'The game is suitable for all ages and is made to be safe for children. The ads are set up for children, are not based on who you are and do not use the advertising ID. The game has no chat and no way to share anything with other players. We never ask for a name, an email or anything else that shows who someone is.',
        ],
      },
      {
        h: 'Why we may handle the information',
        p: [
          'Purchase information is needed to give you what you have bought (contract). The ads and fraud prevention are based on our legitimate interest in being able to offer the game for free.',
        ],
      },
      {
        h: 'If anything changes',
        p: [
          '**If we add something new, such as leaderboards or cloud saving, we will update this policy first.** The new policy will be here and in the store listings before that version of the game is released, and we will ask for permission where the law requires it.',
        ],
      },
      {
        h: 'Your rights',
        p: [
          'You have the right to know what information there is about you, to have it corrected or deleted, and to object to how it is used. Because we do not know who you are, we may need your help to find the right information. Email support@spitakolus.com and we will help you. To remove what is saved on your phone, delete the game.',
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
    metaDescription: 'The terms for playing CLUCKWARDS!. Free, no account, optional ads and purchases through the stores.',
    title: 'Terms',
    updated: 'Last updated 7 October 2026',
    intro: [
      'CLUCKWARDS! (KACKLÄNGES! in Swedish) is made by Spitakolus AB (Swedish company reg. no. 559554-6101). By downloading and playing the game you accept these terms. Please also read the [privacy policy](/cluckwards/integritet#english).',
    ],
    sections: [
      {
        h: 'The game',
        p: ['The game is free and has no account. You can choose to watch ads for extra corn, but you never have to.'],
      },
      {
        h: 'Corn and purchases',
        ul: [
          'You earn corn by playing. Corn cannot be bought, sold or exchanged for money.',
          'Outfits and items for the hen can be bought in the App Store or Google Play. They only change how the hen looks and do not make the game easier to win.',
          'The store’s terms apply to payment and refunds. For a refund, contact Apple or Google.',
          'Purchases belong to your Apple or Google account and can be restored if you change phones.',
        ],
      },
      {
        h: 'Your saved game',
        p: [
          'Your best score, your corn and how far you have got are only saved on your phone. If you delete the game or change phones, they may be lost, and we cannot get them back. What you have bought can be restored.',
        ],
      },
      {
        h: 'What you may not do',
        ul: [
          'Copy, sell or distribute the game, or modified versions of it.',
          'Modify the game to cheat, to trick others or to make something look as if it comes from us.',
        ],
      },
      {
        h: 'The App Store and Google Play',
        p: ['You download the game from the App Store or Google Play. Their terms apply too.'],
      },
      {
        h: 'The game may change',
        p: [
          'We do our best to make the game work, but we cannot promise that it always will. The game may change, and features may be added or removed. If these terms change, we will update this page before that version is released.',
        ],
      },
      {
        h: 'Rights',
        p: ['The game and everything in it, such as the hen, the pictures, the sounds and the music, belong to Spitakolus AB.'],
      },
      {
        h: 'Contact',
        p: ['Questions? Email support@spitakolus.com.'],
      },
    ],
  },
};

const pt: Texts = {
  name: 'CLUCKWARDS!',
  common: {
    languageLabel: 'Idioma',
    about: 'Sobre o jogo',
    privacy: 'Política de Privacidade',
    terms: 'Termos de Uso',
    contact: 'Contato',
    company: 'CLUCKWARDS! é feito pela Spitakolus AB (empresa sueca, nº de registro 559554-6101).',
  },
  home: {
    metaTitle: 'CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'Direção errada. Velocidade máxima. Ovos voando! Uma galinha que corre de ré e lança ovos. Em breve na App Store e no Google Play.',
    badge: 'Em desenvolvimento',
    otherName: 'Em sueco, o jogo se chama KACKLÄNGES!',
    tagline: 'Direção errada. Velocidade máxima. Ovos voando!',
    lead: 'Uma galinha corre de ré pela fazenda a toda velocidade e lança ovos em tudo o que estiver no caminho.',
    stores: 'O jogo chega em breve à App Store e ao Google Play.',
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
    metaTitle: 'Política de Privacidade do CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'Como o CLUCKWARDS! trata informações. Sem conta, anúncios opcionais e seguros para crianças e compras pela App Store e pelo Google Play.',
    title: 'Política de Privacidade',
    updated: 'Atualizada em 9 de outubro de 2026',
    intro: [
      'O CLUCKWARDS! (KACKLÄNGES! em sueco) é feito pela Spitakolus AB (empresa sueca, nº de registro 559554-6101). A Spitakolus AB é a controladora dos dados descritos aqui.',
      '**Nós não sabemos quem você é.** O jogo não tem conta, e não temos nenhum servidor próprio que receba informações sobre você.',
    ],
    sections: [
      {
        h: 'Resumindo',
        ul: [
          'Seu jogo fica salvo no seu próprio celular.',
          'Anúncios só aparecem se você escolher assistir. Eles vêm do Google AdMob, são configurados para crianças e não se baseiam em quem você é.',
          'As compras são feitas na App Store ou no Google Play. Nós nunca vemos seu nome nem os dados do seu cartão.',
          'Nós nunca vendemos informações.',
        ],
      },
      {
        h: 'O que fica salvo no seu celular',
        p: ['O jogo salva algumas coisas em um arquivo no seu próprio celular, para você continuar de onde parou:'],
        ul: [
          'sua melhor pontuação, seu melhor combo e o checkpoint mais alto que você alcançou',
          'seu milho, quais roupas e acessórios a galinha tem e o que ela está usando',
          'seu progresso nos desafios',
          'quando você assistiu a um anúncio pela última vez, para que exista um limite por dia',
          'se você já viu a introdução e se o som está ligado ou desligado.',
        ],
        after: ['O arquivo fica no celular. Nós não conseguimos vê-lo, e ele não é enviado para nós.'],
      },
      {
        h: 'Anúncios (Google AdMob)',
        p: [
          'Depois de uma partida, você pode escolher assistir a um vídeo curto de anúncio e ganhar milho extra. Nenhum anúncio aparece se você não tocar no botão.',
          'Os anúncios vêm do Google AdMob. Nós os configuramos para crianças: **eles não se baseiam em quem você é nem no que você faz em outros apps, e o jogo não usa o ID de publicidade do celular.**',
          'Para mostrar o anúncio, contar as visualizações e evitar fraudes, o Google ainda recebe algumas informações técnicas do celular:',
        ],
        ul: [
          'o endereço IP, que pode mostrar mais ou menos onde você está (país ou cidade, não a localização exata)',
          'informações sobre o celular, como modelo, idioma e um ID que vale só para os nossos apps',
          'como você interage com o anúncio, por exemplo se o vídeo foi assistido até o fim',
          'relatórios de erro do anúncio.',
        ],
        after: [
          'O Google trata essas informações de acordo com as próprias regras: [Como o Google usa informações de sites ou apps que usam nossos serviços](https://policies.google.com/technologies/partner-sites?hl=pt-BR). Como o jogo trata todos os jogadores como crianças, o Google não pede consentimento para anúncios personalizados e mostra apenas anúncios que não se baseiam em quem você é. Você sempre pode escolher não assistir.',
        ],
      },
      {
        h: 'Compras (App Store, Google Play e RevenueCat)',
        p: [
          'Você pode comprar roupas e acessórios para a galinha. A compra é feita na App Store ou no Google Play, que cuidam do pagamento. Nós nunca recebemos seu nome, seu e-mail nem os dados do seu cartão.',
          'Para verificar as compras e poder restaurá-las se você trocar de celular, usamos um serviço chamado RevenueCat. A RevenueCat recebe um ID aleatório que não diz quem você é, quais compras foram feitas e o recibo da loja. Usamos isso para que as compras funcionem, para evitar fraudes e para ver quantas pessoas compram o quê. A RevenueCat fica nos Estados Unidos, e a transferência é protegida pelas Cláusulas Contratuais Padrão da União Europeia. Saiba mais na [Política de Privacidade da RevenueCat](https://www.revenuecat.com/privacy/).',
          'As compras podem ser bloqueadas com o controle parental do celular, por exemplo o Pedir para Comprar da Apple ou o Family Link do Google.',
        ],
      },
      {
        h: 'Apple e Google',
        p: [
          'A App Store e o Google Play podem coletar informações de acordo com os próprios termos, por exemplo sobre downloads e, se você permitiu nas configurações do celular, relatórios de falhas. Nós podemos ver estatísticas agregadas e relatórios de falhas sem nomes ou dados de contato.',
        ],
      },
      {
        h: 'Por quanto tempo as informações ficam guardadas?',
        p: [
          'O arquivo no celular fica guardado até você apagar o jogo. Se você faz backup do celular (por exemplo no iCloud), o arquivo pode ir junto no seu próprio backup. Ele nunca chega até nós.',
          'As informações das compras ficam na RevenueCat pelo tempo necessário para que as compras funcionem e possam ser restauradas. O Google guarda as informações dos anúncios de acordo com as próprias regras.',
        ],
      },
      {
        h: 'Crianças',
        p: [
          'O jogo é para todas as idades e foi feito para ser seguro para crianças. Os anúncios são configurados para crianças, não se baseiam em quem você é e não usam o ID de publicidade. O jogo não tem chat nem nenhuma forma de compartilhar algo com outros jogadores. Nunca pedimos nome, e-mail ou qualquer outra coisa que mostre quem alguém é.',
        ],
      },
      {
        h: 'Por que podemos tratar as informações',
        p: [
          'As informações das compras são necessárias para entregar o que você comprou (contrato). Os anúncios e a prevenção de fraudes se baseiam no nosso interesse legítimo de poder oferecer o jogo de graça.',
        ],
      },
      {
        h: 'Se algo mudar',
        p: [
          '**Se adicionarmos algo novo, como rankings ou salvamento na nuvem, atualizaremos esta política antes.** A nova política estará aqui e nas lojas antes de essa versão do jogo ser lançada, e pediremos permissão quando a lei exigir.',
        ],
      },
      {
        h: 'Seus direitos',
        p: [
          'Você tem o direito de saber quais informações existem sobre você, de corrigi-las ou apagá-las e de se opor à forma como são usadas. Como não sabemos quem você é, talvez precisemos da sua ajuda para encontrar as informações certas. Envie um e-mail para support@spitakolus.com e nós ajudaremos. Para apagar o que está salvo no celular, apague o jogo.',
          'Você pode reclamar à autoridade sueca de proteção de dados ([imy.se](https://www.imy.se/en/)) ou à autoridade de proteção de dados do seu país (no Brasil, a [ANPD](https://www.gov.br/anpd)).',
        ],
      },
      {
        h: 'Contato',
        p: ['Spitakolus AB, empresa sueca, nº de registro 559554-6101. E-mail: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Termos de Uso do CLUCKWARDS! – Spitakolus AB',
    metaDescription: 'Os termos para jogar CLUCKWARDS!. Grátis, sem conta, anúncios opcionais e compras pelas lojas.',
    title: 'Termos de Uso',
    updated: 'Atualizados em 9 de outubro de 2026',
    intro: [
      'O CLUCKWARDS! (KACKLÄNGES! em sueco) é feito pela Spitakolus AB (empresa sueca, nº de registro 559554-6101). Ao baixar e jogar o jogo, você aceita estes termos. Leia também a [Política de Privacidade](/cluckwards/integritet#portugues).',
    ],
    sections: [
      {
        h: 'O jogo',
        p: ['O jogo é grátis e não tem conta. Você pode escolher assistir a anúncios para ganhar milho extra, mas nunca é obrigatório.'],
      },
      {
        h: 'Milho e compras',
        ul: [
          'Você ganha milho jogando. O milho não pode ser comprado, vendido nem trocado por dinheiro.',
          'Roupas e acessórios para a galinha podem ser comprados na App Store ou no Google Play. Eles só mudam a aparência da galinha e não tornam o jogo mais fácil de vencer.',
          'Os termos da loja valem para o pagamento e o reembolso. Para pedir reembolso, fale com a Apple ou o Google.',
          'As compras pertencem à sua conta da Apple ou do Google e podem ser restauradas se você trocar de celular.',
        ],
      },
      {
        h: 'Seu jogo salvo',
        p: [
          'Sua melhor pontuação, seu milho e até onde você chegou ficam salvos só no seu celular. Se você apagar o jogo ou trocar de celular, isso pode se perder, e não conseguimos recuperar. O que você comprou pode ser restaurado.',
        ],
      },
      {
        h: 'O que você não pode fazer',
        ul: [
          'Copiar, vender ou distribuir o jogo, ou versões modificadas dele.',
          'Modificar o jogo para trapacear, enganar outras pessoas ou fazer algo parecer que vem de nós.',
        ],
      },
      {
        h: 'App Store e Google Play',
        p: ['Você baixa o jogo na App Store ou no Google Play. Os termos deles também valem.'],
      },
      {
        h: 'O jogo pode mudar',
        p: [
          'Fazemos o possível para que o jogo funcione, mas não podemos prometer que ele sempre vai funcionar. O jogo pode mudar, e recursos podem ser adicionados ou removidos. Se estes termos mudarem, atualizaremos esta página antes de essa versão ser lançada.',
        ],
      },
      {
        h: 'Direitos',
        p: ['O jogo e tudo o que há nele, como a galinha, as imagens, os sons e a música, pertencem à Spitakolus AB.'],
      },
      {
        h: 'Contato',
        p: ['Dúvidas? Envie um e-mail para support@spitakolus.com.'],
      },
    ],
  },
};

export function t(lang: Lang): Texts {
  return lang === 'sv' ? sv : lang === 'pt' ? pt : en;
}
