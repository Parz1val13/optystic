import type { Metadata } from "next";
import { CornerMarks, SectionLabel } from "@/components/ui";
import { ContactForm } from "@/components/v2/contact-form";
import { FlatMark } from "@/components/v2/flat-mark";
import { Nav2 } from "@/components/v2/nav2";
import { NightEnding } from "@/components/v2/night-ending";
import { ScrollRing } from "@/components/v2/scroll-ring";
import { Starfield2 } from "@/components/v2/starfield2";

export const metadata: Metadata = {
  title: "Contact | Optystic",
  description:
    "Tell Optystic what you want to build and hear back within a day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav2 />
      <main className="relative flex-1 overflow-hidden">
        <Starfield2 />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-8 pt-24 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-8 md:pt-[5.5rem]">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
              Tell us what you are building
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              Describe the idea in your own words, rough is fine. You will
              hear back within a day.
            </p>
          </div>

          {/* the form as a postcard from orbit: stamp, postmark, corner marks */}
          <div className="relative h-fit rounded-3xl border border-line bg-paper p-6 shadow-[0_24px_60px_-32px_rgba(20,32,44,0.35)] sm:p-7">
            <CornerMarks />
            <span
              aria-hidden="true"
              className="absolute right-6 top-6 flex h-16 w-14 rotate-2 items-center justify-center rounded-sm border border-dashed border-ink/25 bg-sky/15"
            >
              <FlatMark className="h-8 w-8" />
            </span>
            <svg
              viewBox="0 0 96 40"
              className="absolute right-[4.7rem] top-7 w-24 text-ink/20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="76" cy="20" r="14" />
              <path d="M4 12 q 8 -4 16 0 t 16 0 t 16 0" />
              <path d="M4 20 q 8 -4 16 0 t 16 0 t 16 0" />
              <path d="M4 28 q 8 -4 16 0 t 16 0 t 16 0" />
            </svg>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Start a project
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
      <NightEnding cta={false} />
      <ScrollRing />
    </>
  );
}
