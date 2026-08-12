import About from "@/components/About";
import CaseCarousel from "@/components/CaseCarousel";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import SectorTicker from "@/components/SectorTicker";
import Services from "@/components/Services";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SectorTicker />
        <Services />
        <Process />
        <CaseCarousel />
        <Comparison />
        <About />
        <Faq />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
