import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './in-memory-data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);
  router = inject(Router);

  private apiUrl = 'api/items'; // URL to in-memory web API

  constructor() {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(catchError(this.handleError('getUsers', [])));
  }

  checkData(email: string | null | undefined, password: string | null | undefined, Users: User[]) {
    const found = Users.find((e) => e.email === email);
    if (found) {
      if (found.password === password) {
        this.router.navigate(['/main']);
        return {success: true, message: `Hello ${found.name}`, userId: found.id};
      } else {
        return {success: false, message: "Password is wrong!"};
      }
    }
    console.log(`Введён email ${email}, найден еmail ${found}`)
    return {success: false, message: 'Wrong email'};
  }

  getUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(catchError(this.handleError<any>(`getUser id=${id}`)));
  }

  addUser(item: User): Observable<User> {
    return this.http.post<any>(this.apiUrl, item).pipe(catchError(this.handleError<any>('addUser')));
  }

  updateUser(item: User): Observable<any> {
    return this.http.put(this.apiUrl, item).pipe(catchError(this.handleError<any>('updateUser')));
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(catchError(this.handleError<any>('deleteUser')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
