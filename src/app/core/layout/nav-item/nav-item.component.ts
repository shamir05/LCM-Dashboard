import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from '../../models/nav-item.model';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-nav-item',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.nav-item--collapsed]': 'collapsed()',
  },
})
export class NavItemComponent {
  readonly link = input.required<NavLink>();

  private readonly layout = inject(LayoutService);

  protected readonly collapsed = this.layout.sidebarCollapsed;

  protected closeDrawer(): void {
    this.layout.closeDrawer();
  }
}
