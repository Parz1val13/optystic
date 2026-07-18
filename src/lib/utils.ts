/* shortcut: plain class joiner, enough for the vendored components; swap for
   clsx + tailwind-merge if class conflicts ever bite */
export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}
