import Link from "next/link";
import { Planet } from "./planet";

/* Wordmark lockup: the planet plays the O in OPTYSTIC. */
export function Logo({
  id,
  className = "text-2xl",
  light = false,
}: {
  id: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Optystic, back to start"
      className={`group inline-flex items-center whitespace-nowrap font-display leading-none ${
        light ? "text-night-ink" : "text-ink"
      } ${className}`}
    >
      <Planet
        id={id}
        className="h-[1.4em] w-[1.4em] shrink-0 -translate-y-[0.05em] -mr-[0.06em] transition-transform duration-700 ease-out group-hover:rotate-[14deg]"
      />
      <span className="tracking-[0.03em]">PTYSTIC</span>
    </Link>
  );
}
