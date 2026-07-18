/*
 * A star chart on paper: fixed positions so server and client always agree.
 * [left %, top %, size px, twinkle delay s, kind]
 */
const STARS: Array<[number, number, number, number, "dot" | "spark"]> = [
  [4, 12, 3, 0.2, "dot"],
  [9, 58, 2, 1.4, "dot"],
  [14, 30, 8, 0.8, "spark"],
  [20, 78, 2.5, 2.2, "dot"],
  [26, 16, 2, 3.1, "dot"],
  [31, 52, 7, 1.9, "spark"],
  [38, 86, 2, 0.5, "dot"],
  [43, 8, 2.5, 2.8, "dot"],
  [49, 38, 2, 1.1, "dot"],
  [55, 70, 9, 3.6, "spark"],
  [61, 22, 2, 0.9, "dot"],
  [66, 90, 2.5, 2.5, "dot"],
  [71, 44, 7, 1.6, "spark"],
  [77, 12, 2, 3.9, "dot"],
  [82, 64, 2.5, 0.4, "dot"],
  [87, 34, 8, 2.0, "spark"],
  [92, 80, 2, 1.2, "dot"],
  [96, 20, 2.5, 3.3, "dot"],
  [7, 88, 6, 2.7, "spark"],
  [58, 5, 2, 1.8, "dot"],
  [35, 65, 2, 4.1, "dot"],
  [90, 55, 2, 0.7, "dot"],
];

function Spark({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor">
      <path d="M8 0 L9.3 6.7 L16 8 L9.3 9.3 L8 16 L6.7 9.3 L0 8 L6.7 6.7 Z" />
    </svg>
  );
}

export function Starfield({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        light ? "text-sky" : "text-planet-deep"
      } ${className}`}
    >
      {STARS.map(([x, y, size, delay, kind], i) => (
        <span
          key={i}
          className="absolute animate-twinkle"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
        >
          {kind === "spark" ? (
            <Spark size={size} />
          ) : (
            <span
              className="block rounded-full bg-current"
              style={{ width: size, height: size }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
