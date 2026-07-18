import { comparison } from "@/lib/data";
import { Reveal } from "../reveal";
import { ButtonLink, SectionLabel } from "../ui";

export function Problem() {
  const { columns, rows } = comparison;
  return (
    <section className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionLabel>The usual problem</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          Good projects get stuck with the wrong builders
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
          Agencies hand your project to juniors after the sales call.
          Freelancers vanish mid sprint. Either way you end up managing the
          work instead of running your business.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 overflow-x-auto pb-2 [scrollbar-gutter:stable]">
          <div className="grid min-w-[680px] grid-cols-[1.1fr_1fr_1fr_1fr] gap-x-4">
            {/* header row */}
            <div />
            {columns.map((c, i) => (
              <div
                key={c}
                className={`px-5 py-4 text-sm font-semibold ${
                  i === 0
                    ? "rounded-t-2xl bg-night text-night-ink"
                    : "text-ink"
                }`}
              >
                {c}
              </div>
            ))}
            {/* body rows */}
            {rows.map((row, r) => (
              <div key={row.label} className="contents">
                <div className="border-t border-line px-0 py-4 text-sm font-medium text-ink-soft">
                  {row.label}
                </div>
                {row.cells.map((cell, i) => (
                  <div
                    key={i}
                    className={`px-5 py-4 text-sm ${
                      i === 0
                        ? "bg-night text-night-ink"
                        : r % 2 === 0
                          ? "bg-paper-deep/50 text-ink-soft"
                          : "text-ink-soft"
                    }`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
            {/* footer row: CTA inside the Optystic column */}
            <div />
            <div className="rounded-b-2xl bg-night px-5 pb-5 pt-2">
              <ButtonLink href="/contact" variant="light" size="sm">
                Work with us
              </ButtonLink>
            </div>
            <div />
            <div />
          </div>
        </div>
        <p className="mt-4 text-xs text-ink-faint">
          Based on the patterns we hear from clients who tried both first.
        </p>
      </Reveal>
    </section>
  );
}
