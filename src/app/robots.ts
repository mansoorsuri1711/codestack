import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "LinkedInBot",
        allow: ["/", "/og-image.jpg", "/twitter-card.jpg", "/opengraph-image"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap-index.xml`,
    host: SITE_URL,
  };
}
