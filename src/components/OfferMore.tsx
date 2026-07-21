"use client";

import Image from "next/image";
import { useState } from "react";

type OfferMoreProps = {
  moreLabel: string;
  lessLabel: string;
  geometryLabel: string;
  geometryBody: string;
};

export function OfferMore({
  moreLabel,
  lessLabel,
  geometryLabel,
  geometryBody,
}: OfferMoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 flex max-w-2xl flex-col">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="font-display ml-auto flex items-center gap-1.5 text-xs text-accent transition-colors hover:text-[#3f5f9e]"
      >
        {open ? lessLabel : moreLabel}
        <span
          className={`inline-block transition-transform duration-300 ${open ? "-rotate-90" : "rotate-0"}`}
          aria-hidden
        >
          →
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-mulish mt-8 text-sm font-light text-stone">
            {geometryLabel}
          </p>
          <div className="mt-6 flex justify-center gap-0.5 md:justify-start" aria-hidden>
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
          <p className="font-mulish mt-6 text-sm font-light text-stone">
            {geometryBody}
          </p>
        </div>
      </div>
    </div>
  );
}
