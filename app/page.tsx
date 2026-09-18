import AboutBlock from "@/components/AboutBlock";
import ContactFooter from "@/components/ContactFooter";
import ExpectationsBand from "@/components/ExpectationsBand";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import SiteNav from "@/components/SiteNav";
import Testimonials from "@/components/Testimonials";
import WaysToWork from "@/components/WaysToWork";
import WorkCarousel from "@/components/WorkCarousel";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Services />
        <ExpectationsBand />
        <WorkCarousel />
        <AboutBlock
          id="about"
          heading="A bit about me"
          paragraphs={[
            "I'm Tim. I build websites for a living and I've been doing it long enough to know that the hard part is rarely the code — it's working out what a business actually wants to say.",
            "So we start with a conversation, not a questionnaire. I'll ask about your customers, your busiest month, the jobs you wish you got more of. Then I build the smallest thing that gets you those.",
          ]}
          linkLabel="Let's connect"
          imageLabel="Portrait of Tim"
          imageSrc="/about-1.jpg"
          imageAlt="Tim Brown"
          imageSide="left"
          sectionClassName="py-12 lg:pt-[60px] lg:pb-[104px]"
        />
        <AboutBlock
          heading="Who do I work with?"
          paragraphs={[
            "I work with small businesses across the UK that have big plans and not much time — a builder in Exeter, a clinic in Plymouth, an online shop shipping nationwide. What you share is ambition, and a to-do list that keeps getting longer.",
            "Think of me as your tech, web and marketing department, minus the office space, the salaries and the Christmas party bill. I learn how your business runs, then look after the lot: website, hosting, SEO, and the AI tools and automations that quietly save you hours every week - you won't be handed to a junior or lost in a ticket system.",
          ]}
          linkLabel="Start a project"
          imageLabel="Studio, desk or process shot"
          imageSrc="/about-2.jpg"
          imageAlt="Tim Brown at work"
          imageSide="right"
          sectionClassName="py-16 lg:pb-[116px] lg:pt-[24px]"
        />
        <WaysToWork />
        <Testimonials />
      </main>
      <ContactFooter />
      <ScrollReveal />
    </>
  );
}
