/*
 * The clean Optystic mark: flat two-tone planet with a crisp ring, sharp from
 * favicon size up to the footer. The light variant swaps the ring to sky so
 * it reads on the night background.
 */
export function FlatMark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const ringColor = light ? "#9fdcf2" : "#1f4978";
  const ring = (
    <ellipse
      cx="24"
      cy="25"
      rx="21"
      ry="7"
      fill="none"
      stroke={ringColor}
      strokeWidth="3"
    />
  );
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g style={{ clipPath: "inset(0 0 52% 0)" }} transform="rotate(-18 24 25)">
        {ring}
      </g>
      <circle cx="24" cy="24" r="14.5" fill="#5fa8d6" />
      {/* flat crescent shade toward the lower right */}
      <path
        d="M24 9.5 A14.5 14.5 0 0 1 24 38.5 A11.5 11.5 0 0 0 24 9.5 Z"
        fill="#3a72ab"
        transform="rotate(-38 24 24)"
      />
      <circle cx="18.5" cy="17.5" r="2.6" fill="#ffffff" opacity="0.9" />
      <g style={{ clipPath: "inset(52% 0 0 0)" }} transform="rotate(-18 24 25)">
        {ring}
      </g>
    </svg>
  );
}
