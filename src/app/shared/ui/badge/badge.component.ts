import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { STATUS_LABELS } from '../../../core/constants/status-labels.constants';
import { Status } from '../../../core/models/status.model';

export type BadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
})
export class BadgeComponent {
  readonly status = input.required<Status>();
  readonly size = input<BadgeSize>('md');

  protected readonly label = computed(() => STATUS_LABELS[this.status()]);
  protected readonly hostClass = computed(
    () => `badge badge--${this.status()} badge--${this.size()}`,
  );
}
