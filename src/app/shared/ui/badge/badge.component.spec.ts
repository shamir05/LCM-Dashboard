import { TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  it('shows the label for its status with matching classes', () => {
    const fixture = TestBed.createComponent(BadgeComponent);
    fixture.componentRef.setInput('status', 'in-progress');
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement;

    expect(host.textContent?.trim()).toBe('In Progress');
    expect(host.classList).toContain('badge--in-progress');
    expect(host.classList).toContain('badge--sm');
  });
});
