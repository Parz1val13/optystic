"use client";

/* The interactive folder gallery (user-provided component), adapted: the
 * three live projects with name, blurb and domain on each card, folder tones
 * built on the ink color (same as the primary button), and larger cards when
 * open (scaled up, draggable side to side like a hand of big previews). */
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/lib/data";
import { Planet } from "../planet";

const dragHintText = "Drag any project down to close";

export function WorkFolder() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const [wide, setWide] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const spread = wide ? 340 : 95;
  const openScale = wide ? 1.3 : 1.05;

  return (
    <div className="relative w-full py-4">
      <div className="relative flex w-full flex-col items-center justify-center">
        {/* the stage only grows when the folder opens, so the closed state
            leaves no dead air under the heading */}
        <motion.div
          className="pointer-events-none relative z-0 flex w-[420px] max-w-full justify-center"
          animate={{ height: isFolderOpen ? (wide ? 620 : 540) : 400 }}
          transition={{ type: "spring", stiffness: 200, damping: 28 }}
        >
          <motion.div
            className="absolute bottom-6 h-60 w-[360px] max-w-full drop-shadow-2xl"
            animate={{ opacity: isFolderOpen ? 0 : 1, scale: isFolderOpen ? 0.9 : 1 }}
          >
            <div className="absolute top-0 left-0 h-10 w-36 rounded-t-xl border-t border-l border-r border-night-ink/15 bg-linear-to-t from-[#1a2836] to-[#243646]" />
            <div className="absolute top-8 left-0 right-0 bottom-0 rounded-b-xl rounded-tr-xl border border-night-ink/15 bg-linear-to-b from-[#1a2836] to-[#0c151d] shadow-[inset_0_0_40px_rgba(5,10,15,0.8)]" />
            <div className="pointer-events-none absolute top-10 left-2 right-2 bottom-2 rounded-lg bg-[#0a1219] shadow-inner" />
          </motion.div>

          <div className="absolute bottom-10 z-10 flex justify-center">
            {projects.map((p, i) => {
              const offset = i - (projects.length - 1) / 2;

              const stackY = hoverFolder ? offset * -10 - 40 : offset * -5;
              const stackX = hoverFolder ? offset * 30 : offset * 3;
              const stackRotate = hoverFolder ? offset * 8 : offset * 3;
              const stackScale = 1 - Math.abs(offset) * 0.03;

              const openY = -140;
              const openX = offset * spread;
              const openRotate = 0;

              return (
                <motion.div
                  key={p.domain}
                  drag={isFolderOpen ? true : false}
                  dragSnapToOrigin={true}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                  }}
                  className={`absolute bottom-0 h-80 w-64 origin-bottom overflow-hidden rounded-xl border border-line bg-paper shadow-[0_20px_40px_rgba(20,32,44,0.3)] ${isFolderOpen ? "pointer-events-auto cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
                  animate={!isFolderOpen ? {
                    y: stackY,
                    x: stackX,
                    rotate: stackRotate,
                    scale: stackScale,
                    zIndex: i + 10
                  } : {
                    y: openY,
                    x: openX,
                    rotate: openRotate,
                    scale: openScale,
                    zIndex: 50
                  }}
                  whileHover={isFolderOpen ? { scale: openScale + 0.05, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: openScale + 0.08, rotate: 5, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={`Screenshot of ${p.name}`} className="pointer-events-none h-44 w-full object-cover object-top" />
                  <div className="pointer-events-none flex h-36 flex-col px-4 py-3 text-left">
                    <p className="font-display text-lg font-semibold tracking-tight text-ink">
                      {p.name}
                    </p>
                    <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-soft">
                      {p.blurb}
                    </p>
                    <p className="mt-auto text-[11px] text-ink-faint">{p.domain}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="pointer-events-auto absolute bottom-0 z-20 h-48 w-[380px] max-w-full cursor-pointer drop-shadow-[0_-20px_40px_rgba(10,24,40,0.45)]"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              rotateX: hoverFolder ? -25 : 0,
              y: hoverFolder ? 10 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto"
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-2xl border border-night-ink/20 bg-linear-to-b from-[#243646] to-[#101c26] pb-8 shadow-[inset_0_2px_10px_rgba(251,247,238,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-night-ink/40 to-transparent" />

              <div className="flex items-center justify-center rounded-lg border border-black/60 bg-[#0a1219] px-5 py-2.5 shadow-inner backdrop-blur-md">
                <span className="inline-flex items-center whitespace-nowrap font-display text-lg font-semibold leading-none tracking-tight text-night-ink">
                  <Planet
                    id="folder"
                    className="h-[1.4em] w-[1.4em] shrink-0 -translate-y-[0.05em] -mr-[0.06em]"
                  />
                  PTYSTIC
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 50 }}
          className="pointer-events-none absolute bottom-6 rounded-full border border-line bg-paper-deep/70 px-6 py-3 text-sm font-medium uppercase tracking-widest text-ink-faint backdrop-blur-md"
        >
          {dragHintText}
        </motion.div>
      </div>
    </div>
  );
}
