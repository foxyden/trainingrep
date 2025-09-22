import {Component, inject, OnInit, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { dataService } from '../../services/data.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class loginComponent {
  message: string | null = null;
  success: boolean = false;
  allUsers: User[] = [];
  dataService = inject(dataService);
  router = inject(Router);
  private formBuilder = inject(FormBuilder);
  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })

  constructor() {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.dataService.getUsers()
      .subscribe(
        Users => this.allUsers = Users);
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

  togglePassword() {
    const input = document.querySelector<HTMLInputElement>('.password-input');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }

  protected readonly document = document;
}
