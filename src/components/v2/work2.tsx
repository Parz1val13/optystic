import { Reveal2 } from "./reveal2";
import { SectionLabel } from "../ui";
import { WorkFolder } from "./work-folder";

export function Work2() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 overflow-x-clip px-5 py-16 md:px-8 md:py-24">
      <Reveal2>
        <SectionLabel>The work</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
          A drilling contractor&apos;s site, an e-commerce brand, and an AI
          learning platform. All three are live. Open the folder to have a
          look.
        </p>
      </Reveal2>
      <Reveal2 delay={120}>
        <WorkFolder />
      </Reveal2>
    </section>
  );
}
