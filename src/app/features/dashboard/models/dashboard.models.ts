import { IconName } from '../../../core/models/icon-name.model';
import { CaseStatus, TaskStatus } from '../../../core/models/status.model';
import { Trend } from '../../../core/models/trend.model';

export interface Welcome {
  readonly greeting: string;
  readonly userName: string;
  readonly date: string;
}

export type KpiTone = 'brand' | 'green' | 'purple' | 'yellow';

export type KpiValueFormat = 'number' | 'currency';

export interface KpiStat {
  readonly id: string;
  readonly label: string;
  readonly icon: IconName;
  readonly tone: KpiTone;
  readonly value: number;
  readonly format: KpiValueFormat;
  readonly trend: Trend;
}

export type ActivitySeries = 'task' | 'matter' | 'document';

export interface ActivitySeriesLegend {
  readonly key: ActivitySeries;
  readonly label: string;
}

export interface ActivityDay {
  readonly label: string;
  readonly counts: Readonly<Record<ActivitySeries, number>>;
}

export interface ActivityChart {
  readonly total: number;
  readonly totalLabel: string;
  readonly periodLabel: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly series: readonly ActivitySeriesLegend[];
  readonly days: readonly ActivityDay[];
}

export interface ActivityLink {
  readonly kind: 'link';
  readonly label: string;
  readonly route: string;
}

export interface ActivityFile {
  readonly kind: 'file';
  readonly fileName: string;
}

export interface Activity {
  readonly id: string;
  readonly description: string;
  readonly timeLabel: string;
  readonly attachment: ActivityLink | ActivityFile;
}

export interface ActivitiesCard {
  readonly title: string;
  readonly chart: ActivityChart;
  readonly activities: readonly Activity[];
}

export interface StatusCount<T> {
  readonly status: T;
  readonly count: number;
}

export interface CasesOverview {
  readonly title: string;
  readonly total: number;
  readonly totalLabel: string;
  readonly breakdown: readonly StatusCount<CaseStatus>[];
}

export interface CaseItem {
  readonly id: string;
  readonly caseNumber: string;
  readonly clientName: string;
  readonly caseType: string;
  readonly status: CaseStatus;
  readonly route: string;
}

export interface CasesCard {
  readonly title: string;
  readonly overview: CasesOverview;
  readonly cases: readonly CaseItem[];
}

export interface AiSummary {
  readonly title: string;
  readonly summary: string;
}

export interface WeekDay {
  readonly date: string;
  readonly eventCount: number;
}

export interface EventItem {
  readonly id: string;
  readonly title: string;
  readonly start: string;
  readonly end: string;
  readonly meetingUrl?: string;
}

export interface EventsCard {
  readonly title: string;
  readonly selectedDate: string;
  readonly week: readonly string[];
  readonly events: readonly EventItem[];
}

export interface TasksOverview {
  readonly title: string;
  readonly total: number;
  readonly totalLabel: string;
  readonly breakdown: readonly StatusCount<TaskStatus>[];
}

export interface TaskItem {
  readonly id: string;
  readonly title: string;
  readonly dueDate: string;
  readonly status: TaskStatus;
}

export interface TasksCard {
  readonly title: string;
  readonly overview: TasksOverview;
  readonly tasks: readonly TaskItem[];
}
