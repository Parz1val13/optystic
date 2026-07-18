import Link from "next/link";
import { EMAIL, GITHUB_URL } from "@/lib/data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-sm">
          <Logo id="footer" className="text-2xl" />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            An independent studio building websites, web apps and AI agents.
            Everything on this page is real, live and built by us.
          </p>
        </div>
        <div className="flex flex-col gap-6 text-sm sm:flex-row sm:gap-14">
          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Explore
            </p>
            <Link href="/#work" className="text-ink-soft transition-colors hover:text-ink">Work</Link>
            <Link href="/#services" className="text-ink-soft transition-colors hover:text-ink">Services</Link>
            <Link href="/#process" className="text-ink-soft transition-colors hover:text-ink">Process</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Talk to us
            </p>
            <a href={`mailto:${EMAIL}`} className="text-ink-soft transition-colors hover:text-ink">
              {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-line-soft">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-xs text-ink-faint md:px-8">
          <p>© 2026 Optystic. All rights reserved.</p>
          <p className="hidden sm:block">Designed and built in house.</p>
        </div>
      </div>
    </footer>
  );
}
