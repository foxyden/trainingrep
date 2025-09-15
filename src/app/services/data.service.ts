import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './in-memory-data.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'api/items';  // URL to in-memory web API
  constructor(private http: HttpClient,
              private router: Router,) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  Users: User[] = [];

  autent() {
    // @ts-ignore
    const temppassword:string = document.getElementById('password').value
    // @ts-ignore
    const tempemail:string = document.getElementById('email1').value
    const arrayLength = this.Users.length
    if (tempemail){
      for (var i = 0; i < arrayLength; i++) {
        if (tempemail === this.Users[i].email) {
          if (temppassword === this.Users[i].password) {
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

  getUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>(`getUser id=${id}`))
    );
  }

  addUser(item: User): Observable<User> {
    return this.http.post<any>(this.apiUrl, item).pipe(
      catchError(this.handleError<any>('addUser'))
    );
  }

  updateUser(item: User): Observable<any> {
    return this.http.put(this.apiUrl, item).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
