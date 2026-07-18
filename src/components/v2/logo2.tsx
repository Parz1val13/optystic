import { Planet } from "../planet";

/* V2 wordmark lockup: the real brand planet plays the O, same as v1. */
export function Logo2({
  id,
  className = "text-2xl",
  light = false,
}: {
  id: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <a
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
      <span className="font-semibold tracking-tight">PTYSTIC</span>
    </a>
  );
}
