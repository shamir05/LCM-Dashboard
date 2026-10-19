import { TestBed } from '@angular/core/testing';
import { KPI_STATS } from '../../data/dashboard.mock';
import { StatCardComponent } from './stat-card.component';

describe('StatCardComponent', () => {
  function render(index: number): HTMLElement {
    const fixture = TestBed.createComponent(StatCardComponent);
    fixture.componentRef.setInput('stat', KPI_STATS[index]);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('shows the label, value and tone', () => {
    const host = render(0);

    expect(host.classList).toContain('stat-card--brand');
    expect(host.querySelector('.stat-card__label')?.textContent).toBe('Active Cases');
    expect(host.querySelector('.stat-card__value')?.textContent).toBe('53');
  });

  it('formats currency values in pounds', () => {
    const host = render(3);

    expect(host.querySelector('.stat-card__value')?.textContent).toBe('£7,270.56');
  });
});
