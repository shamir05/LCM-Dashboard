import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LinkChipComponent } from './link-chip.component';

@Component({
  imports: [LinkChipComponent],
  template: `<a app-link-chip href="/tasks">Prepare Hearing Documents</a>`,
})
class HostComponent {}

describe('LinkChipComponent', () => {
  it('renders a real link with the projected label and an arrow icon', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');

    expect(link.getAttribute('href')).toBe('/tasks');
    expect(link.querySelector('.link-chip__label')?.textContent).toBe('Prepare Hearing Documents');
    expect(link.querySelector('app-icon')).not.toBeNull();
  });
});
