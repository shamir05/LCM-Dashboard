import { TrendDirection } from '../models/trend.model';

export const APP_NAME = 'LegalFlow';

export const PAGE_TITLES = {
  dashboard: `Dashboard | ${APP_NAME}`,
} as const;

export const SKIP_LINK_LABEL = 'Skip to main content';

export const SIDEBAR_LABELS = {
  sidebar: 'Sidebar',
  homeLink: `${APP_NAME} home`,
  collapse: 'Collapse sidebar',
  expand: 'Expand sidebar',
  mainNav: 'Main',
} as const;

export const DOWNLOAD_LABEL = 'Download';

export const TREND_LABELS: Readonly<Record<TrendDirection, string>> = {
  up: 'Increased by',
  down: 'Decreased by',
};
