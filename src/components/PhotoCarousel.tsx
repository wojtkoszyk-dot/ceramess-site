"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const photoSources = [
  "/slide-1.png",
  "/slide-2.png",
  "/slide-3.png",
  "/slide-4.png",
  "/slide-5.png",
  "/slide-6.png",
];

type PhotoCarouselProps = {
  photoAlts: string[];
  prevLabel: string;
  nextLabel: string;
};

const GAP = 24;

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

export function PhotoCarousel({
  photoAlts,
  prevLabel,
  nextLabel,
}: PhotoCarouselProps) {
  const photos = useMemo(
    () =>
      photoSources.map((src, index) => ({
        src,
        alt: photoAlts[index] ?? "",
      })),
    [photoAlts]
  );
  const N = photos.length;
  const LOOP = useMemo(() => [...photos, ...photos, ...photos], [photos]);

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
                <div className="rounded-[6px] bg-white p-3 shadow-[inset_0_0_0_0.33px_#1e1e1e]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={512}
                    height={512}
                    className="h-auto w-full rounded-[4px]"
                    sizes={`${Math.round(slide)}px`}
                    priority={i >= N && i < N + 3}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        aria-label={prevLabel}
        onClick={() => goTo(index - 1)}
        className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-dark shadow-sm backdrop-blur-sm transition-colors hover:bg-white md:left-2"
      >
        ←
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={() => goTo(index + 1)}
        className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-dark shadow-sm backdrop-blur-sm transition-colors hover:bg-white md:right-2"
      >
        →
      </button>
    </div>
  );
}
