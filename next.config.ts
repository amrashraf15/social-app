import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*", // Ensure API routes work properly
      },
    ];
  },
};

export default nextConfig;

