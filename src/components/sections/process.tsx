import { processSteps } from "@/lib/data";
import { Reveal } from "../reveal";
import { SectionLabel } from "../ui";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal>
          <div className="md:sticky md:top-28">
            <SectionLabel>How it goes</SectionLabel>
            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
              From first call to launch day
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              No mystery phases, no black hole between kickoff and delivery.
              You see the work as it happens and you always know what comes
              next.
            </p>
          </div>
        </Reveal>

        <ol className="relative flex flex-col">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[22px] top-6 w-px bg-line"
          />
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 90} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-sm text-planet-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-xl">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                    {step.blurb}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
