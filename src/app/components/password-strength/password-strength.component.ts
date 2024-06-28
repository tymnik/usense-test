import { animate, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
  animations: [
    trigger('colorAnimation', [
      transition('* => *', animate('500ms ease-out')),
    ]),
  ],
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength: string = 'empty';
  strengthColors: string[] = ['gray', 'gray', 'gray'];

  onPasswordInput(event: any): void {
    this.password = event.target.value;
    this.evaluatePasswordStrength();
  }

  evaluatePasswordStrength(): void {
    const lengthCriteria = this.password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /[0-9]/.test(this.password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(this.password);

    if (this.password.length === 0) {
      this.passwordStrength = 'empty';
      this.strengthColors = ['gray', 'gray', 'gray'];
    } else if (!lengthCriteria) {
      this.passwordStrength = 'short';
      this.strengthColors = ['red', 'red', 'red'];
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.passwordStrength = 'strong';
      this.strengthColors = ['green', 'green', 'green'];
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      this.passwordStrength = 'medium';
      this.strengthColors = ['yellow', 'yellow', 'gray'];
    } else {
      this.passwordStrength = 'easy';
      this.strengthColors = ['red', 'gray', 'gray'];
    }
  }
}
