"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// `icon` is the path data for the 24×24 icon shown above the one-liner.
const ITEMS: { label: string; blurb: string; icon: string }[] = [
  {
    label: "Development",
    blurb: "Beautiful, blazing fast websites and online shops",
    icon: "M14 18V20L16 21V22H8L7.99639 21.0036L10 20V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H14ZM4 14V16H20V14H4Z",
  },
  {
    label: "Optimisation",
    blurb: "Optimising your site for search and conversions",
    icon: "M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z",
  },
  {
    label: "AI & Automation",
    blurb: "Integrating AI to take care of those boring tasks",
    icon: "M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM5.79993 16H7.95399L8.55399 14.5H11.4459L12.0459 16H14.1999L10.9999 8H8.99993L5.79993 16ZM9.99993 10.8852L10.6459 12.5H9.35399L9.99993 10.8852ZM15 16V8H17V16H15ZM3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V11H20V19H4V5H14V3H3Z",
  },
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
  scale: 0.88 + 0.18 * focus,
  color: gsap.utils.interpolate("rgba(255,255,255,0.55)", "rgba(255,255,255,1)", focus),
  backgroundColor: gsap.utils.interpolate("rgba(22,57,43,1)", "rgba(20,168,90,1)", focus),
  borderColor: gsap.utils.interpolate("rgba(255,255,255,0.16)", "rgba(20,168,90,1)", focus),
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
        className="absolute left-1/2 top-[47%] grid w-[58%] -translate-x-1/2 -translate-y-1/2 place-items-center text-center"
      >
        {ITEMS.map(({ label, blurb, icon }, i) => {
          const { autoAlpha, y } = blurbLook(place(0, i).focus);
          return (
            <div
              key={label}
              data-blurb
              style={{
                opacity: autoAlpha,
                visibility: autoAlpha ? "visible" : "hidden",
                transform: `translateY(${y}px)`,
              }}
              className="col-start-1 row-start-1 flex flex-col items-center gap-[clamp(6px,0.6vw,10px)] text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[clamp(30px,2.8vw,42px)] w-auto">
                <path d={icon} />
              </svg>
              <p className="m-0 text-balance text-[clamp(16px,1.65vw,24px)] font-medium leading-[1.25] tracking-[-0.005em]">
                {blurb}
              </p>
            </div>
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
                className="block whitespace-nowrap rounded-full border px-[1.1em] py-[0.55em] text-[clamp(14px,1.45vw,21px)] font-semibold tracking-[-0.005em]"
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
