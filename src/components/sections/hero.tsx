import { AnimatedPlanet } from "../animated-planet";
import { Starfield } from "../starfield";
import { ButtonLink } from "../ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40">
      <Starfield />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
        <div className="relative mb-8 flex items-center justify-center">
          {/* orbit ring with a travelling moon */}
          <div
            aria-hidden="true"
            className="absolute h-[300px] w-[300px] animate-spin-slow rounded-full border border-ink/10 sm:h-[380px] sm:w-[380px]"
          >
            <span className="absolute -top-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-planet-deep/70" />
          </div>
          <div className="animate-drift">
            <AnimatedPlanet
              id="hero"
              className="h-[210px] w-[210px] sm:h-[260px] sm:w-[260px]"
            />
          </div>
        </div>

        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
          Websites and software, built properly
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
          Optystic is a small studio you deal with directly. Everything on this
          page is live right now.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact">Get a consultation</ButtonLink>
          <ButtonLink href="/#work" variant="ghost">
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
