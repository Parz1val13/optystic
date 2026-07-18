import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Starfield } from "@/components/starfield";
import { EMAIL } from "@/lib/data";
import { ButtonLink, CornerMarks, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact | Optystic",
  description:
    "Tell Optystic what you want to build. Email hadi@optystic.com and hear back from a real person within a day.",
};

const FIT = [
  "A website that needs to look serious and load fast",
  "A web app, portal or dashboard your business runs on",
  "A phone or chat assistant that answers for you",
  "Something half built that needs rescuing",
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative flex-1 overflow-hidden">
        <Starfield />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-28 md:grid-cols-[1.2fr_1fr] md:gap-20 md:px-8 md:pt-40">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
              Tell us what you are building
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              One email is enough to start. Describe the idea in your own
              words, rough is fine. You will get a reply from the person who
              would actually build it, usually within a day.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                  <svg viewBox="0 0 16 16" className="mt-1 h-2.5 w-2.5 shrink-0 fill-planet-deep/70" aria-hidden="true">
                    <path d="M8 0 L9.3 6.7 L16 8 L9.3 9.3 L8 16 L6.7 9.3 L0 8 L6.7 6.7 Z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-fit rounded-3xl border border-line bg-paper p-8 md:sticky md:top-28">
            <CornerMarks />
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Email us
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 block break-all font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-planet-deep"
            >
              {EMAIL}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${EMAIL}?subject=Consultation`} external>
                Write the email
              </ButtonLink>
              <CopyEmail />
            </div>
            <p className="mt-8 border-t border-line-soft pt-6 text-xs text-ink-faint">
              No forms, no ticket queues. A mail goes straight to the builder.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
