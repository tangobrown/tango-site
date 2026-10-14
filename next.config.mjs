/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 85 is used for the photo-backed project boxes.
    qualities: [75, 85],
  },
  async redirects() {
    // Old sub-page URLs point at their expertise pages.
    return [
      ...["/ecommerce", "/ecommerce-websites"].map((source) => ({
        source,
        destination: "/expertise/ecommerce",
        permanent: true,
      })),
      ...["/websites-for-trades", "/service-websites"].map((source) => ({
        source,
        destination: "/expertise/service-businesses",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
