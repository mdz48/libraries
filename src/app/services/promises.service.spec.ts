import { TestBed } from '@angular/core/testing';

import { PromisesService } from './promises.service';

describe('PromisesService', () => {
  let service: PromisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
