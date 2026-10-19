import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DATE_FORMATS } from '../../../../core/constants/format.constants';
import { Welcome } from '../../models/dashboard.models';

@Component({
  selector: 'app-welcome-header',
  imports: [DatePipe],
  templateUrl: './welcome-header.component.html',
  styleUrl: './welcome-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeHeaderComponent {
  readonly welcome = input.required<Welcome>();

  protected readonly dateFormat = DATE_FORMATS.fullDate;
  protected readonly title = computed(
    () => `${this.welcome().greeting} ${this.welcome().userName}`,
  );
}
