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
            "Hi, I'm Tim. I've been designing websites and running marketing since 2010, long enough to see plenty of algorithm changes and tech shifts come and go. Now it's AI, and I'm excited about how it can help small businesses automate the day-to-day and free up time for the work that matters. I'm also embracing for ongoing SEO services to make things more cost-effective for my customers.",
            "A Kiwi by birth, I now live in Devon with my wife and son. When I'm not working, you'll find me watching rugby, cricket, American football or golf, or out exploring the South West countryside.",
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
            "I work with small businesses across the UK that have big plans and not much time. You might be a builder in Exeter, a clinic in Plymouth, an online shop shipping nationwide. What you share is ambition, and a to-do list that keeps getting longer.",
            "Think of me as your tech, web and marketing department, minus the office space, the salaries and the Christmas party bill. I learn how your business runs, then look after the lot: website, hosting, SEO, and the AI tools and automations that quietly save you hours every week. You'll deal with me and you won't be handed to a junior or lost in a ticket system.",
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
