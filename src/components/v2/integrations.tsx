"use client";

/* The automation picture: email, documents and data flow in on the left,
 * bookings, reports and records come out on the right, all through one hub. */
import { useRef, type ReactNode, type RefObject } from "react";
import { AnimatedPlanet } from "../animated-planet";
import { AnimatedBeam } from "./animated-beam";

function Node({
  nodeRef,
  children,
}: {
  nodeRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}) {
  return (
    <div
      ref={nodeRef}
      className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-ink-soft shadow-[0_2px_10px_rgba(20,32,44,0.08)]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}

const BEAM = {
  gradientStartColor: "#5fa8d6",
  gradientStopColor: "#1f4978",
  pathColor: "#14202c",
  pathOpacity: 0.07,
  pathWidth: 2,
  duration: 5,
};

export function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const mailRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const replyRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

  return (
    <div aria-hidden="true">
      <div
        ref={containerRef}
        className="relative mx-auto flex h-[300px] w-full max-w-xl items-center justify-between px-2 sm:px-6"
      >
        <div className="flex h-full flex-col justify-between py-4">
          {/* envelope */}
          <Node nodeRef={chatRef}>
            <rect x="3" y="5.5" width="18" height="13" rx="2" />
            <path d="M3.5 7 12 13 20.5 7" />
          </Node>
          {/* document */}
          <Node nodeRef={mailRef}>
            <path d="M6 3h8l4 4v14H6Z" />
            <path d="M14 3v4h4" />
            <path d="M9 12h6 M9 16h6" />
          </Node>
          {/* spreadsheet */}
          <Node nodeRef={docRef}>
            <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
            <path d="M3.5 9.5h17 M3.5 14.5h17 M9.5 4.5v15 M15 9.5v10" />
          </Node>
        </div>

        <div
          ref={hubRef}
          className="z-10 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-paper shadow-[0_6px_24px_rgba(20,32,44,0.14)]"
        >
          {/* the animated logo: same turning ring as the favicon */}
          <AnimatedPlanet id="hub" className="h-11 w-11" />
        </div>

        <div className="flex h-full flex-col justify-between py-4">
          {/* calendar */}
          <Node nodeRef={calendarRef}>
            <rect x="3.5" y="5" width="17" height="15" rx="2" />
            <path d="M3.5 9.5h17 M8 3v4 M16 3v4" />
            <path d="M8 14h3" />
          </Node>
          {/* report chart */}
          <Node nodeRef={replyRef}>
            <path d="M4 4v16h16" />
            <path d="M8.5 16v-5 M13 16V8 M17.5 16v-8.5" />
          </Node>
          {/* database */}
          <Node nodeRef={phoneRef}>
            <ellipse cx="12" cy="6" rx="7.5" ry="3" />
            <path d="M4.5 6v12c0 1.65 3.35 3 7.5 3s7.5-1.35 7.5-3V6" />
            <path d="M4.5 12c0 1.65 3.35 3 7.5 3s7.5-1.35 7.5-3" />
          </Node>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={chatRef} toRef={hubRef} curvature={70} {...BEAM} />
        <AnimatedBeam containerRef={containerRef} fromRef={mailRef} toRef={hubRef} curvature={0} delay={1.2} {...BEAM} />
        <AnimatedBeam containerRef={containerRef} fromRef={docRef} toRef={hubRef} curvature={-70} delay={2.4} {...BEAM} />
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={calendarRef} curvature={70} delay={0.6} {...BEAM} />
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={replyRef} curvature={0} delay={1.8} {...BEAM} />
        <AnimatedBeam containerRef={containerRef} fromRef={hubRef} toRef={phoneRef} curvature={-70} delay={3} {...BEAM} />
      </div>
      <p className="mt-2 text-center text-xs text-ink-faint">
        Email, documents and data in, bookings, reports and records out.
      </p>
    </div>
  );
}
