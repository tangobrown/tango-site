/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 85 for the project photos, 90 for higher-detail images.
    qualities: [75, 85, 90],
  },
  async redirects() {
    // The site is a single page: old sub-page URLs go to the matching section.
    const toSection = (sources, section) =>
      sources.map((source) => ({ source, destination: `/#${section}`, permanent: false }));
    return [
      ...toSection(["/about"], "about-me"),
      ...toSection(
        [
          "/expertise",
          "/expertise/:path*",
          "/ecommerce",
          "/ecommerce-websites",
          "/websites-for-trades",
          "/service-websites",
        ],
        "make",
      ),
      // One segment only, so images under /public/work/… aren't redirected.
      ...toSection(["/work", "/work/:slug"], "work"),
      ...toSection(["/contact"], "contact"),
    ];
  },
};

export default nextConfig;
