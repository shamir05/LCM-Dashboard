import { TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  function render(inputs: Record<string, unknown>): HTMLElement {
    const fixture = TestBed.createComponent(IconComponent);
    for (const [key, value] of Object.entries(inputs)) {
      fixture.componentRef.setInput(key, value);
    }
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('renders the named svg at the default size, hidden from assistive tech', () => {
    const host = render({ name: 'search' });

    expect(host.querySelector('svg')).not.toBeNull();
    expect(host.style.width).toBe('16px');
    expect(host.getAttribute('aria-hidden')).toBe('true');
    expect(host.getAttribute('role')).toBeNull();
  });

  it('exposes a label as an image when one is given', () => {
    const host = render({ name: 'bell', size: 20, label: 'Notifications' });

    expect(host.style.height).toBe('20px');
    expect(host.getAttribute('role')).toBe('img');
    expect(host.getAttribute('aria-label')).toBe('Notifications');
    expect(host.getAttribute('aria-hidden')).toBeNull();
  });
});
