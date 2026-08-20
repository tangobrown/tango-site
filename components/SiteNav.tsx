"use client";

import { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import { navLinks, site } from "@/lib/site";

// Mobile-only chrome: a slim sticky dark header with a hamburger that opens
// a full-screen menu. Hidden on desktop (the hero carries its own nav).
export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="sticky top-0 z-30 flex items-center justify-between bg-ink-dark px-5 py-3 text-cream-text">
        <a href="#top" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}>
          <span className="h-[22px] w-[22px] flex-none rounded-full bg-rust" />
          <span className="font-bebas text-[19px] tracking-[0.01em]">{site.name}</span>
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`block h-[1.5px] w-6 bg-cream-text transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span className={`block h-[1.5px] w-6 bg-cream-text transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[1.5px] w-6 bg-cream-text transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-ink-dark px-5 pb-10 pt-3 text-cream-text">
          <div className="flex items-center justify-between py-1">
            <a href="#top" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}>
              <span className="h-[22px] w-[22px] flex-none rounded-full bg-rust" />
              <span className="font-bebas text-[19px] tracking-[0.01em]">{site.name}</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-[22px]"
            >
              ✕
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-bebas text-[28px] tracking-[0.01em] text-cream-text"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center gap-[10px] self-start border border-[#6E675E] px-[26px] py-[14px] text-[14px] uppercase tracking-[0.04em] text-cream-text transition-colors hover:border-rust hover:bg-rust hover:text-white"
          >
            Let&apos;s connect <ArrowIcon size={18} />
          </a>
        </div>
      )}
    </div>
  );
}
