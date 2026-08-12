"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { site } from "@/content/site";
import Reveal from "./Reveal";

const initialState: ContactState = { status: "idle" };

const inputClass =
  "rounded-[2px] border border-[rgba(245,244,240,.2)] bg-night-deep px-4 py-[14px] font-sans text-[15px] text-bone outline-none transition-colors focus:border-mint";
const labelClass =
  "font-mono text-[10px] uppercase tracking-[.16em] text-[rgba(245,244,240,.55)]";

function SubmitButton({ sent }: { sent: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || sent}
      className="mt-[6px] rounded-[2px] bg-mint p-4 text-[15px] font-semibold text-night transition-colors hover:bg-night hover:text-white disabled:cursor-default disabled:opacity-80"
    >
      {sent ? "Sent — talk soon" : pending ? "Sending…" : "Book my 20 minutes"}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const sent = state.status === "success";

  return (
    <section
      id="contact"
      className="grid-overlay-dark bg-night px-6 py-[120px] md:px-10"
    >
      <div className="mx-auto grid max-w-content grid-cols-1 items-start gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)] md:gap-20">
        {/* Left */}
        <Reveal className="flex flex-col gap-7">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-mint">
            08 / Contact
          </span>
          <h2 className="m-0 text-[clamp(40px,5.4vw,80px)] font-semibold leading-[.98] tracking-[-.04em] text-bone">
            Twenty minutes. No pitch.
          </h2>
          <p className="m-0 max-w-[480px] text-[18px] leading-[1.55] text-[rgba(245,244,240,.82)]">
            Tell me what you sell and where the leads are meant to come from. If I can&apos;t help,
            I&apos;ll say so and point you somewhere that can.
          </p>
          <div className="flex flex-col gap-2 pt-3">
            <a
              href={`mailto:${site.email}`}
              className="self-start border-b border-[rgba(12,107,87,.45)] text-[17px] text-bone transition-colors hover:text-mint"
            >
              {site.email}
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[.12em] text-[rgba(245,244,240,.55)]">
              {site.emailReplyNote}
            </span>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal>
          <form
            action={formAction}
            className="flex flex-col gap-[18px] border border-[rgba(245,244,240,.16)] bg-night-form p-9"
          >
            {/* Honeypot (hidden from humans) */}
            <input
              type="text"
              name="company_hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

          <div className="flex flex-col gap-2">
            <label htmlFor="td-name" className={labelClass}>
              Name
            </label>
            <input id="td-name" name="name" type="text" placeholder="Your name" required className={inputClass} />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="td-contact" className={labelClass}>
              How to reach you
            </label>
            <input
              id="td-contact"
              name="contact"
              type="text"
              placeholder="Email or phone"
              required
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="td-biz" className={labelClass}>
              Business & website
            </label>
            <input
              id="td-biz"
              name="business"
              type="text"
              placeholder="Company, and URL if you have one"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="td-need" className={labelClass}>
              What do you need
            </label>
            <textarea
              id="td-need"
              name="need"
              rows={4}
              placeholder="Website, more leads, less admin — or all of it"
              className={`${inputClass} resize-y`}
            />
          </div>

            <SubmitButton sent={sent} />

            <p
              aria-live="polite"
              className="m-0 min-h-[1em] font-mono text-[11px] tracking-[.04em]"
            >
              {state.status === "error" && (
                <span className="text-[#ff9b9b]">{state.message}</span>
              )}
              {sent && <span className="text-mint">{state.message}</span>}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
