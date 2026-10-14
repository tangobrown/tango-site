import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const SITE_URL = "https://timbrown.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/expertise", "/expertise/service-businesses", "/expertise/ecommerce", "/work", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
  const work = projects.map((p) => ({ url: `${SITE_URL}/work/${p.slug}` }));
  return [...pages, ...work];
}
