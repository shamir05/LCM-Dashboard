import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CASES_CARD } from '../../data/dashboard.mock';
import { CasesCardComponent } from './cases-card.component';

describe('CasesCardComponent', () => {
  it('shows the donut, the case list and a View All link', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(CasesCardComponent);
    fixture.componentRef.setInput('card', CASES_CARD);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h2')?.textContent).toBe('Recent Cases');
    expect(element.querySelector('.card__header a')?.textContent?.trim()).toBe('View All');
    expect(element.querySelector('app-donut-chart')).not.toBeNull();
    expect(element.querySelectorAll('app-case-row').length).toBe(5);
  });
});
