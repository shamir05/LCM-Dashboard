import { TestBed } from '@angular/core/testing';
import { TrendChipComponent } from './trend-chip.component';

describe('TrendChipComponent', () => {
  it('shows the percentage with a screen reader description of the direction', () => {
    const fixture = TestBed.createComponent(TrendChipComponent);
    fixture.componentRef.setInput('direction', 'down');
    fixture.componentRef.setInput('percent', 14);
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement;

    expect(host.classList).toContain('trend-chip--down');
    expect(host.querySelector('.visually-hidden')?.textContent).toBe('Decreased by');
    expect(host.textContent).toContain('14%');
  });
});
