import { TestBed } from '@angular/core/testing';

import { ActivePatientsService } from './active-patients.service';

describe('ActivePatientsService', () => {
  let service: ActivePatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
