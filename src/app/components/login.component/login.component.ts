import {Component, inject, OnInit, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent{
  message: string | null = null;
  success: boolean = false;
  AllUsers: User[] = [];
  dataService = inject(DataService);
  router = inject(Router);
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor() {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.dataService.getUsers()
      .subscribe(
        Users => this.AllUsers = Users);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.message = 'Get them two fields filled';
      this.success = false;
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.dataService.checkData(email, password).subscribe((result) => {
      this.success = result.success;
      this.message = result.message;
      console.log('Введены данные:', email, password);
    });
  }
  /*
  isAuthenticationError = signal(false);

  autent() {
    this.isAuthenticationError.set(this.dataService.autent());
  }

   */

  togglePassword() {
    const input = document.querySelector<HTMLInputElement>('.password-input');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }

  protected readonly document = document;
}
