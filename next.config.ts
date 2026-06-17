import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray parent lockfile doesn't confuse Turbopack.
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
