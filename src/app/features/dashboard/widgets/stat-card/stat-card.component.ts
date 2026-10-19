import { formatCurrency, formatNumber, getCurrencySymbol } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  computed,
  inject,
  input,
} from '@angular/core';
import { CURRENCY_CODE } from '../../../../core/constants/format.constants';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { TrendChipComponent } from '../../../../shared/ui/trend-chip/trend-chip.component';
import { KpiStat } from '../../models/dashboard.models';

const ICON_SIZE = 18;

@Component({
  selector: 'app-stat-card',
  imports: [IconComponent, TrendChipComponent],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"stat-card stat-card--" + stat().tone',
  },
})
export class StatCardComponent {
  readonly stat = input.required<KpiStat>();

  private readonly locale = inject(LOCALE_ID);

  protected readonly iconSize = ICON_SIZE;
  protected readonly formattedValue = computed(() => {
    const { value, format } = this.stat();
    return format === 'currency'
      ? formatCurrency(
          value,
          this.locale,
          getCurrencySymbol(CURRENCY_CODE, 'narrow'),
          CURRENCY_CODE,
        )
      : formatNumber(value, this.locale);
  });
}
