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
  type Item,
  type PriceRow,
} from "@/components/landing";
import { ContactButton } from "@/components/ContactPanel";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "E-commerce Websites",
  description:
    "Fast, custom e-commerce stores on Shopify or Medusa, then SEO, CRO and AI to help them get found and convert. Based in Exeter, working UK-wide.",
};

const whatIDo: Item[] = [
  {
    title: "Build",
    body: "A custom store designed around your products and customers, not squeezed into a template.",
  },
  {
    title: "Host and care",
    body: "Fast, secure hosting with updates, backups and monitoring handled for you.",
  },
  {
    title: "Get found (SEO)",
    body: "Technical and content SEO that helps the right customers find you on Google and in AI search.",
  },
  {
    title: "Convert (CRO)",
    body: "Ongoing testing and improvements that turn more of your visitors into buyers.",
  },
];

const frontEnd: Item[] = [
  {
    title: "Fast by design",
    body: "Pages are pre-built and served instantly, which keeps shoppers moving and helps your rankings.",
  },
  {
    title: "No theme limits",
    body: "Every page is designed around how your customers actually shop.",
  },
  {
    title: "Fewer apps, less bloat",
    body: "Features are built into the store instead of bolted on, so they don't slow it down.",
  },
  {
    title: "SEO built in",
    body: "Full control over page structure, metadata and structured data from day one.",
  },
];

const backEnd: { label: string; shopify: string; medusa: string }[] = [
  {
    label: "Best for",
    shopify: "Businesses that want a familiar, all-in-one admin",
    medusa: "Businesses that want full control and ownership",
  },
  {
    label: "Admin",
    shopify: "The Shopify admin your team may already know",
    medusa: "A clean, open-source admin you own outright",
  },
  {
    label: "Checkout",
    shopify: "Shopify's trusted checkout, including Shop Pay",
    medusa: "Fully custom checkout",
  },
  {
    label: "Costs",
    shopify: "Shopify subscription applies",
    medusa: "No platform subscription fees",
  },
  {
    label: "Flexibility",
    shopify: "Huge app ecosystem for email, reviews and fulfilment",
    medusa: "Custom pricing, B2B and multi-region setups without workarounds",
  },
];

const seo: Item[] = [
  {
    title: "Technical SEO",
    body: "Fast pages, clean site structure, and product and category pages Google can understand.",
  },
  {
    title: "Structured data",
    body: "Rich product information such as prices, availability and reviews, so your listings stand out in search results.",
  },
  {
    title: "Content that ranks",
    body: "Optimised product descriptions, category pages and helpful articles your customers are searching for.",
  },
  {
    title: "AI search ready",
    body: "Your store is structured so AI assistants and AI search results can understand and recommend your products.",
  },
  {
    title: "Monthly reporting",
    body: "A clear report on rankings, traffic and what I'm working on next, in plain English.",
  },
];

const cro: Item[] = [
  {
    title: "Find the leaks",
    body: "I look at where shoppers drop off, from product pages to basket to checkout.",
  },
  {
    title: "Test, don't guess",
    body: "Each month I test a focused improvement, such as clearer product pages, better calls to action or a smoother checkout path.",
  },
  {
    title: "Keep what works",
    body: "Changes that improve results stay; ones that don't are rolled back.",
  },
  {
    title: "Built into your store",
    body: "Because I built your front end, improvements go live quickly without fighting a theme or waiting on an app.",
  },
];

const ai: Item[] = [
  {
    title: "Smarter site search",
    body: "Shoppers can search the way they talk, such as “warm waterproof jacket for walking”, and still find the right products.",
  },
  {
    title: "Personal recommendations",
    body: "Relevant “you might also like” suggestions based on what each shopper is browsing.",
  },
  {
    title: "Product content at scale",
    body: "Consistent, SEO-friendly product descriptions and category copy, reviewed by a human before it goes live.",
  },
  {
    title: "Shopping assistant",
    body: "A helpful assistant that answers product questions and guides customers to the right choice.",
  },
  {
    title: "Time-saving automations",
    body: "Less manual admin behind the scenes, from reporting to product updates.",
  },
];

const steps: Item[] = [
  {
    title: "Free store review",
    body: "I look at your current store's speed, search visibility and conversion, then walk you through what I'd change and why. No obligation.",
  },
  {
    title: "Plan",
    body: "We agree the right platform, the features you need, and what success looks like.",
  },
  {
    title: "Build",
    body: "I build your new store on the custom front end and migrate your products, content and SEO so you don't lose rankings.",
  },
  {
    title: "Launch and host",
    body: "Your store goes live on fast, secure hosting that I look after.",
  },
  {
    title: "Grow every month",
    body: "Ongoing SEO, conversion improvements and AI features, with a clear monthly report and a real person to talk to.",
  },
];

const pricing: PriceRow[] = [
  { service: "Store review", price: "Free", was: "usually £395" },
  { service: "Custom store build", price: "From £2,800" },
  { service: "Hosting and care", price: "From £80/month" },
  { service: "SEO, hosting included", price: "From £290/month" },
  { service: "SEO + CRO, hosting included", price: "From £390/month" },
  { service: "AI integrations", price: "Quoted per project" },
];

