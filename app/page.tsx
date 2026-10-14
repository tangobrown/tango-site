import { ApproachBlock } from "@/components/AboutBlocks";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhatIDo from "@/components/WhatIDo";
import WorkPreview from "@/components/WorkPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <ApproachBlock className="py-[clamp(52px,6.5vw,88px)]" />
      <WorkPreview />
      <Testimonials />
    </>
  );
}
