import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.interface';
import { VerificationResult } from '../models/verification-result.interface';

@Injectable({
  providedIn: 'root',
})
export class dataService {
  http = inject(HttpClient);
  router = inject(Router);

  private apiUrl = 'api/items'; // URL to in-memory web API

  constructor() {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(catchError(this.handleError('getUsers', [])));
  }

  checkData(email?: string | null, password?: string | null): Observable<VerificationResult> {
    return this.getUsers().pipe(
      filter((users) => !!users?.length),
      map((users) => {
        const userForCheck = users.find((user) => user.email === email);

        if (!userForCheck) {
          console.log(`Введён email ${email}, найден еmail ${userForCheck}`);
          return { success: false, message: 'Wrong email' };
        }

        if (userForCheck.password === password) {
          this.router.navigate(['/main']);
          return { success: true, message: `Hello ${userForCheck.name}`, userId: userForCheck.id };
        } else {
          return { success: false, message: 'Password is wrong!' };
        }
      }),
    );
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
