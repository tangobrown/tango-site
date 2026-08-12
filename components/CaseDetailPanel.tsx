"use client";

import { useEffect, useRef } from "react";
import type { CaseStudy } from "@/content/cases";
import Placeholder from "./Placeholder";

type Props = {
  caseStudy: CaseStudy;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function CaseDetailPanel({ caseStudy, onClose }: Props) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while open.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Move focus into the panel on open.
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Escape to close + focus trap.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const nodes = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-[80] animate-scrim-in bg-[rgba(8,12,12,.55)]"
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={caseStudy.title}
        className="fixed bottom-0 right-0 top-0 z-[90] flex w-[min(620px,94vw)] animate-panel-in flex-col overflow-y-auto border-l border-[rgba(14,17,18,.14)] bg-bone shadow-[-30px_0_80px_rgba(8,12,12,.28)]"
      >
        <div className="relative aspect-[16/10] w-full flex-none bg-white">
          <Placeholder label={`Case — ${caseStudy.title}`} />
          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-bone font-mono text-[16px] text-ink transition-colors hover:bg-forest hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 p-10">
          <span className="font-mono text-[11px] uppercase tracking-[.16em] text-forest">
            {caseStudy.tags}
          </span>
          <h3 className="m-0 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.05] tracking-[-.03em]">
            {caseStudy.title}
          </h3>

          <div className="flex flex-col gap-[6px] border-y border-[rgba(14,17,18,.12)] py-5">
            <span className="font-mono text-[10px] uppercase tracking-[.16em] text-ink-4">
              Sector
            </span>
            <span className="text-[15px] text-ink">{caseStudy.sector}</span>
          </div>

          {[
            { label: "The problem", body: caseStudy.problem },
            { label: "What I did", body: caseStudy.work },
            { label: "Outcome", body: caseStudy.outcome },
          ].map((block) => (
            <div key={block.label} className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[.16em] text-ink-4">
                {block.label}
              </span>
              <p className="m-0 text-pretty text-[16px] leading-[1.65] text-ink-2">{block.body}</p>
            </div>
          ))}

          <a
            href="#contact"
            onClick={onClose}
            className="mt-2 inline-flex items-center gap-[10px] self-start rounded-[2px] bg-forest px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:bg-ink"
          >
            Talk about something similar <span className="font-mono">→</span>
          </a>
        </div>
      </aside>
    </>
  );
}
