import AboutBlock from "@/components/AboutBlock";
import ContactFooter from "@/components/ContactFooter";
import ExpectationsBand from "@/components/ExpectationsBand";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
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
          sectionClassName="lg:py-[104px]"
        />
        <AboutBlock
          heading="How working together goes"
          paragraphs={[
            "A call, a fixed price, and a date. You'll see the design before anything is built, and you'll see the site before anyone else does. Most projects take three to five weeks.",
            "Afterwards I'm still here — for the small fixes, the new page, the thing that broke on a Sunday. Freelance doesn't have to mean gone.",
          ]}
          linkLabel="Start a project"
          imageLabel="Studio, desk or process shot"
          imageSrc="/about-2.jpg"
          imageAlt="Tim Brown at work"
          imageSide="right"
          sectionClassName="lg:pb-[116px] lg:pt-[24px]"
        />
        <WaysToWork />
        <Testimonials />
      </main>
      <ContactFooter />
    </>
  );
}
