import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { COMPACT_LAYOUT_QUERY } from '../constants/breakpoints.constants';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly sidebarCollapsedState = signal(false);
  private readonly drawerOpenState = signal(false);
  private readonly compactState = signal(false);

  readonly isCompact = this.compactState.asReadonly();
  // The icon rail only exists on desktop, and the drawer only on smaller screens.
  readonly sidebarCollapsed = computed(() => this.sidebarCollapsedState() && !this.isCompact());
  readonly drawerOpen = computed(() => this.drawerOpenState() && this.isCompact());

  constructor() {
    const media = inject(DOCUMENT).defaultView?.matchMedia?.(COMPACT_LAYOUT_QUERY);
    if (media) {
      this.compactState.set(media.matches);
      media.addEventListener('change', (event) => {
        this.compactState.set(event.matches);
        this.drawerOpenState.set(false);
      });
    }
  }

  toggleSidebar(): void {
    this.sidebarCollapsedState.update((collapsed) => !collapsed);
  }

  expandSidebar(): void {
    this.sidebarCollapsedState.set(false);
  }

  openDrawer(): void {
    this.drawerOpenState.set(true);
  }

  closeDrawer(): void {
    this.drawerOpenState.set(false);
  }
}
