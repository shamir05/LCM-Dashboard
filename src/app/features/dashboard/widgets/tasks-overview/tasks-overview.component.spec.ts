import { TestBed } from '@angular/core/testing';
import { TASKS_CARD } from '../../data/dashboard.mock';
import { TasksOverviewComponent } from './tasks-overview.component';

describe('TasksOverviewComponent', () => {
  it('shows the total, a legend with counts and a bar segment per status', () => {
    const fixture = TestBed.createComponent(TasksOverviewComponent);
    fixture.componentRef.setInput('overview', TASKS_CARD.overview);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.tasks-overview__total')?.textContent).toBe('Total 21');

    const legend = Array.from(element.querySelectorAll('app-legend-item')).map((item) =>
      item.textContent?.replace(/\s+/g, ' ').trim(),
    );
    expect(legend).toEqual(['Urgent 2', 'To Do 12', 'In Progress 8', 'On Hold 5']);

    const segments = element.querySelectorAll<HTMLElement>('.tasks-overview__segment');
    expect(Array.from(segments).map((segment) => segment.style.flexGrow)).toEqual([
      '2',
      '12',
      '8',
      '5',
    ]);
  });
});
