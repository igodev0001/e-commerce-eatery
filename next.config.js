/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.mcdonalds.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
