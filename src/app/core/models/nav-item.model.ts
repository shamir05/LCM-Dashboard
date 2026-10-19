import { IconName } from './icon-name.model';

export interface NavLink {
  readonly label: string;
  readonly route: string;
  readonly icon?: IconName;
}

export interface NavGroup {
  readonly label: string;
  readonly icon: IconName;
  readonly children: readonly NavLink[];
  readonly expanded?: boolean;
}

export type NavItem = NavLink | NavGroup;
