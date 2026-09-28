import type { Metadata } from "next";
import ContactFooter from "@/components/ContactFooter";
import {
  Callout,
  CardsSection,
  Eyebrow,
  LandingHero,
  NumberedList,
  PointsGrid,
  PricingSection,
  SplitSection,
  StepsSection,
  bodyClass,
  h2Class,
  type Item,
  type PriceRow,
} from "@/components/landing";
import ScrollReveal from "@/components/ScrollReveal";
import SiteNav from "@/components/SiteNav";

const TITLE = "Websites for Trades & Local Services | Local SEO | Tim Brown";
const DESCRIPTION =
  "Fast, professional websites for plumbers, builders and local trades that bring in more calls and quote requests. Local SEO, hosting and updates included. Based in Exeter.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const whatIDo: Item[] = [
  {
    title: "Build",
    body: "A fast, professional website that shows off your work and makes it easy to get in touch.",
  },
  {
    title: "Host and look after",
    body: "Secure hosting, updates and changes handled for you. Just send me a message.",
  },
  {
    title: "Show up locally",
    body: "Local SEO and Google Business Profile support, so nearby customers find you first.",
  },
  {
    title: "More enquiries",
    body: "A site designed to turn visitors into calls, messages and quote requests.",
  },
];

const whyBetter: Item[] = [
  {
    title: "Lightning fast",
    body: "Pages load almost instantly, even on a patchy mobile signal, which is where most of your customers will find you.",
  },
  {
    title: "Secure by design",
    body: "No plugins or logins for hackers to target, so there's far less to go wrong.",
  },
  {
    title: "Mobile-first",
    body: "Designed for customers searching on their phones, with your number always one tap away.",
  },
  {
    title: "No tech headaches",
    body: "There's no dashboard to learn or software to update. Need a change, a new photo or a new service page? Just send it over and I'll add it.",
  },
  {
    title: "Built for Google",
    body: "Clean code, fast pages and proper structure give you a strong foundation for local search.",
  },
];

const localSeo: Item[] = [
  {
    title: "Service and area pages",
    body: "A dedicated page for each service you offer and each area you cover, so you show up for the searches that matter.",
  },
  {
    title: "Google Business Profile",
    body: "Setting up and optimising your profile with the right categories, services, photos and regular updates, so you appear in the map results.",
  },
  {
    title: "Reviews strategy",
    body: "A simple way to ask happy customers for reviews, which helps you rank and builds trust.",
  },
  {
    title: "Local listings",
    body: "Consistent business details across directories so Google trusts where you are and what you do.",
  },
  {
    title: "Monthly reporting",
    body: "A short, plain-English update on how many people found you and got in touch.",
  },
];

const moreCalls: Item[] = [
  {
    title: "Easy to contact",
    body: "A click-to-call button, WhatsApp link and short quote form on every page, so getting in touch takes seconds.",
  },
  {
    title: "Proof that builds trust",
    body: "Your reviews, accreditations and before-and-after photos placed where customers are deciding.",
  },
  {
    title: "Clear, simple pages",
    body: "What you do, where you work and why customers choose you, without the waffle.",
  },
  {
    title: "Tracking what works",
    body: "I track calls and form enquiries so we know which pages bring in work, then keep improving them.",
  },
];

const aiTools: Item[] = [
  {
    title: "Website chat assistant",
    body: "Answers common questions about your services, areas and availability around the clock, then passes the lead to you.",
  },
  {
    title: "Quote assistant",
    body: "Asks customers the right questions up front (job type, location, photos, timescale), so every enquiry arrives with the details you need to price it.",
  },
  {
    title: "Review replies",
    body: "Drafts friendly, professional replies to your Google reviews for you to approve in seconds, keeping your profile active.",
  },
];

const hostingCovers = [
  "Fast, secure hosting with an SSL certificate and daily monitoring",
  "Updates and changes: new photos, services, prices or opening hours, just send them over",
  "Backups so nothing is ever lost",
  "Domain and email support so everything stays connected",
  "A real person to talk to: local, friendly and easy to reach",
];

const steps: Item[] = [
  {
    title: "Free website check",
    body: "I look at your current website (or your online presence if you don't have one) and your Google Business Profile, and show you what's holding you back.",
  },
  {
    title: "Plan",
    body: "We agree your pages, services and areas, and what you want more of.",
  },
  {
    title: "Build",
    body: "I write and build your site, using your photos and reviews. You just approve it.",
  },
  {
    title: "Launch",
    body: "Your site goes live, with your Google Business Profile and tracking set up.",
  },
  {
    title: "Keep growing",
    body: "I host it, make your updates and keep improving how many local customers find you and get in touch.",
  },
];

