# Nästa Steg - Deployment Guide

## ✅ Vad är klart

Webbplatsen är nu färdig och körs lokalt på http://localhost:3000

**Skapade sidor:**
- ✅ Startsida (Hem)
- ✅ Produkter (Nästa Hem & Bästa Vän)
- ✅ Om oss
- ✅ Kontakt
- ✅ Integritetspolicy (GDPR)
- ✅ Användarvillkor
- ✅ Återbetalning & Avbokning

**Tekniskt:**
- ✅ Next.js 16 med TypeScript
- ✅ Tailwind CSS med anpassningsbara färger
- ✅ Responsiv design (mobil & desktop)
- ✅ Header med navigation
- ✅ Footer med juridiska länkar
- ✅ Inga kompileringsfel

## 🚀 Nästa Steg: Publicera till Internet

### Steg 1: Pusha till GitHub (5 min)

Du behöver först skapa ett GitHub repository. Öppna en ny terminal och kör:

```powershell
# Gå till projektmappen
cd "C:\Users\raque\Spitakolus Hemsida\spitakolus-website"

# Konfigurera Git (om du inte gjort det)
git config --global user.name "Raquel Sandblad"
git config --global user.email "raquel.sandblad@hotmail.com"

# Lägg till alla filer
git add .

# Skapa första commit
git commit -m "Initial commit: Spitakolus AB website"

# Skapa ett repository på GitHub först:
# 1. Gå till https://github.com/new
# 2. Repository name: spitakolus-website
# 3. Public
# 4. Skapa UTAN README (vi har redan en)
# 5. Kopiera URL:en (t.ex. https://github.com/RaquelSandblad/spitakolus-website.git)

# Koppla till GitHub (BYT UT URL:en med din egen)
git remote add origin https://github.com/RaquelSandblad/spitakolus-website.git

# Pusha till GitHub
git branch -M main
git push -u origin main
```

### Steg 2: Deploya till Vercel (10 min)

1. **Gå till Vercel:**
   - Öppna https://vercel.com/signup
   - Välj "Continue with GitHub"
   - Logga in med ditt GitHub-konto
   - Godkänn att Vercel får åtkomst

2. **Importera projektet:**
   - Klicka "Add New..." → "Project"
   - Du ska se ditt `spitakolus-website` repository
   - Klicka "Import"

3. **Konfigurera (behöver oftast inte ändras):**
   - Project Name: `spitakolus-website`
   - Framework Preset: Next.js (autodetekteras)
   - Root Directory: `./` (standard)
   - Build Settings: Lämna som standard
   - Klicka "Deploy"

4. **Vänta på deployment (2-3 min)**
   - Vercel bygger och deployar automatiskt
   - Du får en live URL: `https://spitakolus-website.vercel.app`

### Steg 3: Koppla din domän (spitakolus.com) (5 min + väntetid)

1. **I Vercel:**
   - Gå till ditt projekt → "Settings" → "Domains"
   - Skriv in: `spitakolus.com`
   - Klicka "Add"
   - Vercel visar nu DNS-records du behöver lägga till

2. **Anteckna DNS-records från Vercel:**
   ```
   A Record:
   Name: @ (eller tom)
   Value: 76.76.21.21 (exempel - använd det Vercel visar)

   CNAME Record:
   Name: www
   Value: cname.vercel-dns.com (exempel - använd det Vercel visar)
   ```

3. **Logga in på Loopia:**
   - Gå till https://customerzone.loopia.se/
   - Klicka på "spitakolus.com"
   - Gå till "DNS-inställningar" eller "Zone editor"

4. **Uppdatera DNS:**
   - **Ta bort gamla records:**
     - Radera eventuella gamla A-records för `@`
     - Radera eventuella gamla CNAME för `www`
   
   - **Lägg till nya records:**
     - **A Record:**
       - Typ: A
       - Host/Name: @ (eller lämna tomt)
       - Pekar på/Value: [IP från Vercel]
       - TTL: 3600
     
     - **CNAME Record:**
       - Typ: CNAME
       - Host/Name: www
       - Pekar på/Value: [värde från Vercel]
       - TTL: 3600
   
   - Klicka "Spara"

5. **Vänta på DNS-propagering:**
   - Detta tar 1-24 timmar (oftast 1-4 timmar)
   - Testa med: `nslookup spitakolus.com`
   - När det fungerar:
     - ✅ https://spitakolus.com → fungerar
     - ✅ https://www.spitakolus.com → fungerar
     - ✅ Automatisk HTTPS (Vercel ordnar SSL)

## 📝 Efter publicering

### Framtida uppdateringar

När du vill göra ändringar:

1. **Gör ändringar lokalt:**
   ```powershell
   cd "C:\Users\raque\Spitakolus Hemsida\spitakolus-website"
   npm run dev
   # Redigera filer i VS Code
   ```

2. **Pusha till GitHub:**
   ```powershell
   git add .
   git commit -m "Beskriv vad du ändrat"
   git push origin main
   ```

3. **Automatisk deployment:**
   - Vercel deployer automatiskt när du pushar!
   - Tar ~2 minuter
   - Ändringarna syns på spitakolus.com

### Anpassa webbplatsen

**Ändra färger:**
- Öppna `src/app/globals.css`
- Ändra `--primary` och `--secondary` färger

**Ändra texter:**
- Öppna respektive sida i `src/app/`
- Redigera text direkt i JSX

**Lägg till logotyp:**
1. Spara logotyp i `public/logo.svg` (eller .png)
2. Uppdatera `src/components/Header.tsx`
3. Importera och visa med `<Image>` komponenten

## 🎯 Stripe-aktivering

När webbplatsen är live på spitakolus.com:

1. Logga in på Stripe Dashboard
2. Gå till Settings → Account
3. Under "Public business information":
   - Website: `https://spitakolus.com`
   - Privacy Policy: `https://spitakolus.com/integritetspolicy`
   - Terms of Service: `https://spitakolus.com/anvandarvillkor`
   - Refund Policy: `https://spitakolus.com/aterbetalning`
4. Spara och vänta på godkännande

## 📞 Behöver hjälp?

Om något inte fungerar:

**Git-problem:**
```powershell
# Kolla status
git status

# Se remote URL
git remote -v
```

**Build-problem:**
```powershell
# Rensa och bygg om
rm -rf .next
npm run build
```

**Vercel-problem:**
- Kolla deployment logs i Vercel dashboard
- Klicka på "Deployments" → Välj den senaste → "View Build Logs"

## ✅ Checklist för Go-Live

- [ ] Kod pushad till GitHub
- [ ] Projekt deployat på Vercel
- [ ] Vercel URL fungerar (spitakolus-website.vercel.app)
- [ ] DNS records uppdaterade på Loopia
- [ ] spitakolus.com visar rätt sida (efter DNS-propagering)
- [ ] HTTPS fungerar
- [ ] Alla sidor laddas korrekt
- [ ] Mobil-vy fungerar
- [ ] Stripe account information uppdaterad
- [ ] E-post support@spitakolus.se är aktiv

Lycka till! 🚀
