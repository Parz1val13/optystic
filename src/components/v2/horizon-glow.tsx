"use client";

/* The horizon between the CTA and the footer: a layered space glow that
 * leans toward the cursor as it moves across the night section. */
import { useEffect, useRef } from "react";

export function HorizonGlow() {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    const glow = inner.current;
    if (!el || !glow) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = el.closest("section");
    if (!section) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translateX(${x * 140}px)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      glow.style.transform = "";
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="pointer-events-none relative h-32 overflow-visible"
    >
      <div
        ref={inner}
        className="absolute inset-0 transition-transform duration-700 ease-out"
      >
        <span className="absolute left-1/2 top-1/2 h-40 w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky/25 blur-3xl" />
        <span className="absolute left-1/2 top-1/2 h-24 w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-planet/35 blur-3xl" />
        <span className="absolute left-1/2 top-1/2 h-14 w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/45 blur-2xl" />
        <span className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-peach/80 to-transparent" />
      </div>
    </div>
  );
}
