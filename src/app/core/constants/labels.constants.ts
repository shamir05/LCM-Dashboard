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
  secondaryNav: 'Secondary',
  profileOptions: 'Profile options',
} as const;

export const TOPBAR_LABELS = {
  breadcrumb: 'Breadcrumb',
  aiAssistant: 'Ai Assistant',
  search: 'Search',
  notifications: 'Notifications',
  unread: 'unread',
} as const;

export const ACTION_LABELS = {
  viewAll: 'View All',
  calendar: 'Calendar',
  hide: 'Hide',
  show: 'Show',
  joinMeeting: 'Join on Google Meet',
} as const;

export const LIST_LABELS = {
  activities: 'Recent activities',
  cases: 'Recent cases',
  events: 'Events for the selected day',
  tasks: 'Upcoming tasks',
} as const;

export const EVENT_LABELS = {
  week: 'Select a day',
  noEvents: 'No events',
  oneEvent: '1 event',
  manyEvents: 'events',
  emptyDay: 'No events scheduled for this day.',
} as const;

export const DOWNLOAD_LABEL = 'Download';

export const TREND_LABELS: Readonly<Record<TrendDirection, string>> = {
  up: 'Increased by',
  down: 'Decreased by',
};
