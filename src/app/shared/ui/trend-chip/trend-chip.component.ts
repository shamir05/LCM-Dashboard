import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TREND_LABELS } from '../../../core/constants/labels.constants';
import { TrendDirection } from '../../../core/models/trend.model';
import { IconComponent } from '../icon/icon.component';

const ARROW_SIZE = 12;

@Component({
  selector: 'app-trend-chip',
  imports: [IconComponent],
  templateUrl: './trend-chip.component.html',
  styleUrl: './trend-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"trend-chip trend-chip--" + direction()',
  },
})
export class TrendChipComponent {
  readonly direction = input.required<TrendDirection>();
  readonly percent = input.required<number>();

  protected readonly arrowSize = ARROW_SIZE;
  protected readonly value = computed(() => `${this.percent()}%`);
  protected readonly description = computed(() => TREND_LABELS[this.direction()]);
}
