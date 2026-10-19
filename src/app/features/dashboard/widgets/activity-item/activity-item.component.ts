import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FileChipComponent } from '../../../../shared/ui/file-chip/file-chip.component';
import { LinkChipComponent } from '../../../../shared/ui/link-chip/link-chip.component';
import { Activity } from '../../models/dashboard.models';

@Component({
  selector: 'app-activity-item',
  imports: [RouterLink, FileChipComponent, LinkChipComponent],
  templateUrl: './activity-item.component.html',
  styleUrl: './activity-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityItemComponent {
  readonly activity = input.required<Activity>();

  protected readonly link = computed(() => {
    const attachment = this.activity().attachment;
    return attachment.kind === 'link' ? attachment : null;
  });

  protected readonly file = computed(() => {
    const attachment = this.activity().attachment;
    return attachment.kind === 'file' ? attachment : null;
  });
}
