import ArrowIcon from "./ArrowIcon";

// "Who do I work with?" — intro, then a short summary card for each of the two
// kinds of business Tim works with.
type Audience = {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
  cta: string;
};

const audiences: Audience[] = [
  {
    eyebrow: "Service businesses",
    title: "Websites that get your phone ringing",
    intro: "For builders, plumbers, electricians, clinics and local service businesses.",
    points: [
      "Fast, mobile-first websites with your number one tap away",
      "Local SEO and Google Business Profile, so nearby customers find you first",
      "Designed to turn visitors into calls and quote requests",
      "Hosting, updates and changes handled. Just send them over",
      "AI chat and quote assistants, so you never miss an enquiry",
    ],
    cta: "Get a free website check",
  },
  {
    eyebrow: "E-commerce",
    title: "Online stores that get found and convert",
    intro: "Custom stores on Shopify or Medusa for ambitious UK brands.",
    points: [
      "Fast, custom storefronts with no template limits",
      "SEO that gets your products found on Google and in AI search",
      "Monthly conversion testing that turns more visitors into buyers",
      "AI search, recommendations and shopping assistants",
      "Hosting and care, with a clear monthly report",
    ],
    cta: "Get a free store review",
  },
];

export default function WhoIWorkWith() {
  return (
    <section id="who-i-work-with" className="border-y border-rule bg-white py-20 lg:py-[110px]">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div data-reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw]">
          <h2 className="m-0 font-bebas text-[clamp(32px,3.3vw,50px)] font-normal leading-[1.08]">
            Who do I work with?
          </h2>
          <p className="m-0 text-[17px] leading-[1.75] text-ink-soft lg:pt-2">
            I work with small businesses across the UK that have big plans and not much time. You
            might be a builder in Exeter, a clinic in Plymouth, an online shop shipping nationwide.
            What you share is ambition, and a to-do list that keeps getting longer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {audiences.map((a, i) => (
            <div
              key={a.eyebrow}
              data-reveal
              style={{ transitionDelay: `${i * 100}ms` }}
              className="flex flex-col border border-rule bg-cream p-7 lg:p-10"
            >
              <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-rust">
                {a.eyebrow}
              </span>
              <h3 className="m-0 mt-4 text-pretty font-bebas text-[clamp(28px,2.5vw,38px)] font-normal leading-[1.05]">
                {a.title}
              </h3>
              <p className="m-0 mt-3 text-[16px] leading-[1.7] text-ink-soft">{a.intro}</p>

              <ul className="m-0 mt-7 flex list-none flex-col gap-4 border-t border-rule p-0 pt-7">
                {a.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-[4px] flex-none text-rust"
                      aria-hidden="true"
                    >
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                    <span className="text-[16px] leading-[1.6] text-ink">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-9">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-[10px] bg-rust px-[24px] py-[13px] text-[14px] font-medium uppercase tracking-[0.04em] text-white transition-colors hover:bg-rust-dark"
                >
                  {a.cta} <ArrowIcon size={17} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
