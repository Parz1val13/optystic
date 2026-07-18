"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/lib/data";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked, the mailto link right next to this still works */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/40"
    >
      {copied ? (
        <>
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M2.5 8.5 L6 12 L13.5 4.5" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            <rect x="5" y="5" width="9" height="9" rx="1.5" />
            <path d="M11 5 V3.5 A1.5 1.5 0 0 0 9.5 2 H3.5 A1.5 1.5 0 0 0 2 3.5 V9.5 A1.5 1.5 0 0 0 3.5 11 H5" />
          </svg>
          Copy address
        </>
      )}
    </button>
  );
}
