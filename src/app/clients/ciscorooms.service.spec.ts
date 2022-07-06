import { TestBed } from '@angular/core/testing';

import { CiscoroomsService } from './ciscorooms.service';

describe('CiscoroomsService', () => {
  let service: CiscoroomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiscoroomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
