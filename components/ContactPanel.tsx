"use client";

import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

// Formspree endpoint — override via NEXT_PUBLIC_FORMSPREE_ENDPOINT.
const FORMSPREE =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/mkoldveb";

type Note = { text: string; ok: boolean } | null;

/**
 * Full-screen dark overlay + right-anchored panel that slides in
 * with translateX. Contains the contact form: Name + Email
 * (bottom-border-only) + About your project (full-border textarea)
 * + cream "Send message" submit. Below the form: a bordered
 * contact block (email/phone/location).
 *
 * The form posts directly to Formspree from the browser (same
 * pattern used previously) — no server route needed.
 */
export default function ContactPanel({ isOpen, onClose }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [note, setNote] = useState<Note>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const gotcha = String(data.get("_gotcha") || "");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      setNote({
        text: "Please add your name, a valid email and a short message.",
        ok: false,
      });
      return;
    }
    if (gotcha) {
      // Silently succeed for bots
      setNote({ text: `Thanks ${name}! I'll be in touch.`, ok: true });
      form.reset();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New enquiry from ${name}`,
          _replyto: email,
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as {
          errors?: { message: string }[];
        };
        setNote({
          text: j.errors?.[0]?.message || "Something went wrong. Please try again.",
          ok: false,
        });
      } else {
        setNote({
          text: `Thanks ${name}! I'll be in touch within a day.`,
          ok: true,
        });
        form.reset();
      }
    } catch {
      setNote({ text: "Network error. Please try again.", ok: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay — click to close */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 transition-opacity duration-[350ms] ease-linear",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ background: "rgba(20,28,20,.5)" }}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={[
          "fixed top-0 right-0 bottom-0 z-50 overflow-y-auto",
          "w-[min(480px,100vw)] bg-panel text-heroText",
          "px-11 py-10",
          "transition-transform duration-[450ms]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        style={{
          transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
          boxShadow: "-20px 0 60px rgba(0,0,0,.3)",
        }}
      >
        <div className="flex items-center justify-between mb-9">
          <div className="text-[13px] font-semibold tracking-[0.22em] uppercase text-forestLabel">
            Get in touch
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact panel"
            className="w-10 h-10 border border-panel-close rounded-full inline-flex items-center justify-center text-heroText/95 hover:text-heroText transition-colors"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ✕
            </span>
          </button>
        </div>

        <h2 className="font-heading font-medium text-[38px] leading-[1.08] tracking-[-0.01em] text-white mb-3.5">
          Let&apos;s start something.
        </h2>
        <p className="text-base leading-[1.65] font-light text-[#bcc6b1] mb-9">
          Tell me a little about your project and I&apos;ll be back in touch
          within a day.
        </p>

        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div>
            <label
              htmlFor="name"
              className="block text-[12px] tracking-[0.14em] uppercase text-panel-label mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-transparent border-0 border-b-[1.5px] border-panel-border text-white text-base py-2 outline-none focus:border-heroText transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[12px] tracking-[0.14em] uppercase text-panel-label mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border-0 border-b-[1.5px] border-panel-border text-white text-base py-2 outline-none focus:border-heroText transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[12px] tracking-[0.14em] uppercase text-panel-label mb-2"
            >
              About your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-[1.5px] border-panel-border text-white text-base p-3 outline-none focus:border-heroText transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className={[
              "inline-flex items-center justify-center gap-2.5",
              "bg-cream text-forest px-4 py-4 text-[15px] font-semibold",
              "hover:bg-white transition-colors",
              "mt-1.5",
              submitting ? "opacity-70 cursor-wait" : "",
            ].join(" ")}
          >
            {submitting ? "Sending…" : "Send message"}
            <span aria-hidden="true">→</span>
          </button>
          {note && (
            <p
              role="status"
              aria-live="polite"
              className={[
                "text-sm",
                note.ok ? "text-[#bcc6b1]" : "text-[#e0a94a]",
              ].join(" ")}
            >
              {note.text}
            </p>
          )}
        </form>

        <div className="mt-10 pt-7 border-t border-footer-rule text-[15px] leading-[1.9] font-light text-[#bcc6b1]">
          <a href="mailto:tim@tangobrown.com" className="text-heroText">
            tim@tangobrown.com
          </a>
          <br />
          07594 404 388 · Exeter, Devon
        </div>
      </aside>
    </>
  );
}
