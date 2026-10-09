/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 90 is used for the full-bleed hero photo so it stays crisp.
    qualities: [75, 90],
  },
  async redirects() {
    // The site is one page; retired sub-page URLs point back home.
    return ["/ecommerce", "/ecommerce-websites", "/websites-for-trades", "/service-websites"].map(
      (source) => ({ source, destination: "/", permanent: true }),
    );
  },
};

export default nextConfig;
