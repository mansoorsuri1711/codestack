import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "CodeStack",
    short_name: "CodeStack",
    description:
      "CodeStack — Grow Your Web Ranking | Pakistan & Beyond. SEO, websites, content, and backlinks.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#010409",
    theme_color: "#010409",
    categories: ["business", "productivity"],
    lang: "en-PK",
    icons: [
      {
        src: "/brand/code-stack-icon-192.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/brand/code-stack-icon-512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "any",
      },
      {
        src: "/brand/code-stack-icon-512.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable",
      },
    ],
  };
}
