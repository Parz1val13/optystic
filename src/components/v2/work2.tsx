import { projects } from "@/lib/data";
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
          learning platform. All three are live.{" "}
          <span className="hidden md:inline">Open the folder to have a look.</span>
          <span className="md:hidden">Swipe through to have a look.</span>
        </p>
      </Reveal2>

      {/* Mobile: a simple swipe carousel; the folder gesture is fiddly on
          touch, so phones get plain tappable cards instead. */}
      <Reveal2 delay={120} className="md:hidden">
        <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((p) => (
            <a
              key={p.domain}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[80%] max-w-xs shrink-0 snap-center overflow-hidden rounded-xl border border-line bg-paper shadow-[0_20px_40px_rgba(20,32,44,0.12)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={`Screenshot of ${p.name}`}
                className="h-44 w-full object-cover object-top"
              />
              <div className="flex flex-col gap-1 px-4 py-4">
                <p className="font-display text-lg font-semibold tracking-tight text-ink">
                  {p.name}
                </p>
                <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>
                <p className="mt-1 text-xs text-ink-faint">{p.domain}</p>
              </div>
            </a>
          ))}
        </div>
      </Reveal2>

      {/* Desktop keeps the interactive folder */}
      <Reveal2 delay={120} className="hidden md:block">
        <WorkFolder />
      </Reveal2>
    </section>
  );
}
