import { TestBed } from '@angular/core/testing';

import { LogFilterService } from './log-filter.service';

describe('LogFilterService', () => {
  let service: LogFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
