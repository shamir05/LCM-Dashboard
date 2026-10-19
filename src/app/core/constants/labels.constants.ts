import { TrendDirection } from '../models/trend.model';

export const TREND_LABELS: Readonly<Record<TrendDirection, string>> = {
  up: 'Increased by',
  down: 'Decreased by',
};
