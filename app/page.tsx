import AboutMe from "@/components/AboutMe";
import Approach from "@/components/Approach";
import Build from "@/components/Build";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Work />
        <Build />
        <AboutMe />
        <Testimonial />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
