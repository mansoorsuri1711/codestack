import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/features/organic-position-tracker",
        destination: "/features/organic-position-checker",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/dashboard/:path*",
        destination: "/features",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/og-image.jpg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, immutable" },
          { key: "Content-Type", value: "image/jpeg" },
        ],
      },
      {
        source: "/twitter-card.jpg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, immutable" },
          { key: "Content-Type", value: "image/jpeg" },
        ],
      },
    ];
  },
};

export default nextConfig;
