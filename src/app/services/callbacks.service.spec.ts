import { TestBed } from '@angular/core/testing';

import { CallbacksService } from './callbacks.service';

describe('CallbacksService', () => {
  let service: CallbacksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallbacksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
