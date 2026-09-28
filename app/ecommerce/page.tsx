import type { Metadata } from "next";
import ArrowIcon from "@/components/ArrowIcon";
import ContactFooter from "@/components/ContactFooter";
import ScrollReveal from "@/components/ScrollReveal";
import SiteNav from "@/components/SiteNav";

const TITLE = "Fast, AI-Powered E-commerce Stores | SEO & CRO | Tim Brown";
const DESCRIPTION =
  "I build fast, custom e-commerce stores on Shopify or Medusa, then help them get found and convert with SEO, CRO and AI. Based in Exeter, working UK-wide.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION },
  twitter: { title: TITLE, description: DESCRIPTION },
};

type Item = { title: string; body: string };

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

const pricing: { service: string; price: string; was?: string }[] = [
  { service: "Store review", price: "Free", was: "usually £395" },
  { service: "Custom store build", price: "From £2,800" },
  { service: "Hosting and care", price: "From £80/month" },
  { service: "SEO, hosting included", price: "From £290/month" },
  { service: "SEO + CRO, hosting included", price: "From £390/month" },
  { service: "AI integrations", price: "Quoted per project" },
];

const h2 = "m-0 text-pretty font-bebas text-[clamp(32px,3.3vw,50px)] font-normal leading-[1.08]";
const body = "m-0 text-[17px] leading-[1.75] text-ink-soft";
const eyebrow = "text-[12px] font-medium uppercase tracking-[0.14em] text-rust";
const primaryBtn =
  "inline-flex items-center gap-[10px] bg-rust px-[26px] py-[14px] text-[14px] font-medium uppercase tracking-[0.04em] text-white transition-colors hover:bg-rust-dark";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className={eyebrow}>{children}</span>;
}

