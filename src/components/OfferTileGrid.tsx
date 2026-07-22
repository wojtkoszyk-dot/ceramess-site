"use client";

import Image from "next/image";
import { useState } from "react";

type OfferTileGridProps = {
  imageAlt: string;
};

const CREAM = "/offer-collage-v3.png";
const COLS = 3;
const ROWS = 4;

/** Special tiles: collapsed + expanded pair. Index 8 = prawy rząd, drugi od dołu. */
const SPECIAL: Record<
  number,
  { collapsed: string; expanded: string; alt: string }
> = {
  9: {
    collapsed: "/offer-tile-clay.png",
    expanded: "/offer-tile-clay-expanded.png",
    alt: "Minimalizm, geometria, prostota",
  },
  8: {
    collapsed: "/offer-tile-osb.png",
    expanded: "/offer-tile-osb-expanded.png",
    alt: "Wyjątkowe, niepowtarzalne",
  },
  4: {
    collapsed: "/offer-tile-checker.png",
    expanded: "/offer-tile-checker-expanded.png",
    alt: "Wszystko ręcznie",
  },
  7: {
    collapsed: "/offer-tile-stack.png",
    expanded: "/offer-tile-stack-expanded.png",
    alt: "Zero masówki",
  },
};

function cellPos(i: number) {
  return { col: i % COLS, row: Math.floor(i / COLS) };
}

function expandBlock(i: number) {
  const { col, row } = cellPos(i);
  const startCol = Math.min(col, COLS - 2);
  const startRow = Math.min(row, ROWS - 2);
  const covered: number[] = [];
  for (let r = startRow; r < startRow + 2; r++) {
    for (let c = startCol; c < startCol + 2; c++) {
      covered.push(r * COLS + c);
    }
  }
  const originX = col === startCol ? "left" : "right";
  const originY = row === startRow ? "top" : "bottom";
  return { covered, originX, originY };
}

export function OfferTileGrid({ imageAlt }: OfferTileGridProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const active =
    expandedIndex === null ? null : expandBlock(expandedIndex);
  const coveredSet = new Set(active?.covered ?? []);

  return (
    <div
      className="grid w-full grid-cols-3 gap-1.5 self-start overflow-visible [--offer-gap:0.375rem] md:gap-2 md:[--offer-gap:0.5rem]"
      aria-label={imageAlt}
    >
      {Array.from({ length: 12 }, (_, i) => {
        const special = SPECIAL[i];
        const isExpanded = expandedIndex === i;
        const isCovered =
          expandedIndex !== null && coveredSet.has(i) && !isExpanded;
        const block = expandBlock(i);

        return (
          <div
            key={i}
            className={`relative aspect-square transition-opacity duration-500 ${
              isCovered ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setExpandedIndex((prev) => (prev === i ? null : i))
              }
              aria-expanded={isExpanded}
              aria-label={special?.alt}
              className={`absolute overflow-hidden rounded-[6px] border-0 bg-transparent p-0 outline-none will-change-[width,height] focus-visible:ring-2 focus-visible:ring-accent ${
                isExpanded ? "z-20" : "z-10 hover:brightness-[0.98]"
              }`}
              style={{
                [block.originX]: 0,
                [block.originY]: 0,
                width: isExpanded ? "calc(200% + var(--offer-gap))" : "100%",
                height: isExpanded ? "calc(200% + var(--offer-gap))" : "100%",
                transition:
                  "width 0.55s cubic-bezier(0.22, 1, 0.36, 1), height 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {special ? (
                <>
                  <Image
                    src={special.collapsed}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 66vw, 33vw"
                    className={`object-contain transition-opacity duration-500 ${
                      isExpanded ? "opacity-0" : "opacity-100"
                    }`}
                    aria-hidden
                  />
                  <Image
                    src={special.expanded}
                    alt={special.alt}
                    fill
                    sizes="(max-width: 768px) 66vw, 33vw"
                    className={`object-contain transition-opacity duration-500 ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              ) : (
                <Image
                  src={CREAM}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 66vw, 33vw"
                  className="object-contain"
                  aria-hidden
                />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}
