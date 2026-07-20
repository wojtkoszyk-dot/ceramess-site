"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/types";

type ProcessStepsProps = {
  steps: Dictionary["process"]["steps"];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
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
      className={`process-path mt-12 flex w-full max-w-[30.8rem] flex-col pb-20 sm:max-w-none sm:flex-row sm:items-start sm:pb-0 ${
        active ? "is-active" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[0.4375rem] hidden h-px sm:block"
        aria-hidden
      >
        <div className="process-path__line h-full origin-left bg-accent/25" />
        <div className="process-path__line-fill absolute inset-0 origin-left bg-accent" />
      </div>

      {steps.map((step, i) => (
        <Fragment key={step.num}>
          <li
            className="process-path__step relative flex w-3.5 shrink-0 flex-col items-center sm:w-auto sm:flex-1"
            style={{ ["--step-i" as string]: i }}
          >
            <div className="process-path__dot relative z-10 h-3.5 w-3.5">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/20" />
                <span className="process-path__dot-core relative h-2.5 w-2.5 rounded-full bg-accent ring-[6px] ring-white" />
              </span>
            </div>

            <div className="absolute left-[calc(100%+1rem)] top-1/2 w-[min(20rem,calc(100vw-5rem))] -translate-y-1/2 text-left sm:hidden">
              <span className="font-display block text-3xl font-bold leading-none text-accent">
                {step.num}
              </span>
              <div className="absolute left-0 top-full mt-0.5">
                <p className="font-display text-[0.845rem] font-bold leading-none text-dark">
                  {step.keyword}
                </p>
                <p className="font-mulish mt-2 text-sm font-light leading-snug text-stone">
                  {step.desc}
                </p>
              </div>
            </div>

            <div className="mt-5 hidden text-center sm:block">
              <span className="font-display block text-3xl font-bold leading-none text-accent md:text-[2.25rem]">
                {step.num}
              </span>
              <p className="font-display mt-0.5 text-[0.845rem] font-bold leading-none text-dark md:text-[1.024rem]">
                {step.keyword}
              </p>
              <p className="font-mulish mx-auto mt-2 max-w-[16rem] text-sm font-light leading-snug text-stone">
                {step.desc}
              </p>
            </div>
          </li>

          {i < steps.length - 1 && (
            <li
              className="process-path__connector relative ml-[0.4375rem] h-[10rem] w-px shrink-0 sm:hidden"
              aria-hidden
              style={{ ["--step-i" as string]: i }}
            >
              <div className="process-path__vline absolute inset-0 origin-top bg-accent/25" />
              <div className="process-path__vline-fill absolute inset-0 origin-top bg-accent" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
