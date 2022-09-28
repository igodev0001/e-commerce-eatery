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
  env: {
    MAP_KEY: process.env.NEXT_PUBLIC_MAP_KEY,
  },
};

module.exports = nextConfig;
