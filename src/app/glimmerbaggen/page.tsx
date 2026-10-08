import Image from 'next/image';
import Link from 'next/link';

// Glimmerbaggens egen sida. Färgerna är desamma som i spelet.
const FEATURES = [
  {
    title: 'Gräv i en oändlig värld',
    text: 'Under ängen finns jord, sten, kol, rötter och vattenfickor – och stora grottor med sjöar. Baggen rullar nerför branta gångar och går en bit i taket med klibbiga fötter. Varje värld är ny.',
    color: '#ffd65a',
  },
  {
    title: 'Ljus är trygghet',
    text: 'Spindlar och skorpioner bor i mörkret. Tänd facklor, svamplyktor och läger – i ljuset vågar de inte komma nära. Djupt nere sover jordmaskar som vaknar när du gräver för högljutt.',
    color: '#ff9ecb',
  },
  {
    title: 'Bygg för att komma fram',
    text: 'Stegar, stöd och block tar dig upp ur grottorna och över hålen. Lös jord kan spricka, och en del gamla väggar håller tillbaka vatten – knakar det är det bråttom!',
    color: '#b8f07a',
  },
  {
    title: 'Ett hem som växer',
    text: 'Bygg till stugan med verkstad, sovrum och museum. Rädda Glimmerstadens sju vilsna invånare – de flyttar hem till dig, gården vid stugan växer och grannarna berättar om den gamla staden.',
    color: '#8fd3ff',
  },
  {
    title: 'Ljuset avslöjar hemligheter',
    text: 'Lys upp det gamla – allt syns inte i mörkret. Djupt nere finns hemligheter som bara visar sig i rätt ljus.',
    color: '#a066f2',
  },
  {
    title: 'Ljud och musik',
    text: 'Mjuk musik som byter stämning i varje område, och små ljud för allt du gräver, bygger och hittar – allt gjort för spelet.',
    color: '#2ec4b6',
  },
];

// Lagren på vägen ner mot Glimmerstaden.
const AREAS = [
  { name: 'Rotlabyrinten', depth: '40–160 m', text: 'ett nät av jätterötter som växer igen', color: '#b8f07a' },
  { name: 'De översvämmade kamrarna', depth: '160–360 m', text: 'sjöar och källor där vattnet stiger och sjunker', color: '#8fd3ff' },
  { name: 'Kolskogen', depth: '360–600 m', text: 'stammar av kol och facklor som flammar upp', color: '#ffb86b' },
  { name: 'Kristallgrottan', depth: '600 m –', text: 'kristaller som tänds av ljus och tänder varandra', color: '#a066f2' },
];

// Fler bilder från spelet.
const GALLERY = [
  { src: '/glimmerbaggen/kristallruinen.webp', alt: 'En kristallruin där pannlampans stråle studsar i kristallerna', caption: 'Kristallruinerna: vrid kristallerna så att strålen når symbolen.' },
  { src: '/glimmerbaggen/dammen.webp', alt: 'Vatten väller ut i en tunnel och svampar lyser', caption: 'En gammal vägg brister – och de törstiga svamparna vaknar.' },
  { src: '/glimmerbaggen/hemligheten.webp', alt: 'Skalbaggen med pannlampan i en mörk ruin', caption: 'Allt syns inte i mörkret …' },
];

