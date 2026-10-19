import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  computed,
  inject,
  input,
} from '@angular/core';
import { ACTIVITY_CHART_SCALE, CHART_LABELS } from '../../../../core/constants/chart.constants';
import { DATE_FORMATS } from '../../../../core/constants/format.constants';
import { LegendItemComponent } from '../../../../shared/ui/legend-item/legend-item.component';
import { ActivityChart, ActivitySeries } from '../../models/dashboard.models';

interface ChartBar {
  readonly series: ActivitySeries;
  readonly value: number;
  readonly height: string;
  readonly tooltip: string;
}

interface ChartGroup {
  readonly label: string;
  readonly bars: readonly ChartBar[];
}

@Component({
  selector: 'app-bar-chart',
  imports: [LegendItemComponent],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent {
  readonly chart = input.required<ActivityChart>();

  private readonly locale = inject(LOCALE_ID);

  protected readonly labels = CHART_LABELS;

  protected readonly ticks: readonly number[] = Array.from(
    { length: ACTIVITY_CHART_SCALE.max / ACTIVITY_CHART_SCALE.tickStep + 1 },
    (_, index) => ACTIVITY_CHART_SCALE.max - index * ACTIVITY_CHART_SCALE.tickStep,
  );

  protected readonly title = computed(() => `${this.chart().total} ${this.chart().totalLabel}`);

  protected readonly subtitle = computed(() => {
    const { periodLabel, startDate, endDate } = this.chart();
    const start = formatDate(startDate, DATE_FORMATS.shortDate, this.locale);
    const end = formatDate(endDate, DATE_FORMATS.shortDate, this.locale);
    return `${periodLabel} • ${start} – ${end}`;
  });

  protected readonly summary = computed(
    () => `${this.title()}, ${this.subtitle()}. ${CHART_LABELS.activitySummary}`,
  );

  protected readonly groups = computed<readonly ChartGroup[]>(() => {
    const { series, days } = this.chart();
    return days.map((day) => ({
      label: day.label,
      bars: series.map(({ key, label }) => {
        const value = day.counts[key];
        return {
          series: key,
          value,
          height: `${(Math.min(value, ACTIVITY_CHART_SCALE.max) / ACTIVITY_CHART_SCALE.max) * 100}%`,
          tooltip: `${day.label} · ${label}: ${value}`,
        };
      }),
    }));
  });
}
