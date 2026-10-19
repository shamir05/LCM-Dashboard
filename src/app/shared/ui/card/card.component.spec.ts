import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

@Component({
  imports: [CardComponent],
  template: `
    <app-card title="Recent Cases" icon="briefcase" [collapsed]="collapsed()">
      <button cardAction>View All</button>
      <p>Body content</p>
    </app-card>
  `,
})
class HostComponent {
  readonly collapsed = signal(false);
}

describe('CardComponent', () => {
  it('labels the section with its h2 and projects the action and body', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    const section = element.querySelector('section');
    const heading = element.querySelector('h2');

    expect(heading?.textContent).toBe('Recent Cases');
    expect(section?.getAttribute('aria-labelledby')).toBe(heading?.id);
    expect(element.querySelector('.card__header button')?.textContent).toBe('View All');
    expect(element.querySelector('.card__body p')?.textContent).toBe('Body content');
  });

  it('hides the body when collapsed', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.componentInstance.collapsed.set(true);
    fixture.detectChanges();

    const body: HTMLElement = fixture.nativeElement.querySelector('.card__body');
    expect(body.hidden).toBe(true);
  });
});
