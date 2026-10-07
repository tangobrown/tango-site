"use client";

import {
  createContext,
  useActionState,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { enquiryTypes, site } from "@/lib/site";
import ArrowIcon from "./ArrowIcon";
import { btnPrimary } from "./ui";

// Slide-out contact panel. Every "contact" CTA on the page is a
// <ContactButton>, which opens this panel (optionally with the
// "What are you after?" field preselected).

type EnquiryType = (typeof enquiryTypes)[number];

type PanelContext = {
  open: (preset?: EnquiryType) => void;
  close: () => void;
};

const Ctx = createContext<PanelContext | null>(null);

export function useContactPanel() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useContactPanel must be used inside <ContactPanelProvider>");
  return ctx;
}

export function ContactButton({
  children,
  preset,
  className,
}: {
  children: ReactNode;
  preset?: EnquiryType;
  className?: string;
}) {
  const { open } = useContactPanel();
  return (
    <button type="button" onClick={() => open(preset)} className={className} aria-haspopup="dialog">
      {children}
    </button>
  );
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([type="hidden"]):not([tabindex="-1"]), select, textarea, [tabindex]:not([tabindex="-1"])';

export function ContactPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<EnquiryType | "">("");
  const [presetKey, setPresetKey] = useState(0);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((p?: EnquiryType) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    if (p) {
      setPreset(p);
      setPresetKey((k) => k + 1);
    }
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <ContactPanel isOpen={isOpen} onClose={close} preset={preset} presetKey={presetKey} />
    </Ctx.Provider>
  );
}

const inputClass =
  "w-full rounded-md border border-rule bg-white px-4 py-[14px] text-[16px] font-medium tracking-normal text-ink outline-none transition-colors placeholder:text-footer-muted focus:border-brand";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={`${btnPrimary} disabled:opacity-70`}>
      {pending ? "Sending…" : "Send it over"} <ArrowIcon size={18} />
    </button>
  );
}

const initialState: ContactState = { status: "idle" };

function ContactPanel({
  isOpen,
  onClose,
  preset,
  presetKey,
}: {
  isOpen: boolean;
  onClose: () => void;
  preset: EnquiryType | "";
  presetKey: number;
}) {
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(submitContact, initialState);
  const [enquiryType, setEnquiryType] = useState<string>("");
  // Time the form became available — used server-side to reject instant (bot) submits.
  const [loadedAt, setLoadedAt] = useState("");
  useEffect(() => setLoadedAt(String(Date.now())), []);

  // Apply a preselected request type each time a CTA opens the panel with one.
  useEffect(() => {
    if (presetKey) setEnquiryType(preset);
  }, [preset, presetKey]);

  // Clear the form after a successful send.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      setEnquiryType("");
    }
  }, [state]);

  // Focus, Escape, focus trap, scroll lock and click-outside while open.
  useEffect(() => {
    if (!isOpen) return;
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
    const onPointer = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      // Let CTA buttons handle their own click (they re-open the panel).
      if ((target as Element).closest?.("[aria-haspopup='dialog']")) return;
      onClose();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Tim"
      inert={!isOpen}
      // Opening: become visible instantly (so focus can move in) and slide.
      // Closing: slide out, then hide once the transition ends.
      className={`fixed inset-y-0 right-0 z-[41] flex w-[min(520px,100vw)] flex-col bg-surface-panel shadow-panel duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
        isOpen
          ? "visible translate-x-0 transition-transform"
          : "invisible translate-x-full transition-[transform,visibility]"
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-none items-center justify-between border-b border-rule-light px-[clamp(22px,4vw,36px)] py-[18px]">
        <span className="flex items-center gap-2 text-[14px] font-semibold">
          <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
          Replies within a day
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close contact panel"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-rule bg-white text-[18px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-7 overflow-y-auto px-[clamp(22px,4vw,36px)] pb-10 pt-8">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 mb-2 text-[40px] font-semibold leading-[1.02] tracking-[-0.02em]">
            Let&apos;s talk
          </h2>
          <p className="m-0 text-[18px] leading-[1.45] text-ink-soft">
            A sentence is plenty to start. I&apos;ll tell you honestly if I&apos;m not the right
            person.
          </p>
        </div>

        <form ref={formRef} action={formAction} className="relative flex flex-col gap-3">
          {/* Honeypot — hidden from people, tempting to bots. Leave it empty. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden"
          >
            <label>
              Company website
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <input type="hidden" name="loaded_at" value={loadedAt} readOnly />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            autoComplete="name"
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            aria-label="Email address"
            autoComplete="email"
            className={inputClass}
          />
          <input
            type="text"
            name="business"
            placeholder="Business name or website (optional)"
            aria-label="Business name or website (optional)"
            autoComplete="organization"
            className={inputClass}
          />
          <span className="relative block">
            <select
              name="enquiry_type"
              aria-label="What are you after?"
              required
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className={`${inputClass} cursor-pointer appearance-none pr-11 ${
                enquiryType ? "" : "text-footer-muted"
              }`}
            >
              <option value="" disabled>
                What are you after?
              </option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type} className="text-ink">
                  {type}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="What do you need? A new site, better rankings, less admin…"
            aria-label="Please provide details"
            className={`${inputClass} resize-y`}
          />

          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
            <SubmitButton />
            <p aria-live="polite" className="m-0 text-[15px] font-medium">
              {state.status === "success" && (
                <span className="text-brand">Thanks — that&apos;s with me.</span>
              )}
              {state.status === "error" && <span className="text-[#B3261E]">{state.message}</span>}
            </p>
          </div>
        </form>

        {/* Details */}
        <dl className="m-0 border-t border-rule-light">
          {[
            { label: "Email", value: site.email, href: `mailto:${site.email}` },
            { label: "LinkedIn", value: "Tim Brown", href: site.linkedin, external: true },
            { label: "Based in", value: "Devon, UK" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 border-b border-rule-light py-4"
            >
              <dt className="text-[14px] text-ink-muted">{row.label}</dt>
              <dd className="m-0 text-right text-[17px] font-medium">
                {row.href ? (
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="text-ink transition-colors hover:text-brand"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
}
