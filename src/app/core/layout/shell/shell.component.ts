import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SKIP_LINK_LABEL } from '../../constants/labels.constants';
import { LayoutService } from '../layout.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MENU_BUTTON_ID, TopbarComponent } from '../topbar/topbar.component';

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeDrawer()',
  },
})
export class ShellComponent {
  private readonly layout = inject(LayoutService);
  private readonly injector = inject(Injector);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  protected readonly skipLinkLabel = SKIP_LINK_LABEL;
  protected readonly sidebarCollapsed = this.layout.sidebarCollapsed;
  protected readonly drawerOpen = this.layout.drawerOpen;

  private wasDrawerOpen = false;

  constructor() {
    // Move focus into the drawer when it opens and back to the menu button when it closes.
    effect(() => {
      const open = this.drawerOpen();
      if (open === this.wasDrawerOpen) {
        return;
      }
      this.wasDrawerOpen = open;
      afterNextRender(() => (open ? this.focusDrawer() : this.focusMenuButton()), {
        injector: this.injector,
      });
    });
  }

  protected closeDrawer(): void {
    this.layout.closeDrawer();
  }

  // A plain #fragment link would navigate to the app root because of <base href>.
  protected skipToContent(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }

  private focusDrawer(): void {
    this.host.nativeElement
      .querySelector<HTMLElement>(`app-sidebar ${FOCUSABLE_SELECTOR}`)
      ?.focus();
  }

  private focusMenuButton(): void {
    this.host.nativeElement.querySelector<HTMLElement>(`#${MENU_BUTTON_ID}`)?.focus();
  }
}
