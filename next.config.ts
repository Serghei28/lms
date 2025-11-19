import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "utfs.io",
      "cdn.utfs.io"
    ]
  },

  // 🚀 Отключаем ошибки ESLint при деплое
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 🚀 Отключаем ошибки TypeScript при деплое
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
