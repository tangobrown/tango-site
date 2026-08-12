"use client";

import { useState } from "react";
import { faqs } from "@/content/faqs";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0); // first item open by default; -1 = none

  return (
    <section
      id="faq"
      className="border-b border-[rgba(14,17,18,.1)] bg-white px-6 py-[110px] md:px-10"
    >
      <div className="mx-auto flex max-w-faq flex-col gap-12">
        <Reveal className="flex flex-col gap-[18px]">
          <span className="font-mono text-[11px] uppercase tracking-[.2em] text-forest">
            06 / FAQ
          </span>
          <h2 className="m-0 text-[clamp(34px,4.2vw,60px)] font-semibold leading-[1.02] tracking-[-.035em]">
            The awkward questions.
          </h2>
        </Reveal>

        <Reveal className="flex flex-col border-t border-[rgba(14,17,18,.12)]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={faq.q} className="border-b border-[rgba(14,17,18,.12)]">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 border-0 bg-transparent px-1 py-[26px] text-left text-[19px] font-medium tracking-[-.02em] text-ink transition-colors hover:text-forest"
                >
                  {faq.q}
                  <span className="flex-none font-mono text-[18px] text-forest" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="m-0 text-pretty pb-7 pl-1 pr-[60px] text-[16px] leading-[1.65] text-ink-3"
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
