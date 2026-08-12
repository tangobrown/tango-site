"use client";

import { useState } from "react";
import { navLinks, site } from "@/content/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(14,17,18,.1)] bg-[rgba(245,244,240,.86)] backdrop-blur-[14px]">
      <div className="flex items-center justify-between gap-6 px-6 py-[18px] md:px-10">
        {/* Wordmark */}
        <a href="#top" className="flex items-baseline gap-[10px] text-ink" onClick={() => setOpen(false)}>
          <span className="text-[19px] font-bold tracking-[-.02em]">{site.name}</span>
          <span className="font-mono text-[10px] uppercase tracking-[.18em] text-ink-4">
            {site.kicker}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] uppercase tracking-[.12em] text-ink-3 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] rounded-[2px] bg-forest px-[18px] py-[11px] text-[13px] font-semibold tracking-[-.01em] text-bone transition-colors hover:bg-ink hover:text-white"
          >
            Book a call <span className="font-mono">→</span>
          </a>
        </nav>

        {/* Mobile: CTA stays in the bar, nav collapses to a hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-[10px] rounded-[2px] bg-forest px-[14px] py-[10px] text-[12px] font-semibold tracking-[-.01em] text-bone transition-colors hover:bg-ink hover:text-white"
          >
            Book a call <span className="font-mono">→</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-[rgba(14,17,18,.24)] font-mono text-[16px] text-ink"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <nav
          id="mobile-menu"
          className="flex flex-col border-t border-[rgba(14,17,18,.1)] bg-bone px-6 pb-6 pt-2 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[rgba(14,17,18,.09)] py-4 font-mono text-[13px] uppercase tracking-[.12em] text-ink-3 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
