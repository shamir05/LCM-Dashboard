import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('collapses to a rail and updates the toggle state', () => {
    const fixture = TestBed.createComponent(SidebarComponent);
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement;
    const toggle = host.querySelector<HTMLButtonElement>('.sidebar__toggle')!;

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.getAttribute('aria-label')).toBe('Collapse sidebar');

    toggle.click();
    fixture.detectChanges();

    expect(host.classList).toContain('sidebar--collapsed');
    expect(toggle.classList).toContain('button--icon-ghost');
    expect(toggle.classList).toContain('sidebar__toggle');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-label')).toBe('Expand sidebar');
  });
});
