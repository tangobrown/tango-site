"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { site } from "@/lib/site";

const initialState: ContactState = { status: "idle" };

const labelClass =
  "flex flex-col gap-2 text-[12px] uppercase tracking-[0.08em] text-muted";
const inputClass =
  "w-full rounded-[6px] border border-hairdark bg-[rgba(246,241,233,0.07)] px-[15px] py-[13px] text-[16px] text-cream-text outline-none transition-colors placeholder:text-muted focus:border-rust focus:bg-[rgba(246,241,233,0.1)]";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-[6px] w-full cursor-pointer bg-rust px-8 py-4 text-[14px] uppercase tracking-[0.05em] text-white transition-colors hover:bg-rust-dark disabled:opacity-70 lg:w-auto lg:self-start"
    >
      {pending ? "Sending…" : "Send it over"}
    </button>
  );
}

export default function ContactFooter() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <footer id="contact" className="bg-ink-dark text-cream-text">
      <div className="mx-auto max-w-content px-5 pb-8 pt-16 lg:px-8 lg:pb-[60px] lg:pt-[110px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[8vw]">
          {/* Left */}
          <div className="flex flex-col gap-[26px]">
            <h2 className="m-0 text-pretty font-bebas text-[clamp(38px,4.1vw,62px)] font-normal leading-[1.0] tracking-[0.01em]">
              Tell me what you&apos;re trying to build.
            </h2>
            <p className="m-0 max-w-[38ch] text-[17px] leading-[1.7] text-muted-dark">
              A sentence is plenty to start. I reply to everything within a day, and I&apos;ll tell
              you honestly if I&apos;m not the right person.
            </p>
            <div className="flex flex-col gap-[14px] pt-2">
              <a
                href={`mailto:${site.email}`}
                className="self-start border-b border-hairdark pb-[6px] text-[17px] text-cream-text transition-colors hover:border-rust"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="self-start border-b border-hairdark pb-[6px] text-[17px] text-cream-text transition-colors hover:border-rust"
              >
                Connect on LinkedIn
              </a>
              <span className="text-[15px] text-muted">{site.location}</span>
            </div>
          </div>

          {/* Right — form */}
          <form action={formAction} className="flex flex-col gap-5">
            <label className={labelClass}>
              Name
              <input type="text" name="name" placeholder="Your name" className={inputClass} />
            </label>
            <label className={labelClass}>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className={inputClass}
              />
            </label>
            <label className={labelClass}>
              What do you need?
              <textarea
                name="message"
                rows={4}
                placeholder="A new site, better rankings, less admin…"
                className={`${inputClass} resize-y`}
              />
            </label>
            <SubmitButton />
            <p aria-live="polite" className="m-0 min-h-[1.2em] text-[15px]">
              {state.status === "success" && (
                <span className="text-[#C9BFB2]">
                  Thanks — that&apos;s with me. I&apos;ll come back to you within a day.
                </span>
              )}
              {state.status === "error" && <span className="text-[#E0A183]">{state.message}</span>}
            </p>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-hairdark-2 pt-[26px] text-[13px] text-muted lg:mt-[90px] lg:flex-row lg:justify-between lg:gap-6">
          <span>{site.copyright}</span>
          <div className="flex gap-6">
            <a href="#services" className="text-muted transition-colors hover:text-cream-text">
              Services
            </a>
            <a href="#work" className="text-muted transition-colors hover:text-cream-text">
              Work
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-cream-text"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
