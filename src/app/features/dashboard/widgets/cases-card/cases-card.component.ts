import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ACTION_LABELS, LIST_LABELS } from '../../../../core/constants/labels.constants';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { ScrollPanelComponent } from '../../../../shared/ui/scroll-panel/scroll-panel.component';
import { CasesCard } from '../../models/dashboard.models';
import { CaseRowComponent } from '../case-row/case-row.component';
import { DonutChartComponent } from '../donut-chart/donut-chart.component';

@Component({
  selector: 'app-cases-card',
  imports: [
    RouterLink,
    ButtonComponent,
    CardComponent,
    ScrollPanelComponent,
    CaseRowComponent,
    DonutChartComponent,
  ],
  templateUrl: './cases-card.component.html',
  styleUrl: './cases-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasesCardComponent {
  readonly card = input.required<CasesCard>();

  protected readonly viewAllLabel = ACTION_LABELS.viewAll;
  protected readonly listLabel = LIST_LABELS.cases;
}
