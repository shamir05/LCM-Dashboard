import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DONUT_CHART_GEOMETRY } from '../../../../core/constants/chart.constants';
import { STATUS_LABELS } from '../../../../core/constants/status-labels.constants';
import { CaseStatus } from '../../../../core/models/status.model';
import { LegendItemComponent } from '../../../../shared/ui/legend-item/legend-item.component';
import { CasesOverview } from '../../models/dashboard.models';

interface DonutSegment {
  readonly status: CaseStatus;
  readonly label: string;
  readonly count: number;
  readonly dashArray: string;
  readonly dashOffset: number;
}

// Segment lengths are expressed as a percentage of the circumference (pathLength = 100).
const PATH_LENGTH = 100;
const { size, strokeWidth, gapPercent } = DONUT_CHART_GEOMETRY;
const RADIUS = (size - strokeWidth) / 2;
const CAP_PERCENT = (strokeWidth / 2 / (2 * Math.PI * RADIUS)) * PATH_LENGTH;

@Component({
  selector: 'app-donut-chart',
  imports: [LegendItemComponent],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonutChartComponent {
  readonly overview = input.required<CasesOverview>();

  protected readonly viewBox = `0 0 ${size} ${size}`;
  protected readonly center = size / 2;
  protected readonly radius = RADIUS;
  protected readonly strokeWidth = strokeWidth;
  protected readonly pathLength = PATH_LENGTH;

  protected readonly segments = computed<readonly DonutSegment[]>(() => {
    const breakdown = this.overview().breakdown;
    const sum = breakdown.reduce((total, item) => total + item.count, 0);
    let start = 0;

    return breakdown.map(({ status, count }) => {
      const share = sum > 0 ? (count / sum) * PATH_LENGTH : 0;
      // Round caps extend past each end, so trim them off to keep an even gap.
      const length = Math.max(share - gapPercent - CAP_PERCENT * 2, 0);
      const segment = {
        status,
        label: STATUS_LABELS[status],
        count,
        dashArray: `${length} ${PATH_LENGTH - length}`,
        dashOffset: -(start + CAP_PERCENT + gapPercent / 2),
      };
      start += share;
      return segment;
    });
  });

  protected readonly summary = computed(() => {
    const { title, total, totalLabel } = this.overview();
    const parts = this.segments().map((segment) => `${segment.label} ${segment.count}`);
    return `${title}: ${total} ${totalLabel}. ${parts.join(', ')}`;
  });
}
