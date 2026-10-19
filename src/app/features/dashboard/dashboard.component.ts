import { ChangeDetectionStrategy, Component } from '@angular/core';
import { KPI_STATS, WELCOME } from './data/dashboard.mock';
import { KpiRowComponent } from './widgets/kpi-row/kpi-row.component';
import { WelcomeHeaderComponent } from './widgets/welcome-header/welcome-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [WelcomeHeaderComponent, KpiRowComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected readonly welcome = WELCOME;
  protected readonly kpiStats = KPI_STATS;
}
