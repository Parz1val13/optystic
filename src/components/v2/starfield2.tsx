"use client";

import { useEffect, useRef } from "react";

/*
 * V2 star chart. Fixed positions (server and client agree), biased to the
 * edges so no star ever crosses the text column, with faint constellation
 * lines joining the clusters and an optional shooting star + scroll parallax.
 */
const STARS: Array<[number, number, number, number, "dot" | "spark"]> = [
  // far left edge, outside any text column even on phones
  [2, 10, 3, 0.2, "dot"],
  [4, 28, 7, 1.4, "spark"],
  [3, 46, 2.5, 2.6, "dot"],
  [5, 64, 8, 0.8, "spark"],
  [2, 82, 2.5, 3.4, "dot"],
  // far right edge
  [97, 14, 2.5, 0.5, "dot"],
  [95, 34, 8, 1.1, "spark"],
  [98, 52, 2.5, 2.9, "dot"],
  [96, 72, 7, 3.7, "spark"],
  [97, 88, 2.5, 0.9, "dot"],
  // thin strips along the very top and bottom, above and below the copy
  [14, 6, 2, 2.2, "dot"],
  [30, 4, 2.5, 1.6, "dot"],
  [48, 7, 6, 3.1, "spark"],
  [66, 3, 2, 0.4, "dot"],
  [82, 6, 2.5, 2.4, "dot"],
  [20, 94, 2, 2.0, "dot"],
  [45, 95, 2.5, 1.2, "dot"],
  [70, 93, 2, 3.9, "dot"],
  [88, 95, 2.5, 0.7, "dot"],
];


function Spark({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor">
      <path d="M8 0 L9.3 6.7 L16 8 L9.3 9.3 L8 16 L6.7 9.3 L0 8 L6.7 6.7 Z" />
    </svg>
  );
}

export function Starfield2({
  className = "",
  light = false,
  shoot = false,
  parallax = false,
}: {
  className?: string;
  light?: boolean;
  shoot?: boolean;
  parallax?: boolean;
}) {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = layer.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.12}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [parallax]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        light ? "text-sky" : "text-planet-deep"
      } ${className}`}
    >
      <div ref={layer} className="absolute inset-0">
        {STARS.map(([x, y, size, delay, kind], i) => (
          <span
            key={i}
            className="absolute animate-twinkle"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
          >
            {kind === "spark" ? (
              <Spark size={size} />
            ) : (
              <span
                className="block rounded-full bg-current"
                style={{ width: size, height: size }}
              />
            )}
          </span>
        ))}
        {shoot && (
          <>
            <span className="v2-shoot absolute left-[8%] top-[8%] h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-current to-transparent" />
            <span
              className="v2-shoot absolute left-[55%] top-[16%] h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-current to-transparent"
              style={{ animationDelay: "2.8s" }}
            />
          </>
        )}
      </div>
    </div>
  );
}
