import { projects, type Project } from "@/lib/data";
import { Planet } from "../planet";
import { Reveal } from "../reveal";
import { Accent, CornerMarks, SectionLabel } from "../ui";

function ProjectCard({ project, idSuffix }: { project: Project; idSuffix: string }) {
  const isPlaceholder = project.url === "#";
  const inner = (
    <>
      <div
        className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-line"
        style={{
          background: `linear-gradient(155deg, hsl(${project.hue} 48% 94%), hsl(${project.hue} 38% 80%))`,
        }}
      >
        <CornerMarks />
        <Planet
          id={`work-${idSuffix}`}
          className="h-20 w-20 opacity-90 transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-110"
        />
        <p className="absolute bottom-4 left-5 right-5 font-display text-xl text-ink/85">
          {project.name}
        </p>
        <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-paper/80 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12 L12 4 M6 4 H12 V10" />
          </svg>
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink-soft"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  const cls =
    "group block w-[300px] shrink-0 transition-transform duration-300 hover:-translate-y-1.5 sm:w-[340px]";

  if (isPlaceholder) {
    return <div className={cls}>{inner}</div>;
  }
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            Built here, <Accent>live</Accent> out there
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
            Nothing on this row is a mockup. Every card opens the real product,
            running on the real internet, built by this studio.
          </p>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="marquee relative mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-28" />
          <div className="marquee-track flex w-max gap-6 pr-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.name} project={p} idSuffix={`a${i}`} />
            ))}
            {projects.map((p, i) => (
              <div key={`clone-${p.name}`} aria-hidden="true">
                <ProjectCard project={p} idSuffix={`b${i}`} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-ink-faint md:px-8">
        Sample cards shown while client permissions are confirmed. The live
        links land here as they clear.
      </p>
    </section>
  );
}
