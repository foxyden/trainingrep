import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  togglePassword() {
    const input = document.querySelector<HTMLInputElement>('.password-input');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }
}
