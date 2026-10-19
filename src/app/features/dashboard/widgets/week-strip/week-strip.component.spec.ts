import { TestBed } from '@angular/core/testing';
import { EVENTS_CARD } from '../../data/dashboard.mock';
import { WeekStripComponent } from './week-strip.component';

const WEEK = EVENTS_CARD.week.map((date, index) => ({ date, eventCount: index === 1 ? 4 : 0 }));

describe('WeekStripComponent', () => {
  function render() {
    const fixture = TestBed.createComponent(WeekStripComponent);
    fixture.componentRef.setInput('days', WEEK);
    fixture.componentRef.setInput('selectedDate', EVENTS_CARD.selectedDate);
    fixture.detectChanges();
    const buttons = Array.from<HTMLButtonElement>(fixture.nativeElement.querySelectorAll('button'));
    return { fixture, buttons };
  }

  it('derives weekday and date labels from the data', () => {
    const { buttons } = render();

    expect(buttons.length).toBe(7);
    expect(buttons[0].querySelector('.week-strip__weekday')?.textContent).toBe('Mon');
    expect(buttons[6].querySelector('.week-strip__date')?.textContent).toBe('13');
    expect(buttons[1].getAttribute('aria-label')).toBe('Tuesday, September 8, 4 events');
    expect(buttons[1].querySelectorAll('.week-strip__dot').length).toBe(4);
  });

  it('marks the selected day as pressed and moves the selection on click', () => {
    const { fixture, buttons } = render();

    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('false');

    buttons[3].click();
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedDate()).toBe('2026-09-10');
    expect(buttons[3].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[1].getAttribute('aria-pressed')).toBe('false');
  });
});
