import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { HeroExperience } from "@/components/HeroExperience";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { ProcessSteps } from "@/components/ProcessSteps";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function Home() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <Header locale={locale} nav={t.nav} />

      <main className="overflow-x-hidden">
        <section id="hero" className="relative min-h-[100svh]">
          <HeroExperience imageAlt={t.hero.imageAlt} />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-20 md:px-10 md:pb-14">
            <div className="max-w-2xl">
              <p className="section-label font-mulish animate-fade-up mb-4 !font-extralight">
                {t.hero.label}
              </p>
              <h1 className="animate-fade-up-delay-1 font-display text-[2.5rem] font-bold text-dark/80 md:text-6xl lg:text-7xl">
                {t.hero.titleLine1}
                <br />
                {t.hero.titleLine2}
                <br />
                <span className="text-accent">{t.hero.titleLine3}</span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-4 max-w-sm text-sm text-stone">
                {t.hero.subtitleLine1}
                <br />
                {t.hero.subtitleLine2}
              </p>
            </div>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-2.5">
              <a href="#galeria" className="btn-accent">
                {t.hero.ctaTiles}
              </a>
              <a
                href="#kontakt"
                className="inline-flex h-11 items-center justify-center rounded-full border border-stone/35 bg-white/50 px-6 font-display text-xs font-medium text-dark backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
              >
                {t.hero.ctaWrite}
              </a>
            </div>
          </div>
        </section>

        <section id="tworzymy" className="relative bg-[#F3F1E9] pt-16 md:pt-24">
          <div className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
            <div>
              <p className="section-label font-mulish !font-extralight">{t.offer.label}</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
                {t.offer.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-stone">{t.offer.body}</p>

              <p className="font-mulish mt-10 text-sm font-light text-stone">
                {t.offer.geometryLabel}
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
                {t.offer.geometryBody}
              </p>
            </div>
          </div>
        </section>

        <section id="proces" className="bg-white py-16 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col px-5 md:px-10">
            <p className="section-label font-mulish !font-extralight">{t.process.label}</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
              {t.process.title}
            </h2>
            <p className="font-mulish mt-3 max-w-2xl text-sm font-light text-stone">
              {t.process.body}
            </p>

            <ProcessSteps steps={t.process.steps} />

            <p className="font-mulish mt-auto max-w-2xl pt-16 text-xs font-light leading-relaxed text-stone md:pt-24">
              {t.process.footnote}
            </p>
          </div>
        </section>

        <section id="galeria" className="relative bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div>
              <p className="section-label font-mulish !font-extralight">{t.gallery.label}</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
                {t.gallery.title}
              </h2>
              <p className="font-mulish mt-3 max-w-2xl text-sm font-light text-stone">
                {t.gallery.body}
              </p>
            </div>

            <div className="mt-10">
              <PhotoCarousel
                photoAlts={t.gallery.photoAlts}
                prevLabel={t.gallery.prev}
                nextLabel={t.gallery.next}
              />
            </div>
          </div>
        </section>

        <section id="o-nas" className="relative bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="section-label font-mulish !font-extralight">{t.about.label}</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-dark md:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-4 max-w-md text-sm text-stone">
              {t.about.greeting}
              <br />
              {t.about.body}
            </p>
            <a
              href="#tworzymy"
              className="font-display mt-5 inline-flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-[#3f5f9e]"
            >
              {t.about.link}
            </a>
          </div>
        </section>

        <section id="kontakt" className="bg-dark py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
            <p className="section-label font-mulish justify-center !font-extralight !text-[#F3F1E9]/70 [&::before]:!bg-accent">
              {t.contact.label}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold text-white md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="font-mulish mt-3 text-sm font-light text-[#F3F1E9]/70">
              {t.contact.body}
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1.5 px-5 md:px-10">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo-footer.png"
              alt="Ceramess"
              width={179}
              height={25}
              className="h-3.5 w-auto md:h-[1.05rem]"
            />
          </Link>
          <p className="text-xs leading-none text-stone">
            © {new Date().getFullYear()} · {t.footer.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
