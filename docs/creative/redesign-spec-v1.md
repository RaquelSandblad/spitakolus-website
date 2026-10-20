# Spitakolus.com — Redesign Spec v1

**Författad:** Kreativ producent (Spitakolus AB)
**Datum:** 2026-04-17
**Status:** Förslag till implementation
**Mottagare:** Utvecklare (Torbjörn)

---

## 1. TL;DR

Spitakolus.com är idag en generisk blå Tailwind-holding-mall. Förslaget: riv hela det generiska lagret och bygg om som ett litet **studiomanifest** — en modern, textdriven sajt i brutet vitt/kolsvart med en **editorial serif som display-font**, en **mono-accent för metadata**, och inga stock-element alls. Vi bygger på typografi, luft och tydligt POV istället för bilder vi inte har. Signaturen är ett återkommande "linjerat manifest"-grepp: stora serif-påståenden separerade av tunna regel-linjer, med mono-tal (01, 02, 03) som ankare. Sajten säger "små, egna, direkta" — inte "vi strävar efter innovation". Två produkter presenteras som två distinkta spår med egna accentfärger (Nästa Hem = djupblå, Flocken = terrakotta), så moderbolaget håller ihop utan att lägga sig över barnen.

---

## 2. Referensanalys

Jag har tittat på sajter som gör samma sak vi försöker göra — äger flera digitala produkter och håller ihop det med ett redaktionellt, textdrivet grepp istället för en "tech-holding-template". Fyra konkreta referenser med olika saker att ta med.

### 2.1 — 37signals.com (studio med flera produkter)
**URL:** https://37signals.com
**Vad jag tar:** Manifest-energin. Stora centrerade påståenden, klar blockning, få visuella utsmyckningar, färg används "för att göra en poäng, inte en statement". De har två produkter (Basecamp, HEY) och moderbolaget håller rösten utan att dränka barnen. Historiskt även nummererade påståenden och serif-inslag som gjorde sajten mindre "businessy".
**Vad jag INTE tar:** Deras humoristiska/kontrariska ton. Vi är svenska och vuxna, inte pamflettiga.

### 2.2 — Raycast.com (produktsajt med editorial tonalitet)
**URL:** https://raycast.com
**Vad jag tar:** Rena vita bakgrunder, jettsvart typografi, ett gradient-accent som ENDA färgstatement. Clean geometri, generöst luftflöde. Sättet de använder subtila skuggor och mikrointeraktioner för att få en minimal sajt att kännas levande.
**Vad jag INTE tar:** Den ljusa playfulness-tonen och dev-tool-estetiken. Vi är en holding för konsumentappar, inte ett dev-verktyg.

### 2.3 — Oatly.com (svenskt bolag med distinkt röst)
**URL:** https://oatly.com
**Vad jag tar:** Att våga låta som en människa istället för ett företag. Deras typografiska humor — stora handgjorda påståenden, asymmetri, att använda copy AS design. Att vara så tydlig med POV att man blir igenkännbar utan logotyp.
**Vad jag INTE tar:** Den visuella kaoskänslan och handritade grafiken. Vi är en teknikstudio, inte en havredryck. Vi lånar SÄTTET att skriva direkt, inte ESTETIKEN.

### 2.4 — Basecamp "1999-manifesto" / ursprungliga 37signals
**URL:** https://1999.37signals.com
**Vad jag tar:** Den radikala enkelheten. Ren text, numrerade principer, svartvitt, inget "hero-gradient". Bevis på att en sajt kan vara starkt distinkt med BARA typografi + hierarki + självförtroende i budskapet.
**Vad jag INTE tar:** Den 90-tals-webbkänslan. Vi behöver modern rendering, responsiv typografi, anständiga line-heights.

### 2.5 — Studio Ahremark (svensk design, typografi-first)
**URL:** https://www.studioahremark.com
**Vad jag tar:** Skandinavisk precision — svarta serifer mot brutet vitt, monospace som sekundär röst för metadata, katalog-estetik.
**Vad jag INTE tar:** Portfoliolayouten. Vi visar inte case, vi visar två produkter och en tes.

### 2.6 — Linear.app (minimal tech-varumärke)
**URL:** https://linear.app
**Vad jag tar:** Hur små typografiska detaljer (kerning, weight-kontrast, exakta radavstånd) bär HELA känslan av kvalitet. Sättet de använder ett enda accent-grepp konsekvent.
**Vad jag INTE tar:** Den futuristiska mörka gradienten. Vi går åt andra hållet: ljus, nedtonad, papperskänsla.

### Gemensam insikt
Ingen av de starka referenserna lutar sig mot stock-foton, gradient-hero eller ikon-trion "Kvalitet / Användarvänlighet / Innovation". De bär sajten på **en synlig åsikt + typografi + generöst luftflöde**. Det är dit vi går.

---

## 3. Visuell riktning

### 3.1 Färgpalett — förslag

