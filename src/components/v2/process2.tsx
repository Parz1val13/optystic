"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "@/lib/data";
import { Reveal2 } from "./reveal2";
import { SectionLabel } from "../ui";

/*
 * The timeline draws itself: a planet-blue line grows down the rail as you
 * scroll, and each numbered node lights up as the line reaches it. Without
 * JS the static rail from v1 remains.
 */
export function Process2() {
  const listRef = useRef<HTMLOListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = listRef.current;
    const line = lineRef.current;
    if (!list || !line) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = list.getBoundingClientRect();
        const focus = window.innerHeight * 0.7;
        const progress = Math.min(1, Math.max(0, (focus - r.top) / r.height));
        line.style.height = `${progress * 100}%`;
        list.querySelectorAll("li").forEach((li) => {
          const lr = li.getBoundingClientRect();
          li.classList.toggle(
            "v2-lit",
            lr.top - r.top + 22 <= progress * r.height
          );
        });
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
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal2>
          <div className="md:sticky md:top-28">
            <SectionLabel>The process</SectionLabel>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
              How a project runs
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Five steps, the same for every project, whether it is a
              one-page site or a full platform. The scope and the price are
              agreed in writing before any work starts, you follow progress
              on a live preview link instead of waiting for a big reveal,
              and nothing passes through account managers. You always know
              where things stand, and we are still around after launch.
            </p>
          </div>
        </Reveal2>

        <ol ref={listRef} className="relative flex flex-col">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[22px] top-6 w-px bg-line"
          />
          <span
            ref={lineRef}
            aria-hidden="true"
            className="absolute left-[22px] top-6 w-px bg-ink/70"
            style={{ height: 0, maxHeight: "calc(100% - 48px)" }}
          />
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal2 delay={i * 90} className="relative flex gap-6 pb-9 last:pb-0">
                <span className="v2-node relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-sm font-semibold text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">
                    {step.blurb}
                  </p>
                </div>
              </Reveal2>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
