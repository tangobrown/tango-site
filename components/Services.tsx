import { ContactButton } from "./ContactPanel";
import ArrowIcon from "./ArrowIcon";
import { btnPrimary, container, sectionY } from "./ui";

type Box = {
  label: string;
  title: string;
  intro: string;
  points: string[];
  cta: string;
};

const boxes: Box[] = [
  {
    label: "For service businesses",
    title: "Service based companies wanting to get more leads",
    intro:
      "For builders, plumbers, electricians, cleaners, consultants, clinics and other local service businesses.",
    points: [
      "Fast, mobile-first websites with your number one tap away",
      "Local SEO and Google Business Profile, so nearby customers find you first",
      "Designed to turn visitors into calls and quote requests",
      "Hosting, updates and support",
      "AI chat and quote assistants, so you never miss an enquiry",
    ],
    cta: "Get a free website check",
  },
  {
    label: "For e-commerce stores",
    title: "Online stores looking to modernise & level-up sales",
    intro:
      "Custom online stores for ambitious UK brands who want a super-fast site, built on modern technology.",
    points: [
      "Fast, custom storefronts with no template limits",
      "SEO that gets your products found on Google and in AI search",
      "Monthly conversion testing and tweaks that turns more visitors into buyers",
      "AI search, recommendations and shopping assistants",
      "Hosting and care, with a clear monthly report",
    ],
    cta: "Get a free store review",
  },
];

function Tick() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#14A85A"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[3px] flex-none"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className={`${container} ${sectionY}`}>
      <h2
        data-reveal
        className="m-0 mb-[44px] text-center text-[clamp(37px,3.9vw,53px)] font-semibold leading-[1.08] tracking-[-0.015em]"
      >
        Need a hand?
        <br />
        Here&apos;s what I do
      </h2>

      <div className="flex flex-wrap items-stretch gap-3">
        {boxes.map((box, i) => (
          <div
            key={box.label}
            data-reveal
            style={{ transitionDelay: `${i * 90}ms` }}
            className="flex flex-[1_1_380px] flex-col gap-[26px] rounded-md bg-surface-panel p-[clamp(28px,4vw,48px)]"
          >
            <div className="flex flex-col items-start gap-[14px]">
              <span className="rounded-full border border-brand px-3 py-[5px] text-[14px] font-semibold tracking-normal text-brand">
                {box.label}
              </span>
              <h3 className="m-0 text-[clamp(30px,2.8vw,40px)] font-semibold leading-[1.05] tracking-[-0.015em]">
                {box.title}
              </h3>
              <p className="m-0 text-[19px] leading-[1.47] text-ink-soft">{box.intro}</p>
            </div>

            <ul className="m-0 flex flex-1 list-none flex-col gap-[14px] border-t border-rule p-0 pt-[22px]">
              {box.points.map((point) => (
                <li key={point} className="flex gap-3 text-[18px] leading-[1.42]">
                  <Tick />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div>
              <ContactButton preset="Website review for my business" className={btnPrimary}>
                {box.cta} <ArrowIcon size={18} />
              </ContactButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
