import { Header } from "@/components/Header";
import { HeroExperience } from "@/components/HeroExperience";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { ProcessSteps } from "@/components/ProcessSteps";
import Image from "next/image";
import Link from "next/link";

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
                Made slowly · design to last
              </p>
              <h1 className="animate-fade-up-delay-1 font-display text-[2.5rem] font-bold text-dark/80 md:text-6xl lg:text-7xl">
                Kafle.
                <br />
                Handmade.
                <br />
                <span className="text-stone/80">Ceramika.</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-4 max-w-sm text-sm text-stone">
                Połączenie minimalizmu z geometrią. Ręcznie.
                <br />
                Zero masówki.
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
          </div>
        </section>

        {/* O nas */}
        <section id="o-nas" className="relative bg-[#F3F1E9] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="section-label font-mulish !font-extralight">O nas</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
              Dwie przyjaciółki, partnerki w biznesie.
            </h2>
            <p className="mt-4 max-w-md text-sm text-stone">
              Cześć!
              <br />
              Cera_mess to Ania i Patrycja, dwie indywidualistki, które po prostu
              kochają tworzyć i dzielić się tym z innymi. Nasza marka to
              minimalizm, prostota i przede wszystkim pasja.
            </p>
            <a
              href="#tworzymy"
              className="font-display mt-5 inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-[#3f5f9e]"
            >
              Co lecimy →
            </a>
          </div>
        </section>

        {/* Co tworzymy */}
        <section id="tworzymy" className="relative bg-white pt-16 md:pt-24">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
            <div>
              <p className="section-label font-mulish !font-extralight">Oferta</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
                Co lecimy?
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-stone">
                Kafle. Od początku do końca. Od pomysłu po gotową, zapakowaną
                płytkę dla Was! Nasze Kafle to nie tylko ściana w łazience czy
                kuchni, to sztuka, sztuka, która może Cię codziennie otaczać. To
                produkt premium, indywidualny, niepowtarzalny, ale też elastyczny.
                Każdy projekt jest tworzony indywidualnie. Mały format,
                wielkoformatowa instalacja, jeden akcent albo cała ściana. Skala
                zależy od Ciebie.
              </p>

              <p className="font-mulish mt-10 text-sm font-light text-stone">
                Nasze geometria:
              </p>
              <div className="mt-6 flex justify-center gap-0.5" aria-hidden>
                {[1, 3, 2, 4, 5].map((n) => (
                  <div
                    key={n}
                    className="relative h-[50px] w-[50px] shrink-0 overflow-hidden"
                  >
                    <Image
                      src={`/geometry-${n}.png`}
                      alt=""
                      fill
                      sizes="50px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="font-mulish mt-6 max-w-2xl text-sm font-light text-stone">
                To punkt wyjścia. Wizualny język, z którego budujemy wzory.
                Detal spotyka minimalizm, a całość pozostaje prosta,
                ponadczasowa i premium.
              </p>
            </div>
          </div>
        </section>

        {/* Kafle — karuzela zdjęć */}
        <section id="galeria" className="relative bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div>
              <p className="section-label font-mulish !font-extralight">Kafle</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
                Manufaktura
              </h2>
              <p className="font-mulish mt-3 max-w-2xl text-sm font-light text-stone">
                Kafle powstają z uważnością. Dzięki temu każdy egzemplarz
                ma swój charakter. Mniej produkcji. Więcej rzemiosła.
              </p>
            </div>

            <div className="mt-10">
              <PhotoCarousel />
            </div>
          </div>
        </section>

        {/* Proces */}
        <section id="proces" className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 bg-tile-grid opacity-25" aria-hidden />
          <div className="relative mx-auto flex max-w-7xl flex-col px-5 md:px-10">
            <p className="section-label font-mulish !font-extralight">Proces</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
              Behind the Tile
            </h2>
            <p className="font-mulish mt-3 max-w-2xl text-sm font-light text-stone">
              Zobacz, jak pracujemy. Od pomysłu do gotowego kafla. Każdy etap
              ma znaczenie.
            </p>

            <ProcessSteps />

            <p className="font-mulish mt-auto max-w-2xl pt-16 text-xs font-light leading-relaxed text-stone md:pt-24">
              *w procesie kroki 02 i 03 przenikają się, w zależności od funkcji
              jaką będą pełnić kafle dobieramy materiały
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="bg-dark py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
            <p className="section-label font-mulish justify-center !font-extralight !text-[#F3F1E9]/70 [&::before]:!bg-accent">
              Kontakt
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
              Masz pomysł?
            </h2>
            <p className="font-mulish mt-3 text-sm font-light text-[#F3F1E9]/70">
              Pisz. Znajdziemy coś dla Ciebie albo zaprojektujemy to razem.
            </p>

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
        </section>
      </main>

      <footer className="border-t border-stone/15 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 text-center md:flex-row md:px-10 md:text-left">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-footer.png"
              alt="Ceramess"
              width={179}
              height={25}
              className="h-3.5 w-auto md:h-[1.05rem]"
            />
          </Link>
          <p className="text-xs text-stone">© {new Date().getFullYear()} · made slow</p>
        </div>
      </footer>
    </>
  );
}
