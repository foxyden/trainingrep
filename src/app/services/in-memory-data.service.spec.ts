import { TestBed } from '@angular/core/testing';

import { inMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: inMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(inMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
