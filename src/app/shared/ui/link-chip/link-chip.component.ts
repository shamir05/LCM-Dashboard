import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'a[app-link-chip]',
  imports: [IconComponent],
  templateUrl: './link-chip.component.html',
  styleUrl: './link-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'link-chip',
  },
})
export class LinkChipComponent {}
