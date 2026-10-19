import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly sidebarCollapsedState = signal(false);

  readonly sidebarCollapsed = this.sidebarCollapsedState.asReadonly();

  toggleSidebar(): void {
    this.sidebarCollapsedState.update((collapsed) => !collapsed);
  }

  expandSidebar(): void {
    this.sidebarCollapsedState.set(false);
  }
}
