"use client";

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

// Scroll-reveal wrapper. Fades + rises its element in on first intersection.
// The three hard-won rules from the handoff:
//   1. Anything already in view on mount stays visible immediately.
//   2. An element is only hidden at the moment it is observed.
//   3. A ~4s failsafe force-reveals everything if an observer never fires.
// prefers-reduced-motion skips the whole mechanism. Children are always in
// the server-rendered HTML (this only toggles inline styles after mount), so
// nothing here costs SEO.

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

export default function Reveal({ as, children, className, style, id }: RevealProps) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transition =
      "opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1)";

    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    // Rule 1: already on screen → leave visible, never hide-then-reveal.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;

    // Rule 2: hide only now, as we begin observing.
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          show();
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);

    // Rule 3: failsafe.
    const failsafe = window.setTimeout(show, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag ref={ref} className={className} style={style} id={id}>
      {children}
    </Tag>
  );
}
