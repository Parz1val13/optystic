import { EMAIL } from "@/lib/data";

import { ButtonLink } from "../ui";
import { GlyphMatrix } from "./glyph-matrix";
import { HorizonGlow } from "./horizon-glow";
import { Logo2 } from "./logo2";
import { Magnetic } from "./magnetic";
import { Reveal2 } from "./reveal2";
import { Starfield2 } from "./starfield2";

/*
 * The page ends at night: a full-bleed sky shared by the CTA and footer,
 * divided only by a cursor-following space glow, nothing gets sliced.
 */
export function NightEnding({ cta = true }: { cta?: boolean }) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-night to-[#0a1828] ${
        cta ? "mt-16 md:mt-24" : "mt-0"
      }`}
    >
      <Starfield2 light shoot />

      <div className={`relative ${cta ? "pb-8 md:pb-10" : "pb-0"}`}>
        {cta && (
          <Reveal2>
            <div className="relative mx-auto max-w-6xl px-5 pt-20 text-center md:px-8 md:pt-28">
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-night-ink sm:text-5xl md:text-6xl">
                Have something to build?
              </h2>
              <p className="mx-auto mt-5 max-w-md leading-relaxed text-night-ink-soft">
                Tell us what you have in mind. You will hear back within a day.
              </p>
              <div className="mt-9 flex justify-center">
                <Magnetic>
                  <ButtonLink href="/contact" variant="light">
                    Get a consultation
                  </ButtonLink>
                </Magnetic>
              </div>
            </div>
          </Reveal2>
        )}
      </div>

      <HorizonGlow />

      {/* footer floats over the night sky below the glow; the glyph field
          starts right at the horizon line (the glow band is h-32 with the
          line at its center, so reach 64px up) */}
      <footer className="relative">
        <div className="absolute inset-x-0 -top-16 bottom-0 overflow-hidden opacity-20" aria-hidden="true">
          <GlyphMatrix color="#9fdcf2" cellSize={16} mutationRate={0.03} fadeBottom={0} />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-8 md:flex-row md:items-end md:justify-between md:px-8">
          <div className="max-w-sm">
            <Logo2 id="footer2" light className="text-2xl" />
            <p className="mt-4 text-sm leading-relaxed text-night-ink-soft">
              Websites, web apps and AI solutions.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-sm sm:flex-row sm:gap-14">
            <div className="flex flex-col gap-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-night-ink/50">
                Explore
              </p>
              <a href="/#work" className="v2-link text-night-ink-soft transition-colors hover:text-night-ink">Work</a>
              <a href="/contact" className="v2-link text-night-ink-soft transition-colors hover:text-night-ink">Contact</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-night-ink/50">
                Talk to us
              </p>
              <a href={`mailto:${EMAIL}`} className="v2-link text-night-ink-soft transition-colors hover:text-night-ink">
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto max-w-6xl px-5 py-4 text-xs text-night-ink/45 md:px-8">
            <p>© 2026 Optystic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
