import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ACTIVITIES_CARD } from '../../data/dashboard.mock';
import { ActivitiesCardComponent } from './activities-card.component';

describe('ActivitiesCardComponent', () => {
  it('combines the chart with a scrollable list of activities', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(ActivitiesCardComponent);
    fixture.componentRef.setInput('card', ACTIVITIES_CARD);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h2')?.textContent).toBe('Your Recent Activities');
    expect(element.querySelector('app-bar-chart')).not.toBeNull();
    expect(element.querySelectorAll('app-scroll-panel li').length).toBe(5);
  });
});
