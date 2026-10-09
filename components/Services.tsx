import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";

type Box = {
  label: string;
  title: string;
  intro: string;
  cta: string;
  tone: "dark" | "light";
};

const boxes: Box[] = [
  {
    label: "For service businesses",
    title: "Service based companies wanting to get more leads",
    intro:
      "For builders, plumbers, electricians, cleaners, consultants, clinics and other local service businesses.",
    cta: "Get a free website check",
    tone: "dark",
  },
  {
    label: "For e-commerce stores",
    title: "Online stores looking to modernise & level-up sales",
    intro:
      "Custom online stores for ambitious UK brands who want a super-fast site, built on modern technology.",
    cta: "Get a free store review",
    tone: "light",
  },
];

// Hover/focus colours: the fill that sweeps across, and the text on top of it.
const tones = {
  dark: {
    fill: "bg-pine",
    text: "group-hover:text-white group-focus-within:text-white",
    label: "group-hover:text-brand-bright group-focus-within:text-brand-bright",
    intro: "group-hover:text-white/75 group-focus-within:text-white/75",
    arrow:
      "group-hover:border-brand-bright group-hover:bg-brand-bright group-hover:text-pine group-focus-within:border-brand-bright group-focus-within:bg-brand-bright group-focus-within:text-pine",
  },
  light: {
    fill: "bg-brand",
    text: "group-hover:text-pine group-focus-within:text-pine",
    label: "group-hover:text-pine group-focus-within:text-pine",
    intro: "group-hover:text-pine group-focus-within:text-pine",
    arrow:
      "group-hover:border-pine group-hover:bg-pine group-hover:text-white group-focus-within:border-pine group-focus-within:bg-pine group-focus-within:text-white",
  },
} as const;

// A full-width band directly under the hero, split into two outlined halves.
// On hover (or keyboard focus) a colour fills a half from the left. Each half
// opens the contact panel; it can point at a service page once those exist.
// The outer padding lines the text up with the 1300px content column: each
// half is 50% of the page, so (page - 1300px) / 2 is "100% - 650px".

export default function Services() {
  return (
    <section
      id="services"
      aria-label="What I do"
      className="grid grid-cols-1 border-b border-ink/15 md:grid-cols-2"
    >
      {boxes.map((box, i) => {
        const t = tones[box.tone];
        return (
          <div
            key={box.label}
            className={`group relative overflow-hidden ${i > 0 ? "border-t border-ink/15 md:border-l md:border-t-0" : ""}`}
          >
            {/* Colour fill, grows across the half on hover */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-focus-within:scale-x-100 group-hover:scale-x-100 ${t.fill}`}
            />

            <div
              className={`relative flex h-full flex-col gap-4 px-5 py-[clamp(36px,4.4vw,64px)] transition-colors duration-300 md:px-[clamp(28px,3.6vw,56px)] ${
                i === 0 ? "md:pl-[max(20px,calc(100%-650px))]" : "md:pr-[max(20px,calc(100%-650px))]"
              } ${t.text}`}
            >
              <div className="flex items-center justify-between gap-6">
                <p
                  className={`m-0 text-[15px] font-semibold uppercase tracking-[0.08em] text-brand transition-colors duration-300 ${t.label}`}
                >
                  {box.label}
                </p>
                <span
                  aria-hidden="true"
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full border border-ink/20 transition-colors duration-300 ${t.arrow}`}
                >
                  <ArrowIcon size={18} />
                </span>
              </div>
              <h3 className="m-0 text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.015em]">
                {box.title}
              </h3>
              <p
                className={`m-0 max-w-[46ch] text-[19px] leading-[1.47] text-ink-soft transition-colors duration-300 ${t.intro}`}
              >
                {box.intro}
              </p>
            </div>

            {/* Whole-half hit area */}
            <ContactButton
              preset="Website review for my business"
              className="absolute inset-0 z-10 outline-none"
            >
              <span className="sr-only">
                {box.cta}: {box.label.toLowerCase()}
              </span>
            </ContactButton>
          </div>
        );
      })}
    </section>
  );
}
