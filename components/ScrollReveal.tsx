"use client";

import { useEffect } from "react";

// Mount once. Fades/rises any element marked with `data-reveal` as it scrolls
// into view. Adds `reveal-ready` to <html> so the hidden state only applies
// when JS is running (no-JS falls back to fully visible), and honours
// prefers-reduced-motion by showing everything immediately.
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
