import { TestBed } from '@angular/core/testing';
import { LegendItemComponent } from './legend-item.component';

describe('LegendItemComponent', () => {
  function render(inputs: Record<string, unknown>): HTMLElement {
    const fixture = TestBed.createComponent(LegendItemComponent);
    for (const [key, value] of Object.entries(inputs)) {
      fixture.componentRef.setInput(key, value);
    }
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('shows the label and count', () => {
    const host = render({ label: 'Active', count: 4 });

    expect(host.querySelector('.legend-item__label')?.textContent).toBe('Active');
    expect(host.querySelector('.legend-item__count')?.textContent).toBe('4');
    expect(host.textContent?.replace(/\s+/g, ' ').trim()).toBe('Active 4');
  });

  it('leaves out the count when none is given', () => {
    const host = render({ label: 'Task', size: 'sm' });

    expect(host.querySelector('.legend-item__count')).toBeNull();
    expect(host.classList).toContain('legend-item--sm');
  });
});
