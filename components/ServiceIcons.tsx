// Line icons for the "What I do" columns (64×64, dark green + brand green).
// Each is animated by its classes in globals.css; reduced motion shows the
// finished frame.

const size = "h-14 w-14";

// Website builds: browser window with content lines and a progress bar, and a
// cog cut into its bottom-right corner. The lines type in, the bar fills, the
// cog turns.
export function WebsiteBuildsIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={`wb-icon ${size}`}>
      <defs>
        <mask id="wb-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="#fff" />
          <circle cx="50" cy="42" r="10" fill="#000" />
        </mask>
        <mask id="wb-hole" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
          <rect width="64" height="64" fill="#fff" />
          <circle cx="50" cy="42" r="1.9" fill="#000" />
        </mask>
      </defs>
      <g mask="url(#wb-cut)">
        <rect x="6" y="8" width="52" height="36" rx="3.5" stroke="#0e2a1f" strokeWidth="2.5" />
        <line x1="6" y1="17" x2="58" y2="17" stroke="#0e2a1f" strokeWidth="2.5" />
        <circle cx="11" cy="12.5" r="1.2" fill="#14a85a" />
        <circle cx="15" cy="12.5" r="1.2" fill="#0e2a1f" />
        <path d="M32 44v8M22 54h20" stroke="#0e2a1f" strokeWidth="2.5" strokeLinecap="round" />
        <rect className="wb-line" x="12" y="21.5" width="22" height="2.6" rx="1.3" fill="#0e2a1f" />
        <rect className="wb-line wb-l2" x="12" y="26.5" width="30" height="2.6" rx="1.3" fill="#0e2a1f" />
        <rect className="wb-line wb-l3" x="12" y="31.5" width="18" height="2.6" rx="1.3" fill="#0e2a1f" />
        <rect x="12" y="37" width="24" height="2.4" rx="1.2" fill="#0e2a1f" opacity=".15" />
        <rect className="wb-prog" x="12" y="37" width="24" height="2.4" rx="1.2" fill="#14a85a" />
      </g>
      <g mask="url(#wb-hole)">
        <g className="wb-gear">
          <circle cx="50" cy="42" r="6.2" stroke="#14a85a" strokeWidth="3.6" strokeDasharray="2.43 2.44" />
          <circle cx="50" cy="42" r="4.8" fill="#14a85a" />
        </g>
      </g>
    </svg>
  );
}

// SEO: a search bar types a query, and the green result climbs from third to
// first as the other two drop, with an up-chevron when it lands.
export function SeoIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={`seo-icon ${size}`}>
      <rect x="6" y="6" width="52" height="11" rx="5.5" stroke="#0e2a1f" strokeWidth="2.5" />
      <circle cx="13.5" cy="11.5" r="2.6" stroke="#0e2a1f" strokeWidth="1.8" />
      <path d="M15.5 14l2 2" stroke="#0e2a1f" strokeWidth="1.8" strokeLinecap="round" />
      <g className="seo-fade">
        <rect className="seo-type" x="21" y="10.3" width="22" height="2.6" rx="1.3" fill="#14a85a" />
        <g className="seo-down">
          <rect x="8" y="24" width="8" height="8" rx="2" fill="#0e2a1f" />
          <rect x="20" y="24" width="26" height="2.8" rx="1.4" fill="#0e2a1f" />
          <rect x="20" y="29" width="18" height="2.4" rx="1.2" fill="#0e2a1f" opacity=".3" />
        </g>
        <g className="seo-down">
          <rect x="8" y="35" width="8" height="8" rx="2" fill="#0e2a1f" />
          <rect x="20" y="35" width="26" height="2.8" rx="1.4" fill="#0e2a1f" />
          <rect x="20" y="40" width="18" height="2.4" rx="1.2" fill="#0e2a1f" opacity=".3" />
        </g>
        <g className="seo-up">
          <rect x="8" y="24" width="8" height="8" rx="2" fill="#14a85a" />
          <rect x="20" y="24" width="30" height="2.8" rx="1.4" fill="#14a85a" />
          <rect x="20" y="29" width="20" height="2.4" rx="1.2" fill="#0e2a1f" opacity=".3" />
        </g>
        <path
          className="seo-chev"
          d="M52 30l3-3 3 3"
          stroke="#14a85a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// AI & automation: a chip whose twelve pins light up in turn around it, with
// a pulsing spark in the middle.
const PINS = [
  "M25 10v8",
  "M32 10v8",
  "M39 10v8",
  "M54 25h-8",
  "M54 32h-8",
  "M54 39h-8",
  "M39 54v-8",
  "M32 54v-8",
  "M25 54v-8",
  "M10 39h8",
  "M10 32h8",
  "M10 25h8",
];

export function AiAutomationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={`ai-icon ${size}`}>
      <rect x="18" y="18" width="28" height="28" rx="4" stroke="#0e2a1f" strokeWidth="2.5" />
      {PINS.map((d) => (
        <path key={d} d={d} stroke="#0e2a1f" strokeWidth="2.5" strokeLinecap="round" />
      ))}
      {PINS.map((d, i) => (
        <path
          key={`g${d}`}
          className="ai-pin"
          d={d}
          pathLength={1}
          stroke="#14a85a"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ animationDelay: `${-(4 - i / 3).toFixed(3)}s` }}
        />
      ))}
      <path
        className="ai-core"
        d="M32 23C33.62 30.38 33.62 30.38 41 32C33.62 33.62 33.62 33.62 32 41C30.38 33.62 30.38 33.62 23 32C30.38 30.38 30.38 30.38 32 23Z"
        fill="#14a85a"
      />
    </svg>
  );
}
