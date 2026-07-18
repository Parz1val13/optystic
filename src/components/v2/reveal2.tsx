"use client";

import { useEffect, useRef, type ReactNode } from "react";

/*
 * V2 scroll reveal. Unlike v1, content is visible by default and only hidden
 * once JS is live and about to observe, so no-JS visitors, crawlers and a
 * failed observer never see a blank page.
 */
export function Reveal2({
  children,
  className = "",
  delay = 0,
  from = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add("v2-armed");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dir =
    from === "left" ? "v2-from-left" : from === "right" ? "v2-from-right" : "";

  return (
    <div
      ref={ref}
      className={`v2-reveal ${dir} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
