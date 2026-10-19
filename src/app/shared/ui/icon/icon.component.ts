import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconName } from '../../../core/models/icon-name.model';
import { ICON_REGISTRY } from './icon-registry';

const DEFAULT_ICON_SIZE = 16;

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  // The SVG is injected at runtime, so emulated encapsulation can't reach it.
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
    '[attr.role]': 'label() ? "img" : null',
    '[attr.aria-label]': 'label() ?? null',
    '[attr.aria-hidden]': 'label() ? null : "true"',
  },
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(DEFAULT_ICON_SIZE);
  readonly label = input<string>();

  private readonly sanitizer = inject(DomSanitizer);

  // Markup comes from the bundled registry, never from user input.
  protected readonly svg = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(ICON_REGISTRY[this.name()]),
  );
}
