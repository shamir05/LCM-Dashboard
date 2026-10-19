export const ACTIVITY_CHART_SCALE = {
  max: 15,
  tickStep: 5,
} as const;

export const DONUT_CHART_GEOMETRY = {
  size: 184,
  strokeWidth: 23,
  gapPercent: 1,
} as const;

export const CHART_LABELS = {
  activitySummary:
    'Grouped bar chart of activities per day by type. Values are listed in the table that follows.',
  dayColumn: 'Day',
} as const;
