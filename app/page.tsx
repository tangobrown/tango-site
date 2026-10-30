import AboutMe from "@/components/AboutMe";
import Approach from "@/components/Approach";
import Build from "@/components/Build";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Approach />
        <Work />
        <Build />
        <AboutMe />
        <Principles />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
