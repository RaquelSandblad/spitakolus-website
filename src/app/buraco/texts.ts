import { MIN_PASSWORD_LENGTH, type Lang } from '@/lib/buraco';

// Alla texter för sidorna om appen Mesa 11 (kortspelet Buraco) på svenska, engelska och portugisiska (Brasilien).
// Mesa 11 är appens namn; Buraco är kortspelet. Adresserna ligger kvar under /buraco – butikerna och appen länkar dit.
// Enkel märkning i texterna: **fet**, [länktext](/buraco/...) och e-postadresser blir länkar.

/** Appens namn (under ikonen och i butikerna, som "Mesa 11: Buraco…"). Samma på alla språk. */
export const APP_NAME = 'Mesa 11';

/** Appikonen som bild när en länk delas (WhatsApp m.fl. visar inte SVG). */
export const OG_ICON = { url: '/buraco/mesa11-icon.png', width: 512, height: 512, alt: APP_NAME };

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
    playButton: string;
    playUrl: string;
    appStoreButton: string;
    /** Appen i App Store: landets butik för sv och pt, för en utan land (Apple väljer besökarens land). */
    appStoreUrl: string;
    /** QR-koden på datorn, som öppnar /buraco/download i mobilen. */
    qrTitle: string;
    qrText: string;
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
  /** Sidan /buraco/v/<kod>, som länken och QR-koden från "Spela med vänner" i appen öppnar. */
  friendLink: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    codeLabel: string;
    copy: CopyCodeTexts;
    invalidTitle: string;
    invalidText: string;
    stepsTitle: string;
    steps: string[];
    note: string;
  };
};

export type CopyCodeTexts = {
  button: string;
  copied: string;
  failed: string;
};

const MIN = MIN_PASSWORD_LENGTH;

