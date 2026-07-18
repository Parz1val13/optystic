/* The Optystic planet, drawn as code. Ported from the brand's logo source. */
export function Planet({ id, className }: { id: string; className?: string }) {
  const g = `pg-${id}`;
  const cl = `pc-${id}`;
  const sh = `psh-${id}`;
  const rim = `prm-${id}`;
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={g} cx="34%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fef3d8" />
          <stop offset="22%" stopColor="#9fdcf2" />
          <stop offset="55%" stopColor="#5fa8d6" />
          <stop offset="85%" stopColor="#3a72ab" />
          <stop offset="100%" stopColor="#1f4978" />
        </radialGradient>
        <radialGradient id={sh} cx="72%" cy="76%" r="70%">
          <stop offset="0%" stopColor="#0a1828" stopOpacity="0" />
          <stop offset="65%" stopColor="#0a1828" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a1828" stopOpacity="0.32" />
        </radialGradient>
        <radialGradient id={rim} cx="32%" cy="28%" r="82%">
          <stop offset="0%" stopColor="#ffd5b8" stopOpacity="0" />
          <stop offset="78%" stopColor="#ffd5b8" stopOpacity="0" />
          <stop offset="92%" stopColor="#ffd5b8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffd5b8" stopOpacity="0" />
        </radialGradient>
        <clipPath id={cl}>
          <circle cx="200" cy="200" r="170" />
        </clipPath>
      </defs>
      <g style={{ clipPath: "inset(0 0 50% 0)" }} transform="rotate(-18 200 210)">
        <ellipse cx="200" cy="210" rx="196" ry="36" fill="none" stroke="#1f4978" strokeWidth="9" />
      </g>
      <circle cx="200" cy="200" r="170" fill={`url(#${g})`} />
      <g clipPath={`url(#${cl})`} fill="#1f4978" opacity="0.2">
        <path d="M82 168 Q132 144 188 162 Q230 178 210 202 Q170 222 122 208 Q70 188 82 168 Z" />
        <path d="M222 232 Q272 220 308 248 Q314 276 274 286 Q230 282 218 260 Z" />
        <ellipse cx="158" cy="262" rx="30" ry="9" />
        <ellipse cx="262" cy="170" rx="18" ry="6" />
      </g>
      <g
        clipPath={`url(#${cl})`}
        stroke="#ffffff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.34"
      >
        <path d="M68 188 Q140 182 200 196 T332 195" />
        <path d="M82 248 Q160 254 220 244 T328 250" opacity="0.7" />
      </g>
      <circle cx="200" cy="200" r="170" fill={`url(#${sh})`} />
      <circle cx="200" cy="200" r="170" fill={`url(#${rim})`} />
      <ellipse cx="148" cy="138" rx="42" ry="20" fill="#ffffff" opacity="0.4" transform="rotate(-30 148 138)" />
      <ellipse cx="138" cy="130" rx="14" ry="6" fill="#ffffff" opacity="0.85" transform="rotate(-30 138 130)" />
      <g style={{ clipPath: "inset(50% 0 0 0)" }} transform="rotate(-18 200 210)">
        <ellipse cx="200" cy="210" rx="196" ry="36" fill="none" stroke="#1f4978" strokeWidth="9" />
      </g>
    </svg>
  );
}
