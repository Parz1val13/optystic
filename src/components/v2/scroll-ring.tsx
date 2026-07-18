"use client";

import { useEffect, useRef, useState } from "react";
import { FlatMark } from "./flat-mark";

const CIRC = 2 * Math.PI * 19;

/* A small corner planet whose orbit fills as you read. Doubles as back-to-top. */
export function ScrollRing() {
  const ring = useRef<SVGCircleElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (ring.current) {
          ring.current.style.strokeDashoffset = `${CIRC * (1 - p)}`;
        }
        setShown(window.scrollY > 400);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-line bg-paper/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 md:flex ${
        shown ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg viewBox="0 0 44 44" className="absolute inset-0 h-full w-full -rotate-90">
        <circle
          ref={ring}
          cx="22"
          cy="22"
          r="19"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC}
        />
      </svg>
      <FlatMark className="h-6 w-6" />
    </button>
  );
}
