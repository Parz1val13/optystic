"use client";

import { useEffect } from "react";

/*
 * A truly animated favicon. Browsers do not run animations inside icon files,
 * so this pre-renders one ring cycle as PNG frames on a cream disc (so the
 * mark reads on dark tab bars too) and swaps the icon link ~7x a second.
 * Static under reduced motion.
 */
const FRAMES = 28;
const CYCLE_MS = 4200;
const TILT = (-18 * Math.PI) / 180;

function frameSvg(t: number): string {
  const phase = Math.cos(t * Math.PI * 2);
  const ry = Math.max(0.8, Math.abs(phase) * 8);
  const flip = phase < 0;
  const ring = (clip: string) =>
    `<g clip-path='url(#${clip})' transform='rotate(-18 24 25)'><ellipse cx='24' cy='25' rx='20' ry='${ry.toFixed(2)}' fill='none' stroke='#1f4978' stroke-width='4'/></g>`;
  const m = t * Math.PI * 2;
  const lx = 20 * Math.cos(m);
  const ly = ry * Math.sin(m);
  const mx = 24 + lx * Math.cos(TILT) - ly * Math.sin(TILT);
  const my = 25 + lx * Math.sin(TILT) + ly * Math.cos(TILT);
  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>` +
    `<defs><clipPath id='ct'><rect x='-10' y='-10' width='68' height='35'/></clipPath>` +
    `<clipPath id='cb'><rect x='-10' y='25' width='68' height='35'/></clipPath></defs>` +
    `<circle cx='24' cy='24' r='23' fill='#fbf7ee'/>` +
    ring(flip ? "cb" : "ct") +
    `<circle cx='24' cy='24' r='13' fill='#5fa8d6'/>` +
    `<path d='M24 11 A13 13 0 0 1 24 37 A10.3 10.3 0 0 0 24 11 Z' fill='#3a72ab' transform='rotate(-38 24 24)'/>` +
    `<circle cx='19' cy='18' r='2.3' fill='#fff' opacity='0.9'/>` +
    ring(flip ? "ct" : "cb") +
    `<circle cx='${mx.toFixed(1)}' cy='${my.toFixed(1)}' r='3' fill='#1f4978'/>` +
    `</svg>`;
}

function rasterize(svg: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext("2d");
      if (!ctx) {
        reject(new Error("no 2d context"));
        return;
      }
      ctx.drawImage(img, 0, 0, 64, 64);
      resolve(c.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  });
}

export function FaviconAnimator() {
  useEffect(() => {
    let stop = false;
    let interval: number | undefined;
    let link: HTMLLinkElement | null = null;

    // a fresh link node each frame: Chrome refreshes reliably on insertion
    const setIcon = (href: string) => {
      document.querySelectorAll("link[rel~='icon']").forEach((l) => l.remove());
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = href;
      document.head.appendChild(link);
    };

    (async () => {
      try {
        const frames = await Promise.all(
          Array.from({ length: FRAMES }, (_, i) => rasterize(frameSvg(i / FRAMES)))
        );
        if (stop) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setIcon(frames[1]);
          return;
        }
        let i = 0;
        setIcon(frames[0]);
        interval = window.setInterval(() => {
          i = (i + 1) % FRAMES;
          setIcon(frames[i]);
        }, CYCLE_MS / FRAMES);
      } catch {
        /* rasterizing failed, keep the default static icon */
      }
    })();

    return () => {
      stop = true;
      if (interval) clearInterval(interval);
      if (link) link.remove();
    };
  }, []);

  return null;
}
