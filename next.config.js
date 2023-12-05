/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "placehold.it",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
