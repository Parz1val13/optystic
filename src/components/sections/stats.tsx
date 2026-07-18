import { stats } from "@/lib/data";
import { CountUp } from "../countup";
import { Reveal } from "../reveal";

export function Stats() {
  return (
    <section className="border-y border-line bg-paper-deep/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-5 py-16 md:grid-cols-4 md:px-8 md:py-20">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center">
            <p className="font-display text-5xl text-ink md:text-6xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-3 max-w-[180px] text-sm leading-snug text-ink-soft">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
