"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/data";

/* shortcut: placeholder endpoint. Create a free form at formspree.io and
   replace YOUR_FORM_ID, or submissions will fail with the error message. */
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint";
const label =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">
          Sent.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Thanks. You will hear back within a day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <label>
        <span className={label}>Name</span>
        <input name="name" required className={field} placeholder="Your name" />
      </label>
      <label>
        <span className={label}>Email</span>
        <input
          type="email"
          name="email"
          required
          className={field}
          placeholder="you@company.com"
        />
      </label>
      <label>
        <span className={label}>What are you building</span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${field} resize-y`}
          placeholder="Rough is fine. A few sentences about the idea."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-planet-deep disabled:pointer-events-none disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send it"}
      </button>
      {status === "error" && (
        <p className="text-xs leading-relaxed text-[#a33232]">
          That did not go through. Try again in a moment, or write to {EMAIL}.
        </p>
      )}
    </form>
  );
}
