import { ContactPanelProvider } from "@/components/ContactPanel";
import ExpectationsBand from "@/components/ExpectationsBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Services from "@/components/Services";
import SiteNav from "@/components/SiteNav";
import SplitBlock from "@/components/SplitBlock";
import Testimonials from "@/components/Testimonials";
import WorkGrid from "@/components/WorkGrid";

export default function Home() {
  return (
    <ContactPanelProvider>
      <SiteNav />
      <main>
        <Hero />
        <ExpectationsBand />
        <Services />
        <SplitBlock
          id="approach"
          title="Most small businesses don't need an agency. They need one person who takes real ownership."
          paragraphs={[
            "That's where I come in. I'll be your digital/website department who will take your success personally.",
            "I'll work my a** off each month to ensure your website looks good, outperforms your competition and attracts new leads or sales for your business. You'll be dealing with me (not an account manager, or agency junior) and you won't pay agency fees that put off small businesses getting help with their marketing efforts.",
          ]}
          buttonLabel="Let's connect"
          imageSrc="/about-2.jpg"
          imageAlt="Tim Brown working with clients at a laptop"
          imageSide="right"
          className="py-[clamp(28px,3.5vw,50px)]"
        />
        <SplitBlock
          id="about"
          title="Hi, I'm Tim"
          paragraphs={[
            "Hi, I'm Tim. I've been designing websites and running marketing since 2010, long enough to see plenty of algorithm changes and tech shifts come and go. Now it's AI, and I'm excited about how it can help small businesses automate the day-to-day and free up time for the work that matters. I'm also embracing it for ongoing SEO services to make things more cost-effective for my customers.",
            "A Kiwi by birth, I now live in Devon with my wife and son. When I'm not working, you'll find me watching rugby, cricket, American football or golf, or out exploring the South West countryside.",
          ]}
          buttonLabel="Start a project"
          imageSrc="/about-1.jpg"
          imageAlt="Portrait of Tim Brown"
          imageSide="left"
          className="pb-[clamp(52px,6.5vw,88px)] pt-[clamp(28px,3.5vw,50px)]"
        />
        <WorkGrid />
        <Testimonials />
      </main>
      <Footer />
      <ScrollReveal />
    </ContactPanelProvider>
  );
}
