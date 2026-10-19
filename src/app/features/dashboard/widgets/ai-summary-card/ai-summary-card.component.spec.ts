import { TestBed } from '@angular/core/testing';
import { AI_SUMMARY } from '../../data/dashboard.mock';
import { AiSummaryCardComponent } from './ai-summary-card.component';

describe('AiSummaryCardComponent', () => {
  it('hides and shows the summary with a labelled toggle', () => {
    const fixture = TestBed.createComponent(AiSummaryCardComponent);
    fixture.componentRef.setInput('summary', AI_SUMMARY);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    const toggle = element.querySelector('button')!;
    const body = element.querySelector<HTMLElement>('.card__body')!;

    expect(toggle.textContent?.trim()).toBe('Hide');
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.getAttribute('aria-controls')).toBe(body.id);
    expect(body.hidden).toBe(false);

    toggle.click();
    fixture.detectChanges();

    expect(toggle.textContent?.trim()).toBe('Show');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(body.hidden).toBe(true);
  });
});
