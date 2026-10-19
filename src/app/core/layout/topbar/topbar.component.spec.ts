import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('renders a labelled breadcrumb and labelled icon buttons', () => {
    const fixture = TestBed.createComponent(TopbarComponent);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    const breadcrumb = element.querySelector('nav');
    expect(breadcrumb?.getAttribute('aria-label')).toBe('Breadcrumb');
    expect(breadcrumb?.querySelector('[aria-current="page"]')?.textContent).toBe('Home');

    const labels = Array.from(element.querySelectorAll('button[aria-label]')).map((button) =>
      button.getAttribute('aria-label'),
    );
    expect(labels).toEqual(['Search', 'Notifications, 3 unread']);
    expect(element.querySelector('.topbar__unread-dot')).not.toBeNull();
  });
});
