import { TestBed } from '@angular/core/testing';

import { AddpersService } from './addpers.service';

describe('AddpersService', () => {
  let service: AddpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
