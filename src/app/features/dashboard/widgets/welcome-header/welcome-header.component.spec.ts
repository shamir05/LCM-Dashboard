import { TestBed } from '@angular/core/testing';
import { WelcomeHeaderComponent } from './welcome-header.component';

describe('WelcomeHeaderComponent', () => {
  it('renders the greeting as the page heading and a machine-readable date', () => {
    const fixture = TestBed.createComponent(WelcomeHeaderComponent);
    fixture.componentRef.setInput('welcome', {
      greeting: 'Welcome Back!',
      userName: 'Qasim',
      date: '2026-09-01',
    });
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h1')?.textContent).toBe('Welcome Back! Qasim');
    const time = element.querySelector('time');
    expect(time?.getAttribute('datetime')).toBe('2026-09-01');
    expect(time?.textContent?.trim()).toBe('Sep 1, 2026');
  });
});
