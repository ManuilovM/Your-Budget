import { TestBed } from '@angular/core/testing';

import { HostService } from './host.service';

xdescribe('HostService', () => {
  let service: HostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
