import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ACTIVITIES_CARD,
  AI_SUMMARY,
  CASES_CARD,
  EVENTS_CARD,
  KPI_STATS,
  TASKS_CARD,
  WELCOME,
} from './data/dashboard.mock';
import { ActivitiesCardComponent } from './widgets/activities-card/activities-card.component';
import { AiSummaryCardComponent } from './widgets/ai-summary-card/ai-summary-card.component';
import { CasesCardComponent } from './widgets/cases-card/cases-card.component';
import { EventsCardComponent } from './widgets/events-card/events-card.component';
import { KpiRowComponent } from './widgets/kpi-row/kpi-row.component';
import { TasksCardComponent } from './widgets/tasks-card/tasks-card.component';
import { WelcomeHeaderComponent } from './widgets/welcome-header/welcome-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    WelcomeHeaderComponent,
    KpiRowComponent,
    ActivitiesCardComponent,
    CasesCardComponent,
    AiSummaryCardComponent,
    EventsCardComponent,
    TasksCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected readonly welcome = WELCOME;
  protected readonly kpiStats = KPI_STATS;
  protected readonly activitiesCard = ACTIVITIES_CARD;
  protected readonly casesCard = CASES_CARD;
  protected readonly aiSummary = AI_SUMMARY;
  protected readonly eventsCard = EVENTS_CARD;
  protected readonly tasksCard = TASKS_CARD;
}
