// Small line icons for the expertise pages' feature cards: a green glyph on
// a dark green tile, to match the audience icons.
import type { ReactNode } from "react";

function Tile({ children, className = "", onDark = false }: { children: ReactNode; className?: string; onDark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-14 w-14 flex-none items-center justify-center rounded-[3px] text-brand-bright ${onDark ? "bg-white/10" : "bg-pine"} ${className}`}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
    </span>
  );
}

const glyphs = {
  // Browser window
  build: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13l-2 2 2 2M16 13l2 2-2 2M13 12l-2 6" />
    </>
  ),
  // Map pin
  local: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  // Phone
  calls: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  // Shield with tick
  care: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  // Shopping bag
  store: (
    <>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </>
  ),
  // Magnifying glass
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.4-4.4" />
    </>
  ),
  // Rising chart
  convert: (
    <>
      <path d="M4 20h16" />
      <path d="M5 15l4.5-4.5 3.5 3.5L19 8" />
      <path d="M14.5 8H19v4.5" />
    </>
  ),
  // Sparkles
  ai: (
    <>
      <path d="M10 3l1.8 4.7L16.5 9.5l-4.7 1.8L10 16l-1.8-4.7L3.5 9.5l4.7-1.8L10 3z" />
      <path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14z" />
    </>
  ),
} as const;

export type FeatureIconName = keyof typeof glyphs;

export function FeatureIcon({
  name,
  className,
  onDark,
}: {
  name: FeatureIconName;
  className?: string;
  /** Use a translucent tile so it shows up on a dark green card. */
  onDark?: boolean;
}) {
  return (
    <Tile className={className} onDark={onDark}>
      {glyphs[name]}
    </Tile>
  );
}
