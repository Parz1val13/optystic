import Image from "next/image";
import { EMAIL } from "@/lib/data";
import { Reveal } from "../reveal";
import { Starfield } from "../starfield";
import { ButtonLink } from "../ui";

export function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-night px-7 py-16 text-center md:px-16 md:py-24">
          <Starfield light />
          <Image
            src="/planet-animated.svg"
            alt=""
            width={340}
            height={340}
            unoptimized
            className="pointer-events-none absolute -bottom-24 -right-16 h-[280px] w-[280px] opacity-60 md:h-[340px] md:w-[340px]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-xl font-display text-3xl leading-tight text-night-ink sm:text-4xl md:text-5xl">
              Have something to build?
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-night-ink-soft">
              Tell us what you have in mind. You will hear back from a real
              person within a day.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Get in touch
              </ButtonLink>
              <ButtonLink href={`mailto:${EMAIL}`} variant="ghostLight" external>
                {EMAIL}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
