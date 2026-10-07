"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";

// Monogram + two-line name. The O in BROWN picks up the green accent.
function Logo({ size }: { size: "lg" | "sm" }) {
  return (
    <span className="inline-flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt=""
        className={`w-auto transition-all duration-300 ${size === "lg" ? "h-12" : "h-9"}`}
      />
      <span
        className={`flex flex-col font-bold leading-[0.92] tracking-[-0.02em] text-white transition-all duration-300 ${
          size === "lg" ? "text-[19px]" : "text-[16px]"
        }`}
      >
        <span>TIM</span>
        <span>
          BR<span className="text-brand-bright">O</span>WN
        </span>
      </span>
    </span>
  );
}

const ctaClass =
  "inline-flex h-[42px] shrink-0 items-center gap-3 rounded-full bg-brand pl-5 pr-4 text-[15px] font-semibold tracking-normal text-white transition-colors duration-200 hover:bg-brand-dark";

// Site chrome. On desktop a fixed header, transparent over the hero, that
// turns into a dark bar and shrinks once you scroll; on mobile a slim sticky
// dark bar with a hamburger that opens a full-screen menu.
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Desktop header */}
      <header
        className={`fixed inset-x-0 top-0 z-40 hidden text-white transition-[background-color,box-shadow] duration-300 lg:block ${
          scrolled ? "bg-ink shadow-[0_2px_24px_rgba(0,0,0,0.28)]" : "bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-11 transition-all duration-300 ${
            scrolled ? "py-[10px]" : "py-[18px]"
          }`}
        >
          <a href="#top" aria-label="Tim Brown — home">
            <Logo size={scrolled ? "sm" : "lg"} />
          </a>

          <nav className="flex items-center gap-9" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[16px] font-semibold text-white transition-colors hover:text-brand-bright [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]"
              >
                {link.label}
              </a>
            ))}
            <ContactButton className={ctaClass}>
              Let&apos;s connect <ArrowIcon size={16} />
            </ContactButton>
          </nav>
        </div>
      </header>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-ink px-5 py-2 text-white lg:hidden">
        <a href="#top" aria-label="Tim Brown — home" onClick={() => setOpen(false)}>
          <Logo size="sm" />
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
        >
          <span className="block h-[1.5px] w-6 bg-white" />
          <span className="block h-[1.5px] w-6 bg-white" />
          <span className="block h-[1.5px] w-6 bg-white" />
        </button>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-10 pt-2 text-white lg:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#top" aria-label="Tim Brown — home" onClick={() => setOpen(false)}>
              <Logo size="sm" />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              autoFocus
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-[22px]"
            >
              ✕
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-5" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[32px] font-semibold tracking-[-0.03em] text-white transition-colors hover:text-brand-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-10" onClick={() => setOpen(false)}>
            <ContactButton className={`${ctaClass} h-[48px] pl-[22px] pr-[18px]`}>
              Let&apos;s connect <ArrowIcon size={16} />
            </ContactButton>
          </div>
        </div>
      )}
    </>
  );
}
