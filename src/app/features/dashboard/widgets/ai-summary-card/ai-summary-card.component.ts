import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { ACTION_LABELS } from '../../../../core/constants/labels.constants';
import { ButtonComponent } from '../../../../shared/ui/button/button.component';
import { CardComponent } from '../../../../shared/ui/card/card.component';
import { IconComponent } from '../../../../shared/ui/icon/icon.component';
import { AiSummary } from '../../models/dashboard.models';

const CHEVRON_SIZE = 14;

@Component({
  selector: 'app-ai-summary-card',
  imports: [ButtonComponent, CardComponent, IconComponent],
  templateUrl: './ai-summary-card.component.html',
  styleUrl: './ai-summary-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiSummaryCardComponent {
  readonly summary = input.required<AiSummary>();

  protected readonly expanded = signal(true);
  protected readonly chevronSize = CHEVRON_SIZE;
  protected readonly toggleLabel = computed(() =>
    this.expanded() ? ACTION_LABELS.hide : ACTION_LABELS.show,
  );

  protected toggle(): void {
    this.expanded.update((expanded) => !expanded);
  }
}