export default function EcommercePage() {
  return (
    <>
      <PageHeader
        eyebrow="E-commerce stores"
        title="Fast, AI-powered stores that get found and convert"
        intro="I help ambitious UK companies sell more online. I build custom stores on Shopify or Medusa, host and look after them, then keep improving how they rank and how many visitors turn into customers."
      >
        <HeaderActions label="Get your free store review" preset="Website review for my business" />
        <p className="m-0 mt-2 text-[15px] text-footer-muted">
          Based in Exeter, working with e-commerce businesses across the UK.
        </p>
      </PageHeader>

      <CardsSection
        eyebrow="What I do"
        title="One person for your whole online store"
        intro="Most e-commerce businesses juggle a developer, a hosting company, an SEO agency and a pile of apps, none of them talking to each other. I bring it all together. I build your store, host it, and then work on it every month so it keeps getting faster, easier to find and better at selling."
        items={whatIDo}
      />

      <FeatureSection
        eyebrow="The stack"
        title="A modern store, built the way the fastest brands do it"
        intro="I build “headless” stores. Your products, orders and customers are managed in a proven e-commerce platform, while the shop your customers see is custom-built for speed. You get a familiar admin behind the scenes and a storefront with no template limits."
      >
        <div data-reveal className="mt-[clamp(36px,4vw,56px)]">
          <h3 className="m-0 mb-6 text-[26px] font-semibold tracking-[-0.01em]">
            The front end: <span className="text-brand">custom Next.js + Tailwind</span>
          </h3>
          <PointsGrid items={frontEnd} />
        </div>

        <div data-reveal className="mt-[clamp(48px,5vw,72px)]">
          <h3 className="m-0 text-[26px] font-semibold tracking-[-0.01em]">
            The back end: <span className="text-brand">Shopify or Medusa, whichever suits you</span>
          </h3>

          {/* Mobile: one card per platform */}
          <div className="mt-6 flex flex-col gap-4 md:hidden">
            {(["shopify", "medusa"] as const).map((key) => (
              <div key={key} className="overflow-hidden rounded-[3px] border border-ink/15 bg-white">
                <div className="bg-pine px-5 py-4 text-[20px] font-semibold text-white">
                  {key === "shopify" ? "Shopify" : "Medusa"}
                </div>
                <dl className="m-0">
                  {backEnd.map((row) => (
                    <div key={row.label} className="flex flex-col gap-1 border-t border-ink/15 px-5 py-4">
                      <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-muted">{row.label}</dt>
                      <dd className="m-0 text-[15px] leading-[1.5] text-ink-body">{row[key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Tablet / desktop: side-by-side table */}
          <div className="mt-6 hidden overflow-hidden rounded-[3px] border border-ink/15 bg-white md:block">
            <table className="w-full border-collapse text-left text-[15px] leading-[1.5]">
              <thead>
                <tr className="bg-pine text-white">
                  <th className="w-[20%] p-5 font-normal" />
                  <th className="p-5 text-[20px] font-semibold">Shopify</th>
                  <th className="p-5 text-[20px] font-semibold">Medusa</th>
                </tr>
              </thead>
              <tbody>
                {backEnd.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-t border-ink/15 p-5 align-top text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-muted"
                    >
                      {row.label}
                    </th>
                    <td className="border-t border-ink/15 p-5 align-top text-ink-body">{row.shopify}</td>
                    <td className="border-t border-ink/15 p-5 align-top text-ink-body">{row.medusa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="m-0 mt-5 text-[16px] leading-[1.5] text-ink-body">
            Not sure which is right for you? I&apos;ll recommend one in your{" "}
            <ContactButton
              preset="Website review for my business"
              className="font-semibold text-brand underline-offset-4 hover:underline"
            >
              free store review
            </ContactButton>
            , based on how your business works.
          </p>
        </div>
      </FeatureSection>

      <SplitSection
        eyebrow="SEO"
        title="Get found by customers who are ready to buy"
        intro="A beautiful store only works if people can find it. My SEO packages combine smart automation with hands-on expertise, so you get consistent, ongoing work at a price that makes sense for a growing business."
      >
        <NumberedList items={seo} />
      </SplitSection>

      <SplitSection
        dark
        eyebrow="CRO"
        title="Turn more visitors into customers"
        intro="More traffic is great, but selling more to the visitors you already have is often the quickest win. Conversion rate optimisation (CRO) means finding what stops people buying, fixing it, and measuring the results."
        after={
          <blockquote
            data-reveal
            className="m-0 mt-[clamp(48px,6vw,88px)] border-t border-white/15 pt-[clamp(40px,5vw,64px)] text-center"
          >
            <p className="m-0 mx-auto max-w-[26ch] text-pretty font-sans text-[clamp(28px,3.2vw,44px)] font-semibold leading-[1.15] tracking-[-0.015em]">
              <span className="text-brand-bright">&ldquo;</span>Small, steady improvements every month
              add up to a store that sells noticeably more.
              <span className="text-brand-bright">&rdquo;</span>
            </p>
          </blockquote>
        }
      >
        <NumberedList items={cro} dark />
      </SplitSection>

      <SplitSection
        eyebrow="AI integrations"
        title="Practical AI that helps you sell, not hype"
        intro="AI can make a real difference to an online store when it's used in the right places. I build it directly into your store, and only where it earns its place."
        aside={
          <Callout>
            Every AI feature is tested like any other change: if it doesn&apos;t help you sell more or
            save time, it doesn&apos;t stay.
          </Callout>
        }
      >
        <NumberedList items={ai} />
      </SplitSection>

      <StepsSection title="Simple, from first chat to ongoing growth" items={steps} />

      <PricingSection
        title="Affordable, clear pricing"
        intro="Big-agency results without big-agency prices. Every project is quoted clearly up front, with no surprises."
        rows={pricing}
        note="Discounted builds are available when you join an SEO or SEO + CRO plan."
        ctaTitle="Ready to sell more online?"
        ctaText="Book your free store review. I'll show you exactly where your store could be faster, easier to find and better at converting, with no obligation. Based in Exeter and happy to meet in person across the South West, or online anywhere in the UK."
        ctaLabel="Get your free store review"
        preset="Website review for my business"
      />
    </>
  );
}
