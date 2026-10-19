import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  computed,
  inject,
  input,
  model,
} from '@angular/core';
import { DATE_FORMATS } from '../../../../core/constants/format.constants';
import { EVENT_LABELS } from '../../../../core/constants/labels.constants';
import { WeekDay } from '../../models/dashboard.models';

interface WeekDayView {
  readonly date: string;
  readonly weekday: string;
  readonly dayOfMonth: string;
  readonly label: string;
  readonly dots: readonly number[];
  readonly selected: boolean;
}

@Component({
  selector: 'app-week-strip',
  templateUrl: './week-strip.component.html',
  styleUrl: './week-strip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekStripComponent {
  readonly days = input.required<readonly WeekDay[]>();
  readonly selectedDate = model.required<string>();

  private readonly locale = inject(LOCALE_ID);

  protected readonly groupLabel = EVENT_LABELS.week;

  protected readonly view = computed<readonly WeekDayView[]>(() =>
    this.days().map(({ date, eventCount }) => ({
      date,
      weekday: formatDate(date, DATE_FORMATS.weekday, this.locale),
      dayOfMonth: formatDate(date, DATE_FORMATS.dayOfMonth, this.locale),
      label: `${formatDate(date, DATE_FORMATS.longDay, this.locale)}, ${this.describeCount(eventCount)}`,
      dots: Array.from({ length: eventCount }, (_, index) => index),
      selected: date === this.selectedDate(),
    })),
  );

  protected select(date: string): void {
    this.selectedDate.set(date);
  }

  private describeCount(count: number): string {
    if (count === 0) {
      return EVENT_LABELS.noEvents;
    }
    return count === 1 ? EVENT_LABELS.oneEvent : `${count} ${EVENT_LABELS.manyEvents}`;
  }
}
