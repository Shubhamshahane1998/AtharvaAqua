"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { PhoneIcon } from "./icons";
import { site, telLink } from "@/lib/site";

const nav = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Purifiers" },
  { href: "/#about", label: "About" },
  { href: "/#why-us", label: "Why Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1220px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink transition-colors hover:text-brand-600"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.25)] transition-transform hover:-translate-y-0.5 hover:bg-brand-700 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-3 text-sm font-medium text-ink last:border-0"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a href={telLink} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
