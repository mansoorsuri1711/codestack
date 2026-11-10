import { productFeatures } from "@/lib/features";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/seo";

export type PageSitemapEntry = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

/** Static marketing + legal pages (service detail pages added from `services`). */
export const pageSitemapEntries: PageSitemapEntry[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  { path: "/features", priority: 0.9, changeFrequency: "monthly" },
  ...productFeatures.map((feature) => ({
    path: `/features/${feature.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  })),
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/process", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/seo-company-gilgit-baltistan",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  { path: "/seo-2026", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refund", priority: 0.3, changeFrequency: "yearly" },
  { path: "/service-policy", priority: 0.3, changeFrequency: "yearly" },
];

/** Page URL → images that belong on / represent that page (Google image sitemap). */
export type ImageSitemapEntry = {
  pagePath: string;
  images: { loc: string; title?: string }[];
};

function pageFeatureImage(pagePath: string, title: string) {
  const ogPath = pagePath ? `${pagePath}/opengraph-image` : "/opengraph-image";
  return {
    loc: `${SITE_URL}${ogPath}`,
    title,
  };
}

export const imageSitemapEntries: ImageSitemapEntry[] = [
  {
    pagePath: "",
    images: [
      {
        loc: `${SITE_URL}/brand/code-stack.webp`,
        title: "CodeStack logo",
      },
      {
        loc: `${SITE_URL}/brand/code-stack-icon-512.webp`,
        title: "CodeStack app icon",
      },
      {
        loc: `${SITE_URL}/og-image.jpg`,
        title: "CodeStack Open Graph image",
      },
      {
        loc: `${SITE_URL}/og-image-square.jpg`,
        title: "CodeStack square social image",
      },
      {
        loc: `${SITE_URL}/twitter-card.jpg`,
        title: "CodeStack Twitter / X card",
      },
      {
        loc: `${SITE_URL}/apple-icon.png`,
        title: "CodeStack apple touch icon",
      },
    ],
  },
  {
    pagePath: "/about",
    images: [
      pageFeatureImage("/about", "About CodeStack"),
      {
        loc: `${SITE_URL}/mansoor-khan.webp`,
        title: "Mansoor Khan — CEO of CodeStack",
      },
    ],
  },
  {
    pagePath: "/services",
    images: [pageFeatureImage("/services", "CodeStack services")],
  },
  ...services.map((service) => ({
    pagePath: `/services/${service.slug}`,
    images: [
      pageFeatureImage(
        `/services/${service.slug}`,
        `CodeStack — ${service.title}`,
      ),
    ],
  })),
  {
    pagePath: "/features",
    images: [pageFeatureImage("/features", "CodeStack features")],
  },
  ...productFeatures.map((feature) => ({
    pagePath: `/features/${feature.slug}`,
    images: [
      pageFeatureImage(
        `/features/${feature.slug}`,
        `CodeStack — ${feature.title}`,
      ),
    ],
  })),
  {
    pagePath: "/pricing",
    images: [pageFeatureImage("/pricing", "CodeStack pricing")],
  },
  {
    pagePath: "/process",
    images: [pageFeatureImage("/process", "CodeStack process")],
  },
  {
    pagePath: "/seo-company-gilgit-baltistan",
    images: [
      pageFeatureImage(
        "/seo-company-gilgit-baltistan",
        "Best SEO Company in Gilgit-Baltistan — CodeStack",
      ),
    ],
  },
  {
    pagePath: "/privacy",
    images: [
      {
        loc: `${SITE_URL}/brand/code-stack.webp`,
        title: "CodeStack privacy policy",
      },
    ],
  },
  {
    pagePath: "/terms",
    images: [
      {
        loc: `${SITE_URL}/brand/code-stack.webp`,
        title: "CodeStack terms of service",
      },
    ],
  },
];

export function absolutePageUrl(path: string) {
  return path ? `${SITE_URL}${path}` : SITE_URL;
}

export function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
