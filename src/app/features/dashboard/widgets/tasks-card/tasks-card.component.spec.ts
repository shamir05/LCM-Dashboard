import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TASKS_CARD } from '../../data/dashboard.mock';
import { TasksCardComponent } from './tasks-card.component';

describe('TasksCardComponent', () => {
  it('shows the overview, the task list and a View All link', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(TasksCardComponent);
    fixture.componentRef.setInput('card', TASKS_CARD);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h2')?.textContent).toBe('Upcoming Tasks');
    expect(element.querySelector('.card__header a')?.getAttribute('href')).toBe('/tasks');
    expect(element.querySelector('app-tasks-overview')).not.toBeNull();
    expect(element.querySelectorAll('app-task-item').length).toBe(5);
  });
});
