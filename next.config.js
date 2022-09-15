/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.mcdonalds.com",
      "firebasestorage.googleapis.com",
      "s7d1.scene7.com",
    ],
  },
};

module.exports = nextConfig;
