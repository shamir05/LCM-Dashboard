import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavGroup } from '../../models/nav-item.model';
import { LayoutService } from '../layout.service';
import { NavGroupComponent } from './nav-group.component';

const GROUP: NavGroup = {
  label: 'User & Access',
  icon: 'user',
  children: [
    { label: 'Users', route: '/access/users' },
    { label: 'Roles', route: '/access/roles' },
  ],
};

describe('NavGroupComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  function render() {
    const fixture = TestBed.createComponent(NavGroupComponent);
    fixture.componentRef.setInput('group', GROUP);
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement;
    return {
      fixture,
      toggle: host.querySelector('button')!,
      list: host.querySelector('ul')!,
    };
  }

  it('toggles its children and keeps aria-expanded in sync', () => {
    const { fixture, toggle, list } = render();

    expect(toggle.getAttribute('aria-controls')).toBe(list.id);
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(list.hidden).toBe(true);

    toggle.click();
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(list.hidden).toBe(false);
    expect(list.querySelectorAll('a').length).toBe(2);
  });

  it('opens the sidebar and the group when clicked in the icon rail', () => {
    const layout = TestBed.inject(LayoutService);
    layout.toggleSidebar();
    const { fixture, toggle, list } = render();

    toggle.click();
    fixture.detectChanges();

    expect(layout.sidebarCollapsed()).toBe(false);
    expect(list.hidden).toBe(false);
  });
});
