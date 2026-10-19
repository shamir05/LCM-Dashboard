import { NavItem, NavLink } from '../models/nav-item.model';

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Dashboard', route: '/dashboard', icon: 'home' },
  { label: 'Calendar', route: '/calendar', icon: 'calendar' },
  { label: 'Tasks', route: '/tasks', icon: 'list' },
  { label: 'Activities', route: '/activities', icon: 'clock' },
  {
    label: 'Email',
    icon: 'mail',
    children: [
      { label: 'Inbox', route: '/email/inbox' },
      { label: 'Sent', route: '/email/sent' },
      { label: 'Drafts', route: '/email/drafts' },
    ],
  },
  { label: 'Contacts', route: '/contacts', icon: 'contact-card' },
  {
    label: 'Matters',
    icon: 'briefcase',
    children: [
      { label: 'All Matters', route: '/matters' },
      { label: 'Archived', route: '/matters/archived' },
    ],
  },
  { label: 'Documents', route: '/documents', icon: 'file' },
  { label: 'Communications', route: '/communications', icon: 'chat' },
  { label: 'Account', route: '/account', icon: 'bank' },
  {
    label: 'Manage Tenants',
    icon: 'user-gear',
    children: [
      { label: 'Tenants', route: '/tenants' },
      { label: 'Subscriptions', route: '/tenants/subscriptions' },
    ],
  },
  { label: 'Billings', route: '/billings', icon: 'newspaper' },
  {
    label: 'User & Access',
    icon: 'user',
    expanded: true,
    children: [
      { label: 'Users', route: '/access/users' },
      { label: 'Roles', route: '/access/roles' },
      { label: 'Permissions', route: '/access/permissions' },
    ],
  },
  { label: 'App integrations', route: '/integrations', icon: 'apps' },
];

export const FOOTER_NAV_ITEMS: readonly NavLink[] = [
  { label: 'Reports', route: '/reports', icon: 'clipboard' },
  { label: 'Settings', route: '/settings', icon: 'settings' },
];
