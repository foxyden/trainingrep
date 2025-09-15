import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../services/in-memory-data.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private dataService: DataService,
              private router: Router,
  ) {}

  autent(){
    this.dataService.autent();
  }

  togglePassword() {
    const input = document.querySelector<HTMLInputElement>('.password-input');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }

  protected readonly document = document;
}
