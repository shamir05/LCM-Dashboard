import { Routes } from '@angular/router';
import { PAGE_TITLES } from './core/constants/labels.constants';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    title: PAGE_TITLES.dashboard,
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  { path: '**', redirectTo: 'dashboard' },
];
