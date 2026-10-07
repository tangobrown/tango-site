"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { ContactButton } from "./ContactPanel";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex flex-col text-[17px] font-bold leading-[0.92] tracking-[-0.02em] text-ink ${className}`}
    >
      <span>TIM</span>
      <span>
        BR<span className="text-brand">O</span>WN
      </span>
    </span>
  );
}

const ctaClass =
  "inline-flex shrink-0 items-center rounded-full bg-ink px-6 py-[14px] text-[17px] font-semibold tracking-normal text-white transition-colors duration-200 hover:bg-brand";

// Floating white pill nav. Fixed so it stays reachable while scrolling.
export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-1/2 z-30 flex w-[min(1300px,calc(100%-40px))] -translate-x-1/2 items-center justify-between gap-4 rounded-full bg-white py-2 pl-[26px] pr-2 shadow-nav transition-[top] duration-300 ${
          scrolled ? "top-[10px]" : "top-[14px]"
        }`}
      >
        <a href="#top" aria-label="Tim Brown — home">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-[clamp(16px,2.6vw,34px)] md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[17px] font-semibold text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactButton className={ctaClass}>Let&apos;s connect</ContactButton>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-rule md:hidden"
          >
            <span className="block h-[1.5px] w-[18px] bg-ink" />
            <span className="block h-[1.5px] w-[18px] bg-ink" />
            <span className="block h-[1.5px] w-[18px] bg-ink" />
          </button>
        </div>
      </header>

      {/* Mobile menu sheet */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-40 flex flex-col bg-white px-[26px] pb-10 pt-[22px] md:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#top" aria-label="Tim Brown — home" onClick={() => setMenuOpen(false)}>
              <Wordmark />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              autoFocus
              className="flex h-11 w-11 items-center justify-center rounded-full border border-rule text-[18px] text-ink"
            >
              ✕
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-5" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] font-semibold tracking-[-0.03em] text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto" onClick={() => setMenuOpen(false)}>
            <ContactButton className={`${ctaClass} h-[56px] px-7`}>Let&apos;s connect</ContactButton>
          </div>
        </div>
      )}
    </>
  );
}
