import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'usense';
}
