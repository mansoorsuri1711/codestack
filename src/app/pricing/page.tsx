import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PageShell from "@/components/PageShell";
import PricingGrid from "@/components/PricingGrid";
import { plans } from "@/lib/pricing";
import {
  SITE_URL,
  absoluteUrl,
  webPageJsonLd,
  pageOpenGraph,
  pageTwitter,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing | All-in-One SEO Dashboard Suite",
  description:
    "CodeStack Pro: Complete access to the full SEO dashboard, keyword research, live backlinks tracking, site audits, rank tracking, and AI search tools for $10 USD.",
  alternates: { canonical: absoluteUrl("/pricing") },
  openGraph: pageOpenGraph({
    url: absoluteUrl("/pricing"),
    title: "CodeStack Pricing — All-in-One SEO Suite",
    description:
      "Unlock the entire CodeStack SEO Dashboard, Keyword Research, Backlinks, Rank Tracking & AI tools for $10 USD.",
  }),
  twitter: pageTwitter({
    title: "CodeStack Pricing — All-in-One SEO Suite",
    description: "Unlock the entire CodeStack SEO Dashboard, Keyword Research, Backlinks, Rank Tracking & AI tools for $10 USD.",
  }),
};

export default function PricingPage() {
  const plan = plans[0];

  return (
    <PageShell>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/pricing",
            title: "CodeStack Pricing",
            description:
              "All-in-one SEO dashboard package: keyword research, live backlinks, rank tracking, site audit, and AI search tools for $10 USD.",
          }),
          {
            "@context": "https://schema.org",
            "@type": "OfferCatalog",
            name: "CodeStack Packages",
            itemListElement: [
              {
                "@type": "Offer",
                name: plan.name,
                description: plan.tagline,
                category: plan.topic,
                url: absoluteUrl("/pricing"),
                price: plan.priceUsd,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                seller: { "@id": `${SITE_URL}/#organization` },
              },
            ],
          },
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        breadcrumbs={[{ label: "Pricing" }]}
        title="One package. Complete SEO command center."
        lead={
          <>
            Get complete access to SEO strategy, keyword research, backlinks,
            site audits, rank tracking, and content support for just $10 USD.
            Need a custom package?{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Contact us
            </Link>
            .
          </>
        }
      />
      <PricingGrid />
    </PageShell>
  );
}
