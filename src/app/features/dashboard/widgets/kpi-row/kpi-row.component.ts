import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { KpiStat } from '../../models/dashboard.models';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-kpi-row',
  imports: [StatCardComponent],
  templateUrl: './kpi-row.component.html',
  styleUrl: './kpi-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KpiRowComponent {
  readonly stats = input.required<readonly KpiStat[]>();
}
