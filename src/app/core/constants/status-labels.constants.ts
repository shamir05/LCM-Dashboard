import { Status } from '../models/status.model';

export const STATUS_LABELS: Readonly<Record<Status, string>> = {
  draft: 'Draft',
  active: 'Active',
  urgent: 'Urgent',
  'to-do': 'To Do',
  'in-progress': 'In Progress',
  'on-hold': 'On Hold',
};
