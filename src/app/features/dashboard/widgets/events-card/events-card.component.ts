import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ACTION_LABELS,
  EVENT_LABELS,
  LIST_LABELS,
} from '../../../../core/constants/labels.constants';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { ScrollPanelComponent } from '../../../../shared/ui/scroll-panel/scroll-panel.component';
import { EventsCard, WeekDay } from '../../models/dashboard.models';
import { EventItemComponent } from '../event-item/event-item.component';
import { WeekStripComponent } from '../week-strip/week-strip.component';

// Length of the YYYY-MM-DD part of an ISO date-time.
const ISO_DATE_LENGTH = 10;

@Component({
  selector: 'app-events-card',
  imports: [
    RouterLink,
    ButtonComponent,
    CardComponent,
    ScrollPanelComponent,
    EventItemComponent,
    WeekStripComponent,
  ],
  templateUrl: './events-card.component.html',
  styleUrl: './events-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsCardComponent {
  readonly card = input.required<EventsCard>();

  protected readonly calendarLabel = ACTION_LABELS.calendar;
  protected readonly listLabel = LIST_LABELS.events;
  protected readonly emptyLabel = EVENT_LABELS.emptyDay;

  protected readonly selectedDate = linkedSignal(() => this.card().selectedDate);

  protected readonly weekDays = computed<readonly WeekDay[]>(() =>
    this.card().week.map((date) => ({
      date,
      eventCount: this.card().events.filter((event) => this.dateOf(event.start) === date).length,
    })),
  );

  protected readonly visibleEvents = computed(() =>
    this.card().events.filter((event) => this.dateOf(event.start) === this.selectedDate()),
  );

  private dateOf(dateTime: string): string {
    return dateTime.slice(0, ISO_DATE_LENGTH);
  }
}
