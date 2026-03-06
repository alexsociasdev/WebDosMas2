import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    devtoolSegmentExplorer: false
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
