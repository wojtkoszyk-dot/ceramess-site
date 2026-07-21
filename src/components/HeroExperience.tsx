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
          alt={imageAlt}
          width={768}
          height={1024}
          priority
          className="absolute inset-0 h-full w-full object-cover object-[38%_center]"
          sizes="100vw"
        />
      </div>
      <div className="hero-sheen absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/85 via-35% to-white/50"
        aria-hidden
      />
    </div>
  );
}
