import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconName } from '../../../core/models/icon-name.model';
import { IconComponent } from '../icon/icon.component';

export type ButtonVariant = 'secondary' | 'tinted' | 'icon' | 'icon-ghost';

const DEFAULT_ICON_SIZE = 16;

@Component({
  selector: 'button[app-button], a[app-button]',
  imports: [IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('secondary');
  readonly leadingIcon = input<IconName>();
  readonly trailingIcon = input<IconName>();
  readonly iconSize = input(DEFAULT_ICON_SIZE);

  protected readonly hostClass = computed(() => `button button--${this.variant()}`);
}
