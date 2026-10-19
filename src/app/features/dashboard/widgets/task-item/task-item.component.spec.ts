import { TestBed } from '@angular/core/testing';
import { TASKS_CARD } from '../../data/dashboard.mock';
import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  it('shows a truncatable title with its full text, the due date and the status', () => {
    const task = TASKS_CARD.tasks[0];
    const fixture = TestBed.createComponent(TaskItemComponent);
    fixture.componentRef.setInput('task', task);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    const title = element.querySelector('.task-item__title');
    expect(title?.textContent).toBe(task.title);
    expect(title?.getAttribute('title')).toBe(task.title);

    const time = element.querySelector('time');
    expect(time?.getAttribute('datetime')).toBe('2026-09-22T11:00:00');
    expect(time?.textContent?.trim()).toBe('Sep 22, 11:00 AM');
    expect(element.querySelector('app-badge')?.textContent?.trim()).toBe('Urgent');
  });
});
