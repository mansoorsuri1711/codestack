import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthShell from "@/components/AuthShell";
import RegisterForm from "@/components/RegisterForm";
import { auth } from "@/auth";
import {
  absoluteUrl,
  pageOpenGraph,
  pageTwitter,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Register | Create a CodeStack Account",
  description:
    "Create a CodeStack account to access SEO, keyword research, content, and web services. Official CodeStack registration for clients in Pakistan and worldwide.",
  keywords: [
    "CodeStack register",
    "Code Stack sign up",
    "create CodeStack account",
    "register codestackintl.com",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: absoluteUrl("/register") },
  openGraph: pageOpenGraph({
    url: absoluteUrl("/register"),
    title: "Register · CodeStack",
    description: "Create your CodeStack account.",
  }),
  twitter: pageTwitter({
    title: "Register · CodeStack",
    description: "Create your CodeStack account.",
  }),
};

function safeCallbackPath(raw: string | undefined) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return null;
  return raw;
}

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }

  const params = await searchParams;
  const callback = safeCallbackPath(params.callbackUrl);
  const loginHref = callback
    ? `/login?callbackUrl=${encodeURIComponent(callback)}`
    : "/login";

  return (
    <AuthShell
      title="Sign up to CodeStack"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href={loginHref}
            className="font-medium text-accent hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  );
}
