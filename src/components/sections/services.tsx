import { services } from "@/lib/data";
import { Reveal } from "../reveal";
import { SectionLabel } from "../ui";

export function Services() {
  return (
    <section className="border-y border-line bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
        </Reveal>
        <div className="mt-8 flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div
                className={`grid gap-2 py-7 md:grid-cols-[1fr_2fr] md:items-baseline md:gap-10 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.title}
                </h3>
                <p className="max-w-xl leading-relaxed text-ink-soft">
                  {s.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
