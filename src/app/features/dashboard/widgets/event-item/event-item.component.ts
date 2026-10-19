import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  computed,
  inject,
  input,
} from '@angular/core';
import { DATE_FORMATS } from '../../../../core/constants/format.constants';
import { ACTION_LABELS } from '../../../../core/constants/labels.constants';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { EventItem } from '../../models/dashboard.models';

const MEET_ICON_SIZE = 27;

@Component({
  selector: 'app-event-item',
  imports: [IconComponent],
  templateUrl: './event-item.component.html',
  styleUrl: './event-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventItemComponent {
  readonly event = input.required<EventItem>();

  private readonly locale = inject(LOCALE_ID);

  protected readonly meetIconSize = MEET_ICON_SIZE;
  protected readonly joinLabel = ACTION_LABELS.joinMeeting;

  protected readonly timeRange = computed(() => {
    const { start, end } = this.event();
    const from = formatDate(start, DATE_FORMATS.time, this.locale);
    const to = formatDate(end, DATE_FORMATS.time, this.locale);
    return `${from} - ${to}`;
  });

  protected readonly meetingLabel = computed(() => `${this.joinLabel}: ${this.event().title}`);
}
