import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private messageSource = new BehaviorSubject<string>('начальное значение');
  message$ = this.messageSource.asObservable();

  setMessage(msg: string) {
    this.messageSource.next(msg);
  }
}
