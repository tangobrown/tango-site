/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/ecommerce", destination: "/ecommerce-websites", permanent: true },
      { source: "/websites-for-trades", destination: "/service-websites", permanent: true },
    ];
  },
};

export default nextConfig;
