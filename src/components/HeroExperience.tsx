import Image from "next/image";

type HeroExperienceProps = {
  imageAlt: string;
};

export function HeroExperience({ imageAlt }: HeroExperienceProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="hero-kenburns absolute inset-0">
        <Image
          src="/hero-tiles.png"
          alt={imageAlt}
          width={768}
          height={1024}
          priority
          className="absolute left-0 top-[-12.5%] h-[125%] w-full object-cover object-[38%_center]"
          sizes="100vw"
        />
      </div>
      <div className="hero-shimmer absolute inset-0" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/85 via-35% to-white/50"
        aria-hidden
      />
    </div>
  );
}
