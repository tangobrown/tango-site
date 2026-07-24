import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WorkCarousel from "@/components/WorkCarousel";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <About />
      <WorkCarousel />
      <CtaBand />
      <Footer />
    </>
  );
}
