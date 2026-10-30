"use client";

import { useEffect, useRef, useState } from "react";
import { ContactButton, useContactPanel } from "./ContactPanel";

const menuLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERTISE", href: "#make" },
  { label: "WORK", href: "#work" },
];

// Floating nav pill at the top of the hero, with a burger that opens a
// dropdown of in-page links. Closes on Escape, outside click or link click.
export default function Header() {
  const [open, setOpen] = useState(false);
  const contact = useContactPanel();
  const wrapRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const bar = "block h-px w-4 bg-bone transition-transform duration-[250ms]";

  return (
    <div ref={wrapRef} className="contents">
      <header className="absolute left-1/2 top-6 z-[5] flex -translate-x-1/2 items-center gap-2 border border-line bg-[rgba(17,15,13,0.85)] py-1.5 pl-[22px] pr-1.5 backdrop-blur-[8px]">
        <a
          href="#top"
          className="mr-6 whitespace-nowrap font-display text-[15px] font-medium tracking-[0.08em] min-[400px]:mr-[72px]"
        >
          TIM BROWN
        </a>
        <ContactButton className="whitespace-nowrap bg-bone px-4 py-[11px] font-display text-[12px] tracking-[0.12em] text-ink transition-colors hover:text-ember">
          GET STARTED
        </ContactButton>
        <button
          ref={burgerRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          className="flex h-[38px] w-[38px] flex-col items-center justify-center gap-[5px] border border-line2 bg-transparent p-0"
        >
          <span className={`${bar} ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`${bar} ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </header>

      <nav
        id="site-menu"
        aria-label="Main"
        className={`absolute left-1/2 top-20 z-[5] min-w-[260px] ${open ? "flex" : "hidden"} -translate-x-1/2 flex-col gap-2.5 border border-line bg-ink px-8 py-6`}
      >
        {menuLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-[32px] font-light leading-[1.2]"
          >
            {l.label}
          </a>
        ))}
        {/* Contact opens the slide-out panel rather than scrolling. */}
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => {
            setOpen(false);
            contact.open();
          }}
          className="bg-transparent p-0 text-left font-display text-[32px] font-light leading-[1.2] text-bone transition-colors hover:text-ember"
        >
          CONTACT
        </button>
      </nav>
    </div>
  );
}
