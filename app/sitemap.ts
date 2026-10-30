import type { MetadataRoute } from "next";

const SITE_URL = "https://timbrown.co";

// The site is a single page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL }];
}
