import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDEBAR_LABELS } from '../../constants/labels.constants';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgOptimizedImage, RouterLink, ButtonComponent],
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
  protected readonly collapsed = this.layout.sidebarCollapsed;
  protected readonly toggleLabel = computed(() =>
    this.collapsed() ? SIDEBAR_LABELS.expand : SIDEBAR_LABELS.collapse,
  );

  protected toggle(): void {
    this.layout.toggleSidebar();
  }
}
