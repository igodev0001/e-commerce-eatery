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
    MAP_KEY: "AIzaSyCnT10AG5i6N-GyVzXrWEWwrcHSRE27D8Q",
    DATABASE_URL:
      "postgresql://postgres:MlPYKbpaStI9WCHJ@db.bccwukwdftwnehyhxsny.supabase.co:5432/postgres",
  },
};

module.exports = nextConfig;
