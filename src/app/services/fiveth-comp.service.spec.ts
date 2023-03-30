import { TestBed } from '@angular/core/testing';

import { FivethCompService } from './fiveth-comp.service';

describe('FivethCompService', () => {
  let service: FivethCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FivethCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
