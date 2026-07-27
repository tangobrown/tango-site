"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";

/**
 * Two layouts sharing one component:
 *
 * - Desktop (>= 768px): pinned horizontal-scroll carousel. Section
 *   is made intentionally tall (viewport height + horizontal scroll
 *   distance). A sticky wrapper pins to the top and the track
 *   translates left as the user scrolls vertically. First card's
 *   left edge aligns with the container's inner-left; last card's
 *   right edge stops at the container's inner-right.
 *
 * - Mobile (< 768px): plain vertical stack inside the standard
 *   container so the cards live on the page like any other section.
 *   No scroll math, no pinned behaviour — the carousel didn't make
 *   sense at phone widths (460px cards vs 375-390px viewports).
 *
 * We render both layouts on the server; a matchMedia check on
 * mount swaps to the right one client-side to avoid an SSR mismatch.
 */

const CARD_WIDTH = 460;
const CARD_GAP = 32;
const CONTAINER_MAX = 1280;
const CONTAINER_PAD = 48;
const trackContentWidth =
  services.length * CARD_WIDTH + (services.length - 1) * CARD_GAP;

function Card({ svc }: { svc: (typeof services)[number] }) {
  const bg = svc.palette === "green" ? "bg-card-green" : "bg-card-olive";
  const bodyColor =
    svc.palette === "green" ? "text-card-greenText" : "text-card-oliveText";
  return (
    <div
      className={`${bg} flex-1 px-8 md:px-11 pt-11 pb-10 text-[#eef0e6] flex flex-col`}
    >
      <div className="font-heading font-light text-xl text-[#a7ab98] mb-3.5">
        {svc.num}
      </div>
      <h3 className="font-heading font-normal text-[28px] md:text-[32px] tracking-[-0.01em] text-white">
        {svc.title}
      </h3>
      <p className={`mt-[18px] text-[17px] leading-[1.68] font-light ${bodyColor}`}>
        {svc.description}
      </p>
      <div className="mt-7 flex flex-col">
        {svc.points.map((pt) => (
          <div
            key={pt}
            className={`text-[16px] leading-[1.5] font-light py-[9px] ${bodyColor}`}
            style={{ borderTop: "1px solid rgba(255,255,255,.14)" }}
          >
            {pt}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Decide layout mode based on viewport width. Runs client-side only,
  // so the first paint from SSR is desktop-shaped; we swap immediately
  // on mount if we're actually on a narrow viewport.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Compute how far the track needs to translate for the last card's
  // right edge to reach the container's inner-right.
  useEffect(() => {
    if (isMobile) {
      setScrollDistance(0);
      return;
    }
    const calc = () => {
      const containerContentWidth =
        Math.min(window.innerWidth, CONTAINER_MAX) - CONTAINER_PAD * 2;
      setScrollDistance(Math.max(0, trackContentWidth - containerContentWidth));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [isMobile]);

  // Translate the track based on scroll depth (desktop only).
  useEffect(() => {
    if (isMobile || scrollDistance === 0) return;
    const onScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrolled = window.scrollY - sectionTop;
      const clamped = Math.max(0, Math.min(scrolled, scrollDistance));
      track.style.transform = `translate3d(-${clamped}px, 0, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDistance, isMobile]);

  // Mobile: stacked list — no pinned scroll, standard container.
  if (isMobile) {
    return (
      <section
        id="services"
        className="border-t border-rule py-16"
        style={{ scrollMarginTop: "20px" }}
      >
        <div className="container-tb mb-10">
          <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
            What I do
          </div>
          <h2
            className="font-heading font-normal leading-[1.06] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px,7vw,42px)", maxWidth: "16ch" }}
          >
            Four ways I help your business grow.
          </h2>
        </div>
        <div className="container-tb flex flex-col gap-6">
          {services.map((svc) => (
            <article key={svc.num} className="flex flex-col">
              <Card svc={svc} />
            </article>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: pinned horizontal-scroll carousel.
  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative border-t border-rule py-24"
      style={{
        height: `calc(100vh + ${scrollDistance}px)`,
        scrollMarginTop: "20px",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-tb mb-10">
          <div className="text-[13px] font-semibold uppercase tracking-[0.22em] text-muted-faint mb-5">
            What I do
          </div>
          <h2
            className="font-heading font-normal leading-[1.06] tracking-[-0.01em]"
            style={{ fontSize: "clamp(28px,3.4vw,46px)", maxWidth: "16ch" }}
          >
            Four ways I help your business grow.
          </h2>
        </div>
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex"
            style={{
              gap: `${CARD_GAP}px`,
              paddingLeft: `max(${CONTAINER_PAD}px, calc((100vw - ${CONTAINER_MAX}px) / 2 + ${CONTAINER_PAD}px))`,
              width: "max-content",
              willChange: "transform",
            }}
          >
            {services.map((svc) => (
              <article
                key={svc.num}
                className="flex flex-col shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <Card svc={svc} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
