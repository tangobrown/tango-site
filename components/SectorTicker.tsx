import { sectors } from "@/content/site";

// Soft fade on both edges of the scrolling area so items ease in/out
// rather than hard-clipping at the label and the container edge.
const edgeFade =
  "linear-gradient(90deg, transparent 0, #000 5%, #000 92%, transparent 100%)";

function SectorGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex gap-12 pr-12 font-mono text-[12px] uppercase tracking-[.16em] text-ink-4"
    >
      {sectors.map((sector) => (
        <span key={sector} className="flex shrink-0 items-center gap-12 whitespace-nowrap">
          {sector}
          <span className="text-forest" aria-hidden="true">
            /
          </span>
        </span>
      ))}
    </div>
  );
}

export default function SectorTicker() {
  return (
    <div className="border-b border-[rgba(14,17,18,.1)] bg-white">
      <div className="mx-auto max-w-content px-6 py-4 md:px-10">
        <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6">
          <span className="flex-none whitespace-nowrap font-mono text-[12px] uppercase tracking-[.16em] text-ink-2">
            Servicing small business in:
          </span>
          <div
            className="relative w-full min-w-0 overflow-hidden md:flex-1"
            style={{ WebkitMaskImage: edgeFade, maskImage: edgeFade }}
          >
            {/* Set duplicated verbatim so the -50% loop is seamless. */}
            <div className="marquee-track flex w-max animate-ticker">
              <SectorGroup />
              <SectorGroup hidden />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
