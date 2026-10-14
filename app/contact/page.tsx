import type { Metadata } from "next";
import { ContactDetails, ContactForm } from "@/components/ContactPanel";
import PageHeader from "@/components/PageHeader";
import { container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tim Brown about a new website, SEO or AI automation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        intro="A sentence is plenty to start. I'll reply within a day, and tell you honestly if I'm not the right person."
      />
      <section
        className={`${container} grid grid-cols-1 gap-x-[clamp(40px,6vw,96px)] gap-y-12 py-[clamp(52px,6.5vw,88px)] lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]`}
      >
        <div>
          <h2 className="m-0 mb-6 text-[clamp(26px,2.4vw,34px)] font-semibold tracking-[-0.015em]">
            Send me a message
          </h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="m-0 mb-2 text-[clamp(26px,2.4vw,34px)] font-semibold tracking-[-0.015em]">
            Prefer to talk?
          </h2>
          <ContactDetails />
        </div>
      </section>
    </>
  );
}
