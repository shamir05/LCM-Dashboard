import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScrollPanelComponent } from './scroll-panel.component';

@Component({
  imports: [ScrollPanelComponent],
  template: `
    <app-scroll-panel label="Recent activities">
      <li>First</li>
      <li>Second</li>
    </app-scroll-panel>
  `,
})
class HostComponent {}

describe('ScrollPanelComponent', () => {
  it('is a keyboard-focusable labelled region wrapping a real list', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const panel: HTMLElement = fixture.nativeElement.querySelector('app-scroll-panel');

    expect(panel.getAttribute('role')).toBe('region');
    expect(panel.getAttribute('tabindex')).toBe('0');
    expect(panel.getAttribute('aria-label')).toBe('Recent activities');
    expect(panel.querySelectorAll('ul > li').length).toBe(2);
  });
});
