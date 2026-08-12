import { comparisonRows } from "@/content/comparison";
import Reveal from "./Reveal";

const COLS = "grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]";

export default function Comparison() {
  return (
    <section
      id="versus"
      className="border-b border-[rgba(14,17,18,.1)] bg-white px-6 py-[110px] md:px-10"
    >
      <div className="mx-auto flex max-w-comparison flex-col gap-14">
        <Reveal className="flex flex-col gap-[18px]">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-forest">
            04 / Comparison
          </span>
          <h2 className="m-0 text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em]">
            Same work. Different bill.
          </h2>
        </Reveal>

        {/* Desktop table */}
        <Reveal className="hidden border border-[rgba(14,17,18,.12)] md:block">
          <div className={`grid ${COLS} border-b border-[rgba(14,17,18,.12)] bg-[rgba(14,17,18,.035)]`}>
            <span className="px-6 py-[18px] font-mono text-[11px] uppercase tracking-[.16em] text-ink-4">
              Item
            </span>
            <span className="px-6 py-[18px] font-mono text-[11px] uppercase tracking-[.16em] text-ink-4">
              Typical agency
            </span>
            <span className="px-6 py-[18px] font-mono text-[11px] uppercase tracking-[.16em] text-forest">
              Tango Digital
            </span>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.item}
              className={`grid ${COLS} border-b border-[rgba(14,17,18,.09)] last:border-b-0`}
            >
              <span className="px-6 py-[22px] text-[15px] font-medium text-ink">{row.item}</span>
              <span className="px-6 py-[22px] text-[15px] text-ink-4">{row.agency}</span>
              <span className="px-6 py-[22px] text-[15px] text-ink">{row.us}</span>
            </div>
          ))}
        </Reveal>

        {/* Mobile: one card per row, values labelled */}
        <div className="flex flex-col gap-4 md:hidden">
          {comparisonRows.map((row) => (
            <div
              key={row.item}
              className="flex flex-col gap-3 border border-[rgba(14,17,18,.12)] p-5"
            >
              <span className="text-[15px] font-medium text-ink">{row.item}</span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-ink-4">
                  Typical agency
                </span>
                <span className="text-[15px] text-ink-4">{row.agency}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-forest">
                  Tango Digital
                </span>
                <span className="text-[15px] text-ink">{row.us}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
