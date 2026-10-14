import { ApproachBlock } from "@/components/AboutBlocks";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatIDo from "@/components/WhatIDo";
import WorkPreview from "@/components/WorkPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Services />
      <ApproachBlock className="pb-[clamp(52px,6.5vw,88px)] pt-[clamp(20px,2vw,28px)]" />
      <WorkPreview />
      <Testimonials />
    </>
  );
}
