import { TestBed } from '@angular/core/testing';

import { ReadingJsonServiceService } from './reading-json-service.service';

describe('ReadingJsonServiceService', () => {
  let service: ReadingJsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingJsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
