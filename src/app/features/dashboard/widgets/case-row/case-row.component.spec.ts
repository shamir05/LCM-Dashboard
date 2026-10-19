import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CASES_CARD } from '../../data/dashboard.mock';
import { CaseRowComponent } from './case-row.component';

describe('CaseRowComponent', () => {
  it('links the case number and shows the client, type and status', () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(CaseRowComponent);
    fixture.componentRef.setInput('item', CASES_CARD.cases[1]);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    const link = element.querySelector('a');
    expect(link?.textContent).toBe('#23567');
    expect(link?.getAttribute('href')).toBe('/matters');
    expect(element.querySelector('.case-row__client')?.textContent).toBe('Ethan Carter');
    expect(element.querySelector('.case-row__type')?.textContent).toBe('Breach of Contract');
    expect(element.querySelector('app-badge')?.textContent?.trim()).toBe('Active');
  });
});