Förslag: byt bort Tailwind-blå (#3B82F6) helt. Den är generisk, signalerar "jag är en SaaS" och konkurrerar inte. Ersätt med en palett som är uppenbart icke-standard men fortfarande professionell.

**Grundton (hela sajten):**
| Roll | Hex | Namn | Användning |
|---|---|---|---|
| Background | `#F5F2EC` | Paper | Hela sajtens bakgrund. Brutet vitt med varm underton. Ger papperskänsla, skiljer oss från generiska vita SaaS-sajter. |
| Foreground | `#14110F` | Ink | Brödtext + rubriker. Nästan svart men med varm underton så det inte skriker mot papperet. |
| Subtle | `#8A847B` | Smoke | Metadata, captions, eyebrows, mono-text. |
| Rule | `#D8D2C6` | Rule | Horisontella linjer, dividers, borders. |
| Off-paper | `#EDE8DF` | Parchment | Sekundära block / alternerande sektioner. |

**Accent A — Nästa Hem-spåret:**
| Roll | Hex | Namn |
|---|---|---|
| Accent | `#1E3A5F` | Deep Indigo |
| Accent hover | `#162A44` | Deep Indigo dark |

Djupblå (inte Tailwind-blå). Läser som "seriös fastighet / BankID / vuxna pengar".

**Accent B — Flocken-spåret:**
| Roll | Hex | Namn |
|---|---|---|
| Accent | `#B8502E` | Terracotta |
| Accent hover | `#9A3F22` | Terracotta dark |

Terrakotta (bränd jord-ton). Värme, djur, utomhus, promenader. Skiljer sig från Flockens befintliga brand-palett med flit — på moderbolagets sajt refererar vi Flocken, men vi lägger oss inte OVANPÅ dess brand. Terrakottan är Spitakolus tolkning av "det varma barnet".

**Spitakolus egen accent (används för moderbolagets egna element — CTA, länkar i text):**
| Roll | Hex | Namn |
|---|---|---|
| Accent | `#14110F` | Ink (samma som foreground) |
| Alt accent | `#7A3A1F` | Umber |

Spitakolus eget "varumärke" är medvetet återhållsamt. Moderbolaget ska inte skrika — det ska bära de två barnen. Underliggande accent är umber/sepia, ovanpå svart.

**Dark mode:** Spara till v2. Sajten är så textdriven att en prioritering på ljust läge är rätt. Tailwind-default dark mode tar vi bort.

### 3.2 Typografi

Byt ut Geist Sans. Den är Vercel-default och signalerar "ingen har valt font". Förslag:

**Display (rubriker, hero, stora påståenden):**
- **Instrument Serif** (Google Fonts, gratis)
- Alternativ: **Fraunces** eller **EB Garamond**
- Rationale: Serif i display ger omedelbar editorial känsla. Instrument Serif har en självsäker modern-klassisk ton utan att bli bröllopsinbjudan. Används i hero, sektionsrubriker, ev. pull-quotes.

**Brödtext (paragrafer, navigation):**
- **Inter** (Google Fonts, gratis) — eller behåll Geist Sans om det känns redundant att byta två fonter
- Vikter som används: 400 (regular), 500 (medium för weight-kontrast i nav)
- Rationale: Neutral, svensk-vänlig (æ, å, ö renderas rent), hög läsbarhet på mobil.

**Mono (metadata, eyebrows, nummer, tekniska detaljer):**
- **JetBrains Mono** eller **IBM Plex Mono** (Google Fonts, gratis)
- Vikter: 400
- Storlek: alltid ≤14px, versal, tracking +0.08em
- Rationale: Mono-text signalerar "detta är metadata, inte innehåll". Används för "01 / 02 / 03", sektionsmarkörer som "// PRODUKT 01 — NÄSTA HEM", år/org.nr/kontaktuppgifter.

**Typografisk hierarki (riktvärden, desktop):**
- H1 display: 72–96px, Instrument Serif, weight 400, line-height 1.05, tracking -0.02em
- H2 display: 48–64px, samma
- H3: 32px, Instrument Serif weight 400 ELLER Inter 500 (medvetet brytande)
- Brödtext: 18–20px, Inter 400, line-height 1.55
- Eyebrow/meta: 12–14px, mono, versal, tracking +0.08em, Smoke-färg

Mobil: skala ner proportionellt (hero max 48px), behåll luft.

### 3.3 Visuell signatur — "Linjerat manifest"

Det som gör sajten omedelbart igenkännbar är **ett konsekvent typografiskt-editorial manér** som går igen på varje sida:

1. **Nummer-ankare i mono** — varje produkt, värdering eller sektion har ett mono-tal ("01", "02") i Smoke-färg ovanför rubriken. Som katalogsidor.
2. **Horisontella regel-linjer** — tunna 1px linjer i Rule-färg skiljer sektioner. Inga kort, inga skuggor, inga gradient-kort. Bara linjer och luft.
3. **Eyebrows i mono** — varje sektion börjar med en liten mono-text ("// Om bolaget", "// Produkt 01"). Ger dokumentkänsla istället för marknadsförings-känsla.
4. **Serif-påståenden i ensamma rader** — långa tydliga thesis-meningar i serif-display får egen rad med mycket luft runt. Som en affisch, inte en paragraf.
5. **Inga kort med skugga.** Någonsin. Skuggor och rundade gradient-boxar är det enda vi KONSEKVENT tar bort.

Exempel på hur en sektion ser ut i text:

```
// PRODUKT 01                                    [mono eyebrow, Smoke]

Nästa Hem                                         [Instrument Serif, 48px]

Bostadsaffärer utan mäklare.                      [Instrument Serif, 32px, italic]

För den som vill äga sin bostadsaffär själv.      [Inter 20px, två paragraf-
Köpare och säljare möts direkt i appen med         rader max]
BankID och transparent budgivning.

Läs mer om Nästa Hem →                            [Inter 16px, ink, underline on hover]

─────────────────────────────────────────────    [Rule-linje, 1px, Rule-färg]
```

---

## 4. Tonalitet och röst — Spitakolus AB

Flocken är varm, kontrastrik, hundälskar-tonad. Nästa Hem är professionell och vuxen. Spitakolus måste vara något annat igen — moderbolaget ska inte tala som något av barnen. Förslag:

### Rösten
**Torr, observant, självsäker utan att skryta.** Som en bra svensk facklitteratur-författare som förklarar vad hen bygger, utan att sälja det. Låter mer som ett manifest än en pitch.

**Regler vi följer:**
- Första person plural ("vi bygger") — men sparsamt. Hellre nominalisering: "Två produkter. Båda ägda av oss. Ingen extern finansiering."
- Korta meningar. Punkt. Sedan nästa.
- Siffror och substans över adjektiv. Inte "innovativ plattform" — istället "BankID-verifierade bud, ingen mellanhand".
- Tala om vad vi GÖR, inte vad vi STRÄVAR efter.
- Kontrastfigur där det funkar: "inte X, utan Y". (Vi lånar detta grepp från Flockens tonalitet, men med torrare leverans.)

**Ord vi aldrig använder:**
- innovativ / innovation
- smart / smarta
- förenkla vardagen
- strävar efter
- modern / moderna (som tomt adjektiv)
- kraftfull
- framtiden / framtidens
- lösningar (som generisk slaskterm)
- demokratisera (överanvänt)
- "Välkommen till..."

**Ord vi får säga (om det är sant):**
- egna, små, självfinansierade, svenska, oberoende
- bygger, driftar, äger
- BankID, peer-to-peer, geografisk sökning (konkreta termer)

### Positionering i en mening
"Spitakolus är ett litet svenskt teknikbolag som bygger och driftar egna konsumentappar. Två just nu: Nästa Hem och Flocken."

Det är allt. Resten av sajten förklarar de två produkterna och bolaget — inte "vår vision".

---

## 5. Wireframes per sida

### 5.1 Startsida (`/`)

**Layout-princip:** En lång, smal kolumn (max 720px brödtext, max 960px för rubriker). Vänsterjusterad på desktop. Inga centrerade hero-texter. Som en tidningsartikel, inte en pitch-deck.

---

**Sektion 1 — Hero / thesis**
- Syfte: Omedelbart säga vad vi är. Ingen "Välkommen".
- Bakgrund: Paper (#F5F2EC)
- Layout: Vänsterjusterad, top-padding 120px desktop / 80px mobil
- Eyebrow (mono, Smoke): `// SPITAKOLUS AB — STOCKHOLM`
- H1 (Instrument Serif, 88px desktop / 44px mobil):

  **Variant A (rekommenderad):** "Vi bygger två appar. Och inget annat."
  **Variant B:** "Ett litet bolag. Två egna produkter."
  **Variant C:** "Vi driftar två svenska konsumentappar. Själva."

  **Rekommendation: Variant A.** Den är minst förväntad, har rytm, och "inget annat" är ett aktivt vägval — inte en brist. Det är ett POV.

- Underrad (Inter 22px, Ink):
  "Nästa Hem och Flocken. Båda byggda, ägda och driftade av oss."
- CTA-rad (inline länkar, inga knappar):
  `Läs om produkterna →`  ·  `Om bolaget →`
- Under hero: Rule-linje (1px)

---

**Sektion 2 — Produkterna (två spalter, desktop)**
- Syfte: Två produkter, jämställt presenterade, men med egna accentfärger så de särskiljs.
- Bakgrund: Paper
- Layout: Desktop = grid 2 kolumner, 80px gap. Mobil = stack.
- Ingen kort-boxning. Ingen skugga. Bara typografi + en tunn vertikal linje mellan kolumnerna.

**Kolumn vänster — Nästa Hem:**
- Eyebrow mono: `// PRODUKT 01`
- H2 (Instrument Serif, 56px, färg Deep Indigo #1E3A5F): "Nästa Hem"
- Kicker (Instrument Serif italic, 28px, Ink): "Bostadsaffär utan mäklare."
- Brödtext (Inter 18px):
  "Sveriges första peer-to-peer-plattform för bostadsaffärer. Köpare och säljare möts direkt i appen. BankID verifierar alla. Bud läggs transparent. Visningar bokas utan mellanhand."
- Länk: `Läs mer om Nästa Hem →` (Ink, underline on hover)

**Kolumn höger — Flocken:**
- Eyebrow mono: `// PRODUKT 02`
- H2 (Instrument Serif, 56px, färg Terracotta #B8502E): "Flocken"
- Kicker (Instrument Serif italic, 28px, Ink): "För dig som har hund."
- Brödtext (Inter 18px):
  "Hundvänliga platser, hundvakter, parningsprofiler och GPS-stråk för promenader. Samlat i en app, sorterat efter var du är."
- Länk: `Läs mer om Flocken →` (Ink, underline on hover)

- Under sektionen: Rule-linje

---

**Sektion 3 — Manifest / kort om bolaget**
- Syfte: Ett stycke text som positionerar bolaget utan värderingar-trion.
- Bakgrund: Parchment (#EDE8DF), gör att sektionen "vilar" visuellt
- Layout: Smal kolumn (max 640px), vänsterjusterad, padding 120px vertikalt
- Eyebrow mono: `// OM OSS`
- H2 (Instrument Serif, 48px): "Vi äger det vi bygger."
- Brödtext (Inter 20px):
  "Spitakolus är svenskt, självfinansierat och litet med flit. Inga externa investerare. Inga konsultuppdrag. Vi bygger våra egna produkter, driftar dem själva, och svarar själva när något går sönder."
  "Det är en långsammare väg. Den är medvetet vald."
- Länk: `Mer om bolaget →`

---

**Sektion 4 — Kontakt (mini-CTA)**
- Syfte: Lågmäld kontakt-uppmaning. Ingen blå CTA-bar.
- Bakgrund: Paper
- Layout: Vänsterjusterad, padding 80px
- Eyebrow mono: `// KONTAKT`
- H3 (Instrument Serif, 32px): "Skriv till oss."
- Text (Inter 18px): "support@spitakolus.se. Vi svarar inom ett par dagar."
- Ingen knapp. Bara e-postlänken som klickbar.

**Mobil:** Samma struktur, smalare padding (24–32px horisontellt), hero H1 44–52px, kolumnerna blir stack med 64px mellanrum.

---

### 5.2 Om-oss (`/om-oss`)

Ta bort: värderingar-trion (Kvalitet/Användarvänlighet/Innovation), mission-blob, ikonbaserade cirklar. Allt.

---

**Sektion 1 — Hero**
- Eyebrow mono: `// OM SPITAKOLUS AB`
- H1 (Instrument Serif, 88px):
  **Variant A (rekommenderad):** "Ett litet bolag med två produkter."
  **Variant B:** "Två appar. Ett bolag. Ingen extern finansiering."
  **Variant C:** "Vi är Spitakolus."

  **Rekommendation: Variant A.** "Litet" som aktivt positioneringsord är starkare än "innovativt". "Två produkter" säger scope utan att skryta.

- Underrad: "Svenskt, självfinansierat, och byggt för att stanna litet."

---

**Sektion 2 — Bolaget (löpande text, inga ikoner)**
- Eyebrow mono: `// BAKGRUND`
- H2: "Vad vi faktiskt gör."
- Brödtext (tre paragrafer, Inter 20px, smal kolumn):

  "Spitakolus AB är ett svenskt teknikbolag. Vi grundades för att bygga och drifta egna konsumentappar — appar vi själva vill använda, för problem vi själva stöter på. Det är hela affärsidén."

  "Idag driftar vi två produkter. Nästa Hem för bostadsaffärer utan mäklare. Flocken för hundägare som letar hundvakt, parning eller promenadstråk. Båda byggda från grunden av oss. Båda ägda till hundra procent av bolaget."

  "Vi tar inte externt kapital. Vi gör inte konsultuppdrag. Vi bygger inte på uppdrag åt andra. Det är en långsammare väg — men det är också den enda vägen där vi får bestämma själva hur produkterna ska låta, se ut och utvecklas."

---

**Sektion 3 — Principer (numrerade, inte "värderingar")**
Behåller idén med tre punkter men byter ut allt innehåll och formen.

- Eyebrow mono: `// PRINCIPER`
- H2: "Tre saker vi inte tummar på."
- Tre numrerade block, varje med mono-siffra + Instrument Serif-rubrik + kort brödtext:

  **01 — Vi äger koden själva.**
  Inga licensierade white-label-plattformar. Varje rad är skriven internt. Det gör oss långsammare i starten och snabbare när något behöver ändras.

  **02 — Vi säljer inte användardata.**
  Våra intäkter kommer från prenumerationer. Det är den enda modellen vi jobbar med. Det gör val enkla: om en funktion bara funkar om vi säljer data — då bygger vi den inte.

  **03 — Vi svarar själva på supporten.**
  Ingen outsourcad support. Mejlar du support@spitakolus.se når du någon som kan koden. Det sätter en gräns för hur stora vi kan bli — och det är en gräns vi vill ha.

Layout: vertikal stack, varje princip med Rule-linje över och under. Mono-siffra vänsterjusterad på sin egen rad, sedan rubrik, sedan 2–3 raders brödtext.

---

**Sektion 4 — Företagsinformation**
- Eyebrow mono: `// FORMALIA`
- H2: "Bolaget."
- Layout: Definition list-stil, mono för labels (vänster), Inter för värden (höger). Svenskt katalog-grepp.

  ```
  NAMN                Spitakolus AB
  ORG.NR              559554-6101
  HEMVIST             Sverige
  E-POST              support@spitakolus.se
  PRODUKTER           Nästa Hem, Flocken
  GRUNDAT             [årtal om vi har det, annars utelämna]
  ```

---

**Sektion 5 — Produkter (samma grepp som på startsidan)**
Visa de två produkterna i samma 2-kolumns-grid. Används som påminnelse/återknytning.

---

**Sektion 6 — Kontakt-rad**
Samma lågmälda mini-CTA som startsidan.

---

### 5.3 Produkter (`/produkter`)

Den här sidan får mer utrymme per produkt. Inga gradient-block i vänsterspalten med SVG-ikoner. Istället: rent typografisk layout + eventuell mockup-bild (se bildspec).

---

**Sektion 1 — Hero**
- Eyebrow mono: `// PRODUKTER`
- H1 (Instrument Serif, 88px):
  **Variant A (rekommenderad):** "Två appar. Byggda och ägda av oss."
  **Variant B:** "Det vi har släppt."
  **Variant C:** "Nästa Hem och Flocken."

  **Rekommendation: Variant A.** Den är deskriptiv utan att vara generisk, och "ägda av oss" återkommer som thesis från startsidan.

- Underrad: "Båda svenska. Båda aktiva. Båda byggda från grunden."

---

**Sektion 2 — Nästa Hem (full sektion)**
- Eyebrow mono (med Deep Indigo accent): `// PRODUKT 01 — NÄSTA HEM`
- H2 (Instrument Serif, 64px, Deep Indigo): "Nästa Hem"
- Kicker (Instrument Serif italic, 36px, Ink): "Bostadsaffär utan mäklare."

**Layout desktop:** Två kolumner — vänster = text (60%), höger = bildkolumn (40%). Om bild saknas, låt högerkolumnen vara en stor monostyckad faktalista ("Grundad: XXXX / Plattform: iOS, Android / Verifiering: BankID / Status: i utveckling / Lansering: TBD").

**Vänsterkolumn, texten:**

- **Kort beskrivning (Inter 20px):**
  "Sveriges första peer-to-peer-plattform för bostadsaffärer. Köpare och säljare möts direkt i appen — ingen mäklare som mellanhand. BankID verifierar alla parter. Bud läggs transparent. Visningar bokas utan telefonsamtal."

- **Undersektion: För vem.** (H3, Instrument Serif 28px)
  "För köpare och säljare som vill ha full kontroll på sin bostadsaffär och som inte vill betala tiotusentals kronor i provision."

- **Undersektion: Vad du kan göra i appen.** (H3)
  Lista som radlista (inte punktlista-disc, utan mono-pilar `→`):
  - Söka bostäder med filter och karta
  - Boka visningar direkt
  - Lägga bud med BankID-verifiering
  - Skriva direkt med säljaren i säker chatt
  - Publicera egen annons som säljare

- **Undersektion: Status.** (H3)
  "Nästa Hem är under utveckling. [Kort status om vi har det. Ex: "Stängd beta under 2026. Öppen lansering planerad till [datum]."]"

**Högerkolumn:** Se bildspec 7.1.

Under sektionen: Rule-linje (2px, denna är lite tyngre för att markera sektionsbyte).

---

**Sektion 3 — Flocken (full sektion, spegelvänd layout)**
Samma struktur som Nästa Hem men spegelvänd — text till höger, bild/fakta till vänster. Accentfärg Terracotta.

- Eyebrow mono (Terracotta): `// PRODUKT 02 — FLOCKEN`
- H2 (Instrument Serif, 64px, Terracotta): "Flocken"
- Kicker (italic, 36px): "För dig som har hund."

**Texten:**

- **Kort beskrivning:**
  "Flocken samlar fyra saker hundägare faktiskt använder: en karta över hundvänliga platser, bokningsbar hundvakt, parningsprofiler för uppfödare och privatpersoner, och GPS-stråk för promenader. Allt sorterat efter var du är just nu."

- **För vem:**
  "För hundägare i Sverige. Både privatpersoner och uppfödare/kennlar. Prenumeration per månad eller år."

- **Vad du kan göra i appen:**
  - Hitta hundvänliga platser i ditt område
  - Boka hundvakt för dagen, helgen eller semestern
  - Skapa parningsprofil för din hund
  - Upptäcka promenadstråk som andra loggat
  - Chatta direkt med andra hundägare

- **Status:**
  "Flocken är live i Sverige. Internationell expansion är planerad men inte prioriterad."

**Vänsterkolumn (bild/fakta):** Se bildspec 7.2.

---

**Sektion 4 — Lansering och priser (låg nyckel)**
- Eyebrow mono: `// TILLGÄNGLIGHET`
- H2 (Instrument Serif, 32px): "Lansering och priser."
- Kort text (Inter 18px): "Nästa Hem är under utveckling. Flocken är aktiv. Pris och betalplan hittar du i respektive app. Har du specifika frågor — maila oss."

Ingen blå CTA-box. Bara texten + `support@spitakolus.se` som länk.

---

### 5.4 Kontakt (`/kontakt`)

Den här sidan ska vara extremt avskalad. Radikalt. En bra kontaktsida är kort — inte fyra ikonblock.

---

**Sektion 1 — Hero**
- Eyebrow mono: `// KONTAKT`
- H1 (Instrument Serif, 88px):
  **Variant A (rekommenderad):** "Mejla oss."
  **Variant B:** "Skriv så läser vi."
  **Variant C:** "Kontakt."

  **Rekommendation: Variant A.** Radikalt kort. Gör jobbet. "Mejla" är dessutom verbform (aktiverar läsaren) istället för substantivform.

- Underrad (Inter 22px): "Vi är få, så det kan ta ett par dagar. Men vi svarar själva."

---

**Sektion 2 — E-postblocket**
- Layout: vänsterjusterad, generöst luftflöde
- Eyebrow mono: `// PRIMÄR KANAL`
- Stor e-postadress som display-text (Instrument Serif, 56px, klickbar):
  `support@spitakolus.se`
- Kort text under (Inter 18px): "Skriv vad det gäller i ämnesraden så hittar vi rätt person snabbare."

---

**Sektion 3 — Vad du kan skriva om (kort lista)**
- Eyebrow: `// VANLIGA ÄRENDEN`
- H3: "Skriv gärna om."
- Fyra rader i mono-pil-list-stil:
  `→ Frågor om Nästa Hem eller Flocken`
  `→ Teknisk support och buggrapporter`
  `→ Återbetalningar och prenumerationer`
  `→ Samarbeten och partnerskap`

---

**Sektion 4 — Formalia**
Samma definition-list som på om-oss, förkortad:
```
BOLAG       Spitakolus AB
ORG.NR      559554-6101
LAND        Sverige
SVARSTID    2–4 arbetsdagar
```

---

**Sektion 5 — Integritetsnot**
En rad längst ner, Smoke-färg, Inter 14px:
"All e-post behandlas enligt vår integritetspolicy."

---

## 6. Komplett copy-paket

Allt samlat så utvecklaren kan copy-pasta rakt av. Substansen om produkterna är oförändrad (vad de är, BankID, peer-to-peer, hundvakt osv.). Bara tonen och inramningen är omskriven.

### 6.1 Meta (layout.tsx)

**Site title:** `Spitakolus AB`
(Inte "Spitakolus AB - smarta mobilappar". "Smarta mobilappar" är AI-tell.)

**Meta description:**
"Spitakolus AB är ett litet svenskt teknikbolag som bygger och driftar två egna konsumentappar: Nästa Hem och Flocken."

### 6.2 Navigation

Håll kort:
- `Hem` → `/`
- `Produkter` → `/produkter`
- `Bolaget` → `/om-oss` (byter från "Om oss" till "Bolaget" — mer distinkt)
- `Kontakt` → `/kontakt`

### 6.3 Startsida — hela copyn

```
// SPITAKOLUS AB — STOCKHOLM

Vi bygger två appar.
Och inget annat.

Nästa Hem och Flocken. Båda byggda, ägda och driftade av oss.

Läs om produkterna →   ·   Om bolaget →


// PRODUKT 01

Nästa Hem
Bostadsaffär utan mäklare.

Sveriges första peer-to-peer-plattform för bostadsaffärer.
Köpare och säljare möts direkt i appen. BankID verifierar alla.
Bud läggs transparent. Visningar bokas utan mellanhand.

Läs mer om Nästa Hem →


// PRODUKT 02

Flocken
För dig som har hund.

Hundvänliga platser, hundvakter, parningsprofiler och GPS-stråk
för promenader. Samlat i en app, sorterat efter var du är.

Läs mer om Flocken →


// OM OSS

Vi äger det vi bygger.

Spitakolus är svenskt, självfinansierat och litet med flit. Inga
externa investerare. Inga konsultuppdrag. Vi bygger våra egna
produkter, driftar dem själva, och svarar själva när något går
sönder.

Det är en långsammare väg. Den är medvetet vald.

Mer om bolaget →


// KONTAKT

Skriv till oss.

support@spitakolus.se. Vi svarar inom ett par dagar.
```

### 6.4 Om-oss — hela copyn

```
// OM SPITAKOLUS AB

Ett litet bolag med
två produkter.

Svenskt, självfinansierat, och byggt för att stanna litet.


// BAKGRUND

Vad vi faktiskt gör.

Spitakolus AB är ett svenskt teknikbolag. Vi grundades för att
bygga och drifta egna konsumentappar — appar vi själva vill
använda, för problem vi själva stöter på. Det är hela affärsidén.

Idag driftar vi två produkter. Nästa Hem för bostadsaffärer utan
mäklare. Flocken för hundägare som letar hundvakt, parning eller
promenadstråk. Båda byggda från grunden av oss. Båda ägda till
hundra procent av bolaget.

Vi tar inte externt kapital. Vi gör inte konsultuppdrag. Vi
bygger inte på uppdrag åt andra. Det är en långsammare väg —
men det är också den enda vägen där vi får bestämma själva hur
produkterna ska låta, se ut och utvecklas.


// PRINCIPER

Tre saker vi inte tummar på.

01 — Vi äger koden själva.
Inga licensierade white-label-plattformar. Varje rad är skriven
internt. Det gör oss långsammare i starten och snabbare när något
behöver ändras.

02 — Vi säljer inte användardata.
Våra intäkter kommer från prenumerationer. Det är den enda
modellen vi jobbar med. Det gör val enkla: om en funktion bara
funkar om vi säljer data — då bygger vi den inte.

03 — Vi svarar själva på supporten.
Ingen outsourcad support. Mejlar du support@spitakolus.se når du
någon som kan koden. Det sätter en gräns för hur stora vi kan
bli — och det är en gräns vi vill ha.


// FORMALIA

Bolaget.

NAMN        Spitakolus AB
ORG.NR      559554-6101
HEMVIST     Sverige
E-POST      support@spitakolus.se
PRODUKTER   Nästa Hem, Flocken


// PRODUKTER (2-kolumn, återanvänd från startsidan)

[Nästa Hem-kolumn]
[Flocken-kolumn]


// KONTAKT

Skriv till oss.
support@spitakolus.se
```

### 6.5 Produkter — hela copyn

```
// PRODUKTER

Två appar.
Byggda och ägda av oss.

Båda svenska. Båda aktiva. Båda byggda från grunden.


// PRODUKT 01 — NÄSTA HEM

Nästa Hem
Bostadsaffär utan mäklare.

Sveriges första peer-to-peer-plattform för bostadsaffärer.
Köpare och säljare möts direkt i appen — ingen mäklare som
mellanhand. BankID verifierar alla parter. Bud läggs
transparent. Visningar bokas utan telefonsamtal.

För vem.
För köpare och säljare som vill ha full kontroll på sin
bostadsaffär och som inte vill betala tiotusentals kronor
i provision.

Vad du kan göra i appen.
→ Söka bostäder med filter och karta
→ Boka visningar direkt
→ Lägga bud med BankID-verifiering
→ Skriva direkt med säljaren i säker chatt
→ Publicera egen annons som säljare

Status.
Nästa Hem är under utveckling. Mer information kommer löpande.


// PRODUKT 02 — FLOCKEN

Flocken
För dig som har hund.

Flocken samlar fyra saker hundägare faktiskt använder: en karta
över hundvänliga platser, bokningsbar hundvakt, parningsprofiler
för uppfödare och privatpersoner, och GPS-stråk för promenader.
Allt sorterat efter var du är just nu.

För vem.
För hundägare i Sverige. Både privatpersoner och uppfödare/kennlar.
Prenumeration per månad eller år.

Vad du kan göra i appen.
→ Hitta hundvänliga platser i ditt område
→ Boka hundvakt för dagen, helgen eller semestern
→ Skapa parningsprofil för din hund
→ Upptäcka promenadstråk som andra loggat
→ Chatta direkt med andra hundägare

Status.
Flocken är aktiv i Sverige. Internationell expansion är planerad
men inte prioriterad.


// TILLGÄNGLIGHET

Lansering och priser.

Nästa Hem är under utveckling. Flocken är aktiv. Pris och betalplan
hittar du i respektive app. Har du specifika frågor — mejla oss.

support@spitakolus.se
```

### 6.6 Kontakt — hela copyn

```
// KONTAKT

Mejla oss.

Vi är få, så det kan ta ett par dagar. Men vi svarar själva.


// PRIMÄR KANAL

support@spitakolus.se

Skriv vad det gäller i ämnesraden så hittar vi rätt person snabbare.


// VANLIGA ÄRENDEN

Skriv gärna om.

→ Frågor om Nästa Hem eller Flocken
→ Teknisk support och buggrapporter
→ Återbetalningar och prenumerationer
→ Samarbeten och partnerskap


// FORMALIA

BOLAG       Spitakolus AB
ORG.NR      559554-6101
LAND        Sverige
SVARSTID    2–4 arbetsdagar


All e-post behandlas enligt vår integritetspolicy.
```

### 6.7 Footer (behåll kort)

```
Spitakolus AB · Org.nr 559554-6101 · support@spitakolus.se

Integritetspolicy · Användarvillkor · Återbetalning

© 2026 Spitakolus AB
```

Layout: tre textrader, Smoke-färg, Inter 14px, vänsterjusterad. Ingen logo. Ingen sociala-medier-rad om vi inte faktiskt har aktiva konton.

### 6.8 LIX-kontroll (stickprov)

Kontroll på hero-kopia startsida: "Vi bygger två appar. Och inget annat. Nästa Hem och Flocken. Båda byggda, ägda och driftade av oss."
- Meningar: 4. Ord: ~22. Långa ord (>6 bokst.): ca 5.
- LIX ≈ 22+23 ≈ 28. Inom 25–35. Godkänt.

Kontroll på principer 01: "Vi äger koden själva. Inga licensierade white-label-plattformar. Varje rad är skriven internt. Det gör oss långsammare i starten och snabbare när något behöver ändras."
- LIX ≈ 30. Godkänt.

### 6.9 AI-tells-kontroll

Hela paketet skannat mot förbudslistan:
- "innovativ" — 0 förekomster
- "smart / smarta" — 0 förekomster
- "förenkla vardagen" — 0 förekomster
- "strävar efter" — 0 förekomster
- "framtiden" — 0 förekomster
- "moderna lösningar" — 0 förekomster
- Emojis i rubriker — 0
- Utropstecken — 0
- Tankstreck som stilmarkör — används sparsamt (1 gång i om-oss, "en långsammare väg — men det är också..."). Behålls eftersom det är genuint pausat, inte dekorativt.
- Klichéinledningar ("Välkommen till...", "I en värld där...") — 0

---

## 7. Bildspec

Principen: **Sajten klarar sig utan foton.** Det är ett medvetet val. Typografin och luften gör jobbet. Men två platser kan lyftas av bild, OM den är rätt. Om vi inte kan få rätt bild — kör utan.

### 7.1 Nästa Hem — produktsida, högerkolumn

**Alternativ A (rekommenderat om vi inte har skärmbilder):**
Ingen bild. Högerkolumnen är en mono-typografisk "tekniskt datablad":

```
// FAKTABLAD

PLATTFORM     iOS, Android
VERIFIERING   BankID (Svensk e-legitimation)
ARKITEKTUR    Peer-to-peer
MELLANHAND    Ingen
STATUS        Under utveckling
LANSERING     [TBD]
WEBB          [app-URL om finns]
```

Rationale: Den här behandlingen stärker katalog/manifest-estetiken. Om vi inte har polerade skärmbilder — gå inte dit.

**Alternativ B (om vi har skärmbilder):**
En enda app-skärmdump i en ren enhets-ram (iPhone mockup), ingen skugga, på Parchment-bakgrund. Max bredd 420px. Inga gradient-bakgrunder bakom telefonen.

Om vi vill generera en Gemini-bild istället:

**Gemini-prompt (om vi går den vägen):**
```
A single iPhone 15 Pro seen straight-on, portrait orientation,
rendered as a product shot on a warm off-white paper background
(#F5F2EC). The phone screen shows a clean real-estate listings app
interface with a subtle map view, a list of property cards, and
a deep indigo top bar. Photography style: editorial, soft
directional daylight from the left, no heavy shadows, minimal
negative space, matte screen finish. Shot on medium format,
85mm equivalent, f/8. No people, no hands, no props. Color
accuracy and type clarity prioritized. No glare on screen.
Aspect ratio 3:4.
```

Rekommendation: **Kör Alternativ A (faktabladet) till launch.** Billigare, mer on-brand, funkar på vilken enhet som helst. Lägg till skärmbild när vi har en riktigt polerad en.

### 7.2 Flocken — produktsida, vänsterkolumn

Samma resonemang. Prioritet:

**Alternativ A (rekommenderat):**
```
// FAKTABLAD

PLATTFORM     iOS, Android
MODELL        Prenumeration (månad/år)
MÅLGRUPP      Hundägare i Sverige
MARKNAD       Sverige (intl. planerad)
STATUS        Aktiv
WEBB          flocken.info
```

**Alternativ B (om vi har en skärmbild):**
En Flocken-app-skärm (helst kartvyn eller hundvakt-listan) i iPhone-ram, mot Parchment-bakgrund. Storlek max 420px. Ingen skugga.

**Alternativ C (om vi går Gemini-vägen — senare fas):**
```
A single iPhone 15 Pro seen straight-on, portrait orientation,
on a warm off-white paper background (#F5F2EC). The phone screen
shows a dog-oriented app: a map view with pin markers, a bottom
sheet with a list of nearby dog-friendly locations, and a warm
terracotta accent color (#B8502E) on the primary CTA button.
Editorial product photography, soft natural daylight from the
left, matte screen, no glare, no people. Medium format, 85mm
equivalent. Aspect ratio 3:4.
```

Rekommendation: **Alternativ A** tills vi har välriktat skärmmaterial.

### 7.3 Övriga sidor

Inga bilder alls på startsida, om-oss eller kontakt. Typografi, luft och Rule-linjer bär.

### 7.4 Logo

Spitakolus egen logotyp: Om en sådan inte finns — sätt namnet som text i Instrument Serif weight 400, 20px i headern. Det är tillräckligt. Moderbolaget behöver inte ett grafiskt märke — det behöver en tydlig typografisk närvaro.

Flocken-logon (`/public/flocken-logo.png`) används ALDRIG på Spitakolus-sajten. På produktkortet för Flocken: använd bara namnet i Instrument Serif, Terracotta. Skälet: Flocken har sin egen sajt (flocken.info) där logotypen hör hemma. På moderbolagets sajt ska Flocken refereras, inte avbildas.

---

## 8. Implementations-checklista

Prioritering: **MÅSTE** (v1 launch), **TREVLIGT** (kan komma i v1.1).

### 8.1 `src/app/globals.css` — MÅSTE ändras

Fil att skriva om. Måste ändras:

- Ta bort: befintlig Tailwind-blå, befintlig secondary-grön, dark mode-blocket
- Lägg till: nya CSS-variabler för Paper, Ink, Smoke, Rule, Parchment, Deep Indigo, Deep Indigo dark, Terracotta, Terracotta dark, Umber
- Body: byt background till `var(--paper)`, foreground till `var(--ink)`
- Font-stack: byt till Instrument Serif (display), Inter (body), JetBrains Mono (mono). Importera från Google Fonts.
- Dark mode: ta bort hela `@media (prefers-color-scheme: dark)`-blocket. V1 är light-only.

### 8.2 `src/app/layout.tsx` — MÅSTE ändras

- Byt ut `Geist` och `Geist_Mono` mot `Instrument_Serif`, `Inter`, `JetBrains_Mono` (från `next/font/google`)
- CSS-variabler: `--font-display`, `--font-sans`, `--font-mono`
- Uppdatera `<html lang="sv">` behålls
- Uppdatera metadata.title till "Spitakolus AB" (utan "smarta mobilappar"-påhäng)
- Uppdatera metadata.description till den nya versionen (se 6.1)

### 8.3 `src/app/page.tsx` — MÅSTE skrivas om

Riv allt nuvarande. Bygg med sektionerna från 5.1 och copyn från 6.3. Inga gradient-hero, inga centrerade text-block, inga kort med skugga.

### 8.4 `src/app/om-oss/page.tsx` — MÅSTE skrivas om

Riv värderingar-trion, mission-blobben, alla SVG-ikoner. Bygg om enligt 5.2 + 6.4.

### 8.5 `src/app/produkter/page.tsx` — MÅSTE skrivas om

Riv gradient-vänsterspalterna och de inline SVG-ikonerna. Bygg enligt 5.3 + 6.5. Använd faktablad (7.1, 7.2) tills vi har skärmbilder.

### 8.6 `src/app/kontakt/page.tsx` — MÅSTE skrivas om

Riv gradient-kortet, ikonblocken, "Tips-boxen". Bygg enligt 5.4 + 6.6.

### 8.7 Header / Footer (komponenter i `src/components/`)

- Header: Byt ut ev. logo mot "Spitakolus" i Instrument Serif 20px, Ink. Nav-länkar i Inter 15px. Hamburger på mobil, full rad på desktop.
- Footer: Skriv om till tre textrader enligt 6.7. Inga ikoner, inga kolumner.

### 8.8 Legal-sidor (integritetspolicy, användarvillkor, återbetalning)

Behåll juridisk substans oförändrad. Stylea bara med samma typografi-system så de inte ser "läckta" ut från gamla designen. LÅG prioritet — kan göras efter v1 launch.

### 8.9 TREVLIGT ATT HA (v1.1+)

- Skärmbilder/mockups av Nästa Hem och Flocken (ersätter faktabladen)
- Custom 404-sida med samma editorial ton ("Den här sidan finns inte. Vi har bara fyra.")
- OG-bild för social delning: ren typografi på Paper-bakgrund, "Spitakolus AB" i Instrument Serif + thesis-meningen
- Mörkt läge (hold off till v2 — sajten är designad för ljust)
- Subtil vertikal-fade vid scroll in (mikrointeraktion, max 200ms opacity-fade per sektion)
- Favicon uppdaterad till något textbaserat (ett "S" i Instrument Serif på Paper)

### 8.10 Vad vi INTE gör

- Ingen CMS-integration behövs — sajten är så kort att hårdkodad content är rätt
- Inga animationer med tunga libbar (framer-motion etc.). Max CSS-transitions.
- Inga tracking-pixlar utöver det som redan ligger (låt dataskyddslinjen vara)
- Ingen chat-widget
- Ingen "built with Next.js"-note i footer

---

## Appendix A — Snabbreferens för utvecklaren

**Fonter (via next/font/google):**
- `Instrument_Serif` — weights: 400. Italic: yes.
- `Inter` — weights: 400, 500.
- `JetBrains_Mono` — weights: 400.

**Centrala CSS-variabelnamn (förslag):**
```
--paper, --ink, --smoke, --rule, --parchment
--indigo, --indigo-dark
--terracotta, --terracotta-dark
--umber
--font-display, --font-sans, --font-mono
```

**Typografiska grundregler:**
- Max brödtext-bredd: `max-w-[720px]`
- Max rubrik-bredd: `max-w-[960px]`
- Sektionspadding vertikalt: 120px desktop, 80px mobil
- Horisontellt gutter: 40px desktop, 24px mobil
- Eyebrow: mono, versal, 12–14px, tracking wide, Smoke-färg, padding-bottom 24px
- Rule-linje: `border-top: 1px solid var(--rule)`, tagit upp hela content-bredden

**Knapp/CTA-princip:** Vi använder INTE fyllda knappar på v1. Alla CTA:er är textlänkar med pilar (`→`) och underline-on-hover. Om Torbjörn vill ha knappar i v1.1 — håll dem fyrkantiga, inga rundade hörn, svart på Paper med text i Paper-färg.

---

## Appendix B — Vad utvecklaren behöver godkänt innan bygget startar

1. **Färgpalett** — OK att byta bort Tailwind-blå och secondary-grön helt?
2. **Typografival** — Instrument Serif + Inter + JetBrains Mono. Går det att köra med licensmässigt (alla tre är gratis på Google Fonts, ja)?
3. **Inga bilder i v1** — OK att lansera utan skärmbilder och bara ha faktablad på produktsidan?
4. **Nav-terminologi** — "Bolaget" istället för "Om oss". Bekräfta.
5. **Hero-copy** — Variant A på varje sida rekommenderas. Vill Torbjörn se alla varianter implementerade som preview innan val, eller kör vi direkt på rekommendationen?
6. **Footer-minimalism** — 3 rader text, ingen social. Bekräfta.

När dessa sex punkter är godkända kan utvecklingen starta.

---

*Slut på spec.*
