import type { Metadata } from "next";
import Image from "next/image";
import {
  CtaBand,
  FeatureCards,
  HeaderActions,
  PhotoSplit,
  StepsSection,
  WorkSection,
  type Feature,
  type Item,
} from "@/components/landing";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Websites for Service Businesses",
  description:
    "Fast, professional websites for plumbers, builders and local service businesses that bring in more calls and quote requests. Local SEO, hosting and updates included. Based in Exeter.",
};

const features: Feature[] = [
  {
    icon: "build",
    title: "Build",
    body: "A fast, professional website that shows off your work and makes it easy to get in touch.",
  },
  {
    icon: "local",
    title: "Get found locally",
    body: "Local SEO and Google Business Profile support, so nearby customers find you first.",
  },
  {
    icon: "calls",
    title: "More enquiries",
    body: "Click-to-call, quick quote forms and AI chat that turn visitors into jobs.",
  },
  {
    icon: "care",
    title: "Looked after",
    body: "Hosting, updates and changes all handled. Just send me a message.",
  },
];

const steps: Item[] = [
  { title: "Free website check", body: "I show you what's holding your current site (or online presence) back." },
  { title: "Plan and build", body: "We agree your pages and services, then I write and build it. You just approve it." },
  { title: "Launch", body: "Your site goes live with your Google profile and call tracking set up." },
  { title: "Keep growing", body: "I host it, make your updates and keep bringing in more local customers." },
];

export default function ServiceBusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service businesses"
        title="Websites that get your phone ringing"
        intro="Fast, professional websites for trades and local service businesses. I build it, host it and help you get found, so you can focus on the work."
        visual={
          <Image
            src="/work/tablet/w1.png"
            alt="The Devon Joinery website on a tablet"
            width={1196}
            height={872}
            priority
            sizes="(min-width: 1024px) 680px, 100vw"
            className="mx-auto h-auto w-full max-w-[680px] lg:mr-0"
          />
        }
      >
        <HeaderActions label="Get a free website check" preset="Website review for my business" />
      </PageHeader>

      <FeatureCards eyebrow="What I do" title="Your website, sorted" items={features} />

      <PhotoSplit
        eyebrow="Why it works"
        title="You're busy on site. I'll handle the website."
        intro="No page builders, plugins or dashboards to learn. Just a modern, lightweight site that loads fast and quietly brings in work."
        points={[
          "Lightning fast, even on a patchy mobile signal",
          "Secure by design, with nothing for hackers to target",
          "Your number always one tap away on mobile",
          "A real person to talk to, based in Exeter",
        ]}
        image="/hero.jpg"
        imageAlt="Tim Brown sitting on steps in front of a painted mural"
        focus="66% 50%"
      />

      <StepsSection title="Simple from start to finish" items={steps} />

      <WorkSection title="Websites that win local work" slugs={["devon-joinery", "vowles-carpentry"]} />

      <Testimonials className="pt-[clamp(52px,6.5vw,88px)]" />

      <CtaBand
        title="Ready for more calls and quote requests?"
        text="Book your free website check and I'll show you what would bring in more work, with no obligation."
        label="Get your free website check"
        preset="Website review for my business"
      />
    </>
  );
}
