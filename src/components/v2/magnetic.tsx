"use client";

import { useRef, type ReactNode } from "react";

/* Pulls its child a few pixels toward the cursor. Mouse-only, no touch. */
export function Magnetic({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const inner = useRef<HTMLSpanElement>(null);

  function onMove(e: React.PointerEvent<HTMLSpanElement>) {
    const el = inner.current;
    if (!el || e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `translate(${dx * 5}px, ${dy * 4}px)`;
  }

  function onLeave() {
    const el = inner.current;
    if (el) el.style.transform = "";
  }

  return (
    <span
      className={`inline-flex ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <span
        ref={inner}
        className="inline-flex transition-transform duration-200 ease-out"
      >
        {children}
      </span>
    </span>
  );
}
