import Image from "next/image";

type HeroExperienceProps = {
  imageAlt: string;
};

export function HeroExperience({ imageAlt }: HeroExperienceProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="hero-drift absolute inset-0">
        <Image
          src="/hero-tiles-restore.jpg"
          alt=""
          width={768}
          height={1024}
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden h-full w-full scale-125 object-cover blur-2xl md:block"
          sizes="100vw"
        />
        <Image
          src="/hero-tiles-restore.jpg"
          alt={imageAlt}
          width={768}
          height={1024}
          priority
          className="hero-bg-img absolute left-0 top-[-12.5%] h-[125%] w-full object-cover object-[38%_center]"
          sizes="100vw"
        />
      </div>
      {/* Refleks na obrazku, pod gradientem i napisami */}
      <div className="hero-sheen absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/85 via-35% to-white/50"
        aria-hidden
      />
    </div>
  );
}
