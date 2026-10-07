import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { container, sectionY } from "./ui";

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

// Two full-width outlined rows. On hover (or keyboard focus) a colour fills
// the row from left to right. The whole row opens the contact panel; it can
// point at a service page once those exist.
export default function Services() {
  return (
    <section id="services" className={`${container} ${sectionY}`}>
      <h2
        data-reveal
        className="m-0 mb-[60px] text-center text-[clamp(37px,3.9vw,53px)] font-semibold leading-[1.08] tracking-[-0.015em]"
      >
        Need a hand?
        <br />
        Here&apos;s what I do
      </h2>

      <div className="flex flex-col gap-4">
        {boxes.map((box, i) => {
          const t = tones[box.tone];
          return (
            <div
              key={box.label}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="group relative overflow-hidden rounded-[24px] border border-ink/15"
            >
              {/* Colour fill, grows across the row on hover */}
              <div
                aria-hidden="true"
                className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-focus-within:scale-x-100 group-hover:scale-x-100 ${t.fill}`}
              />

              <div
                className={`relative grid grid-cols-1 items-center gap-x-[clamp(24px,4vw,64px)] gap-y-4 p-[clamp(26px,3.6vw,48px)] transition-colors duration-300 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_auto] ${t.text}`}
              >
                <div className="flex flex-col gap-3">
                  <p
                    className={`m-0 text-[15px] font-semibold uppercase tracking-[0.08em] text-brand transition-colors duration-300 ${t.label}`}
                  >
                    {box.label}
                  </p>
                  <h3 className="m-0 text-[clamp(28px,2.8vw,40px)] font-semibold leading-[1.08] tracking-[-0.015em]">
                    {box.title}
                  </h3>
                </div>
                <p
                  className={`m-0 text-[19px] leading-[1.47] text-ink-soft transition-colors duration-300 ${t.intro}`}
                >
                  {box.intro}
                </p>
                <span
                  aria-hidden="true"
                  className={`flex h-14 w-14 items-center justify-center justify-self-start rounded-full border border-ink/20 transition-colors duration-300 md:justify-self-end ${t.arrow}`}
                >
                  <ArrowIcon size={20} />
                </span>
              </div>

              {/* Whole-row hit area */}
              <ContactButton
                preset="Website review for my business"
                className="absolute inset-0 z-10 rounded-[24px] outline-none"
              >
                <span className="sr-only">
                  {box.cta}: {box.label.toLowerCase()}
                </span>
              </ContactButton>
            </div>
          );
        })}
      </div>
    </section>
  );
}
