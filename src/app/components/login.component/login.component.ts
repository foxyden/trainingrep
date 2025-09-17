import {Component, inject, OnInit, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../services/in-memory-data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    const result = this.dataService.checkData(email, password, this.AllUsers);
    console.log('Введены данные:', email, password);
    this.success = result.success;
    this.message = result.message;
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
