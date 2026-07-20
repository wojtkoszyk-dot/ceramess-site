"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { LocaleSwitcher } from "./LocaleSwitcher";

type HeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
};

export function Header({ locale, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#o-nas", label: nav.about },
    { href: "#tworzymy", label: nav.vibe },
    { href: "#galeria", label: nav.manufactory },
    { href: "#proces", label: nav.process },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-stone/10 bg-[#F3F1E9] text-dark transition-shadow duration-500 ease-out ${
        scrolled ? "shadow-[0_8px_32px_-12px_rgba(30,30,30,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:h-16 md:px-10">
        <Link href="/#hero" className="shrink-0">
          <Image
            src="/logo-v4.png"
            alt="Ceramess"
            width={179}
            height={25}
            priority
            className="h-3.5 w-auto md:h-[1.05rem]"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-xs text-stone transition-colors hover:bg-accent-soft hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <LocaleSwitcher locale={locale} />
          <a href="#kontakt" className="btn-accent ml-2 !h-9 !px-4 !text-[0.6875rem]">
            {nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher locale={locale} />
          <button
            type="button"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/15 transition-colors"
            onClick={() => setOpen(!open)}
          >
            <span className="relative h-3 w-4">
              <span
                className={`absolute left-0 h-px w-full bg-dark transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-dark transition-all ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-dark transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stone/10 bg-[#F3F1E9] px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-0.5">
            {[...links, { href: "#kontakt", label: nav.contact }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-xl px-3 py-2.5 transition-colors ${
                    link.href === "#kontakt"
                      ? "font-display text-sm text-accent"
                      : "text-sm text-dark hover:text-accent"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
