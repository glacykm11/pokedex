import { TestBed } from '@angular/core/testing';

import { MappersService } from './mappers.service';

describe('MappersService', () => {
  let service: MappersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MappersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
