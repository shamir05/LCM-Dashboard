import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// The parent sets the height; projected <li> elements become the list items.
@Component({
  selector: 'app-scroll-panel',
  templateUrl: './scroll-panel.component.html',
  styleUrl: './scroll-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'region',
    tabindex: '0',
    '[attr.aria-label]': 'label()',
  },
})
export class ScrollPanelComponent {
  readonly label = input.required<string>();
}
