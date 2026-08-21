"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";
import ArrowIcon from "./ArrowIcon";
import Placeholder from "./Placeholder";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectPanel({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const open = project !== null;
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Image carousel (panel only). Card shows images[0]; here we page through all.
  const images = project?.images ?? [];
  const [slide, setSlide] = useState(0);
  const touchX = useRef<number | null>(null);

  // Reset to the first image whenever a different project opens.
  useEffect(() => {
    setSlide(0);
  }, [project?.id]);

  const prevImg = () => setSlide((s) => Math.max(0, s - 1));
  const nextImg = () => setSlide((s) => Math.min(images.length - 1, s + 1));
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40) nextImg();
    else if (dx > 40) prevImg();
    touchX.current = null;
  };

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const nodes = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes.length) return;
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
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-[rgba(20,18,15,0.5)] transition-opacity duration-[320ms] ease-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={project?.title || undefined}
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-auto z-[41] flex max-h-[92vh] w-full flex-col bg-cream shadow-[-24px_0_60px_rgba(20,18,15,0.28)] transition-transform duration-[380ms] [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] lg:left-auto lg:right-0 lg:top-0 lg:h-auto lg:max-h-none lg:w-[min(560px,92vw)] ${
          open
            ? "translate-y-0 lg:translate-x-0"
            : "pointer-events-none translate-y-full lg:translate-x-full lg:translate-y-0"
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-[22px] z-[2] flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(250,247,242,0.9)] text-[17px] text-ink transition-colors hover:bg-white lg:h-10 lg:w-10"
        >
          ✕
        </button>

        <div
          className="relative h-[220px] flex-none overflow-hidden bg-stone lg:h-[340px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {images.length > 0 ? (
            <>
              <div
                className="flex h-full w-full ease-out"
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                  transition: "transform 400ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                }}
              >
                {images.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt={`${project?.title} — image ${i + 1} of ${images.length}`}
                    className="h-full w-full flex-none object-cover"
                  />
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImg}
                    disabled={slide === 0}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(250,247,242,0.9)] text-[15px] text-ink transition-colors hover:bg-white disabled:pointer-events-none disabled:opacity-0"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={nextImg}
                    disabled={slide === images.length - 1}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 z-[2] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(250,247,242,0.9)] text-[15px] text-ink transition-colors hover:bg-white disabled:pointer-events-none disabled:opacity-0"
                  >
                    →
                  </button>
                  <div className="absolute inset-x-0 bottom-3 z-[2] flex justify-center gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSlide(i)}
                        aria-label={`Go to image ${i + 1}`}
                        aria-current={i === slide}
                        className={`h-[7px] w-[7px] rounded-full transition-colors ${
                          i === slide ? "bg-cream" : "bg-cream/50 hover:bg-cream/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : project ? (
            <Placeholder />
          ) : null}
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-[22px] overflow-y-auto p-[40px_44px_56px]">
          <div className="flex flex-col gap-[10px]">
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{project?.meta}</span>
            <h2 className="m-0 font-bebas text-[44px] font-normal leading-[1.0] tracking-[0.01em]">
              {project?.title}
            </h2>
          </div>
          <p className="m-0 text-[16px] leading-[1.75] text-ink-soft">{project?.body}</p>
          <div className="flex flex-col gap-3 border-t border-rule pt-[6px]">
            <div className="flex justify-between gap-5 pt-[14px] text-[14px]">
              <span className="text-muted">What I did</span>
              <span className="max-w-[60%] text-right">{project?.scope}</span>
            </div>
            <div className="flex justify-between gap-5 text-[14px]">
              <span className="text-muted">Year</span>
              <span>{project?.year}</span>
            </div>
          </div>
          {project?.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-[10px] self-start bg-ink-dark px-[28px] py-[15px] text-[13px] uppercase tracking-[0.05em] text-cream-text transition-colors hover:bg-rust hover:text-white"
            >
              Visit the live site <ArrowIcon size={17} />
            </a>
          ) : null}
        </div>
      </aside>
    </>
  );
}
