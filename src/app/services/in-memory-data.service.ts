import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryData implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, email: 'test@example.com', password: '12345' },
    { id: 2, email: 'test2@example.com', password: 'qwerty' }
  ];
    return { items };
  }
}
