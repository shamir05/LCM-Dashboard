import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ACTIVITIES_CARD, KPI_STATS, WELCOME } from './data/dashboard.mock';
import { ActivitiesCardComponent } from './widgets/activities-card/activities-card.component';
import { KpiRowComponent } from './widgets/kpi-row/kpi-row.component';
import { WelcomeHeaderComponent } from './widgets/welcome-header/welcome-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [WelcomeHeaderComponent, KpiRowComponent, ActivitiesCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected readonly welcome = WELCOME;
  protected readonly kpiStats = KPI_STATS;
  protected readonly activitiesCard = ACTIVITIES_CARD;
}
