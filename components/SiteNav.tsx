"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { expertiseLinks, navLinks } from "@/lib/site";
import ArrowIcon from "./ArrowIcon";
import { EcommerceIcon, ServiceIcon } from "./AudienceIcons";
import { ContactButton } from "./ContactPanel";

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex flex-col text-[17px] font-bold leading-[0.92] tracking-[-0.005em] text-ink ${className}`}
    >
      <span>TIM</span>
      <span>
        BR<span className="text-brand">O</span>WN
      </span>
    </span>
  );
}

const megaIcon = { service: ServiceIcon, ecommerce: EcommerceIcon } as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const ctaClass =
  "inline-flex shrink-0 items-center rounded-full bg-pine px-5 py-3 text-[16px] font-semibold tracking-normal text-white transition-colors duration-200 hover:bg-brand";

// Floating white pill nav. Fixed so it stays reachable while scrolling.
export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  // Expertise mega menu (desktop): opens on hover or click, closes on
  // Escape, outside click, leaving it, or navigating.
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileExpertise, setMobileExpertise] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerType = useRef<string>("");
  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMegaSoon = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  // Close menus after navigating.
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        megaBtnRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [megaOpen]);

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
        <Link href="/" aria-label="Tim Brown — home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-[clamp(16px,2.6vw,34px)] md:flex" aria-label="Main">
          {navLinks.map((link) =>
            link.href === "/expertise" ? (
              <div
                key={link.href}
                ref={megaRef}
                onMouseEnter={openMega}
                onMouseLeave={closeMegaSoon}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setMegaOpen(false);
                }}
              >
                <button
                  ref={megaBtnRef}
                  type="button"
                  aria-expanded={megaOpen}
                  aria-controls="expertise-menu"
                  onPointerDown={(e) => (pointerType.current = e.pointerType)}
                  onClick={() => {
                    // A mouse has already opened it on hover, so a click keeps it
                    // open; keyboard and touch toggle it.
                    if (pointerType.current === "mouse") setMegaOpen(true);
                    else setMegaOpen((v) => !v);
                    pointerType.current = "";
                  }}
                  className={`flex items-center gap-1.5 text-[17px] font-semibold transition-colors hover:text-brand ${
                    isActive(link.href) || megaOpen ? "text-brand" : "text-ink"
                  }`}
                >
                  {link.label}
                  <Chevron open={megaOpen} />
                </button>

                {/* Mega menu: full nav width, hung just below the pill */}
                <div
                  id="expertise-menu"
                  hidden={!megaOpen}
                  className="absolute inset-x-0 top-full pt-3"
                >
                  <div className="grid grid-cols-2 gap-3 rounded-[28px] bg-white p-3 shadow-nav lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.85fr)]">
                    {expertiseLinks.map((item) => {
                      const Icon = megaIcon[item.key];
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="group flex flex-col items-start gap-4 rounded-[20px] p-5 lg:flex-row lg:gap-5 transition-colors hover:bg-[#effff7] focus-visible:bg-[#effff7] focus-visible:outline-none"
                        >
                          <Icon className="h-14 w-14 flex-none" />
                          <span className="flex flex-col gap-1.5">
                            <span className="flex items-center gap-2 text-[19px] font-semibold text-ink group-hover:text-brand">
                              {item.label} <ArrowIcon size={16} />
                            </span>
                            <span className="font-[family-name:var(--font-bdo)] text-[15px] leading-[1.45] text-ink-body">
                              {item.blurb}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                    <Link
                      href="/expertise"
                      className="hidden flex-col justify-between gap-4 rounded-[20px] bg-pine p-5 text-white transition-colors hover:bg-[#16392B] lg:flex"
                    >
                      <span className="text-[15px] font-semibold uppercase tracking-[0.08em] text-brand-bright">
                        Expertise
                      </span>
                      <span className="flex items-center gap-2 text-[17px] font-semibold">
                        Not sure which? Compare both <ArrowIcon size={16} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[17px] font-semibold transition-colors hover:text-brand ${
                  isActive(link.href) ? "text-brand" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
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
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white px-[26px] pb-10 pt-[22px] md:hidden"
        >
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Tim Brown — home" onClick={() => setMenuOpen(false)}>
              <Wordmark />
            </Link>
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
            {navLinks.map((link) =>
              link.href === "/expertise" ? (
                <div key={link.href} className="flex flex-col gap-3">
                  <button
                    type="button"
                    aria-expanded={mobileExpertise}
                    aria-controls="mobile-expertise"
                    onClick={() => setMobileExpertise((v) => !v)}
                    className={`flex items-center gap-3 text-left text-[32px] font-semibold tracking-[-0.01em] ${
                      isActive(link.href) ? "text-brand" : "text-ink"
                    }`}
                  >
                    {link.label}
                    <Chevron open={mobileExpertise} />
                  </button>
                  <div id="mobile-expertise" hidden={!mobileExpertise} className="flex flex-col gap-2">
                    {expertiseLinks.map((item) => {
                      const Icon = megaIcon[item.key];
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={pathname === item.href ? "page" : undefined}
                          className="flex items-center gap-4 rounded-[16px] bg-[#effff7] p-3 text-[19px] font-semibold text-ink"
                        >
                          <Icon className="h-11 w-11 flex-none" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`text-[32px] font-semibold tracking-[-0.01em] ${
                    isActive(link.href) ? "text-brand" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
          <div className="mt-auto" onClick={() => setMenuOpen(false)}>
            <ContactButton className={`${ctaClass} h-[50px] px-6`}>Let&apos;s connect</ContactButton>
          </div>
        </div>
      )}
    </>
  );
}
