import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDEBAR_LABELS } from '../../constants/labels.constants';
import { FOOTER_NAV_ITEMS, MAIN_NAV_ITEMS } from '../../constants/navigation.constants';
import { CURRENT_USER } from '../../data/session.mock';
import { NavGroup, NavItem } from '../../models/nav-item.model';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { LayoutService } from '../layout.service';
import { NavGroupComponent } from '../nav-group/nav-group.component';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [NgOptimizedImage, RouterLink, ButtonComponent, NavGroupComponent, NavItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.sidebar--collapsed]': 'collapsed()',
  },
})
export class SidebarComponent {
  private readonly layout = inject(LayoutService);

  protected readonly labels = SIDEBAR_LABELS;
  protected readonly mainItems = MAIN_NAV_ITEMS;
  protected readonly footerItems = FOOTER_NAV_ITEMS;
  protected readonly user = CURRENT_USER;
  protected readonly collapsed = this.layout.sidebarCollapsed;
  protected readonly isCompact = this.layout.isCompact;
  protected readonly drawerOpen = this.layout.drawerOpen;
  protected readonly toggleLabel = computed(() => {
    if (this.isCompact()) {
      return SIDEBAR_LABELS.closeNavigation;
    }
    return this.collapsed() ? SIDEBAR_LABELS.expand : SIDEBAR_LABELS.collapse;
  });

  protected isGroup(item: NavItem): item is NavGroup {
    return 'children' in item;
  }

  // In the drawer the same button closes it; on desktop it switches to the icon rail.
  protected toggle(): void {
    if (this.isCompact()) {
      this.layout.closeDrawer();
      return;
    }
    this.layout.toggleSidebar();
  }
}
