type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const ArrowRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 12h18M14 5l7 7-7 7" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Phone = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const Close = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const Calendar = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

export const Pin = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const Drag = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
  </svg>
);

export const ChevronLeft = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const ChevronRight = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const Menu = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M3 8h18M3 16h18" />
  </svg>
);

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M4 20l1.2-4.1A8.5 8.5 0 1 1 8.4 19z" />
    <path d="M9 8.6c0 3.3 3 6.4 6.4 6.4l1.1-1.6-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2z" />
  </svg>
);

export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 4v16M4 12h16" />
  </svg>
);
