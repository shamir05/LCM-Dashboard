import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { DOWNLOAD_LABEL } from '../../../core/constants/labels.constants';
import { IconName } from '../../../core/models/icon-name.model';
import { IconComponent } from '../icon/icon.component';

const FILE_ICON_SIZE = 20;
const DOWNLOAD_ICON_SIZE = 14;

@Component({
  selector: 'app-file-chip',
  imports: [IconComponent],
  templateUrl: './file-chip.component.html',
  styleUrl: './file-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileChipComponent {
  readonly fileName = input.required<string>();
  readonly icon = input<IconName>('file-pdf');
  readonly download = output<void>();

  protected readonly fileIconSize = FILE_ICON_SIZE;
  protected readonly downloadIconSize = DOWNLOAD_ICON_SIZE;
  protected readonly downloadLabel = computed(() => `${DOWNLOAD_LABEL} ${this.fileName()}`);
}
