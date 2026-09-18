"use client";

import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import { navLinks } from "@/lib/site";

// Site chrome. On desktop a sticky header that shrinks once you scroll; on
// mobile a slim sticky bar with a hamburger that opens a full-screen menu.
export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop header — fixed, transparent over the hero, dark bar on scroll */}
      <header
        className={`fixed inset-x-0 top-0 z-40 hidden text-cream-text transition-[background-color,box-shadow] duration-300 lg:block ${
          scrolled ? "bg-ink-dark shadow-[0_2px_24px_rgba(0,0,0,0.28)]" : "bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between px-8 transition-all duration-300 lg:px-11 ${
            scrolled ? "py-[10px]" : "py-[18px]"
          }`}
        >
          <a href="#top" aria-label="Tim Brown — home" className="inline-flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt=""
              className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-12"}`}
            />
            <span
              className={`flex flex-col font-bebas leading-[0.88] tracking-[0.02em] text-white transition-all duration-300 ${
                scrolled ? "text-[18px]" : "text-[22px]"
              }`}
            >
              <span>Tim</span>
              <span>Brown</span>
            </span>
          </a>

          <nav className="flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.06em] text-cream transition-colors hover:text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.35)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-[9px] bg-rust px-[22px] py-[11px] text-[13px] uppercase tracking-[0.04em] text-white transition-colors hover:bg-rust-dark"
            >
              Let&apos;s connect <ArrowIcon size={16} />
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between bg-ink-dark px-5 py-2 text-cream-text lg:hidden">
        <a
          href="#top"
          aria-label="Tim Brown — home"
          className="inline-flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="h-9 w-auto" />
          <span className="flex flex-col font-bebas text-[17px] leading-[0.88] tracking-[0.02em] text-white">
            <span>Tim</span>
            <span>Brown</span>
          </span>
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
        <div className="fixed inset-0 z-40 flex flex-col bg-ink-dark px-5 pb-10 pt-3 text-cream-text lg:hidden">
          <div className="flex items-center justify-between py-1">
            <a
              href="#top"
              aria-label="Tim Brown — home"
              className="inline-flex"
              onClick={() => setOpen(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Tim Brown" className="h-9 w-auto" />
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
    </>
  );
}
