"use client";

import { useEffect, useRef, useState } from "react";
import { GeometricTile } from "@/components/GeometricTile";
import type { TilePattern } from "@/lib/tile-patterns";

type ScrollMosaicProps = {
  patterns: TilePattern[];
  cols?: number;
  className?: string;
  intensity?: "hero" | "gallery" | "subtle";
  fill?: boolean;
};

export function ScrollMosaic({
  patterns,
  cols = 6,
  className = "",
  intensity = "gallery",
  fill = false,
}: ScrollMosaicProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setProgress(1);
      return;
    }

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      /* 0 = rozłożone, 1 = ułożone w siatkę (bez obrotu — proste kafle) */
      const assembly = 1 - Math.min(1, Math.max(0, rect.top / (vh * 0.55)));
      setProgress(assembly);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const slideX = intensity === "hero" ? 48 : intensity === "gallery" ? 36 : 20;
  const slideY = intensity === "hero" ? 20 : 12;
  const rows = Math.ceil(patterns.length / cols);
  const loose = 1 - progress;

  return (
    <div ref={ref} className={`h-full w-full ${className}`}>
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: fill ? `repeat(${rows}, minmax(0, 1fr))` : undefined,
          gap: `${2 + loose * (intensity === "hero" ? 5 : 3)}px`,
        }}
      >
        {patterns.map((pattern, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          /* Układanie z lewej + delikatne zjazd z góry — zawsze prosto */
          const offsetX = loose * (slideX + col * 10);
          const offsetY = loose * (slideY + row * 4);

          return (
            <div
              key={`${pattern}-${i}`}
              className={`will-change-transform ${fill ? "min-h-0" : "aspect-square"}`}
              style={{
                transform: `translate3d(${-offsetX}px, ${-offsetY}px, 0)`,
                transition: "transform 0.2s ease-out, gap 0.2s ease-out",
              }}
            >
              <GeometricTile pattern={pattern} className="h-full w-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
