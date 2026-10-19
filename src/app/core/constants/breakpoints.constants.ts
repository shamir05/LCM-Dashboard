// Mirrors $breakpoints in src/styles/_mixins.scss.
export const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

// Below this width the sidebar becomes an off-canvas drawer.
export const COMPACT_LAYOUT_QUERY = `(width < ${BREAKPOINTS.xl}px)`;
