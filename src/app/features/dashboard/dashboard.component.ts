import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WELCOME } from './data/dashboard.mock';
import { WelcomeHeaderComponent } from './widgets/welcome-header/welcome-header.component';

@Component({
  selector: 'app-dashboard',
  imports: [WelcomeHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected readonly welcome = WELCOME;
}
