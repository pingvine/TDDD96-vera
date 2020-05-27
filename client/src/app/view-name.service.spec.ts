import { TestBed } from '@angular/core/testing';
import { ViewNameService } from './view-name.service';

describe('ViewNameService', () => {
  let service: ViewNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
