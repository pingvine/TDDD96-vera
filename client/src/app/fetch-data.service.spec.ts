import { TestBed } from '@angular/core/testing';

import { FetchDataService } from './fetch-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FetchDataService', () => {
  let service: FetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
