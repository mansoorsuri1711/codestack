import type { Metadata } from "next";
import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import LoginForm from "@/components/LoginForm";
import {
  absoluteUrl,
  pageOpenGraph,
  pageTwitter,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Login | Sign in to CodeStack",
  description:
    "Sign in to your CodeStack account to manage projects, profile, and SEO services. Official CodeStack login for clients in Pakistan and worldwide.",
  keywords: [
    "CodeStack login",
    "Code Stack sign in",
    "CodeStack account",
    "login codestackintl.com",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: absoluteUrl("/login") },
  openGraph: pageOpenGraph({
    url: absoluteUrl("/login"),
    title: "Login · CodeStack",
    description: "Sign in to your CodeStack account.",
  }),
  twitter: pageTwitter({
    title: "Login · CodeStack",
    description: "Sign in to your CodeStack account.",
  }),
};

function safeCallbackPath(raw: string | undefined) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return null;
  return raw;
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const params = await searchParams;
  const callback = safeCallbackPath(params.callbackUrl);
  const registerHref = callback
    ? `/register?callbackUrl=${encodeURIComponent(callback)}`
    : "/register";

  return (
    <AuthShell
      title="Sign in to CodeStack"
      footer={
        <>
          New to CodeStack?{" "}
          <Link
            href={registerHref}
            className="font-medium text-accent hover:underline"
          >
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
