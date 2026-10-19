import { TestBed } from '@angular/core/testing';
import { ACTIVITIES_CARD } from '../../data/dashboard.mock';
import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  function render(): HTMLElement {
    const fixture = TestBed.createComponent(BarChartComponent);
    fixture.componentRef.setInput('chart', ACTIVITIES_CARD.chart);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('renders the title, subtitle and a legend entry per series', () => {
    const element = render();

    expect(element.querySelector('h3')?.textContent).toBe('112 Activities');
    expect(element.querySelector('.bar-chart__subtitle')?.textContent).toBe(
      'This Week • Oct 12 – Oct 18',
    );

    const legendItem = element.querySelector('app-legend-item');
    expect(legendItem?.classList).toContain('bar-chart__legend-item--task');
    expect(legendItem?.classList).toContain('legend-item--sm');
  });

  it('sizes each bar relative to the chart maximum', () => {
    const element = render();
    const bars = element.querySelectorAll<HTMLElement>('.bar-chart__bar');

    expect(bars.length).toBe(15);
    expect(bars[0].classList).toContain('bar-chart__bar--task');
    expect(bars[0].style.height).toBe(`${(10 / 15) * 100}%`);
    expect(bars[6].style.height).toBe('100%');
  });

  it('exposes the chart as a labelled image with a data table for screen readers', () => {
    const element = render();

    expect(element.querySelector('[role="img"]')?.getAttribute('aria-label')).toContain(
      '112 Activities',
    );
    expect(element.querySelectorAll('tbody tr').length).toBe(5);
  });
});
