import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TOPBAR_LABELS } from '../../constants/labels.constants';
import { BREADCRUMBS } from '../../constants/navigation.constants';
import { UNREAD_NOTIFICATION_COUNT } from '../../data/session.mock';
import { ButtonComponent } from '../../../shared/ui/button/button.component';
import { IconComponent } from '../../../shared/ui/icon/icon.component';

const BELL_ICON_SIZE = 18;

@Component({
  selector: 'app-topbar',
  imports: [RouterLink, ButtonComponent, IconComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  protected readonly labels = TOPBAR_LABELS;
  protected readonly breadcrumbs = BREADCRUMBS;
  protected readonly bellIconSize = BELL_ICON_SIZE;
  protected readonly unreadCount = UNREAD_NOTIFICATION_COUNT;
  protected readonly hasUnread = this.unreadCount > 0;
  protected readonly notificationsLabel = this.hasUnread
    ? `${TOPBAR_LABELS.notifications}, ${this.unreadCount} ${TOPBAR_LABELS.unread}`
    : TOPBAR_LABELS.notifications;
}
