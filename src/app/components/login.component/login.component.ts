import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

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

  autent() {
    // @ts-ignore
    const temppassword:string = document.getElementById('password').value
    // @ts-ignore
    const tempemail:string = document.getElementById('email1').value
    const arrayLength = this.items.length
    if (tempemail){
    for (var i = 0; i < arrayLength; i++) {
      if (tempemail === this.items[i].email) {
        if (temppassword === this.items[i].password) {
          this.router.navigate(['/main']);
          return false;
        }
        else {
          console.log("wrong password")
          return "WRONG PASSWORD";
        }
      }
    }
    console.log("wrong email")
    return "WRONG EMAIL";
    }
    return false;
  }

  items: any[] = [];

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.dataService.getItems()
      .subscribe(
        items => this.items = items);
  }

  togglePassword() {
    const input = document.querySelector<HTMLInputElement>('.password-input');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  }

  protected readonly document = document;
}
