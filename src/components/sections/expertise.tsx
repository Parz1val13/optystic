import { expertise } from "@/lib/data";
import { Reveal } from "../reveal";
import { SectionLabel } from "../ui";

export function Expertise() {
  return (
    <section className="border-y border-line bg-paper-deep/50">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="md:max-w-xs">
            <SectionLabel>Toolbox</SectionLabel>
            <h2 className="mt-4 font-display text-2xl leading-snug sm:text-3xl">
              The stack behind the work
            </h2>
          </div>
          <ul className="flex max-w-2xl flex-wrap gap-2.5">
            {expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
