import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ACTIVITIES_CARD } from '../../data/dashboard.mock';
import { ActivityItemComponent } from './activity-item.component';

describe('ActivityItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  function render(index: number): HTMLElement {
    const fixture = TestBed.createComponent(ActivityItemComponent);
    fixture.componentRef.setInput('activity', ACTIVITIES_CARD.activities[index]);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('shows a link chip for linked activities', () => {
    const element = render(0);

    expect(element.querySelector('.activity-item__description')?.textContent).toBe(
      'You completed an assigned task',
    );
    expect(element.querySelector('a')?.getAttribute('href')).toBe('/tasks');
    expect(element.querySelector('app-file-chip')).toBeNull();
  });

  it('shows a file chip for uploaded documents', () => {
    const element = render(2);

    expect(element.querySelector('app-file-chip')?.textContent).toContain('Evidence_Report.pdf');
    expect(element.querySelector('a')).toBeNull();
  });
});