const sv: Texts = {
  common: {
    languageLabel: 'Språk',
    about: 'Om Mesa 11',
    privacy: 'Integritet',
    terms: 'Villkor',
    deleteAccount: 'Ta bort konto',
    contact: 'Kontakt',
    company: 'Mesa 11 görs av Spitakolus AB (org.nr 559554-6101).',
  },
  home: {
    metaTitle: 'Mesa 11 – kortspelet Buraco två mot två, online',
    metaDescription: 'Mesa 11 är appen för Buraco, kortspelet två mot två, online. Finns på Google Play och i App Store.',
    badge: 'Nu på Google Play och i App Store',
    playButton: 'Ladda ner på Google Play',
    playUrl: 'https://play.google.com/store/apps/details?id=com.spitakolus.buraco&hl=sv',
    appStoreButton: 'Ladda ner på App Store',
    appStoreUrl: 'https://apps.apple.com/se/app/mesa-11-buraco-kortspel/id6817430182',
    qrTitle: 'Ladda ner till mobilen',
    qrText: 'Rikta mobilens kamera mot koden, så öppnas rätt butik – App Store på iPhone och Google Play på Android.',
    lead: 'Det klassiska kortspelet Buraco, två mot två, online. Samarbeta med din partner, lägg ut serier och bygg kanastor innan motståndarna hinner före.',
    features: [
      {
        title: 'Två mot två',
        text: 'Du och din partner mot två andra spelare. Är en plats fortfarande tom efter 10 sekunder tar en datorspelare den, så du väntar aldrig länge.',
      },
      {
        title: 'Öva mot datorn',
        text: 'Spela mot datorspelare när du vill lära dig spelet eller bara spela i lugn och ro.',
      },
      {
        title: 'Spela med vänner',
        text: 'Lägg till vänner med en vänkod och bjud in dem till ett vänbord. Det finns ingen chatt, bara kortspelet.',
      },
      {
        title: 'Öppen, Stängd eller Strikt',
        text: 'Tre spelsätt som bestämmer hur slänghögen och serierna fungerar. Välj det du tycker om.',
      },
    ],
    freeTitle: 'Gratis att spela',
    freeText: 'Mesa 11 är gratis och har reklam. Med **Premium** slipper du all reklam och är med i rankingen – topplistorna för månaden och för alla tider, där bara Premium-spelare tävlar. I övrigt är spelet precis likadant för alla. Inga riktiga pengar, inga priser.',
    accountTitle: 'Ditt konto',
    accountItems: [
      'Du skapar ett konto i appen med e-post, användarnamn och lösenord. Användarnamnet syns för de andra vid bordet – och i rankingen om du har Premium.',
      '**Glömt lösenordet?** Tryck på ”Glömt lösenordet?” i appen, så får du ett mejl med en länk där du väljer ett nytt.',
      '**Ta bort kontot:** i appen under profilmenyn → Ta bort konto, eller [här på webben](/buraco/ta-bort-konto).',
      '**Anmäl en annons eller ett namn:** i appen under profilmenyn → Anmäl en annons, eller i spelets meny → Anmäl ett användarnamn (från version 1.3 på iPhone och iPad och version 0.1.20 på Android). Då öppnas ett mejl till support@spitakolus.com.',
    ],
    linksTitle: 'Mer om Mesa 11',
  },
  privacy: {
    metaTitle: 'Integritetspolicy för Mesa 11 – Spitakolus AB',
    metaDescription: 'Vilka uppgifter appen Mesa 11 (kortspelet Buraco) sparar, varför, var de finns och hur du tar bort dem.',
    title: 'Integritetspolicy',
    updated: 'Senast ändrad [publiceringsdagen]',
    intro: [
      'Här beskriver vi vilka personuppgifter appen Mesa 11 (kortspelet Buraco) och dess spelserver behandlar, varför, var de finns och vilka rättigheter du har enligt dataskyddsförordningen (GDPR).',
      'Nytt [publiceringsdagen]: avsnitt 8 om anmälningar och mejl till oss, avsnitt 9 om appen och uppdateringar, mer om vad Google får för annonserna (avsnitt 6 och 11), Loopia (avsnitt 11) och hur länge vi sparar kvitton och mejl (avsnitt 12).',
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
          '**Användarnamn** – det syns för de andra spelarna vid bordet. Har du Premium syns det också för andra Premium-spelare i rankingen.',
          '**Lösenord** – sköts av Supabase Auth och lagras bara hashat. Ingen, inte heller vi, kan läsa det.',
          '**Statistik** – hur många partier du har spelat och vunnit.',
          '**Rankingresultat** – för varje onlineparti som du spelar klart eller lämnar sparar vi när partiet slutade, om du vann och hur många rankingpoäng det gav (vinst 3, förlust 1, lämnat i förtid 0). Övningspartier mot datorn sparas inte.',
          '**Premium** – om du har köpt Premium (ingen reklam och plats i rankingen).',
          '**Tidsspärr** – om du har lämnat ett pågående parti, så att tiden på 5 minuter innan nästa parti kan räknas.',
          '**Vänkod** – en slumpad kod som du kan dela, så att andra kan skicka en vänförfrågan till dig. Du kan byta koden när du vill, och då slutar den gamla att fungera direkt. Koden skapas först när du öppnar Vänner i appen.',
          '**Vänner, vänförfrågningar och blockeringar** – vilka du är vän med, förfrågningar som du har skickat och fått, och konton som du har blockerat. En vänförfrågan sparas i högst 30 dagar.',
          '**Inställning för onlinestatus** – om dina vänner får se när du är online.',
          '**Notiser** – om du tillåter notiser: telefonens push-adress, om telefonen är Android eller iPhone, appens språk och när appen senast hörde av sig, och dina val för notiser och tysta timmar (med telefonens tidszon när tysta timmar är på).',
        ],
        after: [
          'Det finns ingen chatt i spelet. Pågående partier – korten, dragen och vilka som sitter vid bordet – finns bara i spelserverns minne och sparas inte när partiet är slut. Det enda som sparas efter partiet är din statistik och ditt rankingresultat (se ovan). För att spelet ska kunna skicka data till din telefon behöver spelservern tekniska uppgifter som din IP-adress medan du är ansluten.',
          'Railway (spelservern) och Supabase (kontona) sparar också **tekniska loggar** över anrop och händelser, med bland annat IP-adress, kontots id-nummer, tidpunkt och, vid inloggning och lösenordsbyte, e-postadress. Loggarna används bara för felsökning och säkerhet och sparas bara en begränsad tid hos leverantörerna innan de raderas automatiskt.',
        ],
      },
      {
        h: 'Rankingen',
        p: [
          'Har du Premium är du med i rankingen: en topplista för månaden och en för alla tider. Där syns ditt användarnamn, din placering, dina rankingpoäng, antal vinster och antal partier. Bara Premium-spelare står i rankingen, och bara Premium-spelare kan se den – att du står där visar alltså också att du har Premium.',
          'Resultaten sparas för alla spelare, även utan Premium. När du har Premium räknas alla dina sparade onlinepartier in i det som andra Premium-spelare ser: månadens partier i topplistan för månaden, och alla partier – även de från tiden innan du hade Premium – i topplistan för alla tider. Slutar du ha Premium syns du inte längre i rankingen, men resultaten finns kvar tills du tar bort kontot och syns igen om du skaffar Premium på nytt.',
        ],
      },
      {
        h: 'Vänner och vänbord',
        p: [
          'I appen kan du spela med vänner. Man blir vänner bara genom en vänkod som delas utanför spelet, och den som äger koden måste godkänna förfrågan. Det går inte att söka efter andra spelare.',
        ],
        ul: [
          '**Ditt användarnamn** visas för den som skriver in din kod (så att hen kan se att det är rätt person innan förfrågan skickas) och för dina vänner.',
          '**Onlinestatus** – bara vänner som du har godkänt ser om du är online, spelar eller är offline. Statusen räknas fram medan du är ansluten, finns bara i spelserverns minne och sparas aldrig. Du kan stänga av den i appen. Då syns du alltid som offline, men inbjudningar kommer ändå fram.',
          '**Inbjudningar och vänbord** finns bara i spelserverns minne och sparas inte. En inbjudan gäller i högst 20 minuter. Svaren (”Ja”, ”Om 5 min” och ”Inte nu”) är färdiga texter – det finns ingen chatt och inga meddelanden.',
          '**Partier vid vänbord** räknas i din statistik och i rankingen bara om varje lag hade minst en riktig spelare när partiet började. Spelar två av er i samma lag mot datorn räknas partiet inte, och inget om det sparas. Lämnar du ett parti som räknas och inte tar tillbaka din plats innan det är slut, sparas det som lämnat (0 rankingpoäng). Du får ingen tidsspärr för att lämna ett vänparti.',
          '**Avböjer du en förfrågan** eller tar bort en vän får den andra inget meddelande om det. Blockerar du någon kan hen inte längre skicka förfrågningar till dig, bjuda in dig eller se din status. Blockeringen gäller kontot, även om någon av er byter kod.',
          '**När du delar din kod** via WhatsApp eller telefonens delningsmeny sker det i appen som du väljer. Vi får inget därifrån och läser aldrig dina kontakter. Länksidan på spitakolus.com visar bara koden – aldrig vem den tillhör.',
        ],
      },
      {
        h: 'Notiser',
        p: [
          'Om du tillåter det i telefonen får du en notis när en vän bjuder in dig till ett vänbord, när någon skickar en vänförfrågan till dig och när din förfrågan har godkänts. Inga andra notiser och ingen reklam, utom en testnotis om du själv trycker på ”Skicka en testnotis”. Notisen innehåller en fast text, avsändarens användarnamn, ditt kontos id-nummer och tekniska id:n – vid en inbjudan inbjudans och bordets id, vid en vänförfrågan eller ett godkännande avsändarens kontos id-nummer. Inget annat.',
        ],
        ul: [
          '**Push-adressen** är en slumpad kod från Google eller Apple som gör att notisen hittar rätt telefon. Vi sparar den kopplad till ditt konto, tillsammans med om telefonen är Android eller iPhone och appens språk (så att notisen kommer på rätt språk). Loggar du ut tas den bort.',
          '**Tysta timmar** väljer du själv i appen under Vänner. När de är på sparas telefonens tidszon (till exempel Europe/Stockholm), så att timmarna följer din klocka. Inbjudningar i appen kommer alltid fram medan appen är öppen.',
          '**Om appen är öppen** eller i bakgrunden vet spelservern medan du är ansluten, så att du inte får en notis om något du redan ser. Det finns bara i serverns minne och sparas inte.',
          'Du kan stänga av notiserna i appen eller i telefonens inställningar när du vill.',
          'Notiserna skickas via **Firebase Cloud Messaging** från Google och, till iPhone och iPad, vidare via Apples tjänst för notiser. Vi använder inte Firebase Analytics eller någon annan spårning från Firebase.',
        ],
      },
      {
        h: 'Annonser',
        p: [
          'Om du inte har Premium visas en reklamrad och en helskärmsannons efter varje parti. Annonserna kommer från **Google AdMob**. Appen ber Google bara om annonser som passar från 13 år (Googles nivå Teen).',
          'I EU/EES, Storbritannien och Schweiz visar appen först Googles fråga om samtycke. Om du samtycker kan Google använda telefonens annons-id och din ungefärliga plats för att visa och mäta annonser. Om du inte samtycker visas ändå annonser, men de anpassas inte efter dig. Google får ändå telefonens IP-adress och uppgifter om telefonen, för att visa annonsen, räkna visningar och stoppa bedrägerier. Du kan ändra ditt val i appen: profilmenyn → Annonsinställningar (samtycke).',
          'I andra länder, till exempel Brasilien, visar appen inte Googles fråga, och Google kan visa anpassade annonser med hjälp av telefonens annons-id och din ungefärliga plats. På Android kan du stänga av det genom att ta bort annons-id:t i telefonens inställningar.',
          'På iPhone och iPad frågar appen också, i alla länder, om den får spåra dig (Apples fråga om spårning). I EU/EES, Storbritannien och Schweiz kommer den efter Googles fråga. Annons-id:t används bara om du tillåter det. Svaret kan du ändra under Inställningar → Integritet och säkerhet → Spårning.',
          'Har du gett ditt samtycke kan du när som helst ta tillbaka det. Hittar du inte valet i appen, mejla support@spitakolus.com. Läs mer om hur Google använder uppgifter på [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).',
        ],
      },
      {
        h: 'Köp av Premium',
        p: [
          'Premium är en prenumeration som köps via Google Play eller App Store. Det är Google respektive Apple som tar betalt och hanterar dina betalningsuppgifter. Köpet kontrolleras via **RevenueCat**, som får kvittot från butiken kopplat till ditt kontos id-nummer (inte din e-post eller ditt användarnamn) och talar om för vår spelserver om du har Premium. Vi får bara veta att köpet är gjort – aldrig ditt kortnummer eller andra betalningsuppgifter.',
        ],
      },
      {
        h: 'Anmälningar och mejl till oss',
        p: [
          'I appen kan du anmäla en annons (profilmenyn → Anmäl en annons, eller efter helskärmsannonsen) och ett användarnamn vid bordet (spelets meny → Anmäl ett användarnamn, när andra riktiga spelare sitter vid bordet). Det finns från version 1.3 på iPhone och iPad och version 0.1.20 på Android.',
          'Appen skickar inget själv. Den öppnar ett färdigt mejl i din egen e-postapp, till support@spitakolus.com, och du bestämmer om du vill skicka det. Mejlet innehåller det du skriver, appens versionsnummer och, när du anmäler ett namn, det användarnamnet. Vi får också din e-postadress och det avsändarnamn som din e-postapp visar.',
          'Vi använder anmälan för att gå igenom den: vi spärrar olämpliga annonser hos Google AdMob och byter eller tar bort användarnamn som bryter mot användarvillkoren. Anmäler någon ditt användarnamn får vi alltså ditt användarnamn i ett mejl. Mejl som du skickar till support@spitakolus.com av andra skäl använder vi bara för att svara dig.',
        ],
      },
      {
        h: 'Appen och uppdateringar',
        p: [
          'Från version 1.3 på iPhone och iPad och version 0.1.20 på Android finns hela spelet i appen, också typsnitten. Appen hämtar ingen kod för spelet eller appens funktioner, varken från oss eller från någon annan. Annonserna och Googles fråga om samtycke hämtas från Google (se Annonser). Nya versioner kommer bara via App Store och Google Play.',
          'Äldre versioner (1.0–1.2 på iPhone och iPad och versioner före 0.1.20 på Android) har en funktion som hämtar spelets kod från vår egen spelserver. Sedan 3 november 2026 kan de därifrån som mest få samma kod som i version 1.2 på iPhone och iPad, aldrig ny kod. Inga personuppgifter skickas till någon annan för det. De äldre versionerna hämtar också typsnitten från Google Fonts, och då får Google telefonens IP-adress. Google är ett amerikanskt bolag, så IP-adressen kan föras över till USA. Google omfattas av EU:s och USA:s ramverk för dataskydd (EU-U.S. Data Privacy Framework). Hämtningen av typsnitten sker med stöd av vårt berättigade intresse av att de äldre versionerna ska fungera (artikel 6.1 f GDPR, och i Brasilien artikel 7 IX LGPD). Från version 1.3 på iPhone och iPad och version 0.1.20 på Android hämtar spelet inga typsnitt från Google.',
        ],
      },
      {
        h: 'Varför och med vilken rätt?',
        ul: [
          '**För att ge dig spelet** (konto, inloggning, användarnamn, partier, statistik, ranking, tidsspärr, Premium och, i äldre versioner av appen, hämtningen av spelets kod): det behövs för att uppfylla avtalet med dig, alltså användarvillkoren (artikel 6.1 b GDPR).',
          '**Kvitton för köp av Premium när du har tagit bort kontot**, som vi behåller i högst ett år efter att prenumerationen har upphört: vårt berättigade intresse av att kunna svara på frågor om köpet och hantera återbetalningar (artikel 6.1 f GDPR, och i Brasilien artikel 7 IX LGPD).',
          '**Anpassade annonser**: i EU/EES, Storbritannien och Schweiz ditt samtycke (artikel 6.1 a GDPR). I andra länder vårt berättigade intresse av att finansiera det kostnadsfria spelet med reklam (artikel 6.1 f GDPR, och i Brasilien artikel 7 IX LGPD). Du kan när som helst invända genom att stänga av anpassade annonser i telefonens inställningar.',
          '**Annonser som inte är anpassade** (för dig som inte har Premium): vårt berättigade intresse av att finansiera det kostnadsfria spelet med reklam (artikel 6.1 f GDPR, och i Brasilien artikel 7 IX LGPD).',
          '**Säkerhet, felsökning och att stoppa fusk och missbruk** (bland annat tekniska loggar): vårt berättigade intresse av en trygg, fungerande och schysst tjänst (artikel 6.1 f GDPR).',
          '**Vänner** (vänkod, vänlista, förfrågningar, blockeringar, onlinestatus, inbjudningar och vänbord): det behövs för att uppfylla avtalet med dig (artikel 6.1 b GDPR).',
          '**Notiser** (push-adress, språk, notisinställningar och tysta timmar), när du har tillåtit notiser: det behövs för att uppfylla avtalet med dig (artikel 6.1 b GDPR). Du kan stänga av dem när du vill.',
          '**Gränser för kodförsök, förfrågningar och inbjudningar, och blockeringar**, för att stoppa missbruk och skydda spelarna: vårt berättigade intresse av en trygg tjänst (artikel 6.1 f GDPR).',
          '**Anmälningar och mejl till supporten**: vårt berättigade intresse av en trygg tjänst och av att kunna svara dig (artikel 6.1 f GDPR).',
        ],
      },
      {
        h: 'Var finns uppgifterna och vilka hjälper oss?',
        ul: [
          '**Supabase** – konton (e-post, användarnamn, hashat lösenord, statistik, rankingresultat, Premium och tidsspärr) och vänner (vänkod, vänlista, förfrågningar, blockeringar och inställningen för onlinestatus) och notiser (push-adresser och notisinställningar), på servrar i EU (Stockholm, Sverige). Supabase är ett bolag i Singapore, och uppgifter kan föras över till länder utanför EU, till exempel Singapore och USA, vid support och drift. Överföringen skyddas med EU:s standardavtalsklausuler.',
          '**Railway** – spelservern, i EU-regionen (Amsterdam, Nederländerna). Railway är ett amerikanskt bolag, så uppgifter kan föras över till USA. Överföringen skyddas med EU:s standardavtalsklausuler.',
          '**Resend** – skickar mejlet när du har tryckt på ”Glömt lösenordet?” och får då din e-postadress. Resend är ett amerikanskt bolag, så uppgifter kan föras över till USA. Överföringen skyddas med EU:s standardavtalsklausuler.',
          '**RevenueCat** – kontrollerar köp av Premium (se ovan). RevenueCat är ett amerikanskt bolag, så uppgifter kan föras över till USA. Överföringen skyddas med EU:s standardavtalsklausuler.',
          '**Google AdMob** – annonser, för dig som inte har Premium (se avsnitt 6). Google får då telefonens IP-adress, uppgifter om telefonen och appen (till exempel modell, operativsystem och språk), vilka annonser som visas och om du trycker på dem, felrapporter från annonsdelen och, när det är tillåtet, telefonens annons-id. Google använder uppgifterna som självständigt personuppgiftsansvarig enligt Googles villkor för annonser. Google är ett amerikanskt bolag, så uppgifter kan föras över till USA. Google omfattas av EU:s och USA:s ramverk för dataskydd (EU-U.S. Data Privacy Framework).',
          '**Google Firebase Cloud Messaging** – skickar notiserna och får då push-adressen, notisens text och id-numren i den. Google är ett amerikanskt bolag, så uppgifter kan föras över till USA. Överföringen skyddas med EU:s standardavtalsklausuler. Till iPhone och iPad går notisen vidare via **Apple Push Notification service**.',
          '**Google Play och Apple App Store** – köp av Premium. De hanterar betalningen som egna personuppgiftsansvariga enligt sina egna villkor.',
          '**Vercel** – driver webbplatsen spitakolus.com, med bland annat den här policyn, sidan för att ta bort kontot och länksidan för vänkoder. Vercel sparar tekniska loggar över besöken (bland annat IP-adress och besökt adress – för länksidan alltså vänkoden) en begränsad tid. Vercel är ett amerikanskt bolag, så uppgifter kan föras över till USA. Överföringen skyddas med EU:s standardavtalsklausuler.',
          '**Loopia** – tar emot och lagrar mejl till support@spitakolus.com, också anmälningar, på servrar i Sverige.',
        ],
        after: [
          'Supabase, Railway, Resend, RevenueCat, Vercel, Loopia och Google Firebase behandlar uppgifterna bara för vår räkning och får inte använda dem till något annat. Alla som vi delar uppgifter med ska skydda dem minst lika väl som den här policyn beskriver: biträdena ovan enligt sina avtal med oss och Google enligt Googles villkor för annonser. Vi säljer aldrig dina uppgifter. Allt som appen, spelservern och webbplatsen skickar går krypterat.',
        ],
      },
      {
        h: 'Hur länge sparar vi uppgifterna?',
        p: [
          'Kontouppgifterna, statistiken och rankingresultaten sparas så länge du har kvar ditt konto. Pågående partier finns bara kvar medan partiet pågår. När du tar bort ditt konto raderas kontot, användarnamnet, statistiken och rankingresultaten direkt och för alltid. Tekniska loggar (se ovan) sparas bara en begränsad tid och raderas sedan automatiskt.',
          'Vänkoden och vänlistan sparas tills du byter kod, tar bort en vän eller tar bort kontot. En vänförfrågan sparas i högst 30 dagar. Blockeringar sparas tills du häver dem eller tills något av kontona tas bort. Onlinestatus och inbjudningar sparas aldrig.',
          'En push-adress sparas tills du loggar ut eller tar bort kontot, eller tills Google eller Apple meddelar att den inte gäller längre. En push-adress som inte har använts på 180 dagar raderas automatiskt. Notiserna sparas inte hos oss när de har skickats.',
          'Uppgifter om köp av Premium (kvitton kopplade till kontots id-nummer) raderas inte direkt när du tar bort kontot. Vi behåller dem hos RevenueCat i högst ett år efter att prenumerationen har upphört, för att kunna svara på frågor om köpet och hantera återbetalningar (vårt berättigade intresse, artikel 6.1 f GDPR). Sedan raderar vi dem. Google Play och App Store sparar köpet enligt sina egna villkor.',
          'Mejl till support@spitakolus.com, också anmälningar, sparar vi så länge ärendet pågår och därefter i högst 12 månader, så att vi kan se tidigare frågor om du hör av dig igen. Sedan raderar vi dem, också våra egna kopior.',
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
        after: [
          'Kontot, användarnamnet, statistiken och rankingresultaten raderas direkt. Det går inte att ångra. Tekniska loggar raderas automatiskt efter en begränsad tid, och uppgifter om köp finns kvar hos RevenueCat och butiken (se ovan), och en prenumeration på Premium fortsätter tills du avslutar den i Google Play eller App Store.',
          'Samtidigt raderas din vänkod, din vänlista (du försvinner från dina vänners listor), vänförfrågningar till och från dig och alla blockeringar – både dina och andras blockeringar av dig – liksom telefonernas push-adresser och dina notisinställningar.',
        ],
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
          'Tycker du att vi behandlar dina uppgifter fel får du gärna höra av dig till oss först. Du har också rätt att klaga hos Integritetsskyddsmyndigheten (IMY), [www.imy.se](https://www.imy.se), eller hos dataskyddsmyndigheten i ditt eget land.',
        ],
      },
      {
        h: 'Ålder',
        p: ['Mesa 11 är till för dig som är 13 år eller äldre. Appen frågar inte efter din ålder. Är du under 16 år, fråga en förälder innan du svarar ja till anpassade annonser i Googles fråga.'],
      },
      {
        h: 'Ändringar',
        p: [
          'Om vi ändrar den här policyn uppdaterar vi datumet överst. Vid större ändringar skriver vi också överst på sidan vad som är nytt.',
        ],
      },
      {
        h: 'Kontakt',
        p: ['Spitakolus AB, org.nr 559554-6101. E-post: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Användarvillkor för Mesa 11 – Spitakolus AB',
    metaDescription: 'Reglerna för att spela Buraco i appen Mesa 11: schysst spel, användarnamn, Premium, ranking och mer.',
    title: 'Användarvillkor',
    updated: 'Senast ändrade [publiceringsdagen]',
    intro: [
      'De här villkoren gäller när du använder appen Mesa 11 (kortspelet Buraco) från Spitakolus AB (org.nr 559554-6101). När du skapar ett konto godkänner du villkoren. Läs också vår [integritetspolicy](/buraco/integritet).',
      'Nytt [publiceringsdagen]: hur du anmäler ett användarnamn (avsnitt 3) och en annons (avsnitt 6), annonsen efter partiet och Premium (avsnitt 6) och att funktioner ändras i nya versioner av appen (avsnitt 9).',
    ],
    sections: [
      {
        h: 'Tjänsten',
        p: [
          'I Mesa 11 spelar du kortspelet Buraco två mot två, mot riktiga spelare eller datorspelare. Med Spela nu letar vi efter riktiga spelare online åt dig; är en plats fortfarande tom efter 10 sekunder tar en datorspelare den. Vid ett vänbord spelar du med dina vänner, och platser som ingen vän sitter på tas av datorspelare. Du kan också öva mot datorspelare. Datorspelarna visas med en robot (från version 1.3 på iPhone och iPad och version 0.1.20 på Android, också med ordet DATOR), så att du ser vem som är en riktig spelare och vem som är en datorspelare. Du väljer spelsätt (Öppen, Stängd eller Strikt).',
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
        p: ['Ditt användarnamn syns för andra spelare – vid bordet och, om du har Premium, i rankingen. Det får inte:'],
        ul: [
          'vara stötande, kränkande, hotfullt, sexuellt eller rasistiskt,',
          'utge sig för att vara någon annan, till exempel en annan spelare eller Spitakolus,',
          'innehålla personuppgifter, reklam eller länkar.',
        ],
        after: [
          'Vi kan ändra eller ta bort ett användarnamn som bryter mot det här.',
          'Ser du ett sådant namn vid bordet kan du anmäla det i appen (spelets meny → Anmäl ett användarnamn, från version 1.3 på iPhone och iPad och version 0.1.20 på Android). Då öppnas ett mejl till support@spitakolus.com. Vi går igenom varje anmälan.',
        ],
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
          'Lämnar du ett pågående onlineparti – eller tappar anslutningen i mer än två minuter – tar en datorspelare över din plats. Du får då vänta **5 minuter** innan du kan börja nästa parti, och partiet du lämnade ger 0 rankingpoäng. Det gäller alla, även den som har Premium, så att partierna inte förstörs för de andra. Vid ett vänbord blir det ingen tidsspärr: du kan ta tillbaka din plats så länge partiet pågår.',
        ],
      },
      {
        h: 'Reklam och Premium',
        ul: [
          'Mesa 11 är gratis och har reklam: en reklamrad och en helskärmsannons efter varje parti.',
          'Annonserna kommer från Google AdMob, och appen ber bara om annonser som passar från 13 år. Ser du en olämplig annons kan du anmäla den i appen (profilmenyn → Anmäl en annons, eller efter helskärmsannonsen, från version 1.3 på iPhone och iPad och version 0.1.20 på Android). Då öppnas ett mejl till support@spitakolus.com, och vi spärrar olämpliga annonser hos Google.',
          '**Premium** tar bort all reklam och ger dig en plats i rankingen. Det ger inga fördelar i själva spelet – reglerna, borden och de 5 minuterna när man lämnar ett parti är desamma för alla. Med Premium slipper du också vänta på annonsen efter partiet.',
          'Premium är en prenumeration som köps via Google Play eller App Store och förnyas automatiskt tills du avslutar den där. Priset visas i butiken innan du köper. Betalning, kvitton, uppsägning och återbetalningar sköts av butiken enligt dess villkor.',
        ],
      },
      {
        h: 'Rankingen',
        ul: [
          'Rankingen är en topplista för månaden (den börjar om den 1:a varje månad) och en för alla tider.',
          'Varje onlineparti ger rankingpoäng: vinst 3 poäng, förlust 1 poäng och lämnat parti 0 poäng. Övningspartier mot datorn räknas inte. Partier vid vänbord räknas bara om varje lag hade minst en riktig spelare när partiet började. Vid lika poäng går den med flest vinster först.',
          'Bara Premium-spelare står i rankingen och kan se den. Andra Premium-spelare ser där ditt användarnamn, dina poäng, dina vinster och ditt antal partier.',
          'Dina onlinepartier räknas även innan du har Premium. När du skaffar Premium syns du direkt med månadens poäng i topplistan för månaden och med alla dina poäng – även från tiden innan du hade Premium – i topplistan för alla tider. Slutar du ha Premium försvinner du ur rankingen, men poängen finns kvar tills du tar bort kontot.',
        ],
      },
      {
        h: 'Inga riktiga pengar',
        p: [
          'Mesa 11 är inte hasardspel. Du spelar inte om riktiga pengar och kan inte vinna pengar eller priser. Poäng, rankingpoäng och statistik i spelet har inget värde utanför spelet.',
        ],
      },
      {
        h: 'Ändringar av tjänsten',
        p: [
          'Vi utvecklar spelet och kan ändra, lägga till eller ta bort funktioner i nya versioner av appen. Vi kan också göra uppehåll i tjänsten eller avsluta den. Om vi ändrar villkoren uppdaterar vi datumet överst, och vid större ändringar skriver vi också där vad som är nytt.',
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
    metaTitle: 'Ta bort ditt konto i Mesa 11 – Spitakolus AB',
    metaDescription: 'Så tar du bort ditt konto i appen Mesa 11 (kortspelet Buraco) och vad som raderas.',
    title: 'Ta bort ditt konto',
    intro: 'Här kan du ta bort ditt konto i Mesa 11 direkt och för alltid.',
    whatTitle: 'Det här raderas',
    what: [
      'ditt konto, e-postadress och lösenord,',
      'ditt användarnamn,',
      'din statistik (spelade och vunna partier) och dina rankingresultat,',
      'din vänkod och din vänlista (du försvinner från dina vänners listor), vänförfrågningar och blockeringar,',
      'telefonernas push-adresser och dina notisinställningar,',
      'din Premium och din eventuella tidsspärr.',
    ],
    warning: 'Det går inte att ångra. Premium försvinner från kontot, men en prenumeration fortsätter att löpa och kosta pengar tills du avslutar den i Google Play eller App Store. Vill du inte betala mer, avsluta den där. Behåller du prenumerationen kan du flytta den till ett nytt konto med ”Återställ köp” i appen.',
    appTitle: 'I appen',
    appText: 'Öppna Mesa 11, gå till profilmenyn och tryck på **Ta bort konto**.',
    mailTitle: 'Kommer du inte åt kontot?',
    mailText: 'Mejla support@spitakolus.com från e-postadressen du har kontot på, så tar vi bort kontot och allt i listan ovan.',
    form: {
      formTitle: 'Här på webben',
      loginLabel: 'E-post eller användarnamn',
      loginPlaceholder: 'namn@exempel.se',
      passwordLabel: 'Lösenord',
      confirmLabel: 'Jag förstår att mitt konto, mitt användarnamn, min statistik, mina rankingresultat och min vänlista tas bort för alltid.',
      submit: 'Ta bort mitt konto för alltid',
      working: 'Tar bort …',
      missingFields: 'Skriv din e-post eller ditt användarnamn och ditt lösenord.',
      needConfirm: 'Kryssa i rutan för att bekräfta att du vill ta bort kontot.',
      doneTitle: 'Kontot är borttaget.',
      doneText: 'Ditt konto, ditt användarnamn, din statistik, dina rankingresultat och din vänlista är raderade. Tack för att du har spelat Buraco!',
    },
  },
  reset: {
    metaTitle: 'Nytt lösenord – Mesa 11',
    title: 'Nytt lösenord',
    form: {
      newPassword: 'Nytt lösenord',
      placeholder: `Minst ${MIN} tecken`,
      repeat: 'Samma lösenord igen',
      save: 'Spara nytt lösenord',
      saving: 'Sparar …',
      tooShort: `Lösenordet måste vara minst ${MIN} tecken.`,
      mismatch: 'Lösenorden är inte likadana. Skriv samma lösenord i båda fälten.',
      noLink: 'Tryck på **Glömt lösenordet?** när du loggar in i Mesa 11, så får du ett mejl med en länk hit.',
      doneTitle: 'Klart!',
      doneText: 'Ditt lösenord är bytt. Öppna Mesa 11 och logga in med det nya lösenordet.',
      notConfigured: 'Det går inte att byta lösenord just nu. Försök igen lite senare.',
    },
  },
  friendLink: {
    metaTitle: 'Spela Buraco med en vän i Mesa 11',
    metaDescription: 'Du har fått en vänkod till Mesa 11, appen för kortspelet Buraco. Lägg till koden i appen, så kan ni spela vid samma bord.',
    title: 'Spela Buraco med en vän i Mesa 11',
    codeLabel: 'Vänkod',
    copy: {
      button: 'Kopiera koden',
      copied: 'Kopierad!',
      failed: 'Det gick inte att kopiera. Markera koden och kopiera den själv.',
    },
    invalidTitle: 'Länken är inte komplett.',
    // Exempelkoden har ett hårt bindestreck (U+2011), så att den inte bryts mitt i.
    invalidText: 'Be den som skickade länken om vänkoden igen – den har 8 tecken, till exempel K7QM‑4XPD.',
    stepsTitle: 'Så här gör du',
    steps: [
      'Ladda ner **Mesa 11** – det är gratis – och skapa ett konto eller logga in.',
      'Öppna Mesa 11 → **Spela med vänner** → **Lägg till vän** och skriv koden.',
      'Skicka förfrågan. Ni blir vänner när den som gav dig koden har godkänt den – sedan kan ni bjuda in varandra till ett bord.',
    ],
    note: 'Sidan visar bara koden – inte vem den tillhör. Namnet ser du i appen innan du skickar förfrågan. Lägg bara till personer du känner.',
  },
};

const en: Texts = {
  common: {
    languageLabel: 'Language',
    about: 'About Mesa 11',
    privacy: 'Privacy',
    terms: 'Terms',
    deleteAccount: 'Delete account',
    contact: 'Contact',
    company: 'Mesa 11 is made by Spitakolus AB (Swedish company reg. no. 559554-6101).',
  },
  home: {
    metaTitle: 'Mesa 11 – Buraco, the two-against-two card game, online',
    metaDescription: 'Mesa 11 is the app for Buraco, the card game played two against two, online. Available on Google Play and the App Store.',
    badge: 'Now on Google Play and the App Store',
    playButton: 'Get it on Google Play',
    playUrl: 'https://play.google.com/store/apps/details?id=com.spitakolus.buraco&hl=en',
    appStoreButton: 'Download on the App Store',
    appStoreUrl: 'https://apps.apple.com/app/id6817430182',
    qrTitle: 'Get it on your phone',
    qrText: 'Point your phone camera at the code to open the right store – the App Store on iPhone, Google Play on Android.',
    lead: 'The classic card game Buraco, two against two, online. Team up with your partner, lay down melds and build canastas before your opponents do.',
    features: [
      {
        title: 'Two against two',
        text: 'You and your partner against two other players. If a seat is still empty after 10 seconds, a computer player takes it, so you never wait long.',
      },
      {
        title: 'Practise against the computer',
        text: 'Play against computer players when you want to learn the game or just play at your own pace.',
      },
      {
        title: 'Play with friends',
        text: 'Add friends with a friend code and invite them to a friends table. There is no chat, just the card game.',
      },
      {
        title: 'Open, Closed or Strict',
        text: 'Three modes that decide how the discard pile and the melds work. Pick the one you like.',
      },
    ],
    freeTitle: 'Free to play',
    freeText: 'Mesa 11 is free and shows ads. With **Premium** you get no ads at all and a place in the ranking – the monthly and all-time leaderboards, where only Premium players compete. Otherwise the game is exactly the same for everyone. No real money, no prizes.',
    accountTitle: 'Your account',
    accountItems: [
      'You create an account in the app with an email address, a username and a password. Your username is shown to the other players at the table – and in the ranking if you have Premium.',
      '**Forgot your password?** Tap “Forgot your password?” in the app and we will email you a link where you can choose a new one.',
      '**Delete your account:** in the app via the profile menu → Delete account, or [here on the web](/buraco/ta-bort-konto).',
      '**Report an ad or a name:** in the app via the profile menu → Report an ad, or the game menu → Report a username (from version 1.3 on iPhone and iPad and version 0.1.20 on Android). This opens an email to support@spitakolus.com.',
    ],
    linksTitle: 'More about Mesa 11',
  },
  privacy: {
    metaTitle: 'Mesa 11 Privacy Policy – Spitakolus AB',
    metaDescription: 'What data the Mesa 11 app (the card game Buraco) stores, why, where it is kept and how to delete it.',
    title: 'Privacy Policy',
    updated: 'Last updated [publication date]',
    intro: [
      'This policy explains what personal data the Mesa 11 app (the card game Buraco) and its game server process, why, where it is kept and what rights you have under the General Data Protection Regulation (GDPR).',
      'New on [publication date]: section 8 on reports and emails to us, section 9 on the app and updates, more about what Google receives for the ads (sections 6 and 11), Loopia (section 11) and how long we keep receipts and emails (section 12).',
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
          '**Username** – shown to the other players at the table. If you have Premium, it is also shown to other Premium players in the ranking.',
          '**Password** – handled by Supabase Auth and stored only in hashed form. Nobody, not even we, can read it.',
          '**Statistics** – how many games you have played and won.',
          '**Ranking results** – for every online game you finish or leave, we store when the game ended, whether you won and how many ranking points it gave (win 3, loss 1, left early 0). Practice games against the computer are not stored.',
          '**Premium** – whether you have bought Premium (no ads and a place in the ranking).',
          '**Time-out** – whether you have left a game in progress, so that the 5-minute wait before your next game can be counted.',
          '**Friend code** – a random code you can share so that others can send you a friend request. You can replace it at any time, and the old code stops working immediately. The code is only created when you open Friends in the app.',
          '**Friends, friend requests and blocks** – who you are friends with, requests you have sent and received, and accounts you have blocked. A friend request is kept for at most 30 days.',
          '**Online status setting** – whether your friends may see when you are online.',
          '**Notifications** – if you allow notifications: your phone’s push address, whether the phone is Android or iPhone, the app language and when the app last checked in, and your notification and quiet hours settings (with your phone’s time zone when quiet hours are on).',
        ],
        after: [
          'There is no chat in the game. Games in progress – the cards, the moves and who is at the table – exist only in the game server’s memory and are not stored once the game is over. The only things kept afterwards are your statistics and your ranking result (see above). To send data to your phone, the game server needs technical data such as your IP address while you are connected.',
          'Railway (the game server) and Supabase (the accounts) also keep **technical logs** of requests and events, including IP address, account ID, time and, for logins and password changes, email address. The logs are used only for troubleshooting and security and are deleted automatically after a limited time.',
        ],
      },
      {
        h: 'The ranking',
        p: [
          'If you have Premium, you are in the ranking: a monthly leaderboard and an all-time leaderboard. It shows your username, your position, your ranking points, your number of wins and your number of games. Only Premium players are listed, and only Premium players can view it – so being listed also shows that you have Premium.',
          'Results are stored for all players, including those without Premium. When you have Premium, all your stored online games count towards what other Premium players see: this month’s games in the monthly leaderboard, and all your games – including those from before you had Premium – in the all-time leaderboard. If your Premium ends, you are no longer shown in the ranking, but the results are kept until you delete your account and show up again if you get Premium again.',
        ],
      },
      {
        h: 'Friends and friends tables',
        p: [
          'In the app you can play with friends. You only become friends through a friend code shared outside the game, and the owner of the code must accept the request. It is not possible to search for other players.',
        ],
        ul: [
          '**Your username** is shown to someone who enters your code (so that they can check it is the right person before the request is sent) and to your friends.',
          '**Online status** – only friends you have accepted can see whether you are online, playing or offline. The status is worked out while you are connected, exists only in the game server’s memory and is never stored. You can turn it off in the app. You then always appear offline, but invites still reach you.',
          '**Invites and friends tables** exist only in the game server’s memory and are not stored. An invite is valid for at most 20 minutes. The replies (“Yes”, “In 5 min” and “Not now”) are fixed texts – there is no chat and there are no messages.',
          '**Games at friends tables** count in your statistics and in the ranking only if each team had at least one real player when the game started. If two of you play on the same team against the computer, the game does not count and nothing about it is stored. If you leave a game that counts and do not take your seat back before it ends, it is stored as left (0 ranking points). Leaving a game at a friends table never gives you a time-out.',
          '**If you decline a request** or remove a friend, the other person is not told. If you block someone, they can no longer send you requests, invite you or see your status. A block applies to the account, even if one of you gets a new code.',
          '**When you share your code** via WhatsApp or your phone’s share menu, this happens in the app you choose. We receive nothing from it and never access your contacts. The link page on spitakolus.com shows only the code – never whose it is.',
        ],
      },
      {
        h: 'Notifications',
        p: [
          'If you allow it on your phone, you get a notification when a friend invites you to a friends table, when someone sends you a friend request and when your request has been accepted. No other notifications and no ads, except a test notification if you tap “Send a test notification” yourself. A notification contains a fixed text, the sender’s username, your account ID and technical IDs – for an invite, the invite and table ID; for a friend request or an accepted request, the sender’s account ID. Nothing else.',
        ],
        ul: [
          '**The push address** is a random code from Google or Apple that lets the notification reach the right phone. We store it linked to your account, together with whether the phone is Android or iPhone and the app language (so the notification arrives in the right language). It is removed when you log out.',
          '**Quiet hours** are your own choice in the app under Friends. When they are on, your phone’s time zone (for example Europe/Stockholm) is stored so that the hours follow your clock. Invites in the app always arrive while the app is open.',
          '**Whether the app is open** or in the background is known to the game server while you are connected, so that you are not notified about something you can already see. It exists only in the server’s memory and is not stored.',
          'You can turn notifications off in the app or in your phone’s settings at any time.',
          'Notifications are sent through **Firebase Cloud Messaging** from Google and, for iPhone and iPad, passed on through Apple’s notification service. We do not use Firebase Analytics or any other tracking from Firebase.',
        ],
      },
      {
        h: 'Ads',
        p: [
          'If you do not have Premium, a banner ad is shown and a full-screen ad appears after each game. The ads come from **Google AdMob**. The app asks Google only for ads suitable from age 13 (Google’s Teen level).',
          'In the EU/EEA, the UK and Switzerland the app first shows Google’s consent form. If you consent, Google may use your device’s advertising ID and your approximate location to show and measure ads. If you do not consent, ads are still shown, but they are not personalised. Google still receives your device’s IP address and information about the device, to show the ad, count views and prevent fraud. You can change your choice in the app: profile menu → Ad settings (consent).',
          'In other countries, such as Brazil, the app does not show Google’s consent form, and Google may show personalised ads using your device’s advertising ID and your approximate location. On Android you can turn this off by deleting the advertising ID in your phone’s settings.',
          'On iPhone and iPad the app also asks, in every country, whether it may track you (Apple’s tracking prompt). In the EU/EEA, the UK and Switzerland it comes after Google’s consent form. The advertising ID is only used if you allow it. You can change your answer under Settings → Privacy & Security → Tracking.',
          'If you have given your consent, you can withdraw it at any time. If you cannot find the option in the app, email support@spitakolus.com. Read more about how Google uses data at [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).',
        ],
      },
      {
        h: 'Buying Premium',
        p: [
          'Premium is a subscription bought through Google Play or the App Store. Google or Apple takes the payment and handles your payment details. The purchase is verified through **RevenueCat**, which receives the receipt from the store linked to your account ID (not your email address or username) and tells our game server whether you have Premium. We only learn that the purchase has been made – never your card number or other payment details.',
        ],
      },
      {
        h: 'Reports and emails to us',
        p: [
          'In the app you can report an ad (profile menu → Report an ad, or after the full-screen ad) and a username at the table (game menu → Report a username, when other real players are at the table). This is available from version 1.3 on iPhone and iPad and version 0.1.20 on Android.',
          'The app sends nothing by itself. It opens a ready-made email in your own email app, addressed to support@spitakolus.com, and you decide whether to send it. The email contains what you write, the app’s version number and, when you report a name, that username. We also receive your email address and the sender name your email app shows.',
          'We use a report to review it: we block unsuitable ads in Google AdMob and change or remove usernames that break the terms of use. So if someone reports your username, we receive your username in an email. Emails you send to support@spitakolus.com for other reasons are used only to answer you.',
        ],
      },
      {
        h: 'The app and updates',
        p: [
          'From version 1.3 on iPhone and iPad and version 0.1.20 on Android, the whole game is inside the app, including the fonts. The app does not download any code for the game or the app’s features, either from us or from anyone else. The ads and Google’s consent form are loaded from Google (see Ads). New versions come only through the App Store and Google Play.',
          'Older versions (1.0–1.2 on iPhone and iPad, and versions before 0.1.20 on Android) have a feature that downloads the game’s code from our own game server. Since 3 November 2026 the most they can get from there is the same code as in version 1.2 on iPhone and iPad, never new code. No personal data is sent to anyone else for it. The older versions also load the fonts from Google Fonts, which means Google receives the phone’s IP address. Google is a US company, so the IP address may be transferred to the United States. Google is covered by the EU-U.S. Data Privacy Framework. Loading the fonts is based on our legitimate interest in keeping the older versions working (Article 6(1)(f) GDPR; in Brazil, Article 7(IX) LGPD). From version 1.3 on iPhone and iPad and version 0.1.20 on Android, the game loads no fonts from Google.',
        ],
      },
      {
        h: 'Why, and on what legal basis?',
        ul: [
          '**To provide the game** (account, login, username, games, statistics, ranking, time-out, Premium and, in older versions of the app, downloading the game’s code): necessary to perform our contract with you, i.e. the terms of use (Article 6(1)(b) GDPR).',
          '**Receipts for Premium purchases after you delete your account**, which we keep for at most one year after the subscription has ended: our legitimate interest in being able to answer questions about the purchase and handle refunds (Article 6(1)(f) GDPR; in Brazil, Article 7(IX) LGPD).',
          '**Personalised ads**: in the EU/EEA, the UK and Switzerland, your consent (Article 6(1)(a) GDPR). In other countries, our legitimate interest in funding the free game with ads (Article 6(1)(f) GDPR; in Brazil, Article 7(IX) LGPD). You can object at any time by turning off personalised ads in your phone’s settings.',
          '**Non-personalised ads** (for players without Premium): our legitimate interest in funding the free game with ads (Article 6(1)(f) GDPR; in Brazil, Article 7(IX) LGPD).',
          '**Security, troubleshooting and stopping cheating and abuse** (including technical logs): our legitimate interest in a safe, reliable and fair service (Article 6(1)(f) GDPR).',
          '**Friends** (friend code, friends list, requests, blocks, online status, invites and friends tables): necessary to perform our contract with you (Article 6(1)(b) GDPR).',
          '**Notifications** (push address, language, notification settings and quiet hours), once you have allowed notifications: necessary to perform our contract with you (Article 6(1)(b) GDPR). You can turn them off at any time.',
          '**Limits on code lookups, requests and invites, and blocks**, to stop abuse and protect players: our legitimate interest in a safe service (Article 6(1)(f) GDPR).',
          '**Reports and emails to support**: our legitimate interest in a safe service and in being able to answer you (Article 6(1)(f) GDPR).',
        ],
      },
      {
        h: 'Where is the data kept, and who helps us?',
        ul: [
          '**Supabase** – accounts (email, username, hashed password, statistics, ranking results, Premium and time-out) and friends (friend code, friends list, requests, blocks and the online status setting) and notifications (push addresses and notification settings), on servers in the EU (Stockholm, Sweden). Supabase is a company in Singapore, and data may be transferred to countries outside the EU, such as Singapore and the United States, for support and operations. The transfer is protected by the EU Standard Contractual Clauses.',
          '**Railway** – the game server, in the EU region (Amsterdam, the Netherlands). Railway is a US company, so data may be transferred to the United States. The transfer is protected by the EU Standard Contractual Clauses.',
          '**Resend** – sends the email when you tap “Forgot your password?”, and receives your email address for that. Resend is a US company, so data may be transferred to the United States. The transfer is protected by the EU Standard Contractual Clauses.',
          '**RevenueCat** – verifies Premium purchases (see above). RevenueCat is a US company, so data may be transferred to the United States. The transfer is protected by the EU Standard Contractual Clauses.',
          '**Google AdMob** – ads, for players without Premium (see section 6). Google then receives your device’s IP address, information about the device and the app (such as model, operating system and language), which ads are shown and whether you tap them, error reports from the ad component and, where allowed, your device’s advertising ID. Google uses the data as an independent controller under Google’s advertising terms. Google is a US company, so data may be transferred to the United States. Google is covered by the EU-U.S. Data Privacy Framework.',
          '**Google Firebase Cloud Messaging** – sends the notifications and, to do so, receives the push address, the notification text and the IDs in it. Google is a US company, so data may be transferred to the United States. The transfer is protected by the EU Standard Contractual Clauses. For iPhone and iPad, the notification is passed on through **Apple Push Notification service**.',
          '**Google Play and the Apple App Store** – Premium purchases. They handle the payment as independent controllers under their own terms.',
          '**Vercel** – runs the spitakolus.com website, including this policy, the account deletion page and the link page for friend codes. Vercel keeps technical logs of visits (including IP address and the address visited – for the link page, that includes the friend code) for a limited time. Vercel is a US company, so data may be transferred to the United States. The transfer is protected by the EU Standard Contractual Clauses.',
          '**Loopia** – receives and stores emails to support@spitakolus.com, including reports, on servers in Sweden.',
        ],
        after: [
          'Supabase, Railway, Resend, RevenueCat, Vercel, Loopia and Google Firebase process the data only on our behalf and may not use it for anything else. Everyone we share data with must protect it at least as well as this policy describes: the processors above under their agreements with us, and Google under Google’s advertising terms. We never sell your data. Everything the app, the game server and the website send is encrypted.',
        ],
      },
      {
        h: 'How long do we keep the data?',
        p: [
          'Account data, statistics and ranking results are kept for as long as you keep your account. Games in progress exist only while the game is being played. When you delete your account, the account, the username, the statistics and the ranking results are deleted immediately and permanently. Technical logs (see above) are deleted automatically after a limited time.',
          'Your friend code and friends list are kept until you replace the code, remove a friend or delete your account. A friend request is kept for at most 30 days. Blocks are kept until you lift them or one of the accounts is deleted. Online status and invites are never stored.',
          'A push address is kept until you log out or delete your account, or until Google or Apple tells us it is no longer valid. A push address that has not been used for 180 days is deleted automatically. We do not keep notifications after they have been sent.',
          'Data about Premium purchases (receipts linked to your account ID) is not deleted immediately when you delete your account. We keep it with RevenueCat for at most one year after the subscription has ended, so that we can answer questions about the purchase and handle refunds (our legitimate interest, Article 6(1)(f) GDPR). Then we delete it. Google Play and the App Store keep the purchase under their own terms.',
          'Emails to support@spitakolus.com, including reports, are kept for as long as the matter is ongoing and then for at most 12 months, so that we can see earlier questions if you contact us again. Then we delete them, including our own copies.',
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
        after: [
          'The account, the username, the statistics and the ranking results are deleted immediately. This cannot be undone. Technical logs are deleted automatically after a limited time, and purchase data stays with RevenueCat and the store (see above), and a Premium subscription keeps running until you cancel it in Google Play or the App Store.',
          'At the same time, your friend code, your friends list (you disappear from your friends’ lists), friend requests to and from you, all blocks – both yours and other players’ blocks of you – and your phones’ push addresses and notification settings are deleted.',
        ],
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
        p: ['Mesa 11 is for people aged 13 or older. The app does not ask for your age. If you are under 16, ask a parent before you say yes to personalised ads in Google’s consent form.'],
      },
      {
        h: 'Changes',
        p: ['If we change this policy we update the date at the top. For bigger changes we also write what is new at the top of the page.'],
      },
      {
        h: 'Contact',
        p: ['Spitakolus AB, company reg. no. 559554-6101. Email: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Mesa 11 Terms of Use – Spitakolus AB',
    metaDescription: 'The rules for playing Buraco in the Mesa 11 app: fair play, usernames, Premium, the ranking and more.',
    title: 'Terms of Use',
    updated: 'Last updated [publication date]',
    intro: [
      'These terms apply when you use the Mesa 11 app (the card game Buraco) from Spitakolus AB (Swedish company reg. no. 559554-6101). By creating an account you accept these terms. Please also read our [privacy policy](/buraco/integritet).',
      'New on [publication date]: how to report a username (section 3) and an ad (section 6), the ad after a game and Premium (section 6), and that features are changed in new versions of the app (section 9).',
    ],
    sections: [
      {
        h: 'The service',
        p: [
          'In Mesa 11 you play the card game Buraco two against two, against real players or computer players. With Play now we look for real players online for you; if a seat is still empty after 10 seconds, a computer player takes it. At a friends table you play with your friends, and seats that no friend takes go to computer players. You can also practise against computer players. Computer players are shown with a robot (from version 1.3 on iPhone and iPad and version 0.1.20 on Android, also with the word BOT), so you can see who is a real player and who is a computer player. You choose a mode (Open, Closed or Strict).',
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
        p: ['Your username is visible to other players – at the table and, if you have Premium, in the ranking. It must not:'],
        ul: [
          'be offensive, insulting, threatening, sexual or racist,',
          'pretend to be someone else, such as another player or Spitakolus,',
          'contain personal data, advertising or links.',
        ],
        after: [
          'We may change or remove a username that breaks these rules.',
          'If you see such a name at the table, you can report it in the app (game menu → Report a username, from version 1.3 on iPhone and iPad and version 0.1.20 on Android). This opens an email to support@spitakolus.com. We go through every report.',
        ],
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
          'If you leave an online game in progress – or lose your connection for more than two minutes – a computer player takes your seat. You then have to wait **5 minutes** before you can start your next game, and the game you left gives you 0 ranking points. This applies to everyone, including Premium players, so that games are not spoiled for the others. At a friends table there is no waiting time: you can take your seat back as long as the game is going on.',
        ],
      },
      {
        h: 'Ads and Premium',
        ul: [
          'Mesa 11 is free and shows ads: a banner ad and a full-screen ad after each game.',
          'The ads come from Google AdMob, and the app asks only for ads suitable from age 13. If you see an unsuitable ad, you can report it in the app (profile menu → Report an ad, or after the full-screen ad, from version 1.3 on iPhone and iPad and version 0.1.20 on Android). This opens an email to support@spitakolus.com, and we block unsuitable ads with Google.',
          '**Premium** removes all ads and gives you a place in the ranking. It gives no advantage in the game itself – the rules, the tables and the 5-minute wait after leaving a game are the same for everyone. With Premium you also skip waiting for the ad after a game.',
          'Premium is a subscription bought through Google Play or the App Store, and it renews automatically until you cancel it there. The price is shown in the store before you buy. Payment, receipts, cancellation and refunds are handled by the store under its own terms.',
        ],
      },
      {
        h: 'The ranking',
        ul: [
          'The ranking is a monthly leaderboard (it starts over on the 1st of every month) and an all-time leaderboard.',
          'Every online game gives ranking points: a win 3 points, a loss 1 point and leaving a game 0 points. Practice games against the computer do not count. Games at friends tables only count if each team had at least one real player when the game started. On equal points, the player with the most wins goes first.',
          'Only Premium players are listed in the ranking and can view it. Other Premium players can see your username, points, wins and number of games there.',
          'Your online games count even before you have Premium. When you get Premium you show up right away with the month’s points in the monthly leaderboard and with all your points – including those from before you had Premium – in the all-time leaderboard. If your Premium ends you drop out of the ranking, but your points are kept until you delete your account.',
        ],
      },
      {
        h: 'No real money',
        p: [
          'Mesa 11 is not gambling. You do not play for real money and cannot win money or prizes. Points, ranking points and statistics in the game have no value outside the game.',
        ],
      },
      {
        h: 'Changes to the service',
        p: [
          'We develop the game and may change, add or remove features in new versions of the app. We may also pause the service or end it. If we change these terms we update the date at the top, and for bigger changes we also write what is new there.',
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
    metaTitle: 'Delete your Mesa 11 account – Spitakolus AB',
    metaDescription: 'How to delete your account in the Mesa 11 app (the card game Buraco), and what is deleted.',
    title: 'Delete your account',
    intro: 'Here you can delete your Mesa 11 account immediately and permanently.',
    whatTitle: 'What is deleted',
    what: [
      'your account, email address and password,',
      'your username,',
      'your statistics (games played and won) and your ranking results,',
      'your friend code and friends list (you disappear from your friends’ lists), friend requests and blocks,',
      'your phones’ push addresses and your notification settings,',
      'your Premium and any time-out.',
    ],
    warning: 'This cannot be undone. Premium disappears from the account, but a subscription keeps running and costing money until you cancel it in Google Play or the App Store. If you do not want to pay any more, cancel it there. If you keep the subscription, you can move it to a new account with “Restore purchases” in the app.',
    appTitle: 'In the app',
    appText: 'Open Mesa 11, go to the profile menu and tap **Delete account**.',
    mailTitle: 'Can’t access your account?',
    mailText: 'Email support@spitakolus.com from the email address your account uses, and we will delete the account and everything in the list above.',
    form: {
      formTitle: 'Here on the web',
      loginLabel: 'Email or username',
      loginPlaceholder: 'name@example.com',
      passwordLabel: 'Password',
      confirmLabel: 'I understand that my account, my username, my statistics, my ranking results and my friends list will be deleted permanently.',
      submit: 'Delete my account permanently',
      working: 'Deleting …',
      missingFields: 'Enter your email or username and your password.',
      needConfirm: 'Tick the box to confirm that you want to delete your account.',
      doneTitle: 'Your account has been deleted.',
      doneText: 'Your account, your username, your statistics, your ranking results and your friends list have been deleted. Thank you for playing Buraco!',
    },
  },
  reset: {
    metaTitle: 'New password – Mesa 11',
    title: 'New password',
    form: {
      newPassword: 'New password',
      placeholder: `At least ${MIN} characters`,
      repeat: 'Repeat the password',
      save: 'Save new password',
      saving: 'Saving …',
      tooShort: `The password must be at least ${MIN} characters.`,
      mismatch: 'The passwords do not match. Type the same password in both fields.',
      noLink: 'Tap **Forgot your password?** when you log in to Mesa 11 and we will email you a link to this page.',
      doneTitle: 'Done!',
      doneText: 'Your password has been changed. Open Mesa 11 and log in with your new password.',
      notConfigured: 'Changing passwords is not possible right now. Please try again a little later.',
    },
  },
  friendLink: {
    metaTitle: 'Play Buraco with a friend in Mesa 11',
    metaDescription: 'You have been given a friend code for Mesa 11, the app for the card game Buraco. Add the code in the app and play at the same table.',
    title: 'Play Buraco with a friend in Mesa 11',
    codeLabel: 'Friend code',
    copy: {
      button: 'Copy code',
      copied: 'Copied!',
      failed: 'Could not copy. Select the code and copy it yourself.',
    },
    invalidTitle: 'The link is incomplete.',
    invalidText: 'Ask the person who sent the link for the friend code again – it has 8 characters, for example K7QM‑4XPD.',
    stepsTitle: 'How it works',
    steps: [
      'Download **Mesa 11** – it is free – and create an account or log in.',
      'Open Mesa 11 → **Play with friends** → **Add friend** and type the code.',
      'Send the request. You become friends once the person who gave you the code accepts it – then you can invite each other to a table.',
    ],
    note: 'This page only shows the code – not whose it is. You will see the name in the app before you send the request. Only add people you know.',
  },
};

const pt: Texts = {
  common: {
    languageLabel: 'Idioma',
    about: 'Sobre o app Mesa 11',
    privacy: 'Privacidade',
    terms: 'Termos',
    deleteAccount: 'Excluir conta',
    contact: 'Contato',
    company: 'O app Mesa 11 é feito pela Spitakolus AB (empresa sueca, nº de registro 559554-6101).',
  },
  home: {
    metaTitle: 'Mesa 11 – Buraco, o jogo de cartas em dupla, online',
    metaDescription: 'Mesa 11 é o app de Buraco, o jogo de cartas em dupla, dois contra dois, online. Para Android e iPhone, no Google Play e na App Store.',
    badge: 'Já no Google Play e na App Store',
    playButton: 'Baixar no Google Play',
    playUrl: 'https://play.google.com/store/apps/details?id=com.spitakolus.buraco&hl=pt_BR',
    appStoreButton: 'Baixar na App Store',
    appStoreUrl: 'https://apps.apple.com/br/app/mesa-11-buraco-online/id6817430182',
    qrTitle: 'Baixe no celular',
    qrText: 'Aponte a câmera do celular para o código e a loja certa abre – App Store no iPhone e Google Play no Android.',
    lead: 'Buraco, o clássico jogo de cartas em dupla, dois contra dois, online. Jogue junto com seu parceiro, baixe jogos e forme canastras antes dos adversários.',
    features: [
      {
        title: 'Dois contra dois',
        text: 'Você e seu parceiro contra outros dois jogadores. Se um lugar continuar vazio depois de 10 segundos, um jogador do computador ocupa o lugar – você nunca espera muito.',
      },
      {
        title: 'Treine contra o computador',
        text: 'Jogue contra o computador quando quiser aprender o jogo ou só jogar com calma.',
      },
      {
        title: 'Jogue com amigos',
        text: 'Adicione amigos com um código de amigo e convide-os para uma mesa de amigos. Não há chat, só o jogo de cartas.',
      },
      {
        title: 'Aberto, Fechado ou Rigoroso',
        text: 'Três modos que definem como funcionam o lixo e os jogos na mesa. Escolha o que você prefere.',
      },
    ],
    freeTitle: 'Grátis para jogar',
    freeText: 'O app Mesa 11 é grátis e tem anúncios. Com o **Premium** você não vê nenhum anúncio e entra no ranking – a classificação do mês e a geral, disputadas só entre jogadores Premium. Fora isso, o jogo é igualzinho para todos. Sem dinheiro de verdade, sem prêmios.',
    accountTitle: 'Sua conta',
    accountItems: [
      'Você cria uma conta no app com e-mail, nome de usuário e senha. O nome de usuário aparece para os outros jogadores na mesa – e no ranking, se você tiver o Premium.',
      '**Esqueceu a senha?** Toque em “Esqueceu a senha?” no app e você recebe um e-mail com um link para escolher uma nova.',
      '**Excluir a conta:** no app, pelo menu do perfil → Excluir conta, ou [aqui na web](/buraco/ta-bort-konto).',
      '**Denunciar um anúncio ou um nome:** no app, pelo menu do perfil → Denunciar um anúncio, ou pelo menu do jogo → Denunciar um nome de usuário (a partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android). Isso abre um e-mail para support@spitakolus.com.',
    ],
    linksTitle: 'Mais sobre o app Mesa 11',
  },
  privacy: {
    metaTitle: 'Política de Privacidade do app Mesa 11 – Spitakolus AB',
    metaDescription: 'Quais dados o app Mesa 11 (o jogo de cartas Buraco) guarda, por quê, onde ficam e como excluí-los.',
    title: 'Política de Privacidade',
    updated: 'Atualizada em [data da publicação]',
    intro: [
      'Esta política explica quais dados pessoais o app Mesa 11 (o jogo de cartas Buraco) e o servidor do jogo tratam, por quê, onde ficam e quais direitos você tem pelo Regulamento Geral de Proteção de Dados da UE (GDPR) e pela LGPD.',
      'Novo em [data da publicação]: a seção 8 sobre denúncias e e-mails para nós, a seção 9 sobre o app e as atualizações, mais sobre o que o Google recebe com os anúncios (seções 6 e 11), a Loopia (seção 11) e por quanto tempo guardamos recibos e e-mails (seção 12).',
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
          '**Nome de usuário** – aparece para os outros jogadores na mesa. Se você tem o Premium, ele também aparece para outros jogadores Premium no ranking.',
          '**Senha** – gerenciada pelo Supabase Auth e guardada só em forma de hash. Ninguém, nem nós, consegue lê-la.',
          '**Estatísticas** – quantas partidas você jogou e ganhou.',
          '**Resultados do ranking** – para cada partida online que você termina ou abandona, guardamos quando a partida acabou, se você ganhou e quantos pontos de ranking ela deu (vitória 3, derrota 1, abandono 0). Partidas de treino contra o computador não são guardadas.',
          '**Premium** – se você comprou o Premium (sem anúncios e com lugar no ranking).',
          '**Bloqueio de tempo** – se você saiu de uma partida em andamento, para contar os 5 minutos de espera até a próxima partida.',
          '**Código de amigo** – um código aleatório que você pode compartilhar para que outras pessoas te enviem um pedido de amizade. Você pode trocar o código quando quiser, e o antigo para de funcionar na hora. O código só é criado quando você abre Amigos no app.',
          '**Amigos, pedidos de amizade e contas bloqueadas** – de quem você é amigo, os pedidos que você enviou e recebeu e as contas que você bloqueou. Um pedido de amizade fica guardado por no máximo 30 dias.',
          '**Configuração do status online** – se os seus amigos podem ver quando você está online.',
          '**Notificações** – se você permitir notificações: o endereço de push do celular, se o celular é Android ou iPhone, o idioma do app e quando o app se conectou pela última vez, e as suas escolhas de notificações e horas de silêncio (com o fuso horário do celular quando as horas de silêncio estão ativadas).',
        ],
        after: [
          'Não há chat no jogo. As partidas em andamento – as cartas, as jogadas e quem está na mesa – ficam só na memória do servidor do jogo e não são guardadas quando a partida termina. Depois da partida, só ficam guardados o seu resultado do ranking e as suas estatísticas (veja acima). Para enviar dados ao seu celular, o servidor precisa de dados técnicos, como o seu endereço IP, enquanto você está conectado.',
          'A Railway (o servidor do jogo) e a Supabase (as contas) também guardam **registros técnicos (logs)** de acessos e eventos, com, entre outros, o endereço IP, o número de identificação da conta, o horário e, no login e na troca de senha, o e-mail. Os logs são usados só para corrigir erros e para a segurança e são apagados automaticamente após um período limitado.',
        ],
      },
      {
        h: 'O ranking',
        p: [
          'Se você tem o Premium, você participa do ranking: uma classificação do mês e uma geral. Nele aparecem o seu nome de usuário, a sua posição, os seus pontos de ranking, o número de vitórias e o número de partidas. Só jogadores Premium aparecem no ranking, e só jogadores Premium podem vê-lo – então aparecer nele também mostra que você tem o Premium.',
          'Os resultados são guardados para todos os jogadores, mesmo sem o Premium. Quando você tem o Premium, todas as suas partidas online guardadas contam no que os outros jogadores Premium veem: as partidas do mês na classificação do mês, e todas as partidas – inclusive as de antes de você ter o Premium – na classificação geral. Se o seu Premium acabar, você deixa de aparecer no ranking, mas os resultados ficam guardados até você excluir a conta e voltam a aparecer se você assinar o Premium de novo.',
        ],
      },
      {
        h: 'Amigos e mesas de amigos',
        p: [
          'No app você pode jogar com amigos. Só dá para virar amigo por meio de um código de amigo compartilhado fora do jogo, e o dono do código precisa aceitar o pedido. Não dá para buscar outros jogadores.',
        ],
        ul: [
          '**O seu nome de usuário** aparece para quem digita o seu código (para a pessoa conferir que é você antes de enviar o pedido) e para os seus amigos.',
          '**Status online** – só os amigos que você aceitou veem se você está online, jogando ou offline. O status é calculado enquanto você está conectado, fica só na memória do servidor do jogo e nunca é guardado. Você pode desligá-lo no app. Aí você sempre aparece como offline, mas os convites continuam chegando.',
          '**Convites e mesas de amigos** ficam só na memória do servidor do jogo e não são guardados. Um convite vale por no máximo 20 minutos. As respostas (“Sim”, “Em 5 min” e “Agora não”) são textos prontos – não há chat nem mensagens.',
          '**As partidas na mesa de amigos** só contam nas suas estatísticas e no ranking se cada time tinha pelo menos um jogador de verdade quando a partida começou. Se dois de vocês jogarem no mesmo time contra o computador, a partida não conta e nada sobre ela é guardado. Se você sair de uma partida que conta e não voltar ao seu lugar antes do fim, ela é guardada como abandono (zero pontos de ranking). Sair de uma partida na mesa de amigos nunca gera bloqueio de tempo.',
          '**Se você recusar um pedido** ou remover um amigo, a outra pessoa não é avisada. Se você bloquear alguém, essa pessoa não pode mais te mandar pedidos, te convidar nem ver o seu status. O bloqueio vale para a conta, mesmo que um de vocês troque de código.',
          '**Quando você compartilha o seu código** pelo WhatsApp ou pelo menu de compartilhamento do celular, isso acontece no app que você escolher. Não recebemos nada disso e nunca acessamos os seus contatos. A página do link em spitakolus.com mostra só o código – nunca de quem ele é.',
        ],
      },
      {
        h: 'Notificações',
        p: [
          'Se você permitir no celular, recebe uma notificação quando um amigo te convida para uma mesa de amigos, quando alguém te envia um pedido de amizade e quando o seu pedido é aceito. Nenhuma outra notificação e nenhum anúncio, a não ser uma notificação de teste se você mesmo tocar em “Enviar uma notificação de teste”. A notificação contém um texto fixo, o nome de usuário de quem enviou, o número de identificação da sua conta e ids técnicos – no convite, o id do convite e da mesa; no pedido de amizade ou no pedido aceito, o número de identificação da conta de quem enviou. Nada mais.',
        ],
        ul: [
          '**O endereço de push** é um código aleatório do Google ou da Apple que faz a notificação chegar ao celular certo. Nós o guardamos ligado à sua conta, junto com a informação se o celular é Android ou iPhone e o idioma do app (para a notificação chegar no idioma certo). Ele é apagado quando você sai da conta.',
          '**As horas de silêncio** você escolhe no app, em Amigos. Quando estão ativadas, guardamos o fuso horário do celular (por exemplo America/Sao_Paulo), para que as horas sigam o seu relógio. Os convites no app sempre chegam enquanto o app está aberto.',
          '**Se o app está aberto** ou em segundo plano, o servidor do jogo sabe enquanto você está conectado, para não te mandar uma notificação sobre algo que você já está vendo. Isso fica só na memória do servidor e não é guardado.',
          'Você pode desativar as notificações no app ou nas configurações do celular quando quiser.',
          'As notificações são enviadas pelo **Firebase Cloud Messaging**, do Google, e, no iPhone e no iPad, repassadas pelo serviço de notificações da Apple. Não usamos o Firebase Analytics nem nenhum outro rastreamento do Firebase.',
        ],
      },
      {
        h: 'Anúncios',
        p: [
          'Se você não tem o Premium, aparece uma faixa de anúncio e um anúncio em tela cheia depois de cada partida. Os anúncios vêm do **Google AdMob**. O app pede ao Google só anúncios adequados a partir de 13 anos (o nível Teen do Google).',
          'Na UE/EEE, no Reino Unido e na Suíça, o app mostra primeiro o pedido de consentimento do Google. Se você consentir, o Google pode usar o ID de publicidade do aparelho e a sua localização aproximada para mostrar e medir anúncios. Se você não consentir, os anúncios continuam aparecendo, mas não são personalizados. Mesmo assim, o Google recebe o endereço IP do celular e dados sobre o celular, para mostrar o anúncio, contar as visualizações e impedir fraudes. Você pode mudar a sua escolha no app: menu do perfil → Configurações de anúncios (consentimento).',
          'Nos outros países, como o Brasil, o app não mostra o pedido do Google, e o Google pode mostrar anúncios personalizados usando o ID de publicidade do aparelho e a sua localização aproximada. No Android, você pode desativar isso excluindo o ID de publicidade nas configurações do celular.',
          'No iPhone e no iPad, o app também pergunta, em todos os países, se pode rastrear você (o aviso de rastreamento da Apple). Na UE/EEE, no Reino Unido e na Suíça, essa pergunta vem depois do pedido do Google. O ID de publicidade só é usado se você permitir. Você pode mudar a resposta em Ajustes → Privacidade e Segurança → Rastreamento.',
          'Se você deu o consentimento, pode retirá-lo a qualquer momento. Se não encontrar a opção no app, envie um e-mail para support@spitakolus.com. Saiba mais sobre como o Google usa dados em [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites).',
        ],
      },
      {
        h: 'Compra do Premium',
        p: [
          'O Premium é uma assinatura comprada pelo Google Play ou pela App Store. É o Google ou a Apple que faz a cobrança e cuida dos seus dados de pagamento. A compra é verificada pela **RevenueCat**, que recebe o recibo da loja ligado ao número de identificação da sua conta (não ao seu e-mail nem ao seu nome de usuário) e informa ao nosso servidor do jogo se você tem o Premium. Nós só ficamos sabendo que a compra foi feita – nunca o número do seu cartão ou outros dados de pagamento.',
        ],
      },
      {
        h: 'Denúncias e e-mails para nós',
        p: [
          'No app você pode denunciar um anúncio (menu do perfil → Denunciar um anúncio, ou depois do anúncio em tela cheia) e um nome de usuário na mesa (menu do jogo → Denunciar um nome de usuário, quando há outros jogadores de verdade na mesa). Isso está disponível a partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android.',
          'O app não envia nada sozinho. Ele abre um e-mail pronto no seu próprio app de e-mail, para support@spitakolus.com, e você decide se quer enviá-lo. O e-mail contém o que você escrever, o número da versão do app e, quando você denuncia um nome, esse nome de usuário. Nós também recebemos o seu endereço de e-mail e o nome de remetente que o seu app de e-mail mostra.',
          'Usamos a denúncia para analisá-la: bloqueamos anúncios inadequados no Google AdMob e mudamos ou removemos nomes de usuário que violam os termos de uso. Então, se alguém denunciar o seu nome de usuário, recebemos esse nome em um e-mail. E-mails que você envia para support@spitakolus.com por outros motivos são usados só para responder a você.',
        ],
      },
      {
        h: 'O app e as atualizações',
        p: [
          'A partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android, o jogo inteiro está dentro do app, inclusive as fontes (tipos de letra). O app não baixa nenhum código para o jogo ou para as funções do app, nem de nós nem de ninguém. Os anúncios e o pedido de consentimento do Google vêm do Google (veja Anúncios). As novas versões chegam só pela App Store e pelo Google Play.',
          'As versões antigas (1.0 a 1.2 no iPhone e no iPad, e as versões anteriores à 0.1.20 no Android) têm uma função que baixa o código do jogo do nosso próprio servidor do jogo. Desde 3 de novembro de 2026, o máximo que elas podem receber de lá é o mesmo código da versão 1.2 no iPhone e no iPad, nunca um código novo. Nenhum dado pessoal é enviado a terceiros para isso. As versões antigas também carregam as fontes do Google Fonts, e aí o Google recebe o endereço IP do celular. O Google é uma empresa americana, então pode haver transferência do endereço IP para os Estados Unidos. O Google está coberto pelo marco de proteção de dados entre a UE e os Estados Unidos (EU-U.S. Data Privacy Framework). O carregamento das fontes se baseia no nosso interesse legítimo em que as versões antigas funcionem (artigo 6.1 f do GDPR; no Brasil, artigo 7º, IX, da LGPD). A partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android, o jogo não carrega nenhuma fonte do Google.',
        ],
      },
      {
        h: 'Por quê e com qual base legal?',
        ul: [
          '**Para oferecer o jogo** (conta, login, nome de usuário, partidas, estatísticas, ranking, bloqueio de tempo, Premium e, nas versões antigas do app, o download do código do jogo): necessário para cumprir o contrato com você, ou seja, os termos de uso (artigo 6.1 b do GDPR).',
          '**Recibos de compras do Premium depois que você exclui a conta**, que guardamos por no máximo um ano depois do fim da assinatura: o nosso interesse legítimo em poder responder a perguntas sobre a compra e cuidar de reembolsos (artigo 6.1 f do GDPR; no Brasil, artigo 7º, IX, da LGPD).',
          '**Anúncios personalizados**: na UE/EEE, no Reino Unido e na Suíça, o seu consentimento (artigo 6.1 a do GDPR). Nos outros países, o nosso interesse legítimo em financiar o jogo gratuito com anúncios (artigo 6.1 f do GDPR; no Brasil, artigo 7º, IX, da LGPD). Você pode se opor a qualquer momento desativando os anúncios personalizados nas configurações do celular.',
          '**Anúncios não personalizados** (para quem não tem o Premium): o nosso interesse legítimo em financiar o jogo gratuito com anúncios (artigo 6.1 f do GDPR; no Brasil, artigo 7º, IX, da LGPD).',
          '**Segurança, correção de erros e combate a trapaças e abusos** (inclusive os registros técnicos): o nosso interesse legítimo em um serviço seguro, justo e que funcione bem (artigo 6.1 f do GDPR).',
          '**Amigos** (código de amigo, lista de amigos, pedidos, contas bloqueadas, status online, convites e mesas de amigos): necessário para cumprir o contrato com você (artigo 6.1 b do GDPR).',
          '**Notificações** (endereço de push, idioma, configurações de notificações e horas de silêncio), depois que você permite as notificações: necessário para cumprir o contrato com você (artigo 6.1 b do GDPR). Você pode desativá-las quando quiser.',
          '**Limites de tentativas de código, de pedidos e de convites, e os bloqueios de contas**, para impedir abusos e proteger os jogadores: o nosso interesse legítimo em um serviço seguro (artigo 6.1 f do GDPR).',
          '**Denúncias e e-mails para o suporte**: o nosso interesse legítimo em um serviço seguro e em poder responder a você (artigo 6.1 f do GDPR).',
        ],
      },
      {
        h: 'Onde ficam os dados e quem nos ajuda?',
        ul: [
          '**Supabase** – contas (e-mail, nome de usuário, hash da senha, estatísticas, resultados do ranking, Premium e bloqueio de tempo) e amigos (código de amigo, lista de amigos, pedidos, contas bloqueadas e a configuração do status online) e notificações (endereços de push e configurações de notificações), em servidores na UE (Estocolmo, Suécia). A Supabase é uma empresa de Singapura, e os dados podem ser transferidos para países fora da UE, como Singapura e os Estados Unidos, no suporte e na operação do serviço. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE.',
          '**Railway** – o servidor do jogo, na região da UE (Amsterdã, Holanda). A Railway é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE.',
          '**Resend** – envia o e-mail quando você toca em “Esqueceu a senha?” e, para isso, recebe o seu e-mail. A Resend é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE.',
          '**RevenueCat** – verifica as compras do Premium (veja acima). A RevenueCat é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE.',
          '**Google AdMob** – anúncios, para quem não tem o Premium (veja a seção 6). O Google recebe então o endereço IP do celular, dados sobre o celular e o app (por exemplo modelo, sistema operacional e idioma), quais anúncios aparecem e se você toca neles, relatórios de erros da parte de anúncios e, quando isso é permitido, o ID de publicidade do aparelho. O Google usa os dados como controlador independente, pelos termos de publicidade do Google. O Google é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. O Google está coberto pelo marco de proteção de dados entre a UE e os Estados Unidos (EU-U.S. Data Privacy Framework).',
          '**Google Firebase Cloud Messaging** – envia as notificações e, para isso, recebe o endereço de push, o texto da notificação e os números de identificação que ela contém. O Google é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE. No iPhone e no iPad, a notificação é repassada pelo **Apple Push Notification service**.',
          '**Google Play e Apple App Store** – compras do Premium. Eles cuidam do pagamento como controladores independentes, pelos próprios termos.',
          '**Vercel** – hospeda o site spitakolus.com, com, entre outras, esta política, a página para excluir a conta e a página do link de códigos de amigo. A Vercel guarda registros técnicos das visitas (entre eles o endereço IP e o endereço visitado – na página do link, isso inclui o código de amigo) por um período limitado. A Vercel é uma empresa americana, então pode haver transferência de dados para os Estados Unidos. A transferência é protegida pelas Cláusulas Contratuais Padrão da UE.',
          '**Loopia** – recebe e guarda os e-mails enviados para support@spitakolus.com, inclusive as denúncias, em servidores na Suécia.',
        ],
        after: [
          'A Supabase, a Railway, a Resend, a RevenueCat, a Vercel, a Loopia e o Google Firebase tratam os dados só em nosso nome e não podem usá-los para mais nada. Todos com quem compartilhamos dados devem protegê-los pelo menos tão bem quanto esta política descreve: os operadores acima, pelos contratos conosco, e o Google, pelos termos de publicidade do Google. Nunca vendemos os seus dados. Tudo o que o app, o servidor do jogo e o site enviam é criptografado.',
        ],
      },
      {
        h: 'Por quanto tempo guardamos os dados?',
        p: [
          'Os dados da conta, as estatísticas e os resultados do ranking ficam guardados enquanto você tiver a conta. As partidas em andamento só existem enquanto a partida está sendo jogada. Quando você exclui a conta, a conta, o nome de usuário, as estatísticas e os resultados do ranking são apagados na hora e para sempre. Os registros técnicos (veja acima) são apagados automaticamente após um período limitado.',
          'O código de amigo e a lista de amigos ficam guardados até você trocar o código, remover um amigo ou excluir a conta. Um pedido de amizade fica guardado por no máximo 30 dias. Os bloqueios de contas ficam guardados até você desfazê-los ou até uma das contas ser excluída. O status online e os convites nunca são guardados.',
          'Um endereço de push fica guardado até você sair da conta ou excluí-la, ou até o Google ou a Apple avisarem que ele não vale mais. Um endereço de push que não é usado há 180 dias é apagado automaticamente. Não guardamos as notificações depois que são enviadas.',
          'Os dados de compras do Premium (recibos ligados ao número de identificação da sua conta) não são apagados na hora quando você exclui a conta. Nós os guardamos na RevenueCat por no máximo um ano depois do fim da assinatura, para poder responder a perguntas sobre a compra e cuidar de reembolsos (o nosso interesse legítimo, artigo 6.1 f do GDPR). Depois, nós os apagamos. O Google Play e a App Store guardam a compra pelos próprios termos.',
          'Os e-mails para support@spitakolus.com, inclusive as denúncias, ficam guardados enquanto o caso estiver em andamento e depois por no máximo 12 meses, para podermos ver perguntas anteriores se você entrar em contato de novo. Depois, nós os apagamos, inclusive as nossas próprias cópias.',
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
        after: [
          'A conta, o nome de usuário, as estatísticas e os resultados do ranking são apagados na hora. Não dá para desfazer. Os registros técnicos são apagados automaticamente após um período limitado, e os dados de compras ficam na RevenueCat e na loja (veja acima), e uma assinatura do Premium continua até você cancelá-la no Google Play ou na App Store.',
          'Ao mesmo tempo são apagados o seu código de amigo, a sua lista de amigos (você some das listas dos seus amigos), os pedidos de amizade enviados e recebidos, todos os bloqueios de contas – tanto os seus quanto os de outros jogadores contra você – e os endereços de push dos seus celulares e as suas configurações de notificações.',
        ],
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
        p: ['O app Mesa 11 é para pessoas com 13 anos ou mais. O app não pergunta a sua idade. Se você tem menos de 16 anos, pergunte a um dos seus pais antes de responder sim aos anúncios personalizados no pedido do Google.'],
      },
      {
        h: 'Mudanças',
        p: ['Se mudarmos esta política, atualizamos a data no topo. Em mudanças maiores, também escrevemos no topo da página o que há de novo.'],
      },
      {
        h: 'Contato',
        p: ['Spitakolus AB, nº de registro 559554-6101. E-mail: support@spitakolus.com.'],
      },
    ],
  },
  terms: {
    metaTitle: 'Termos de Uso do app Mesa 11 – Spitakolus AB',
    metaDescription: 'As regras para jogar Buraco no app Mesa 11: jogo limpo, nomes de usuário, Premium, ranking e mais.',
    title: 'Termos de Uso',
    updated: 'Atualizados em [data da publicação]',
    intro: [
      'Estes termos valem quando você usa o app Mesa 11 (o jogo de cartas Buraco) da Spitakolus AB (empresa sueca, nº de registro 559554-6101). Ao criar uma conta você aceita os termos. Leia também a nossa [política de privacidade](/buraco/integritet).',
      'Novo em [data da publicação]: como denunciar um nome de usuário (seção 3) e um anúncio (seção 6), o anúncio depois da partida e o Premium (seção 6) e que as funções mudam em novas versões do app (seção 9).',
    ],
    sections: [
      {
        h: 'O serviço',
        p: [
          'No app Mesa 11 você joga Buraco dois contra dois, contra jogadores de verdade ou jogadores do computador. Em Jogar agora, procuramos jogadores de verdade online para você; se um lugar continuar vazio depois de 10 segundos, um jogador do computador ocupa o lugar. Na mesa de amigos você joga com seus amigos, e os lugares que nenhum amigo ocupa ficam com jogadores do computador. Você também pode treinar contra jogadores do computador. Os jogadores do computador aparecem com um robô (a partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android, também com a palavra ROBÔ), para você ver quem é jogador de verdade e quem é do computador. Você escolhe o modo (Aberto, Fechado ou Rigoroso).',
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
        p: ['O seu nome de usuário aparece para os outros jogadores – na mesa e, se você tiver o Premium, no ranking. Ele não pode:'],
        ul: [
          'ser ofensivo, insultuoso, ameaçador, sexual ou racista,',
          'se passar por outra pessoa, por exemplo outro jogador ou a Spitakolus,',
          'conter dados pessoais, propaganda ou links.',
        ],
        after: [
          'Podemos mudar ou remover um nome de usuário que quebre essas regras.',
          'Se você vir um nome assim na mesa, pode denunciá-lo no app (menu do jogo → Denunciar um nome de usuário, a partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android). Isso abre um e-mail para support@spitakolus.com. Analisamos cada denúncia.',
        ],
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
          'Se você sair de uma partida online em andamento – ou perder a conexão por mais de dois minutos – um jogador do computador assume o seu lugar. Aí você precisa esperar **5 minutos** antes de começar a próxima partida, e a partida que você abandonou vale zero pontos de ranking. Isso vale para todos, inclusive quem tem o Premium, para que a partida não seja estragada para os outros. Na mesa de amigos não há tempo de espera: você pode voltar ao seu lugar enquanto a partida continuar.',
        ],
      },
      {
        h: 'Anúncios e Premium',
        ul: [
          'O app Mesa 11 é grátis e tem anúncios: uma faixa de anúncio e um anúncio em tela cheia depois de cada partida.',
          'Os anúncios vêm do Google AdMob, e o app pede só anúncios adequados a partir de 13 anos. Se você vir um anúncio inadequado, pode denunciá-lo no app (menu do perfil → Denunciar um anúncio, ou depois do anúncio em tela cheia, a partir da versão 1.3 no iPhone e no iPad e da versão 0.1.20 no Android). Isso abre um e-mail para support@spitakolus.com, e bloqueamos os anúncios inadequados no Google.',
          'O **Premium** remove todos os anúncios e dá um lugar no ranking. Ele não dá nenhuma vantagem no jogo em si – as regras, as mesas e os 5 minutos de espera depois de sair de uma partida são iguais para todos. Com o Premium você também não precisa esperar o anúncio depois da partida.',
          'O Premium é uma assinatura comprada pelo Google Play ou pela App Store, renovada automaticamente até você cancelar lá. O preço aparece na loja antes da compra. Pagamento, recibos, cancelamento e reembolsos são feitos pela loja, pelos termos dela.',
        ],
      },
      {
        h: 'O ranking',
        ul: [
          'O ranking tem uma classificação do mês (que recomeça todo dia 1º) e uma geral.',
          'Cada partida online vale pontos de ranking: vitória vale 3 pontos, derrota 1 ponto e abandonar a partida, zero. Partidas de treino contra o computador não contam. Partidas na mesa de amigos só contam se cada time tinha pelo menos um jogador de verdade quando a partida começou. Em caso de empate nos pontos, fica na frente quem tem mais vitórias.',
          'Só jogadores Premium aparecem no ranking e podem vê-lo. Ali, outros jogadores Premium veem o seu nome de usuário, os seus pontos, as suas vitórias e o número de partidas.',
          'As suas partidas online contam mesmo antes de você ter o Premium. Quando assinar, você aparece na hora com os pontos do mês na classificação do mês e com todos os seus pontos – inclusive os de antes de você ter o Premium – na classificação geral. Se o seu Premium acabar, você sai do ranking, mas os pontos ficam guardados até você excluir a conta.',
        ],
      },
      {
        h: 'Sem dinheiro de verdade',
        p: [
          'O app Mesa 11 não é jogo de azar. Você não joga valendo dinheiro de verdade e não pode ganhar dinheiro nem prêmios. Pontos, pontos de ranking e estatísticas do jogo não têm valor fora do jogo.',
        ],
      },
      {
        h: 'Mudanças no serviço',
        p: [
          'Desenvolvemos o jogo e podemos mudar, incluir ou remover funções em novas versões do app. Também podemos pausar o serviço ou encerrá-lo. Se mudarmos os termos, atualizamos a data no topo e, em mudanças maiores, também escrevemos ali o que há de novo.',
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
    metaTitle: 'Excluir a sua conta do app Mesa 11 – Spitakolus AB',
    metaDescription: 'Como excluir a sua conta do app Mesa 11 (o jogo de cartas Buraco) e o que é apagado.',
    title: 'Excluir a sua conta',
    intro: 'Aqui você pode excluir a sua conta do app Mesa 11 na hora e para sempre.',
    whatTitle: 'O que é apagado',
    what: [
      'a sua conta, o e-mail e a senha,',
      'o seu nome de usuário,',
      'as suas estatísticas (partidas jogadas e ganhas) e os seus resultados do ranking,',
      'o seu código de amigo e a sua lista de amigos (você some das listas dos seus amigos), os pedidos de amizade e os bloqueios de contas,',
      'os endereços de push dos seus celulares e as suas configurações de notificações,',
      'o seu Premium e um eventual bloqueio de tempo.',
    ],
    warning: 'Não dá para desfazer. O Premium sai da conta, mas uma assinatura continua ativa e sendo cobrada até você cancelá-la no Google Play ou na App Store. Se não quiser pagar mais, cancele lá. Se mantiver a assinatura, você pode passá-la para uma conta nova com “Restaurar compras” no app.',
    appTitle: 'No app',
    appText: 'Abra o app Mesa 11, vá ao menu do perfil e toque em **Excluir conta**.',
    mailTitle: 'Não consegue acessar a conta?',
    mailText: 'Envie um e-mail para support@spitakolus.com a partir do endereço da sua conta, e nós excluímos a conta e tudo o que está na lista acima.',
    form: {
      formTitle: 'Aqui na web',
      loginLabel: 'E-mail ou nome de usuário',
      loginPlaceholder: 'nome@exemplo.com.br',
      passwordLabel: 'Senha',
      confirmLabel: 'Entendo que a minha conta, o meu nome de usuário, as minhas estatísticas, os meus resultados do ranking e a minha lista de amigos serão apagados para sempre.',
      submit: 'Excluir minha conta para sempre',
      working: 'Excluindo …',
      missingFields: 'Digite o seu e-mail ou nome de usuário e a sua senha.',
      needConfirm: 'Marque a caixa para confirmar que você quer excluir a conta.',
      doneTitle: 'A conta foi excluída.',
      doneText: 'A sua conta, o seu nome de usuário, as suas estatísticas, os seus resultados do ranking e a sua lista de amigos foram apagados. Obrigado por jogar Buraco!',
    },
  },
  reset: {
    metaTitle: 'Nova senha – Mesa 11',
    title: 'Nova senha',
    form: {
      newPassword: 'Nova senha',
      placeholder: `Pelo menos ${MIN} caracteres`,
      repeat: 'Repita a senha',
      save: 'Salvar nova senha',
      saving: 'Salvando …',
      tooShort: `A senha deve ter pelo menos ${MIN} caracteres.`,
      mismatch: 'As senhas não são iguais. Digite a mesma senha nos dois campos.',
      noLink: 'Toque em **Esqueceu a senha?** ao entrar no app Mesa 11 e você recebe um e-mail com um link para esta página.',
      doneTitle: 'Pronto!',
      doneText: 'A sua senha foi trocada. Abra o app Mesa 11 e entre com a nova senha.',
      notConfigured: 'Não é possível trocar a senha agora. Tente de novo mais tarde.',
    },
  },
  friendLink: {
    metaTitle: 'Jogue Buraco com um amigo no app Mesa 11',
    metaDescription: 'Você recebeu um código de amigo do Mesa 11, o app do jogo de cartas Buraco. Adicione o código no app e joguem na mesma mesa.',
    title: 'Jogue Buraco com um amigo no app Mesa 11',
    codeLabel: 'Código de amigo',
    copy: {
      button: 'Copiar código',
      copied: 'Copiado!',
      failed: 'Não deu para copiar. Selecione o código e copie você mesmo.',
    },
    invalidTitle: 'O link está incompleto.',
    invalidText: 'Peça o código de amigo de novo para quem te mandou o link – ele tem 8 caracteres, por exemplo K7QM‑4XPD.',
    stepsTitle: 'Como fazer',
    steps: [
      'Baixe o app **Mesa 11** – é grátis – e crie uma conta ou entre na sua.',
      'Abra o app Mesa 11 → **Jogar com amigos** → **Adicionar amigo** e digite o código.',
      'Envie o pedido. Vocês viram amigos quando quem te deu o código aceitar – aí podem se convidar para uma mesa.',
    ],
    note: 'Esta página mostra só o código – não de quem ele é. Você vê o nome no app antes de enviar o pedido. Adicione só pessoas que você conhece.',
  },
};

export const TEXTS: Record<Lang, Texts> = { sv, en, pt };

export function t(lang: Lang): Texts {
  return TEXTS[lang];
}
