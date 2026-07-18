import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary: "bg-ink text-paper hover:bg-planet-deep",
  light: "bg-paper text-ink hover:bg-sky",
  ghost: "border border-line text-ink hover:border-ink/40 hover:bg-paper-deep/70",
  ghostLight: "border border-night-line text-night-ink hover:bg-night-soft",
} as const;

const sizes = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    const newTab = href.startsWith("mailto:")
      ? {}
      : { target: "_blank", rel: "noopener noreferrer" };
    return (
      <a href={href} {...newTab} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionLabel({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] ${
        light ? "text-night-ink-soft" : "text-ink-soft"
      } ${className}`}
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden="true">
        <path d="M8 0 L9.3 6.7 L16 8 L9.3 9.3 L8 16 L6.7 9.3 L0 8 L6.7 6.7 Z" />
      </svg>
      {children}
    </p>
  );
}

/* Four small star-chart marks in the corners of a relative parent. */
export function CornerMarks({ light = false }: { light?: boolean }) {
  const positions = [
    "top-2.5 left-3",
    "top-2.5 right-3",
    "bottom-2.5 left-3",
    "bottom-2.5 right-3",
  ];
  return (
    <span aria-hidden="true">
      {positions.map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} select-none text-xs leading-none ${
            light ? "text-night-ink/30" : "text-ink/20"
          }`}
        >
          +
        </span>
      ))}
    </span>
  );
}
