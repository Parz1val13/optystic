import type { ReactNode } from "react";
import { services } from "@/lib/data";
import { Integrations } from "./integrations";
import { Reveal2 } from "./reveal2";
import { SectionLabel } from "../ui";

/* Literal line icons, one per service: a website in a browser window, a web
 * app dashboard, and AI sparks. */
function Website() {
  return (
    <g>
      <rect x="4" y="8" width="40" height="32" rx="3" />
      <path d="M4 16 H44" />
      <circle cx="9.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path d="M10 23 H26 M10 29 H30 M10 35 H22" opacity="0.55" />
      <rect x="32" y="22" width="7" height="7" rx="1" opacity="0.55" />
    </g>
  );
}

function WebApp() {
  return (
    <g>
      <rect x="4" y="8" width="40" height="32" rx="3" />
      <path d="M16 8 V40" />
      <path d="M8 15 H12 M8 21 H12 M8 27 H12" opacity="0.55" />
      <rect x="21" y="13" width="9" height="8" rx="1" opacity="0.55" />
      <rect x="34" y="13" width="6" height="8" rx="1" opacity="0.55" />
      <path d="M21 35 L26 29 L31 32 L39 24" />
    </g>
  );
}

function AiSparks() {
  return (
    <g>
      <path
        d="M28 6 L30.2 15.8 L40 18 L30.2 20.2 L28 30 L25.8 20.2 L16 18 L25.8 15.8 Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M13 28 L14.4 33.6 L20 35 L14.4 36.4 L13 42 L11.6 36.4 L6 35 L11.6 33.6 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.7"
      />
      <circle cx="38" cy="38" r="2.2" />
    </g>
  );
}

const INSTRUMENTS: ReactNode[] = [<Website key="w" />, <WebApp key="a" />, <AiSparks key="s" />];

export function Services2() {
  return (
    <section className="border-y border-line bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal2>
          <SectionLabel>What we do</SectionLabel>
        </Reveal2>
        <div className="mt-8 grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-16">
          <div className="flex flex-col">
            {services.map((s, i) => (
              <Reveal2 key={s.title} delay={i * 90}>
                <div
                  className={`relative grid grid-cols-[56px_1fr] items-start gap-x-6 py-7 md:pr-16 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none font-display text-[4rem] font-semibold leading-none text-ink/[0.06] md:block"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <svg
                    viewBox="0 0 48 48"
                    className="mt-1 h-11 w-11 text-ink"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {INSTRUMENTS[i]}
                  </svg>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-xl leading-relaxed text-ink-soft">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              </Reveal2>
            ))}
          </div>

          <Reveal2 delay={120} from="right">
            <Integrations />
          </Reveal2>
        </div>
      </div>
    </section>
  );
}
