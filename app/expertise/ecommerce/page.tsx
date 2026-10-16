import type { Metadata } from "next";
import HeroAnimation from "@/components/HeroAnimation";
import {
  FeatureCards,
  HeaderActions,
  PhotoSplit,
  PricingSection,
  StepsSection,
  WorkSection,
  type Feature,
  type Item,
  type PriceRow,
} from "@/components/landing";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "E-commerce Websites",
  description:
    "Fast, custom e-commerce stores on Shopify or Medusa, then SEO, CRO and AI to help them get found and convert. Based in Exeter, working UK-wide.",
};

const features: Feature[] = [
  {
    icon: "store",
    title: "Build",
    body: "A custom store designed around your products and customers, not squeezed into a template.",
  },
  {
    icon: "search",
    title: "Get found",
    body: "Technical and content SEO that helps the right customers find you on Google and in AI search.",
  },
  {
    icon: "convert",
    title: "Convert",
    body: "Monthly testing and improvements that turn more of your visitors into buyers.",
  },
  {
    icon: "ai",
    title: "Practical AI",
    body: "Smarter search, product recommendations and content, only where it helps you sell.",
  },
];

const platforms = [
  { name: "Shopify", line: "A familiar all-in-one admin and Shopify's trusted checkout." },
  { name: "Medusa", line: "Open source, fully custom and yours outright, with no platform fees." },
];

const steps: Item[] = [
  { title: "Free store review", body: "I check your store's speed, search visibility and conversion, and show you what I'd change." },
  { title: "Plan and build", body: "We pick the right platform, then I build it and migrate your products without losing rankings." },
  { title: "Launch and host", body: "Your store goes live on fast, secure hosting that I look after." },
  { title: "Grow every month", body: "Ongoing SEO, conversion improvements and a clear monthly report." },
];

const pricing: PriceRow[] = [
  { service: "Store review", price: "Free", was: "usually £395" },
  { service: "Custom store build", price: "From £2,800" },
  { service: "Hosting and care", price: "From £80/month" },
  { service: "SEO, hosting included", price: "From £290/month" },
  { service: "SEO + CRO, hosting included", price: "From £390/month" },
];

export default function EcommercePage() {
  return (
    <>
      <PageHeader
        eyebrow="E-commerce stores"
        title="Fast, AI-powered stores that get found and convert"
        intro="Custom stores on Shopify or Medusa for ambitious UK brands. I build them, host them and keep improving them, so they rank higher and sell more."
        visual={
          <HeroAnimation
            accent="#14A85A"
            className="mx-auto -my-[8%] w-full max-w-[560px] lg:mr-0 lg:max-w-[600px]"
          />
        }
      >
        <HeaderActions label="Get your free store review" preset="Website review for my business" />
      </PageHeader>

      <FeatureCards eyebrow="What I do" title="One person for your whole online store" items={features} />

      <WorkSection title="Brands I've helped grow online" slugs={["ipj-london", "old-fashioned-cocktail-co"]} />

      <PhotoSplit
        eyebrow="The stack"
        title="Built the way the fastest brands do it"
        intro="Your products and orders live in a proven e-commerce platform, while the shop your customers see is custom-built for speed."
        points={[
          "Pages served instantly, which keeps shoppers moving",
          "No theme limits: every page designed around how people shop",
          "Fewer apps and less bloat",
          "SEO built in from day one",
        ]}
        image="/about-1.jpg"
        imageAlt="Tim Brown sitting on a leather sofa"
      >
        <div className="mt-4 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col gap-1.5 rounded-[3px] bg-pine p-5 text-white">
              <span className="text-[20px] font-semibold">{p.name}</span>
              <span className="text-[15px] leading-[1.45] text-white/75">{p.line}</span>
            </div>
          ))}
        </div>
      </PhotoSplit>

      <StepsSection title="Simple, from first chat to ongoing growth" items={steps} />

      <Testimonials />

      <PricingSection
        title="Affordable, clear pricing"
        intro="Big-agency results without big-agency prices. Every project is quoted clearly up front."
        rows={pricing}
        note="Discounted builds are available when you join an SEO or SEO + CRO plan."
        ctaTitle="Ready to sell more online?"
        ctaText="Book your free store review and I'll show you where your store could be faster, easier to find and better at converting."
        ctaLabel="Get your free store review"
        preset="Website review for my business"
      />
    </>
  );
}
