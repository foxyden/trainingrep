import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryData implements InMemoryDbService {
  createDb() {
    const Users : User[] = [
      { id: 1, name: 'John Doe', email: 'test@example.com', password: '12345' },
    { id: 2, name: 'Jane Dough', email: 'test2@example.com', password: 'qwerty' }
  ];
    return { items: Users };
  }
}
