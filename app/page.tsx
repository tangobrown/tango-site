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
import WhoIWorkWith from "@/components/WhoIWorkWith";
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
            "Hi, I'm Tim. I've been designing websites and running marketing since 2010, long enough to see plenty of algorithm changes and tech shifts come and go. Now it's AI, and I'm excited about how it can help small businesses automate the day-to-day and free up time for the work that matters. I'm also embracing it for ongoing SEO services to make things more cost-effective for my customers.",
            "A Kiwi by birth, I now live in Devon with my wife and son. When I'm not working, you'll find me watching rugby, cricket, American football or golf, or out exploring the South West countryside.",
          ]}
          linkLabel="Let's connect"
          imageLabel="Portrait of Tim"
          imageSrc="/about-1.jpg"
          imageAlt="Tim Brown"
          imageSide="left"
          sectionClassName="py-12 lg:pt-[60px] lg:pb-[104px]"
        />
        <WhoIWorkWith />
        <WaysToWork />
        <Testimonials />
      </main>
      <ContactFooter />
      <ScrollReveal />
    </>
  );
}
