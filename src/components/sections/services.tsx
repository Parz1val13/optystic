import Link from "next/link";
import { services } from "@/lib/data";
import { Planet } from "../planet";
import { Reveal } from "../reveal";
import { CornerMarks, SectionLabel } from "../ui";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionLabel>What we build</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          Three ways we can help
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 110} className="h-full">
            <article className="relative flex h-full flex-col rounded-2xl border border-line bg-paper p-7 transition-colors duration-300 hover:border-ink/30">
              <CornerMarks />
              <Planet id={`svc-${i}`} className="h-11 w-11" />
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {s.blurb}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-line-soft pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-ink-soft">
                    <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 shrink-0 fill-planet-deep/70" aria-hidden="true">
                      <path d="M8 0 L9.3 6.7 L16 8 L9.3 9.3 L8 16 L6.7 9.3 L0 8 L6.7 6.7 Z" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-planet-deep transition-colors hover:text-ink"
              >
                Start a project
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 8 H14 M9 3 L14 8 L9 13" />
                </svg>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
