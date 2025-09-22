import { TestBed } from '@angular/core/testing';

import { dataService } from './data.service';

describe('DataService', () => {
  let service: dataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
