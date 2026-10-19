import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SKIP_LINK_LABEL } from '../../constants/labels.constants';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { LayoutService } from '../layout.service';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  protected readonly skipLinkLabel = SKIP_LINK_LABEL;
  protected readonly sidebarCollapsed = inject(LayoutService).sidebarCollapsed;

  private readonly main = viewChild.required<ElementRef<HTMLElement>>('main');

  // A plain #fragment link would navigate to the app root because of <base href>.
  protected skipToContent(event: Event): void {
    event.preventDefault();
    this.main().nativeElement.focus();
  }
}
