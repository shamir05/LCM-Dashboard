import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from '../../../core/models/icon-name.model';
import { IconComponent } from '../icon/icon.component';

export type CardTone = 'default' | 'ai';

const HEADER_ICON_SIZE = 20;

let nextCardId = 0;

@Component({
  selector: 'app-card',
  imports: [IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.card--ai]': 'tone() === "ai"',
    '[class.card--collapsed]': 'collapsed()',
  },
})
export class CardComponent {
  readonly title = input.required<string>();
  readonly icon = input.required<IconName>();
  readonly tone = input<CardTone>('default');
  readonly collapsed = input(false);

  private readonly id = nextCardId++;
  readonly titleId = `card-title-${this.id}`;
  readonly bodyId = `card-body-${this.id}`;

  protected readonly iconSize = HEADER_ICON_SIZE;
}
