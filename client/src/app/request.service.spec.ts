import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RequestService', () => {
  let service: RequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
