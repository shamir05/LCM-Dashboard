import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LIST_LABELS } from '../../../../core/constants/labels.constants';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { ScrollPanelComponent } from '../../../../shared/ui/scroll-panel/scroll-panel.component';
import { ActivitiesCard } from '../../models/dashboard.models';
import { ActivityItemComponent } from '../activity-item/activity-item.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-activities-card',
  imports: [CardComponent, ScrollPanelComponent, ActivityItemComponent, BarChartComponent],
  templateUrl: './activities-card.component.html',
  styleUrl: './activities-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivitiesCardComponent {
  readonly card = input.required<ActivitiesCard>();

  protected readonly listLabel = LIST_LABELS.activities;
}
