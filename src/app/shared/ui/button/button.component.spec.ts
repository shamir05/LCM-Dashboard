import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

@Component({
  imports: [ButtonComponent],
  template: `
    <button app-button trailingIcon="chevron-down">Hide</button>
    <button app-button variant="icon" leadingIcon="search" aria-label="Search"></button>
  `,
})
class HostComponent {}

describe('ButtonComponent', () => {
  function render(): HTMLButtonElement[] {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    return Array.from(fixture.nativeElement.querySelectorAll('button'));
  }

  it('renders a secondary button with projected text and a trailing icon', () => {
    const [button] = render();

    expect(button.classList).toContain('button--secondary');
    expect(button.textContent?.trim()).toBe('Hide');
    expect(button.lastElementChild?.tagName).toBe('APP-ICON');
  });

  it('keeps attributes on the native button for icon-only variants', () => {
    const [, button] = render();

    expect(button.classList).toContain('button--icon');
    expect(button.getAttribute('aria-label')).toBe('Search');
    expect(button.querySelectorAll('app-icon').length).toBe(1);
  });
});