// Numbered list used by the SEO / CRO / AI sections.
function NumberedList({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  return (
    <ol className="m-0 flex list-none flex-col p-0">
      {items.map((item, i) => (
        <li
          key={item.title}
          className={`grid grid-cols-[40px_1fr] gap-4 border-t py-6 last:pb-0 ${
            dark ? "border-hairdark" : "border-rule"
          }`}
        >
          <span className="font-bebas text-[24px] leading-none text-rust">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-2">
            <h3
              className={`m-0 font-bebas text-[24px] font-normal leading-[1.1] ${
                dark ? "text-cream-text" : "text-ink"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`m-0 text-[16px] leading-[1.7] ${
                dark ? "text-muted-dark" : "text-ink-soft"
              }`}
            >
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function EcommercePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="bg-ink-dark text-cream-text">
          <div className="mx-auto max-w-content px-5 pb-20 pt-16 lg:px-8 lg:pb-[120px] lg:pt-[190px]">
            <div className="flex max-w-[860px] flex-col gap-7">
              <Eyebrow>E-commerce</Eyebrow>
              <h1 className="m-0 text-pretty font-bebas text-[clamp(42px,5.4vw,80px)] font-normal leading-[0.98] tracking-[0.005em]">
                Fast, AI-powered e-commerce stores that get found and convert
              </h1>
              <p className="m-0 max-w-[62ch] text-[17px] leading-[1.65] text-muted-dark lg:text-[18px]">
                I help ambitious UK companies sell more online. I build custom stores on Shopify or
                Medusa, host and look after them, then keep improving how they rank and how many
                visitors turn into customers.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a href="#contact" className={primaryBtn}>
                  Get your free store review <ArrowIcon size={17} />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-[10px] border border-[#6E675E] px-[26px] py-[14px] text-[14px] uppercase tracking-[0.04em] text-cream-text transition-colors hover:border-rust hover:bg-rust hover:text-white"
                >
                  See how it works
                </a>
              </div>
              <p className="m-0 text-[14px] text-muted">
                Based in Exeter, working with e-commerce businesses across the UK.
              </p>
            </div>
          </div>
        </section>

        {/* What I do */}
        <section className="py-20 lg:py-[120px]">
          <div className="mx-auto max-w-content px-5 lg:px-8">
            <div data-reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-[8vw]">
              <div className="flex flex-col gap-4">
                <Eyebrow>What I do</Eyebrow>
                <h2 className={h2}>One person for your whole online store</h2>
              </div>
              <p className={`${body} lg:pt-9`}>
                Most e-commerce businesses juggle a developer, a hosting company, an SEO agency and
                a pile of apps, none of them talking to each other. I bring it all together. I build
                your store, host it, and then work on it every month so it keeps getting faster,
                easier to find and better at selling.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 border-l border-t border-rule bg-white sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
              {whatIDo.map((item, i) => (
                <div
                  key={item.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="flex flex-col gap-4 border-b border-r border-rule p-7 lg:p-9"
                >
                  <span className="font-bebas text-[30px] leading-none text-rust">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-bebas text-[28px] font-normal leading-[1.05]">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[16px] leading-[1.7] text-ink-soft">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The stack */}
        <section className="border-y border-rule bg-white py-20 lg:py-[120px]">
          <div className="mx-auto max-w-content px-5 lg:px-8">
            <div data-reveal className="flex max-w-[760px] flex-col gap-4">
              <Eyebrow>The stack</Eyebrow>
              <h2 className={h2}>A modern store, built the way the fastest brands do it</h2>
              <p className={body}>
                I build &ldquo;headless&rdquo; stores. Your products, orders and customers are
                managed in a proven e-commerce platform, while the shop your customers see is
                custom-built for speed. You get a familiar admin behind the scenes and a storefront
                with no template limits.
              </p>
            </div>

            {/* Front end */}
            <div data-reveal className="mt-14 lg:mt-16">
              <h3 className="m-0 font-bebas text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.1]">
                The front end: <span className="text-rust">custom Next.js + Tailwind</span>
              </h3>
              <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                {frontEnd.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2 border-t border-rule pt-6">
                    <h4 className="m-0 font-bebas text-[23px] font-normal leading-[1.1]">
                      {item.title}
                    </h4>
                    <p className="m-0 text-[16px] leading-[1.7] text-ink-soft">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Back end */}
            <div data-reveal className="mt-16 lg:mt-20">
              <h3 className="m-0 font-bebas text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.1]">
                The back end: <span className="text-rust">Shopify or Medusa, whichever suits you</span>
              </h3>
              {/* Mobile: one card per platform */}
              <div className="mt-8 flex flex-col gap-5 md:hidden">
                {(["shopify", "medusa"] as const).map((key) => (
                  <div key={key} className="border border-rule">
                    <div className="bg-ink-dark px-5 py-4 font-bebas text-[24px] tracking-[0.01em] text-cream-text">
                      {key === "shopify" ? "Shopify" : "Medusa"}
                    </div>
                    <dl className="m-0">
                      {backEnd.map((row) => (
                        <div key={row.label} className="flex flex-col gap-1 border-t border-rule bg-white px-5 py-4">
                          <dt className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted">
                            {row.label}
                          </dt>
                          <dd className="m-0 text-[15px] leading-[1.6] text-ink-soft">{row[key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>

              {/* Tablet / desktop: side-by-side table */}
              <div className="mt-8 hidden border border-rule md:block">
                <table className="w-full border-collapse text-left text-[15px] leading-[1.6]">
                  <thead>
                    <tr className="bg-ink-dark text-cream-text">
                      <th className="w-[20%] p-5 font-normal" />
                      <th className="p-5 font-bebas text-[24px] font-normal tracking-[0.01em]">
                        Shopify
                      </th>
                      <th className="p-5 font-bebas text-[24px] font-normal tracking-[0.01em]">
                        Medusa
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {backEnd.map((row, i) => (
                      <tr key={row.label} className={i % 2 ? "bg-cream" : "bg-white"}>
                        <th
                          scope="row"
                          className="border-t border-rule p-5 align-top text-[12px] font-medium uppercase tracking-[0.1em] text-muted"
                        >
                          {row.label}
                        </th>
                        <td className="border-t border-rule p-5 align-top text-ink-soft">
                          {row.shopify}
                        </td>
                        <td className="border-t border-rule p-5 align-top text-ink-soft">
                          {row.medusa}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="m-0 mt-6 text-[16px] leading-[1.7] text-ink-soft">
                Not sure which is right for you? I&apos;ll recommend one in your{" "}
                <a
                  href="#contact"
                  className="border-b border-underline-accent text-ink transition-colors hover:border-rust"
                >
                  free store review
                </a>
                , based on how your business works.
              </p>
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className="py-20 lg:py-[120px]">
          <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw] lg:px-8">
            <div data-reveal className="flex flex-col gap-4 lg:sticky lg:top-[120px] lg:self-start">
              <Eyebrow>SEO</Eyebrow>
              <h2 className={h2}>Get found by customers who are ready to buy</h2>
              <p className={body}>
                A beautiful store only works if people can find it. My SEO packages combine smart
                automation with hands-on expertise, so you get consistent, ongoing work at a price
                that makes sense for a growing business.
              </p>
            </div>
            <div data-reveal>
              <NumberedList items={seo} />
            </div>
          </div>
        </section>

        {/* CRO */}
        <section className="bg-ink-dark py-20 text-cream-text lg:py-[120px]">
          <div className="mx-auto max-w-content px-5 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw]">
              <div data-reveal className="flex flex-col gap-4 lg:sticky lg:top-[120px] lg:self-start">
                <Eyebrow>CRO</Eyebrow>
                <h2 className={h2}>Turn more visitors into customers</h2>
                <p className="m-0 text-[17px] leading-[1.75] text-muted-dark">
                  More traffic is great, but selling more to the visitors you already have is often
                  the quickest win. Conversion rate optimisation (CRO) means finding what stops
                  people buying, fixing it, and measuring the results.
                </p>
              </div>
              <div data-reveal>
                <NumberedList items={cro} dark />
              </div>
            </div>

            <blockquote
              data-reveal
              className="m-0 mt-16 border-t border-hairdark pt-12 text-center lg:mt-24 lg:pt-16"
            >
              <p className="mx-auto m-0 max-w-[24ch] text-pretty font-bebas text-[clamp(30px,3.6vw,52px)] font-normal leading-[1.05]">
                <span className="text-rust">&ldquo;</span>Small, steady improvements every month add
                up to a store that sells noticeably more.<span className="text-rust">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </section>

        {/* AI integrations */}
        <section className="py-20 lg:py-[120px]">
          <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw] lg:px-8">
            <div data-reveal className="flex flex-col gap-4 lg:sticky lg:top-[120px] lg:self-start">
              <Eyebrow>AI integrations</Eyebrow>
              <h2 className={h2}>Practical AI that helps you sell, not hype</h2>
              <p className={body}>
                AI can make a real difference to an online store when it&apos;s used in the right
                places. I build it directly into your store, and only where it earns its place.
              </p>
              <p className="m-0 mt-2 border-l-2 border-rust pl-4 text-[16px] leading-[1.7] text-ink">
                Every AI feature is tested like any other change: if it doesn&apos;t help you sell
                more or save time, it doesn&apos;t stay.
              </p>
            </div>
            <div data-reveal>
              <NumberedList items={ai} />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-y border-rule bg-white py-20 lg:py-[120px]">
          <div className="mx-auto max-w-content px-5 lg:px-8">
            <div data-reveal className="flex max-w-[760px] flex-col gap-4">
              <Eyebrow>How it works</Eyebrow>
              <h2 className={h2}>Simple, from first chat to ongoing growth</h2>
            </div>
            <ol className="m-0 mt-12 grid list-none grid-cols-1 gap-10 p-0 md:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-8">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="flex flex-col gap-4 border-t border-rule pt-6"
                >
                  <span className="font-bebas text-[34px] leading-none text-rust">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="m-0 font-bebas text-[24px] font-normal leading-[1.1]">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.7] text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing + CTA */}
        <section className="py-20 lg:py-[120px]">
          <div className="mx-auto max-w-content px-5 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-[8vw]">
              <div data-reveal className="flex flex-col gap-4">
                <Eyebrow>Pricing</Eyebrow>
                <h2 className={h2}>Affordable, clear pricing</h2>
                <p className={body}>
                  Big-agency results without big-agency prices. Every project is quoted clearly up
                  front, with no surprises.
                </p>
              </div>
              <div data-reveal>
                <div className="border border-rule bg-white">
                  {pricing.map((row, i) => (
                    <div
                      key={row.service}
                      className={`flex items-baseline justify-between gap-6 px-6 py-5 lg:px-8 ${
                        i ? "border-t border-rule" : ""
                      }`}
                    >
                      <span className="text-[16px] text-ink">{row.service}</span>
                      <span className="flex-none text-right">
                        <span className="font-bebas text-[24px] leading-none text-ink">
                          {row.price}
                        </span>
                        {row.was ? (
                          <span className="ml-2 text-[13px] text-muted line-through">{row.was}</span>
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="m-0 mt-4 text-[14px] leading-[1.6] text-muted">
                  Discounted builds are available when you join an SEO or SEO + CRO plan.
                </p>
              </div>
            </div>

            <div
              data-reveal
              className="mt-16 flex flex-col gap-8 bg-ink-dark p-8 text-cream-text lg:mt-24 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-14"
            >
              <div className="flex max-w-[640px] flex-col gap-4">
                <h2 className={h2}>Ready to sell more online?</h2>
                <p className="m-0 text-[17px] leading-[1.75] text-muted-dark">
                  Book your free store review. I&apos;ll show you exactly where your store could be
                  faster, easier to find and better at converting, with no obligation. Based in
                  Exeter and happy to meet in person across the South West, or online anywhere in
                  the UK.
                </p>
              </div>
              <a href="#contact" className={`${primaryBtn} flex-none self-start lg:self-auto`}>
                Get your free store review <ArrowIcon size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <ScrollReveal />
    </>
  );
}
