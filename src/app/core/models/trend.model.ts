export type TrendDirection = 'up' | 'down';

export interface Trend {
  readonly direction: TrendDirection;
  readonly percent: number;
}
