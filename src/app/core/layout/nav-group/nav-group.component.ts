import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  linkedSignal,
} from '@angular/core';
import { NavGroup } from '../../models/nav-item.model';
import { IconComponent } from '../../../shared/ui/icon/icon.component';
import { LayoutService } from '../layout.service';
import { NavItemComponent } from '../nav-item/nav-item.component';

let nextGroupId = 0;

@Component({
  selector: 'app-nav-group',
  imports: [IconComponent, NavItemComponent],
  templateUrl: './nav-group.component.html',
  styleUrl: './nav-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.nav-group--collapsed]': 'collapsed()',
  },
})
export class NavGroupComponent {
  readonly group = input.required<NavGroup>();

  private readonly layout = inject(LayoutService);

  protected readonly collapsed = this.layout.sidebarCollapsed;
  protected readonly expanded = linkedSignal(() => this.group().expanded ?? false);
  protected readonly isOpen = computed(() => this.expanded() && !this.collapsed());
  protected readonly listId = `nav-group-${nextGroupId++}`;

  protected toggle(): void {
    // In the icon rail the children have nowhere to show, so open the sidebar first.
    if (this.collapsed()) {
      this.layout.expandSidebar();
      this.expanded.set(true);
      return;
    }

    this.expanded.update((expanded) => !expanded);
  }
}
