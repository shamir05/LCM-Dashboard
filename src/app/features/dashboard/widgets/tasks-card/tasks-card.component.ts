import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ACTION_LABELS, LIST_LABELS } from '../../../../core/constants/labels.constants';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { ScrollPanelComponent } from '../../../../shared/ui/scroll-panel/scroll-panel.component';
import { TasksCard } from '../../models/dashboard.models';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TasksOverviewComponent } from '../tasks-overview/tasks-overview.component';

@Component({
  selector: 'app-tasks-card',
  imports: [
    RouterLink,
    ButtonComponent,
    CardComponent,
    ScrollPanelComponent,
    TaskItemComponent,
    TasksOverviewComponent,
  ],
  templateUrl: './tasks-card.component.html',
  styleUrl: './tasks-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCardComponent {
  readonly card = input.required<TasksCard>();

  protected readonly viewAllLabel = ACTION_LABELS.viewAll;
  protected readonly listLabel = LIST_LABELS.tasks;
}