// TODO: prices still to be confirmed (copy doc has £[X] placeholders).
const pricing: PriceRow[] = [
  { service: "Website check", price: "Free" },
  { service: "Website build", price: "Price on request" },
  { service: "Hosting and care", price: "Price on request" },
  { service: "Local SEO, hosting included", price: "Price on request" },
  { service: "AI tools", price: "Price on request" },
];

export default function WebsitesForTradesPage() {
  return (
    <>
      <SiteNav />
      <main>
        <LandingHero
          eyebrow="Trades & local services"
          title="Websites that get your phone ringing"
          intro="Fast, professional websites for plumbers, builders, electricians and local service businesses. I build it, host it, keep it updated and help you show up when local customers search, so you can focus on the work."
          primaryLabel="Get a free website check"
          secondaryLabel="See how it works"
          trust="Based in Exeter, working with trades and local businesses across the UK."
        />

        <CardsSection
          eyebrow="What I do"
          title="Your website, sorted"
          intro="You're busy on site, not sat at a computer. I take care of everything to do with your website, from building it to keeping it updated, so it quietly brings in work while you get on with the job."
          items={whatIDo}
        />

        {/* The build */}
        <section className="border-y border-rule bg-white py-20 lg:py-[120px]">
          <div className="mx-auto max-w-content px-5 lg:px-8">
            <div data-reveal className="flex max-w-[760px] flex-col gap-4">
              <Eyebrow>The build</Eyebrow>
              <h2 className={h2Class}>Built to be fast, secure and hassle-free</h2>
              <p className={bodyClass}>
                Many trade websites run on page builders and plugins that slow them down and need
                constant updates. I build modern, lightweight websites using the same technology as
                much bigger brands (Next.js and Tailwind), so yours loads fast and just works.
              </p>
            </div>
            <div data-reveal className="mt-14 lg:mt-16">
              <h3 className="m-0 mb-8 font-bebas text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.1]">
                Why it&apos;s better <span className="text-rust">for your business</span>
              </h3>
              <PointsGrid items={whyBetter} />
            </div>
          </div>
        </section>

        <SplitSection
          eyebrow="Local SEO"
          title="Be the first name local customers see"
          intro="When someone searches “plumber near me” or “builder in Exeter”, they usually call one of the first few businesses they see. Local SEO helps make sure that's you."
        >
          <NumberedList items={localSeo} />
        </SplitSection>

        <SplitSection
          dark
          eyebrow="More calls and quote requests"
          title="Turn visitors into jobs"
          intro="Getting found is only half the job. Your website also needs to convince people to pick up the phone. Every page I build is designed around one goal: getting you more enquiries."
        >
          <NumberedList items={moreCalls} dark />
        </SplitSection>

        <SplitSection
          eyebrow="AI tools"
          title="AI that saves you time and wins you work"
          intro="You can't answer the phone when you're up a ladder. Simple AI tools can help you respond faster and never miss an enquiry, without you lifting a finger."
          aside={
            <Callout>
              Every AI tool is set up around your business and checked by you. It helps you respond,
              it doesn&apos;t replace you.
            </Callout>
          }
        >
          <NumberedList items={aiTools} />
        </SplitSection>

        <SplitSection
          eyebrow="Hosting and care"
          title="One monthly plan, nothing to worry about"
          intro="Your website is looked after like any other tool you rely on. One simple monthly plan covers everything, so you never have to think about it."
          className="border-y border-rule bg-white"
        >
          <ul className="m-0 flex list-none flex-col border border-rule bg-cream p-0">
            {hostingCovers.map((line, i) => (
              <li
                key={line}
                className={`flex items-start gap-4 px-6 py-5 lg:px-8 ${i ? "border-t border-rule" : ""}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-[3px] flex-none text-rust"
                  aria-hidden="true"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
                <span className="text-[16px] leading-[1.65] text-ink">{line}</span>
              </li>
            ))}
          </ul>
        </SplitSection>

        <StepsSection eyebrow="How it works" title="Simple from start to finish" items={steps} />

        <PricingSection
          title="Straightforward pricing"
          intro="No jargon, no hidden extras. You'll know exactly what you're paying before we start."
          rows={pricing}
          ctaTitle="Ready for more calls and quote requests?"
          ctaText="Book your free website check. I'll show you how your business shows up online today and what would bring in more work, with no obligation. Based in Exeter and happy to meet in person across the South West, or online anywhere in the UK."
          ctaLabel="Get your free website check"
          className="border-t border-rule bg-white"
        />
      </main>
      <ContactFooter />
      <ScrollReveal />
    </>
  );
}
