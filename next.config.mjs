/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The site is one page; retired sub-page URLs point back home.
    return ["/ecommerce", "/ecommerce-websites", "/websites-for-trades", "/service-websites"].map(
      (source) => ({ source, destination: "/", permanent: true }),
    );
  },
};

export default nextConfig;
