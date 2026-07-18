"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export function Carousel({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const slide = el.firstElementChild as HTMLElement | null;
    const by = slide ? slide.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * by, behavior: "smooth" });
  };

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink/40 disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div className="mb-5 flex justify-end gap-2.5">
        <button type="button" onClick={() => step(-1)} disabled={!canPrev} aria-label="Previous project" className={arrow}>
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 3 L5 8 L10 13" />
          </svg>
        </button>
        <button type="button" onClick={() => step(1)} disabled={!canNext} aria-label="Next project" className={arrow}>
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3 L11 8 L6 13" />
          </svg>
        </button>
      </div>
      <div
        ref={track}
        role="region"
        aria-label={ariaLabel}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 pt-2"
      >
        {children}
      </div>
    </div>
  );
}
