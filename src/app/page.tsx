import Image from "next/image";
import { Header } from "@/components/Header";

const images = {
  hero: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1600&q=80",
  about: "https://images.unsplash.com/photo-1565193566171-7a0ee83b4b32?w=1200&q=80",
  tiles: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
  decor: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  custom: "https://images.unsplash.com/photo-1459518969031-8c978e72fca4?w=800&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1578749556568-bc3975f78863?w=800&q=80",
    "https://images.unsplash.com/photo-1493106640135-6bcdf43844de?w=800&q=80",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
    "https://images.unsplash.com/photo-1565193566171-7a0ee83b4b32?w=800&q=80",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
  ],
  process: "https://images.unsplash.com/photo-1565193566171-7a0ee83b4b32?w=1200&q=80",
};

const creations = [
  { title: "Płytki", desc: "Ściany z charakterem.", image: images.tiles },
  { title: "Dekor", desc: "Detale, które robią klimat.", image: images.decor },
  { title: "Custom", desc: "Twój vibe. Nasze ręce.", image: images.custom },
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
        {/* Hero */}
        <section id="hero" className="relative min-h-[100svh] pt-14">
          <div className="absolute inset-0">
            <Image
              src={images.hero}
              alt="Ceramika Ceramess"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-stone/30 to-cream" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl flex-col justify-end px-5 pb-8 pt-16 md:px-10 md:pb-12">
            <div className="max-w-2xl">
              <p className="section-label animate-fade-up mb-4 text-white/85">
                handmade · slow craft
              </p>
              <h1 className="animate-fade-up-delay-1 font-display text-[2.5rem] font-semibold text-white md:text-6xl lg:text-7xl">
                Ceramika.
                <br />
                <span className="text-cream">Ręcznie. Na max.</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-4 max-w-sm text-sm text-white/80">
                Dwie artystki. Glina. Zero masówki.
              </p>
            </div>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-2.5">
              <a href="#galeria" className="btn-accent">
                Galeria
              </a>
              <a href="#kontakt" className="btn-outline">
                Napisz
              </a>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-3 gap-2 px-5 pb-8 md:gap-3 md:px-10">
            {[
              { value: "100%", label: "ręcznie" },
              { value: "1/1", label: "unikat" },
              { value: "∞", label: "vibes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/20 bg-white/10 px-3 py-3 text-center backdrop-blur-md md:py-4"
              >
                <p className="font-display text-xl font-medium text-white md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[0.625rem] uppercase tracking-widest text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* O nas */}
        <section id="o-nas" className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:items-center md:gap-8 md:px-10">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:col-span-5 md:rounded-[2rem]">
              <Image
                src={images.about}
                alt="Warsztat Ceramess"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>

            <div className="md:col-span-7 md:pl-4 lg:pl-10">
              <p className="section-label">O nas</p>
              <h2 className="font-display mt-4 text-3xl font-semibold text-dark md:text-5xl">
                Dwie dziewczyny.
                <span className="text-stone"> Jedna glina.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-stone">
                Malujemy płytki i dekoracje. Wolno, z sercem — pod Twój dom, nie pod
                taśmę.
              </p>
              <a
                href="#tworzymy"
                className="font-display mt-5 inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-[#3f5f9e]"
              >
                Co robimy →
              </a>
            </div>
          </div>
        </section>

        {/* Co tworzymy */}
        <section id="tworzymy" className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Co tworzymy</p>
                <h2 className="font-display mt-4 text-3xl font-semibold text-dark md:text-5xl">
                  Co lecimy
                </h2>
              </div>
              <p className="text-xs text-stone md:text-right">Trzy linie. Ten sam vibe.</p>
            </div>

            <ul className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
              {creations.map((item) => (
                <li key={item.title} className="hover-lift card-surface group overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-medium text-dark">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-stone">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Galeria */}
        <section id="galeria" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Galeria</p>
                <h2 className="font-display mt-4 text-3xl font-semibold text-dark md:text-5xl">
                  Z warsztatu
                </h2>
              </div>
              <p className="text-xs text-stone">Każda sztuka = unikat.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-2.5 md:grid-cols-12 md:grid-rows-2 md:gap-3">
              {images.gallery.map((src, i) => (
                <div
                  key={i}
                  className={`hover-lift relative overflow-hidden rounded-2xl md:rounded-3xl ${
                    i === 0
                      ? "col-span-2 aspect-[16/11] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[440px]"
                      : "aspect-square md:col-span-5 md:aspect-auto md:min-h-[214px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Ceramess ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes={
                      i === 0
                        ? "(max-width: 768px) 100vw, 58vw"
                        : "(max-width: 768px) 50vw, 42vw"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proces */}
        <section id="proces" className="bg-cream py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="section-label">Proces</p>
                <h2 className="font-display mt-4 text-3xl font-semibold text-dark md:text-5xl">
                  Jak to powstaje
                </h2>
                <p className="mt-3 text-xs text-stone">5 kroków. Zero pośpiechu.</p>

                <ol className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
                  {steps.map((step) => (
                    <li
                      key={step.num}
                      className="rounded-2xl border border-stone/10 bg-white px-4 py-3 transition-colors hover:border-accent/30"
                    >
                      <span className="font-display text-xs text-accent">{step.num}</span>
                      <p className="font-display mt-1 text-sm font-medium text-dark">
                        {step.title}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] md:min-h-full md:rounded-[2rem]">
                <Image
                  src={images.process}
                  alt="Proces ceramiki"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="bg-cream pb-16 pt-4 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="rounded-[1.5rem] bg-dark px-6 py-12 md:rounded-[2rem] md:px-14 md:py-16">
              <div className="mx-auto max-w-lg text-center">
                <p className="section-label justify-center text-stone [&::before]:bg-accent">
                  Kontakt
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold text-white md:text-5xl">
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
