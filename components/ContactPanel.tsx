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
import { btnLight } from "./styles";

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
      {/* Dimmed backdrop behind the panel; clicking it closes the panel. */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-[rgba(17,15,13,0.7)] backdrop-blur-[2px] transition-opacity duration-[420ms] ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <ContactPanel isOpen={isOpen} onClose={close} preset={preset} presetKey={presetKey} />
    </Ctx.Provider>
  );
}

const inputBase =
  "w-full border border-line bg-transparent px-4 py-3.5 font-serif text-[18px] outline-none transition-colors placeholder:text-ash focus:border-ember";
const inputClass = `${inputBase} text-bone`;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={`${btnLight} disabled:opacity-70`}>
      {pending ? "SENDING…" : "SEND IT OVER →"}
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
      className={`fixed inset-y-0 right-0 z-[41] flex w-[min(520px,100vw)] flex-col border-l border-line bg-ink text-bone duration-[420ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
        isOpen
          ? "visible translate-x-0 transition-transform"
          : "invisible translate-x-full transition-[transform,visibility]"
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-none items-center justify-between border-b border-line px-[clamp(22px,4vw,36px)] py-[18px]">
        <span className="font-display text-[11px] tracking-[0.16em] text-ash">REPLIES WITHIN A DAY</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close contact panel"
          className="flex h-11 w-11 items-center justify-center border border-line2 bg-transparent text-[16px] text-bone transition-colors hover:border-bone"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-7 overflow-y-auto px-[clamp(22px,4vw,36px)] pb-10 pt-8">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 mb-1 font-display text-[clamp(44px,6vw,64px)] font-light leading-[0.95]">
            LET&apos;S <em className="font-serif font-normal text-ash">talk</em>
          </h2>
          <p className="m-0 text-[19px] leading-[1.45] text-stone">
            A sentence is plenty to start. I&apos;ll tell you honestly if I&apos;m not the right
            person.
          </p>
        </div>

        <ContactForm preset={preset} presetKey={presetKey} />

        <ContactDetails />
      </div>
    </aside>
  );
}

// The enquiry form inside the slide-out panel.
// `preset`/`presetKey` let a CTA preselect "What are you after?".
export function ContactForm({
  preset = "",
  presetKey = 0,
}: {
  preset?: EnquiryType | "";
  presetKey?: number;
}) {
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

  return (
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
          className={`${inputBase} cursor-pointer appearance-none pr-11 ${enquiryType ? "text-bone" : "text-ash"}`}
        >
          <option value="" disabled className="bg-ink">
            What are you after?
          </option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-ink text-bone">
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
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ash"
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
        <p aria-live="polite" className="m-0 text-[17px]">
          {state.status === "success" && <span className="text-ember">Thanks — that&apos;s with me.</span>}
          {state.status === "error" && <span className="text-[#e08a7a]">{state.message}</span>}
        </p>
      </div>
    </form>
  );
}

// Email / LinkedIn / location rows.
export function ContactDetails() {
  return (
    <dl className="m-0 border-t border-line">
      {[
        { label: "Email", value: site.email, href: `mailto:${site.email}` },
        { label: "LinkedIn", value: "Tim Brown", href: site.linkedin, external: true },
        { label: "Based in", value: "Devon, UK" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between gap-4 border-b border-line py-4"
        >
          <dt className="font-display text-[11px] uppercase tracking-[0.16em] text-ember">{row.label}</dt>
          <dd className="m-0 text-right text-[17px]">
            {row.href ? (
              <a
                href={row.href}
                {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="transition-colors"
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
  );
}
