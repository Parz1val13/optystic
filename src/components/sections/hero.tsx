import Image from "next/image";
import { Starfield } from "../starfield";
import { Accent, ButtonLink, SectionLabel } from "../ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <Starfield />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <div className="relative mb-10 flex items-center justify-center">
          {/* orbit ring with a travelling moon */}
          <div
            aria-hidden="true"
            className="absolute h-[300px] w-[300px] animate-spin-slow rounded-full border border-ink/10 sm:h-[380px] sm:w-[380px]"
          >
            <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-planet-deep/70" />
          </div>
          <div className="animate-drift">
            <Image
              src="/planet-animated.svg"
              alt=""
              width={260}
              height={260}
              priority
              unoptimized
              className="h-[210px] w-[210px] sm:h-[260px] sm:w-[260px]"
            />
          </div>
        </div>

        <SectionLabel className="justify-center">
          Optystic, a web and AI studio
        </SectionLabel>

        <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.12] sm:text-5xl md:text-6xl">
          Websites, apps and AI that <Accent>earn their keep</Accent>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Optystic is a small independent studio. The person you talk to is the
          person who designs it, builds it and answers when it matters. Every
          project on this page is live on the internet right now.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Start a project</ButtonLink>
          <ButtonLink href="/#work" variant="ghost">
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
