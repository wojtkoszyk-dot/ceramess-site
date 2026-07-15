import Image from "next/image";

export function HeroExperience() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/hero-tiles.png"
        alt="Ręcznie malowane płytki ceramiczne w układzie mozaiki"
        width={768}
        height={1024}
        priority
        className="absolute left-0 top-[-12.5%] h-[125%] w-full object-cover object-[38%_center]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white from-0% via-white/85 via-35% to-white/50"
        aria-hidden
      />
    </div>
  );
}
