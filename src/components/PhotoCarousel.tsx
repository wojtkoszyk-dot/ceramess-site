"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const photos = [
  {
    src: "/slide-1.png",
    alt: "Kafel — rząd domków",
  },
  {
    src: "/slide-2.png",
    alt: "Kafel — domki na linii",
  },
  {
    src: "/slide-3.png",
    alt: "Kafel — sylwetka dachów",
  },
  {
    src: "/slide-4.png",
    alt: "Kafel — domki z oknami",
  },
  {
    src: "/slide-5.png",
    alt: "Kafel — forma z kreskowaniem",
  },
  {
    src: "/slide-6.png",
    alt: "Kafel — falujące linie",
  },
  {
    src: "/slide-7.png",
    alt: "Kafel — wzór z kropkami",
  },
  {
    src: "/slide-8.png",
    alt: "Kafel — manufaktura",
  },
  {
    src: "/slide-9.png",
    alt: "Kafel — pejzaż geometryczny",
  },
  {
    src: "/slide-10.png",
    alt: "Kafel — formy na indygo",
  },
  {
    src: "/slide-14.png",
    alt: "Kafel — pasy animowane",
  },
  {
    src: "/slide-12.png",
    alt: "Kafel — pasy i szczyty",
  },
  {
    src: "/slide-11.png",
    alt: "Kafel — żebrowanie",
  },
  {
    src: "/slide-13.png",
    alt: "Kafel — siatka z punktami",
  },
  {
    src: "/slide-15.png",
    alt: "Kafel — perspektywa geometryczna",
  },
  {
    src: "/slide-16.png",
    alt: "Kafel — fasady z oknami",
  },
  {
    src: "/slide-17.png",
    alt: "Kafel — linie pionowe",
  },
  {
    src: "/slide-18.png",
    alt: "Kafel — okno w fasadzie",
  },
  {
    src: "/slide-19.png",
    alt: "Kafel — dach i żaluzje",
  },
  {
    src: "/slide-20.png",
    alt: "Kafel — obrys domu",
  },
  {
    src: "/slide-21.png",
    alt: "Kafel — dom w paskach",
  },
  {
    src: "/slide-22.png",
    alt: "Kafel — bloki z oknami",
  },
  {
    src: "/slide-23.png",
    alt: "Kafel — dom w kreskach",
  },
  {
    src: "/slide-24.png",
    alt: "Kafel — sylwetka na dwukolorze",
  },
];

const GAP = 24;
const N = photos.length;
const LOOP = [...photos, ...photos, ...photos];

function useSlideSize() {
  const [size, setSize] = useState(260);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setSize(Math.min(220, w * 0.62));
      else if (w < 1024) setSize(260);
      else setSize(300);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export function PhotoCarousel() {
  const slide = useSlideSize();
  const [index, setIndex] = useState(N);
  const [animate, setAnimate] = useState(true);
  const jumping = useRef(false);

  const normalize = useCallback((i: number) => {
    if (i < N) return i + N;
    if (i >= N * 2) return i - N;
    return i;
  }, []);

  const goTo = useCallback((next: number) => {
    if (jumping.current) return;
    setAnimate(true);
    setIndex(next);
  }, []);

  const handleTransitionEnd = () => {
    if (index >= N && index < N * 2) return;

    jumping.current = true;
    setAnimate(false);
    setIndex(normalize(index));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        jumping.current = false;
        setAnimate(true);
      });
    });
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      goTo(index + 1);
    }, 4500);
    return () => window.clearInterval(id);
  }, [index, goTo]);

  const translateX = `calc(50% - ${index * (slide + GAP) + slide / 2}px)`;

  return (
    <div className="relative">
      <div className="overflow-hidden py-6 md:py-10">
        <div
          className={`flex items-center ${
            animate
              ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
          }`}
          style={{
            gap: GAP,
            transform: `translateX(${translateX})`,
          }}
          onTransitionEnd={(e) => {
            if (e.target !== e.currentTarget) return;
            if (e.propertyName !== "transform") return;
            handleTransitionEnd();
          }}
        >
          {LOOP.map((photo, i) => {
            const active = i === index;
            const dist = Math.abs(i - index);

            return (
              <button
                key={`${photo.src}-${i}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={photo.alt}
                aria-current={active}
                className={`shrink-0 border-0 bg-transparent p-0 outline-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus:outline-none focus-visible:outline-none ${
                  active
                    ? "z-10 scale-110"
                    : dist === 1
                      ? "z-[1] scale-[0.85] opacity-70"
                      : "scale-75 opacity-40"
                }`}
                style={{ width: slide }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={512}
                  height={512}
                  className="h-auto w-full"
                  sizes={`${Math.round(slide)}px`}
                  priority={i >= N && i < N + 3}
                />
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label="Poprzednie zdjęcie"
        onClick={() => goTo(index - 1)}
        className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-dark shadow-sm backdrop-blur-sm transition-colors hover:bg-white md:left-2"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Następne zdjęcie"
        onClick={() => goTo(index + 1)}
        className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-dark shadow-sm backdrop-blur-sm transition-colors hover:bg-white md:right-2"
      >
        →
      </button>
    </div>
  );
}
