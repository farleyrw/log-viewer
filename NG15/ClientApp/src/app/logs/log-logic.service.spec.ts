import { TestBed } from '@angular/core/testing';

import { LogLogicService } from './log-logic.service';

describe('LogLogicService', () => {
  let service: LogLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
