"use client";

import { Fragment, useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    keyword: "Szkic",
    desc: "Przeniesienie pomysłu na papier",
  },
  {
    num: "02",
    keyword: "Forma",
    desc: "Zabawa gliną, stworzenie Waszego kafelka",
  },
  {
    num: "03",
    keyword: "Grafika",
    desc: "Naniesienie projektu graficznego na płytkę",
  },
];

export function ProcessSteps() {
  const ref = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ol
      ref={ref}
      className={`process-path mt-12 flex w-full max-w-[30.8rem] flex-col pb-20 sm:max-w-[39.6rem] sm:flex-row sm:items-start sm:pb-24 md:max-w-[46.2rem] lg:max-w-[52.8rem] ${
        active ? "is-active" : ""
      }`}
    >
      {steps.map((step, i) => (
        <Fragment key={step.num}>
          <li
            className="process-path__step relative flex w-3.5 shrink-0 flex-col items-center"
            style={{ ["--step-i" as string]: i }}
          >
            <div className="process-path__dot relative z-10 h-3.5 w-3.5">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/20" />
                <span className="process-path__dot-core relative h-2.5 w-2.5 rounded-full bg-accent ring-[6px] ring-white" />
              </span>

              <div className="absolute left-[calc(100%+1rem)] top-1/2 -translate-y-1/2 text-left">
                <span className="font-display block text-3xl font-bold leading-none text-accent md:text-[2.25rem]">
                  {step.num}
                </span>
                <div className="absolute left-0 top-full mt-0.5">
                  <p className="font-display text-[0.845rem] font-bold leading-none text-dark md:text-[1.024rem]">
                    {step.keyword}
                  </p>
                  <p className="font-mulish mt-2 whitespace-nowrap text-sm font-light leading-snug text-stone">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          </li>

          {i < steps.length - 1 && (
            <li
              className="process-path__connector relative ml-[0.4375rem] h-[10rem] w-px shrink-0 sm:ml-0 sm:mt-[0.4375rem] sm:h-px sm:min-w-[4.4rem] sm:flex-1"
              aria-hidden
              style={{ ["--step-i" as string]: i }}
            >
              <div className="process-path__vline absolute inset-0 origin-top bg-accent/25 sm:hidden" />
              <div className="process-path__vline-fill absolute inset-0 origin-top bg-accent sm:hidden" />
              <div className="process-path__line absolute inset-0 origin-left bg-accent/25 max-sm:hidden" />
              <div className="process-path__line-fill absolute inset-0 origin-left bg-accent max-sm:hidden" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
