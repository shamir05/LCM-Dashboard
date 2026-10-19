import { TestBed } from '@angular/core/testing';
import { EVENTS_CARD } from '../../data/dashboard.mock';
import { EventItemComponent } from './event-item.component';

describe('EventItemComponent', () => {
  function render(index: number): HTMLElement {
    const fixture = TestBed.createComponent(EventItemComponent);
    fixture.componentRef.setInput('event', EVENTS_CARD.events[index]);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('shows the title, time range and a labelled meeting link', () => {
    const element = render(0);

    expect(element.querySelector('.event-item__title')?.textContent).toBe(
      'Memorandum of Understanding',
    );
    expect(element.querySelector('.event-item__time')?.textContent).toBe('12:30 PM - 1:50 PM');

    const link = element.querySelector('a');
    expect(link?.getAttribute('aria-label')).toBe(
      'Join on Google Meet: Memorandum of Understanding',
    );
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('leaves out the meeting link when there is no meeting', () => {
    expect(render(2).querySelector('a')).toBeNull();
  });
});
