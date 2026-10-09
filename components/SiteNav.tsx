"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { ContactButton } from "./ContactPanel";

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`flex flex-col text-[17px] font-bold leading-[0.92] tracking-[-0.005em] transition-colors duration-500 ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <span>TIM</span>
      <span>
        BR<span className={light ? "text-brand-bright" : "text-brand"}>O</span>WN
      </span>
    </span>
  );
}

const ctaBase =
  "inline-flex shrink-0 items-center rounded-full px-6 py-[14px] text-[17px] font-semibold tracking-normal text-white transition-colors duration-300";
const ctaClass = `${ctaBase} bg-pine hover:bg-brand`;

const ease = "ease-[cubic-bezier(0.22,0.61,0.36,1)]";

// Fixed nav. At the top of the page it's transparent and full width over the
// dark hero (logo far left, button far right). Once you scroll it slides in to
// the content width and becomes the white pill.
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
        className={`fixed z-30 flex items-center justify-between gap-4 rounded-full py-2 transition-[left,right,top,padding,background-color,box-shadow] duration-500 ${ease} ${
          scrolled
            ? "left-[max(20px,calc(50%-650px))] right-[max(20px,calc(50%-650px))] top-[10px] bg-white pl-[26px] pr-2 shadow-nav"
            : "left-0 right-0 top-[14px] bg-transparent pl-5 pr-5 shadow-none md:pl-10 md:pr-10"
        }`}
      >
        <a href="#top" aria-label="Tim Brown — home">
          <Wordmark light={!scrolled} />
        </a>

        <nav className="hidden items-center gap-[clamp(16px,2.6vw,34px)] md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[17px] font-semibold transition-colors duration-300 ${
                scrolled ? "text-ink hover:text-brand" : "text-white hover:text-brand-bright"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactButton
            className={`${ctaBase} ${scrolled ? "bg-pine hover:bg-brand" : "bg-brand hover:bg-brand-dark"}`}
          >
            Let&apos;s connect
          </ContactButton>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border transition-colors duration-300 md:hidden ${
              scrolled ? "border-rule" : "border-white/40"
            }`}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-[1.5px] w-[18px] transition-colors duration-300 ${scrolled ? "bg-ink" : "bg-white"}`}
              />
            ))}
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
                className="text-[32px] font-semibold tracking-[-0.01em] text-ink"
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
