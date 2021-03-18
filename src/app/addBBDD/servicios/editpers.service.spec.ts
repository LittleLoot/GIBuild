import { TestBed } from '@angular/core/testing';

import { EditpersService } from './editpers.service';

describe('EditpersService', () => {
  let service: EditpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
