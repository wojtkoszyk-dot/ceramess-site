"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  {
    src: "/gallery-1.png",
    alt: "Tekstura gliny i ceramiki — terakota na kremie",
  },
  {
    src: "/gallery-2.png",
    alt: "Stos ręcznie robionych kafli na drewnie",
  },
  {
    src: "/gallery-3.png",
    alt: "Kafel z geometrycznym wzorem — domki i deszcz",
  },
];

export function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + photos.length) % photos.length);
  };

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/5] w-full shrink-0 sm:aspect-[16/10] md:aspect-[21/10]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={photo.src === photos[0].src}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Poprzednie zdjęcie"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-dark backdrop-blur-sm transition-colors hover:bg-white md:left-5"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Następne zdjęcie"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-dark backdrop-blur-sm transition-colors hover:bg-white md:right-5"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Zdjęcie ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-dark" : "w-1.5 bg-dark/30 hover:bg-dark/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
