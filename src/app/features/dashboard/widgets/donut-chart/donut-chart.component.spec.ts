import { TestBed } from '@angular/core/testing';
import { CASES_CARD } from '../../data/dashboard.mock';
import { DonutChartComponent } from './donut-chart.component';

describe('DonutChartComponent', () => {
  function render(): HTMLElement {
    const fixture = TestBed.createComponent(DonutChartComponent);
    fixture.componentRef.setInput('overview', CASES_CARD.overview);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  function dashLength(circle: Element): number {
    return Number(circle.getAttribute('stroke-dasharray')?.split(' ')[0]);
  }

  it('draws one segment per status, sized by its share of the total', () => {
    const segments = render().querySelectorAll('circle');

    expect(segments.length).toBe(2);
    expect(segments[0].classList).toContain('donut-chart__segment--active');
    expect(dashLength(segments[0])).toBeGreaterThan(dashLength(segments[1]));
  });

  it('shows the centre total and an accessible summary', () => {
    const element = render();

    expect(element.querySelector('.donut-chart__total')?.textContent).toBe('53');
    expect(element.querySelector('[role="img"]')?.getAttribute('aria-label')).toBe(
      'Cases Overview: 53 Cases. Active 4, Draft 3',
    );
  });
});
