import { sectors } from "@/content/site";

function SectorGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex gap-12 font-mono text-[12px] uppercase tracking-[.16em] text-ink-4"
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
    <div className="overflow-hidden border-b border-[rgba(14,17,18,.1)] bg-white py-4">
      {/* Set duplicated verbatim so the -50% loop is seamless. */}
      <div className="marquee-track flex w-max animate-ticker gap-12">
        <SectorGroup />
        <SectorGroup hidden />
      </div>
    </div>
  );
}
