import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ShellComponent } from './shell.component';

function stubViewport(compact: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: () => ({ matches: compact, addEventListener: () => undefined }),
  });
}

describe('ShellComponent', () => {
  afterEach(() => {
    Reflect.deleteProperty(window, 'matchMedia');
  });

  async function renderCompact() {
    stubViewport(true);
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(ShellComponent);
    fixture.autoDetectChanges();
    await fixture.whenStable();
    const element: HTMLElement = fixture.nativeElement;
    document.body.appendChild(element);

    return {
      fixture,
      element,
      menuButton: element.querySelector<HTMLButtonElement>('#navigation-menu-button')!,
      sidebar: element.querySelector<HTMLElement>('#sidebar')!,
      mainColumn: element.querySelector<HTMLElement>('.shell__main-column')!,
    };
  }

  it('opens the drawer as a modal and moves focus into it', async () => {
    const { fixture, menuButton, sidebar, mainColumn } = await renderCompact();

    menuButton.click();
    await fixture.whenStable();

    expect(menuButton.getAttribute('aria-expanded')).toBe('true');
    expect(sidebar.getAttribute('role')).toBe('dialog');
    expect(sidebar.getAttribute('aria-modal')).toBe('true');
    expect(mainColumn.inert).toBe(true);
    expect(sidebar.contains(document.activeElement)).toBe(true);
  });

  it('closes on Escape and returns focus to the menu button', async () => {
    const { fixture, menuButton, sidebar, mainColumn } = await renderCompact();

    menuButton.click();
    await fixture.whenStable();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();

    expect(sidebar.getAttribute('role')).toBeNull();
    expect(mainColumn.inert).toBe(false);
    expect(document.activeElement).toBe(menuButton);
  });

  it('closes when the backdrop is clicked', async () => {
    const { fixture, element, menuButton } = await renderCompact();

    menuButton.click();
    await fixture.whenStable();
    element.querySelector<HTMLButtonElement>('.shell__backdrop')!.click();
    await fixture.whenStable();

    expect(menuButton.getAttribute('aria-expanded')).toBe('false');
  });
});
