import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'api/items';  // URL to in-memory web API

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError('getItems', []))
      );
  }

  getItem(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError<any>(`getItem id=${id}`))
    );
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }

  updateItem(item: any): Observable<any> {
    return this.http.put(this.apiUrl, item).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteItem(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      catchError(this.handleError<any>('deleteItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
