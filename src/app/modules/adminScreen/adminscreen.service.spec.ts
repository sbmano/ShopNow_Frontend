import { TestBed } from '@angular/core/testing';

import { AdminscreenService } from './adminscreen.service';

describe('AdminscreenService', () => {
  let service: AdminscreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminscreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
