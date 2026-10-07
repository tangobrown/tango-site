"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ITEMS = [
  { label: "Development", blurb: "Beautiful, blazing fast websites and online shops" },
  { label: "Optimisation", blurb: "Optimising your site for search and conversions" },
  { label: "AI & Automation", blurb: "Integrating AI to take care of those boring tasks" },
];
const STEP = 360 / ITEMS.length;
/** Orbit radius as a % of the square box. */
const R = 40;
/** How long each item rests at the top, and how long the turn takes (s). */
const HOLD = 2.2;
const TURN = 1.2;

// Where item `i` sits when the orbit has turned `angle` degrees clockwise,
// and how "in focus" it is: 1 at the top, falling to 0 a third of the way round.
function place(angle: number, i: number) {
  const t = ((angle - i * STEP) * Math.PI) / 180;
  return {
    left: `${50 + R * Math.sin(t)}%`,
    top: `${50 - R * Math.cos(t)}%`,
    focus: Math.max(0, Math.cos(t)) ** 3,
  };
}

// Resting pills are solid (so the orbit line doesn't show through) and dimmed;
// the focused one is brand green with full-white text.
const look = (focus: number) => ({
  scale: 0.88 + 0.34 * focus,
  color: gsap.utils.interpolate("rgba(255,255,255,0.55)", "rgba(255,255,255,1)", focus),
  backgroundColor: gsap.utils.interpolate("rgba(27,31,29,1)", "rgba(11,138,71,1)", focus),
  borderColor: gsap.utils.interpolate("rgba(255,255,255,0.16)", "rgba(11,138,71,1)", focus),
});

// The centre line for each item fades in as it reaches the top, so two lines
// briefly cross-fade during a turn.
const blurbLook = (focus: number) => ({ autoAlpha: focus ** 2, y: (1 - focus) * 10 });

// The three things Tim does, set around a ring that turns a third at a time.
// The one at the top grows and fills green, and its one-liner shows in the
// middle of the circle. Labels stay upright throughout.
export default function HeroOrbit({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slots = gsap.utils.toArray<HTMLElement>("[data-slot]");
      const pills = gsap.utils.toArray<HTMLElement>("[data-pill]");
      const blurbs = gsap.utils.toArray<HTMLElement>("[data-blurb]");
      const ticks = root.current?.querySelector("[data-ticks]");
      const orbit = { angle: 0 };

      const render = () => {
        slots.forEach((slot, i) => {
          const { left, top, focus } = place(orbit.angle, i);
          gsap.set(slot, { left, top });
          gsap.set(pills[i], look(focus));
          gsap.set(blurbs[i], blurbLook(focus));
        });
        if (ticks) gsap.set(ticks, { rotation: orbit.angle, svgOrigin: "50 50" });
      };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ repeat: -1, onUpdate: render });
        ITEMS.forEach((_, i) => {
          tl.to(orbit, { angle: (i + 1) * STEP, duration: TURN, ease: "power3.inOut" }, `+=${HOLD}`);
        });
        return () => {
          orbit.angle = 0;
          render();
        };
      });
      render();
    },
    { scope: root },
  );

  return (
    <div ref={root} className={`relative aspect-square ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {/* Orbit path */}
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="0.2"
        />
        {/* Green arc marking the focus point at the top */}
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="#2FD07A"
          strokeWidth="0.45"
          strokeLinecap="round"
          pathLength={360}
          strokeDasharray="80 280"
          strokeDashoffset={-230}
        />
        {/* Outer tick ring that turns with the orbit */}
        <circle
          data-ticks
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.2"
          pathLength={360}
          strokeDasharray="0.25 4.75"
        />
      </svg>

      {/* One-liner for the item at the top (read out with its label below) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 grid w-[58%] -translate-x-1/2 -translate-y-1/2 place-items-center text-center"
      >
        {ITEMS.map(({ label, blurb }, i) => {
          const { autoAlpha, y } = blurbLook(place(0, i).focus);
          return (
            <p
              key={label}
              data-blurb
              style={{
                opacity: autoAlpha,
                visibility: autoAlpha ? "visible" : "hidden",
                transform: `translateY(${y}px)`,
              }}
              className="col-start-1 row-start-1 m-0 text-balance text-[clamp(16px,1.65vw,24px)] font-medium leading-[1.25] tracking-[-0.02em] text-white"
            >
              {blurb}
            </p>
          );
        })}
      </div>

      <ul className="m-0 list-none p-0" aria-label="What I do">
        {ITEMS.map(({ label, blurb }, i) => {
          const { left, top, focus } = place(0, i);
          const { scale, ...initial } = look(focus);
          return (
            <li
              key={label}
              data-slot
              style={{ left, top }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span
                data-pill
                style={{ ...initial, transform: `scale(${scale})` }}
                className="block whitespace-nowrap rounded-full border px-[1.1em] py-[0.55em] text-[clamp(15px,1.55vw,23px)] font-semibold tracking-[-0.02em]"
              >
                {label}
              </span>
              <span className="sr-only">: {blurb}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
