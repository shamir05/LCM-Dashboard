import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DATE_FORMATS } from '../../../../core/constants/format.constants';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';
import { TaskItem } from '../../models/dashboard.models';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe, BadgeComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  readonly task = input.required<TaskItem>();

  protected readonly dateFormat = DATE_FORMATS.dateTime;
}
