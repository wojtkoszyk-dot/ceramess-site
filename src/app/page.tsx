import { GeometricTile } from "@/components/GeometricTile";
import { Header } from "@/components/Header";
import { HeroExperience } from "@/components/HeroExperience";
import { ScrollMosaic } from "@/components/ScrollMosaic";
import { GALLERY_MOSAIC, type TilePattern } from "@/lib/tile-patterns";

const creations: { title: string; desc: string; pattern: TilePattern }[] = [
  { title: "Płytki", desc: "Głównie to. Malowane ręcznie.", pattern: "circle-soft" },
  { title: "Geometria", desc: "Linie, łuki, rytm.", pattern: "semi-tr" },
  { title: "Custom", desc: "Twój vibe. Nasze ręce.", pattern: "diag-dark-stone" },
];

const steps = [
  { num: "01", title: "Szkic" },
  { num: "02", title: "Forma" },
  { num: "03", title: "Szkliwo" },
  { num: "04", title: "Wypał" },
  { num: "05", title: "Finisz" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        {/* Hero — tekstura gliny / ceramiki */}
        <section id="hero" className="relative min-h-[100svh]">
          <HeroExperience />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-20 md:px-10 md:pb-14">
            <div className="max-w-2xl">
              <p className="section-label font-mulish animate-fade-up mb-4 !font-extralight">
                handmade · slow craft
              </p>
              <h1 className="animate-fade-up-delay-1 font-display text-[2.5rem] font-bold text-dark/80 md:text-6xl lg:text-7xl">
                Manufaktura Kafli.
                <br />
                Handmade.
                <br />
                <span className="text-stone/80">Pasja.</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-4 max-w-sm text-sm text-stone">
                Dwie przyjaciółki, partnerki w biznesie. Zero masówki.
              </p>
            </div>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-2.5">
              <a href="#galeria" className="btn-accent">
                Kafle
              </a>
              <a
                href="#kontakt"
                className="inline-flex h-11 items-center justify-center rounded-full border border-stone/35 bg-white/50 px-6 font-display text-xs font-medium text-dark backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                Napisz
              </a>
            </div>

            <p className="mt-10 hidden text-[0.625rem] uppercase tracking-widest text-stone/55 md:block">
              przewiń w dół
            </p>
          </div>
        </section>

        {/* O nas */}
        <section id="o-nas" className="relative bg-[#F3F1E9] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="section-label">O nas</p>
            <h2 className="mt-4 text-3xl text-dark md:text-5xl">
              Dwie dziewczyny.
              <span className="text-stone"> Jedna glina.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-stone">
              Robimy głównie płytki ceramiczne — często z geometrycznymi akcentami.
              Wolno, z sercem, pod Twój dom.
            </p>
            <a
              href="#tworzymy"
              className="font-display mt-5 inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-[#3f5f9e]"
            >
              Co robimy →
            </a>
          </div>
        </section>

        {/* Co tworzymy */}
        <section id="tworzymy" className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-tile-grid opacity-40" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Co tworzymy</p>
                <h2 className="mt-4 text-3xl text-dark md:text-5xl">
                  Co lecimy
                </h2>
              </div>
              <p className="text-xs text-stone md:text-right">Trzy linie. Ten sam vibe.</p>
            </div>

            <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
              {creations.map((item) => (
                <li key={item.title} className="hover-lift card-surface group">
                  <div className="relative aspect-square p-2">
                    <GeometricTile
                      pattern={item.pattern}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="border-t border-stone/10 p-5">
                    <h3 className="text-lg text-dark">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-stone">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Galeria — scroll rearrange */}
        <section id="galeria" className="relative bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Galeria</p>
                <h2 className="mt-4 text-3xl text-dark md:text-5xl">
                  Wzory w ruchu
                </h2>
              </div>
              <p className="text-xs text-stone">Przewiń — układanie z lewej</p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-stone/10 bg-white p-3 md:rounded-[2rem] md:p-4">
              <ScrollMosaic patterns={GALLERY_MOSAIC} cols={4} intensity="gallery" />
            </div>
          </div>
        </section>

        {/* Proces */}
        <section id="proces" className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-tile-grid opacity-25" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-5 md:px-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="section-label">Proces</p>
                <h2 className="mt-4 text-3xl text-dark md:text-5xl">
                  Jak to powstaje
                </h2>
                <p className="mt-3 text-xs text-stone">5 kroków. Zero pośpiechu.</p>

                <ol className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                  {steps.map((step) => (
                    <li
                      key={step.num}
                      className="rounded-2xl border border-stone/10 bg-cream px-4 py-3 transition-colors hover:border-accent/30"
                    >
                      <span className="font-display text-xs text-accent">{step.num}</span>
                      <p className="font-display mt-1 text-sm font-medium text-dark">
                        {step.title}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card-surface relative min-h-[300px] overflow-hidden p-3 md:min-h-[400px]">
                <ScrollMosaic
                  patterns={GALLERY_MOSAIC.slice(0, 16)}
                  cols={4}
                  intensity="gallery"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="bg-cream pb-16 pt-4 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-dark md:rounded-[2rem]">
              <div className="absolute inset-0 opacity-40">
                <ScrollMosaic
                  patterns={GALLERY_MOSAIC.slice(0, 12)}
                  cols={6}
                  intensity="subtle"
                />
              </div>
              <div className="absolute inset-0 bg-dark/75" />
              <div className="relative px-6 py-12 text-center md:px-14 md:py-16">
                <p className="section-label justify-center text-stone [&::before]:bg-accent">
                  Kontakt
                </p>
                <h2 className="mt-4 text-3xl text-white md:text-5xl">
                  Masz pomysł?
                </h2>
                <p className="mt-3 text-sm text-stone">Pisz. Custom mile widziany.</p>

                <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
                  <a href="mailto:hello@ceramess.pl" className="btn-accent min-w-[200px]">
                    hello@ceramess.pl
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex h-11 min-w-[200px] items-center justify-center rounded-full border border-stone/30 px-6 text-xs font-medium text-white transition-colors hover:border-accent hover:text-accent"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone/15 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 text-center md:flex-row md:px-10 md:text-left">
          <span className="font-display text-base font-medium text-dark">Ceramess</span>
          <p className="text-xs text-stone">© {new Date().getFullYear()} · made slow</p>
        </div>
      </footer>
    </>
  );
}
