import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../../../../shared/ui/badge/badge.component';
import { CaseItem } from '../../models/dashboard.models';

@Component({
  selector: 'app-case-row',
  imports: [RouterLink, BadgeComponent],
  templateUrl: './case-row.component.html',
  styleUrl: './case-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseRowComponent {
  readonly item = input.required<CaseItem>();
}
