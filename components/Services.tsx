import Image from "next/image";
import ArrowIcon from "./ArrowIcon";
import { ContactButton } from "./ContactPanel";
import { btnDark, btnPrimary, container, sectionY } from "./ui";

type Box = {
  label: string;
  title: string;
  intro: string;
  points: string[];
  cta: string;
  image: string;
  imageAlt: string;
  tone: "dark" | "light";
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
    image: "/work/tablet/torbay.png",
    imageAlt: "Torbay Sweeps website shown on a tablet",
    tone: "dark",
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
    image: "/work/tablet/ipj.png",
    imageAlt: "IPJ London website shown on a tablet",
    tone: "light",
  },
];

// Colours per card: dark green with white text, or brand green with dark green text.
const tones = {
  dark: {
    card: "bg-pine text-white",
    label: "text-brand-bright",
    intro: "text-white/75",
    tick: "#2FD07A",
    button: btnPrimary,
  },
  light: {
    card: "bg-brand text-pine",
    label: "text-pine",
    intro: "text-pine",
    tick: "#0E2A1F",
    button: btnDark,
  },
} as const;

function Tick({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-[4px] flex-none"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// Two colour-blocked cards, each ending in a tablet mock of real work that
// bleeds off the card's bottom-right corner.
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {boxes.map((box, i) => {
          const t = tones[box.tone];
          return (
            <div
              key={box.label}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className={`flex flex-col overflow-hidden rounded-[24px] pl-[clamp(26px,3.6vw,48px)] pt-[clamp(30px,3.6vw,48px)] ${t.card}`}
            >
              <div className="flex flex-1 flex-col items-start gap-6 pr-[clamp(26px,3.6vw,48px)]">
                <div className="flex flex-col gap-3">
                  <p className={`m-0 text-[15px] font-semibold uppercase tracking-[0.08em] ${t.label}`}>
                    {box.label}
                  </p>
                  <h3 className="m-0 text-[clamp(30px,2.8vw,40px)] font-semibold leading-[1.05] tracking-[-0.015em]">
                    {box.title}
                  </h3>
                  <p className={`m-0 text-[19px] leading-[1.47] ${t.intro}`}>{box.intro}</p>
                </div>

                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {box.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[18px] leading-[1.42]">
                      <Tick color={t.tick} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ContactButton preset="Website review for my business" className={`${t.button} mt-auto`}>
                  {box.cta} <ArrowIcon size={18} />
                </ContactButton>
              </div>

              {/* Top of a tablet mock, cropped by the card's bottom and right edges */}
              <div className="relative ml-[14%] mt-10 aspect-[1196/560] overflow-hidden">
                <Image
                  src={box.image}
                  alt={box.imageAlt}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover object-left-top"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
