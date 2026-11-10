"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";
import { plans } from "@/lib/pricing";

export default function PricingGrid() {
  const plan = plans[0];

  if (!plan) return null;

  return (
    <div className="relative overflow-hidden px-6 py-14 md:px-8 md:py-20">
      <div
        aria-hidden
        className="theme-ambient pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(45,212,191,0.12),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-4xl">
        <FadeIn delay={0}>
          <article className="relative overflow-hidden rounded-2xl border border-accent/40 bg-bg-soft p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1 md:p-10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
            />

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between border-b border-line pb-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  All-in-One SEO Suite
                </div>
                <h2 className="font-display text-3xl font-bold text-snow md:text-4xl">
                  {plan.name}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {plan.tagline}
                </p>
              </div>

              <div className="flex flex-col md:items-end">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-snow md:text-5xl">
                    ${plan.priceUsd}
                  </span>
                  <span className="text-sm font-medium text-ink-muted">USD</span>
                </div>
                <span className="mt-1 text-xs text-ink-muted">Contact to get started</span>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-snug text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between rounded-xl border border-line bg-bg/50 p-6">
                <div>
                  <h3 className="text-base font-semibold text-snow">
                    Talk to CodeStack
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                    Tell us your niche and goals — we&apos;ll map the right SEO and web package for you.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-[#010409] hover:bg-accent-deep"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </div>
  );
}
