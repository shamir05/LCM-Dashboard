import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EVENTS_CARD } from '../../data/dashboard.mock';
import { EventsCardComponent } from './events-card.component';

describe('EventsCardComponent', () => {
  it('lists the selected day and updates when another day is picked', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(EventsCardComponent);
    fixture.componentRef.setInput('card', EVENTS_CARD);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h2')?.textContent).toBe('Upcoming Events');
    expect(element.querySelector('.card__header a')?.textContent?.trim()).toBe('Calendar');
    expect(element.querySelectorAll('app-event-item').length).toBe(4);
    expect(element.querySelectorAll('app-week-strip .week-strip__dot').length).toBe(7);

    element.querySelectorAll<HTMLButtonElement>('app-week-strip button')[0].click();
    fixture.detectChanges();

    expect(element.querySelectorAll('app-event-item').length).toBe(0);
    expect(element.querySelector('.events-card__empty')?.textContent).toBe(
      'No events scheduled for this day.',
    );
  });
});
