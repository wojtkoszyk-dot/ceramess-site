"use client";

import { useState } from "react";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#tworzymy", label: "Tworzymy" },
  { href: "#galeria", label: "Galeria" },
  { href: "#proces", label: "Proces" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:h-16 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-medium tracking-tight text-dark md:text-xl"
        >
          Ceramess
        </a>

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
          <a href="#kontakt" className="btn-accent ml-2 !h-9 !px-4 !text-[0.6875rem]">
            Kontakt
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-stone/15 md:hidden"
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

      {open && (
        <nav className="border-t border-stone/10 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-0.5">
            {[...links, { href: "#kontakt", label: "Kontakt" }].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-xl px-3 py-2.5 transition-colors hover:bg-accent-soft hover:text-accent ${
                    link.href === "#kontakt" ? "font-display text-sm text-accent" : "text-sm text-dark"
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
