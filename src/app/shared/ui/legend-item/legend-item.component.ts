import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type LegendItemSize = 'sm' | 'md';

// Colours are set by the parent through --legend-dot-color and --legend-label-color.
@Component({
  selector: 'app-legend-item',
  templateUrl: './legend-item.component.html',
  styleUrl: './legend-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"legend-item legend-item--" + size()',
  },
})
export class LegendItemComponent {
  readonly label = input.required<string>();
  readonly count = input<number>();
  readonly size = input<LegendItemSize>('md');
}
