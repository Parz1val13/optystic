import Image from "next/image";
import { projects, type Project } from "@/lib/data";
import { Carousel } from "../carousel";
import { Reveal } from "../reveal";
import { SectionLabel } from "../ui";

function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 sm:w-[60%] lg:w-[46%]"
    >
      <div className="relative overflow-hidden border-b border-line-soft">
        <Image
          src={p.image}
          alt={`Screenshot of ${p.name}`}
          width={1800}
          height={1125}
          unoptimized
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {p.name}
          </h3>
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-faint">
            {p.domain}
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12 L12 4 M6 4 H12 V10" />
            </svg>
          </span>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{p.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium tracking-wide text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionLabel>The work</SectionLabel>
        <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
          Real projects, live right now
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-6">
        <Carousel ariaLabel="Projects">
          {projects.map((p) => (
            <ProjectCard key={p.domain} p={p} />
          ))}
        </Carousel>
      </Reveal>
    </section>
  );
}
