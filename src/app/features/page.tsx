import type { Metadata } from "next";
import Link from "next/link";
import FeaturesCatalog from "@/components/FeaturesCatalog";
import JsonLd from "@/components/JsonLd";
import PageCTA from "@/components/PageCTA";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import { productFeatures } from "@/lib/features";
import {
  SITE_URL,
  absoluteUrl,
  webPageJsonLd,
  pageOpenGraph,
  pageTwitter,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Features · CodeStack SEO Tools",
  description:
    "Explore CodeStack SEO capabilities — keyword research, domain overview, backlinks, organic competitors, content gap, GSC insights, rank tracking, and site audit.",
  keywords: [
    "CodeStack features",
    "SEO tools",
    "keyword research tool",
    "domain overview",
    "backlink checker",
    "rank tracking",
  ],
  alternates: { canonical: absoluteUrl("/features") },
  openGraph: pageOpenGraph({
    url: absoluteUrl("/features"),
    title: "CodeStack Features — SEO Tools",
    description:
      "Keyword research, domain overview, backlinks, organic search, competitive analysis, and site tools.",
  }),
  twitter: pageTwitter({
    title: "CodeStack Features — SEO Tools",
    description:
      "Keyword research, domain overview, backlinks, organic search, competitive analysis, and site tools.",
  }),
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/features",
            title: "CodeStack Features — SEO Tools",
            description:
              "Explore CodeStack SEO tools including keyword research, domain overview, backlinks, organic competitors, and site audit.",
            type: "CollectionPage",
          }),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "CodeStack SEO features",
            itemListElement: productFeatures.map((feature, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: feature.title,
              description: feature.summary,
              url: `${SITE_URL}/features/${feature.slug}`,
              item: {
                "@type": "SoftwareApplication",
                name: feature.title,
                applicationCategory: "BusinessApplication",
                description: feature.summary,
                url: `${SITE_URL}/features/${feature.slug}`,
                offers: {
                  "@type": "Offer",
                  url: `${SITE_URL}/pricing`,
                },
              },
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Features"
        title="SEO tools and capabilities from CodeStack."
        lead="Keyword research, domain overview, backlinks, organic search, competitive gaps, GSC, and site audit — clear capabilities you can hire us to deliver."
        breadcrumbs={[{ label: "Features" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-[#010409] hover:bg-accent-deep"
          >
            Contact us
          </Link>
          <Link
            href="/pricing"
            className="inline-flex rounded-md border border-line px-5 py-2.5 text-sm font-medium text-snow hover:bg-bg-soft"
          >
            See pricing
          </Link>
        </div>
      </PageHero>

      <FeaturesCatalog />

      <PageCTA
        primary={{ href: "/contact", label: "Contact us" }}
        secondary={{ href: "/pricing", label: "CodeStack Pro" }}
      >
        Ready to put these capabilities to work on your projects?
      </PageCTA>
    </PageShell>
  );
}
