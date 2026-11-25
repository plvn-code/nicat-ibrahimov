/**
 * The doctor's monogram, redrawn as SVG after the Instagram watermark:
 * a circle with an outlined "N" whose middle stem is an implant with a tooth crown on top.
 * Pure strokes in currentColor, so it can "draw" itself (stroke-dasharray) in the intro.
 */
export function Mark({ className, title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinejoin="round" strokeLinecap="round" role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <circle className="mark__ring" pathLength={1} cx="100" cy="100" r="92" />
      {/* outlined N */}
      <path className="mark__n" pathLength={1} d="M51 153V66h9l82 72V40h8v111h-9L59 79v74z" />
      {/* implant body */}
      <path className="mark__implant" pathLength={1} d="M92.5 66h20.5v87H92.5z" />
      {/* threads */}
      <path className="mark__threads" pathLength={1} d="M94 61.5h17.5M95.5 56.5h14.5M97 51.5h11.5M98.5 47h8.5" />
      {/* tooth crown */}
      <path className="mark__crown" pathLength={1} d="M95 42.5c-3-4.5-4-10.5-1.5-15 2.4-4.4 7.4-4.2 9.5-1.6 2.1-2.6 7.1-2.8 9.5 1.6 2.5 4.5 1.5 10.5-1.5 15" />
    </svg>
  );
}

/** Monogram + "NICAT IBRAHIMOV / STOMATOLOQ" wordmark. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo ${compact ? "logo--compact" : ""}`}>
      <Mark className="logo__mark" />
      <span className="logo__text">
        <b>NICAT IBRAHIMOV</b>
        <small>STOMATOLOQ</small>
      </span>
    </span>
  );
}