export default function Gravspelet() {
  return (
    <div>
      {/* Början */}
      <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="text-center lg:text-left">
            <Image
              src="/glimmerbaggen/ikon.png"
              alt="Glimmerbaggen – den lilla lila skalbaggen med pannlampan"
              width={96}
              height={96}
              className="mx-auto mb-6 h-24 w-24 rounded-3xl border-[3px] border-[#1b1030] shadow-[0_6px_0_#0b0614] lg:mx-0"
              priority
            />
            <span className="inline-block rounded-full border-2 border-[#ffd65a]/60 px-4 py-1 text-sm font-semibold text-[#ffd65a]">
              Under utveckling · snart på Android och iPhone
            </span>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl">Glimmerbaggen</h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#d6cbea] lg:mx-0">
              En liten lila skalbagge med pannlampa har en stuga på ängen – och under den väntar en hel värld. Gräv dig ner
              genom grottor och ruiner, hitta kartans fyra bitar och väck Den gamla staden kring Jordens hjärta, 800–1000
              meter ner.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#spela-ihop"
                className="rounded-full border-[3px] border-[#1b1030] bg-[#ffd65a] px-7 py-3 text-center font-bold text-[#1b1030] shadow-[0_4px_0_#0b0614] transition-transform hover:-translate-y-0.5"
              >
                Spela ihop med kompisar
              </a>
              <a
                href="#konto"
                className="rounded-full border-[3px] border-[#fff4d6]/80 px-7 py-3 text-center font-bold text-[#fff4d6] transition-colors hover:bg-[#fff4d6] hover:text-[#1b1030]"
              >
                Ditt konto
              </a>
            </div>
          </div>
          <Screenshot src="/glimmerbaggen/hemmet.webp" alt="Stugan på ängen med verkstad, sovrum och museum, och grannarna på gården" priority />
        </div>
      </section>

      {/* Vad gör man? */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Vad gör man?</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-3xl border-[3px] border-[#1b1030] bg-[#241638] p-6 shadow-[0_5px_0_#0b0614]">
                <div className="mb-3 h-2 w-14 rounded-full" style={{ backgroundColor: f.color }} />
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-[#d6cbea]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Områdena */}
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Områden som känns olika</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#d6cbea]">
              Ju djupare du kommer, desto mörkare blir det – och varje lager har sina egna regler.
            </p>
            <ul className="mt-6 space-y-3">
              {AREAS.map((a) => (
                <li key={a.name} className="flex gap-3 rounded-2xl border-[3px] border-[#1b1030] bg-[#241638] px-5 py-3">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: a.color }} />
                  <span className="leading-relaxed text-[#d6cbea]">
                    <strong className="text-[#fff4d6]">{a.name}</strong> <span className="text-sm">({a.depth})</span> – {a.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <Screenshot src="/glimmerbaggen/kolskogen.webp" alt="Kolskogen: en grotta med kolstammar och flammande facklor" />
          </div>
        </div>
      </section>

      {/* Ruinerna */}
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Screenshot src="/glimmerbaggen/teckningen.webp" alt="En ruin med facklor och en gammal teckning av dansen runt hjärtat" />
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ruiner som är labyrinter</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#d6cbea]">
              Djupt nere ligger gamla ruiner – varje ruin är en egen labyrint. Längst in väntar en skatt till ditt museum,
              och någonstans finns en av kartans bitar. Glimmerfolket som bodde här har lämnat spår efter sig: sängar,
              leksaker och teckningar som visar hur de levde.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#d6cbea]">
              Men akta dig: skorpioner vandrar i gångarna och spindlar hänger i taket.
            </p>
          </div>
        </div>
      </section>

      {/* Den gamla staden */}
      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Den gamla staden</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#d6cbea]">
              Kring Jordens hjärta ligger Glimmerstadens ruiner: gator i fyra våningar, hus, trappor och gamla maskiner som
              har somnat. Väck maskinerna med kol, så tänds lyktorna och hissarna börjar gå – en stadsdel i taget, tills
              hela staden vaknar.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Screenshot src="/glimmerbaggen/gamla-staden.webp" alt="Den gamla staden med trappor, en maskin och lyktor som lyser" />
          </div>
        </div>
      </section>

      {/* Fler bilder */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Mer att upptäcka</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GALLERY.map((g) => (
              <figure key={g.src}>
                <Screenshot src={g.src} alt={g.alt} small />
                <figcaption className="mt-3 text-center leading-relaxed text-[#d6cbea]">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Spela ihop */}
      <section id="spela-ihop" className="scroll-mt-20 px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Spela ihop</h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-3xl border-[3px] border-[#1b1030] bg-[#241638] p-6 shadow-[0_5px_0_#0b0614]">
                <h3 className="text-xl font-bold text-[#ffd65a]">Samarbete</h3>
                <p className="mt-2 leading-relaxed text-[#d6cbea]">
                  Bjud in en kompis till din värld. Gräv tillsammans, visa vägen med signaler och hjälp varandra förbi
                  spindlarna.
                </p>
              </div>
              <div className="rounded-3xl border-[3px] border-[#1b1030] bg-[#241638] p-6 shadow-[0_5px_0_#0b0614]">
                <h3 className="text-xl font-bold">
                  Lagspel: <span className="text-[#a066f2]">lila</span> mot <span className="text-[#2ec4b6]">turkos</span>
                </h3>
                <p className="mt-2 leading-relaxed text-[#d6cbea]">
                  Två till fyra spelare i en arena. Gräv dig fram till motståndarnas kista, ta en kristall och bär hem den.
                  Lagblock kan bara ditt eget lag gräva bort – stäng in motståndarna så vinner ni direkt. Ingen kan dö.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Screenshot src="/glimmerbaggen/lagspel.webp" alt="Lagspel: det lila lagets bas med kristallkistan och ställningen" />
          </div>
        </div>
      </section>

      {/* Konto */}
      <section id="konto" className="scroll-mt-20 px-5 py-14">
        <div className="mx-auto max-w-3xl rounded-3xl border-[3px] border-[#1b1030] bg-[#fff4d6] p-8 text-[#1b1030] shadow-[0_6px_0_#0b0614] sm:p-10">
          <h2 className="text-3xl font-extrabold">Ditt konto</h2>
          <p className="mt-4 leading-relaxed text-[#4a3d5c]">
            Med ett konto sparas din värld i molnet, så att du kan fortsätta på en annan telefon eller dator. Skapa kontot i
            spelet under <strong>Meny → Konto</strong>. Du får ett mejl med en länk för att bekräfta din e-post.
          </p>
          <ul className="mt-5 space-y-2 text-[#4a3d5c]">
            <li>
              <strong>Glömt lösenordet?</strong> Tryck på <em>Glömt lösenordet?</em> i spelet, så får du ett mejl med en länk
              där du väljer ett nytt.
            </li>
            <li>
              <strong>Ta bort ditt konto:</strong> Meny → Konto → Ta bort konto i spelet, eller{' '}
              <Link href="/glimmerbaggen/ta-bort-konto" className="font-semibold text-[#6d3ccc] underline">
                på webben
              </Link>
              . <strong>Frågor?</strong> Mejla{' '}
              <a href="mailto:support@spitakolus.com" className="font-semibold text-[#6d3ccc] underline">
                support@spitakolus.com
              </a>
              .
            </li>
          </ul>
          <p className="mt-5 text-sm text-[#8a7aa0]">
            Läs om{' '}
            <Link href="/glimmerbaggen/integritet" className="underline">
              vilka uppgifter spelet sparar
            </Link>{' '}
            och{' '}
            <Link href="/glimmerbaggen/villkor" className="underline">
              villkoren
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

function Screenshot({ src, alt, priority = false, small = false }: { src: string; alt: string; priority?: boolean; small?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[28px] border-[4px] border-[#0b0614] bg-[#0b0614] shadow-[0_10px_0_#0b0614,0_20px_50px_rgba(160,102,242,0.25)]">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="h-auto w-full"
        sizes={small ? '(min-width: 768px) 360px, 100vw' : '(min-width: 1024px) 560px, 100vw'}
        priority={priority}
      />
    </div>
  );
}
