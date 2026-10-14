import type { Metadata } from "next";
import {
  Callout,
  CardsSection,
  FeatureSection,
  HeaderActions,
  NumberedList,
  PointsGrid,
  PricingSection,
  SplitSection,
  StepsSection,
  TickList,
  type Item,
  type PriceRow,
} from "@/components/landing";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Websites for Service Businesses",
  description:
    "Fast, professional websites for plumbers, builders and local service businesses that bring in more calls and quote requests. Local SEO, hosting and updates included. Based in Exeter.",
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

// Prices still to be confirmed.
const pricing: PriceRow[] = [
  { service: "Website check", price: "Free" },
  { service: "Website build", price: "Price on request" },
  { service: "Hosting and care", price: "Price on request" },
  { service: "Local SEO, hosting included", price: "Price on request" },
  { service: "AI tools", price: "Price on request" },
];

export default function ServiceBusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service businesses"
        title="Websites that get your phone ringing"
        intro="Fast, professional websites for plumbers, builders, electricians and local service businesses. I build it, host it, keep it updated and help you show up when local customers search, so you can focus on the work."
      >
        <HeaderActions label="Get a free website check" preset="Website review for my business" />
        <p className="m-0 mt-2 text-[15px] text-footer-muted">
          Based in Exeter, working with trades and local businesses across the UK.
        </p>
      </PageHeader>

      <CardsSection
        eyebrow="What I do"
        title="Your website, sorted"
        intro="You're busy on site, not sat at a computer. I take care of everything to do with your website, from building it to keeping it updated, so it quietly brings in work while you get on with the job."
        items={whatIDo}
      />

      <FeatureSection
        eyebrow="The build"
        title="Built to be fast, secure and hassle-free"
        intro="Many trade websites run on page builders and plugins that slow them down and need constant updates. I build modern, lightweight websites using the same technology as much bigger brands (Next.js and Tailwind), so yours loads fast and just works."
      >
        <div data-reveal className="mt-[clamp(36px,4vw,56px)]">
          <h3 className="m-0 mb-6 text-[26px] font-semibold tracking-[-0.01em]">
            Why it&apos;s better <span className="text-brand">for your business</span>
          </h3>
          <PointsGrid items={whyBetter} />
        </div>
      </FeatureSection>

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
            Every AI tool is set up around your business and checked by you. It helps you respond, it
            doesn&apos;t replace you.
          </Callout>
        }
      >
        <NumberedList items={aiTools} />
      </SplitSection>

      <FeatureSection
        eyebrow="Hosting and care"
        title="One monthly plan, nothing to worry about"
        intro="Your website is looked after like any other tool you rely on. One simple monthly plan covers everything, so you never have to think about it."
      >
        <div data-reveal className="mt-[clamp(32px,3.6vw,48px)] max-w-[860px]">
          <TickList items={hostingCovers} />
        </div>
      </FeatureSection>

      <StepsSection title="Simple from start to finish" items={steps} />

      <PricingSection
        title="Straightforward pricing"
        intro="No jargon, no hidden extras. You'll know exactly what you're paying before we start."
        rows={pricing}
        ctaTitle="Ready for more calls and quote requests?"
        ctaText="Book your free website check. I'll show you how your business shows up online today and what would bring in more work, with no obligation. Based in Exeter and happy to meet in person across the South West, or online anywhere in the UK."
        ctaLabel="Get your free website check"
        preset="Website review for my business"
      />
    </>
  );
}
