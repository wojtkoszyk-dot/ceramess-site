"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import type { Locale } from "@/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
};

function setLocaleCookie(locale: Locale) {
  document.cookie = `locale=${locale};path=/;max-age=31536000;sameSite=lax`;
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function switchLocale(next: Locale) {
    if (next === locale || pending) return;

    setLocaleCookie(next);
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div
      className="flex scale-[0.85] items-center gap-1.5 rounded-full border border-stone/15 px-2 py-1 origin-center"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchLocale("pl")}
        className={`px-1.5 text-[0.6875rem] font-medium transition-colors ${
          locale === "pl" ? "text-accent" : "text-stone hover:text-dark"
        }`}
        aria-pressed={locale === "pl"}
      >
        PL
      </button>
      <span className="text-stone/30" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => switchLocale("en")}
        className={`px-1.5 text-[0.6875rem] font-medium transition-colors ${
          locale === "en" ? "text-accent" : "text-stone hover:text-dark"
        }`}
        aria-pressed={locale === "en"}
        disabled={pending}
      >
        EN
      </button>
    </div>
  );
}
