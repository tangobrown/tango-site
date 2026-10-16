import type { Metadata } from "next";
import { AboutBlock } from "@/components/AboutBlocks";
import HowIWork from "@/components/HowIWork";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tim Brown has been designing websites and running marketing since 2010. Based in Devon, working with small businesses across the UK.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="One person who takes real ownership"
        intro="Designing websites and running marketing since 2010. Based in Exeter, working with businesses all over the UK."
      />
      <AboutBlock title="Who am I?" className="pb-[clamp(28px,3.5vw,50px)] pt-[clamp(52px,6.5vw,88px)]" />
      <HowIWork className="pb-[clamp(52px,6.5vw,88px)] pt-[clamp(28px,3.5vw,50px)]" />
      <Testimonials />
    </>
  );
}
