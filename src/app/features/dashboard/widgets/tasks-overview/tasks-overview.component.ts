import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { STATUS_LABELS } from '../../../../core/constants/status-labels.constants';
import { LegendItemComponent } from '../../../../shared/ui/legend-item/legend-item.component';
import { TasksOverview } from '../../models/dashboard.models';

@Component({
  selector: 'app-tasks-overview',
  imports: [LegendItemComponent],
  templateUrl: './tasks-overview.component.html',
  styleUrl: './tasks-overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksOverviewComponent {
  readonly overview = input.required<TasksOverview>();

  protected readonly totalText = computed(
    () => `${this.overview().totalLabel} ${this.overview().total}`,
  );

  protected readonly segments = computed(() =>
    this.overview().breakdown.map(({ status, count }) => ({
      status,
      count,
      label: STATUS_LABELS[status],
    })),
  );
}
