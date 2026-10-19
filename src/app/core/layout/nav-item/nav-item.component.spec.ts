import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { NavItemComponent } from './nav-item.component';

@Component({ template: '' })
class BlankPageComponent {}

describe('NavItemComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([{ path: 'dashboard', component: BlankPageComponent }])],
    });
  });

  it('marks the link for the current route as active', async () => {
    await TestBed.inject(Router).navigateByUrl('/dashboard');

    const fixture = TestBed.createComponent(NavItemComponent);
    fixture.componentRef.setInput('link', {
      label: 'Dashboard',
      route: '/dashboard',
      icon: 'home',
    });
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.classList).toContain('nav-item--active');
    expect(link.getAttribute('aria-current')).toBe('page');
  });
});
