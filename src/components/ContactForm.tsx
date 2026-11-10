"use client";

import { FormEvent, useMemo, useState } from "react";
import { SITE_EMAIL, SITE_EMAIL_HREF } from "@/lib/seo";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Full stack project");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`CodeStack brief — ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    );
    return `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  }, [name, email, topic, message]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative space-y-5 overflow-hidden rounded-lg border border-line bg-bg-soft p-6 md:p-8"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent via-accent/40 to-transparent"
      />
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Send a brief
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Opens your email app to message{" "}
          <a href={SITE_EMAIL_HREF} className="text-snow underline-offset-2 hover:underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      </div>
      <label className="block">
        <span className="text-sm text-ink-muted">Name</span>
        <input
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-snow outline-none transition-colors focus:border-accent"
        />
      </label>
      <label className="block">
        <span className="text-sm text-ink-muted">Email</span>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-snow outline-none transition-colors focus:border-accent"
        />
      </label>
      <label className="block">
        <span className="text-sm text-ink-muted">Topic</span>
        <span className="relative mt-2 block">
          <select
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full appearance-none rounded-md border border-line bg-bg py-2.5 pl-3 pr-11 text-snow outline-none transition-colors focus:border-accent"
          >
            <option>Full stack project</option>
            <option>Website build</option>
            <option>SEO & ranking</option>
            <option>Keyword package</option>
            <option>Backlinks</option>
            <option>Other</option>
          </select>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-center text-ink-muted"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6.25 8 10l4-3.75"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </label>
      <label className="block">
        <span className="text-sm text-ink-muted">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full resize-y rounded-md border border-line bg-bg px-3 py-2.5 text-snow outline-none transition-colors focus:border-accent"
          placeholder="Niche, market, timeline, and goals…"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-[#010409] hover:bg-accent-deep sm:w-auto"
      >
        Open email
      </button>
    </form>
  );
}
