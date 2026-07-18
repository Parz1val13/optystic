import type { CSSProperties } from "react";
import { ButtonLink } from "../ui";
import { LineShadowText } from "./line-shadow-text";
import { Magnetic } from "./magnetic";
import { MoonHero } from "./moon-hero";
import { Starfield2 } from "./starfield2";

const WORDS = ["Crafted", "with"];

export function Hero2() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-start overflow-hidden pb-16 pt-16 md:pt-20">
      <Starfield2 shoot parallax />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
        {/* box sized with the fov so the whole halo fits: no edge ever cuts
            the circle; the negative top margin eats the canvas's own
            transparent air so the scene sits close under the nav */}
        <MoonHero className="-mt-8 h-[480px] w-[min(96vw,820px)] sm:-mt-12 sm:h-[640px] sm:w-[min(96vw,1180px)]" />

        <h1 className="relative mt-6 max-w-4xl font-display text-[clamp(2.4rem,6.2vw,4.5rem)] font-semibold leading-[1.06] tracking-tight sm:mt-10">
          {WORDS.map((w, i) => (
            // the space lives outside the inline-block span or it collapses
            <span key={w}>
              <span className="v2-word" style={{ "--i": i } as CSSProperties}>
                {w}
              </span>{" "}
            </span>
          ))}
          <span
            className="v2-word"
            style={{ "--i": WORDS.length } as CSSProperties}
          >
            <LineShadowText shadowColor="#14202c">Purpose.</LineShadowText>
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
          Websites, web apps and AI automation. Design, development and
          launch, handled end to end.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/#work" variant="ghost" className="min-w-[190px]">
            See the work
          </ButtonLink>
          <Magnetic>
            <ButtonLink href="/contact" className="min-w-[190px]">
              Get a consultation
            </ButtonLink>
          </Magnetic>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="/#work"
        aria-label="Scroll to the work"
        className="mx-auto mt-10 flex flex-col items-center gap-1.5 text-ink-faint transition-colors hover:text-ink"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <svg viewBox="0 0 16 16" className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 6 L8 11 L13 6" />
        </svg>
      </a>
    </section>
  );
}
