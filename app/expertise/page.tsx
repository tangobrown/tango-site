import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import WhatIDo from "@/components/WhatIDo";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Website builds, search and conversion optimisation, and AI & automation for UK service businesses and online stores.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title="What I do, and who I do it for"
        intro="Fast, good-looking websites that win you work, kept climbing in search and lightened with a little AI where it helps. Choose the one that fits your business."
      />
      <WhatIDo />
    </>
  );
}
