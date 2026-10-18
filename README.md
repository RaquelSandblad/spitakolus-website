# Spitakolus AB - Företagswebbplats

En modern Next.js-webbplats för Spitakolus AB, utvecklad för att uppfylla Stripe-krav och visa företagets produkter och tjänster.

## 🚀 Teknologier

- **Next.js 16** - React framework med App Router
- **TypeScript** - Typsäker utveckling
- **Tailwind CSS v4** - Modern utility-first styling
- **React 19** - Senaste React-version

## 📁 Projektstruktur

```
spitakolus-website/
├── src/
│   ├── app/                    # Next.js App Router sidor
│   │   ├── page.tsx           # Startsida
│   │   ├── produkter/         # Produktsida
│   │   ├── kontakt/           # Kontaktsida
│   │   ├── integritetspolicy/ # GDPR-policy
│   │   ├── anvandarvillkor/   # Användarvillkor
│   │   ├── aterbetalning/     # Återbetalningspolicy
│   │   ├── om-oss/            # Om företaget
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styling
│   └── components/            # Återanvändbara komponenter
│       ├── Header.tsx         # Navigation
│       └── Footer.tsx         # Footer med länkar
├── public/                    # Statiska filer
├── package.json
└── README.md
```

## 🎨 Designsystem

Webbplatsen använder ett anpassningsbart färgschema definierat i `src/app/globals.css`:

- **Primärfärg**: Blå (`#3B82F6`)
- **Sekundärfärg**: Grön (`#10B981`)

För att ändra färgerna, uppdatera CSS-variablerna i `globals.css`:

```css
:root {
  --primary: #3B82F6;      /* Din primärfärg */
  --secondary: #10B981;    /* Din sekundärfärg */
}
```

## 🛠️ Komma igång

### Förutsättningar

- Node.js 20.x eller senare
- npm (kommer med Node.js)

### Utveckling

Starta utvecklingsservern:
```powershell
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

### Bygga för produktion

Bygg produktionsversionen:
```powershell
npm run build
```

Starta produktionsservern:
```powershell
npm start
```

## 📄 Sidor

Webbplatsen innehåller följande sidor som uppfyller Stripe-kraven:

- **Hem** (`/`) - Översikt över företaget och produkter
- **Produkter** (`/produkter`) - Detaljerad information om Nästa Hem och Bästa Vän
- **Om oss** (`/om-oss`) - Företagsinformation och värderingar
- **Kontakt** (`/kontakt`) - Kontaktinformation och support
- **Integritetspolicy** (`/integritetspolicy`) - GDPR-kompatibel dataskyddspolicy
- **Användarvillkor** (`/anvandarvillkor`) - Villkor för tjänsteanvändning
- **Återbetalning** (`/aterbetalning`) - Policy för återbetalning, avbokning och tvister

## 🌐 Deployment

### GitHub

Projektet är redo att pushas till GitHub:

```powershell
git add .
git commit -m "Initial commit: Spitakolus website"
git remote add origin https://github.com/[DIN-USERNAME]/spitakolus-website.git
git branch -M main
git push -u origin main
```

### Vercel (Rekommenderat)

1. Gå till [vercel.com](https://vercel.com)
2. Logga in med GitHub
3. Importera `spitakolus-website` repository
4. Vercel identifierar automatiskt Next.js och deployar
5. Få en live URL på några minuter

### Domän (spitakolus.com)

Efter deployment på Vercel:

1. I Vercel: Gå till Settings → Domains
2. Lägg till `spitakolus.com`
3. Kopiera DNS-records som Vercel visar
4. Logga in på [Loopia](https://customerzone.loopia.se/)
5. Gå till DNS-inställningar för `spitakolus.com`
6. Lägg till:
   - **A Record**: `@` → Vercel IP
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
7. Vänta 1-24 timmar för DNS-propagering

## ✨ Anpassa innehåll

### Ändra texter

Alla texter finns i respektive page.tsx-fil. Exempel för att ändra startsidan:

1. Öppna `src/app/page.tsx`
2. Redigera text-innehållet
3. Spara - ändringar syns direkt i dev-mode

### Lägg till logotyp

1. Placera logotypfil i `public/` (t.ex. `logo.svg`)
2. Uppdatera `src/components/Header.tsx`

### Ändra färger

Redigera `src/app/globals.css`:

```css
:root {
  --primary: #DIN-FÄRG;
  --secondary: #DIN-FÄRG;
}
```

## 📋 Stripe-krav ✅

Webbplatsen uppfyller alla Stripe-krav:

- ✅ Visar företagsnamn (Spitakolus AB)
- ✅ Beskriver vad företaget säljer (mobilappar)
- ✅ Kontaktuppgifter (e-post, org.nr)
- ✅ Integritetspolicy (GDPR-kompatibel)
- ✅ Användarvillkor
- ✅ Återbetalnings- och avbokningspolicy
- ✅ Alla sidor publika (ingen inloggning)
- ✅ Mobilanpassad (responsiv design)
- ✅ Snabb laddning (Next.js optimering)

## 🆘 Support

För problem eller frågor:
- E-post: support@spitakolus.com
- Org.nr: 559554-6101

## 📝 Licens

Copyright © 2025 Spitakolus AB. Alla rättigheter förbehållna.
