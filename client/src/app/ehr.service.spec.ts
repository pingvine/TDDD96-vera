import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from "@angular/common/http/testing";
import { EhrService } from './ehr.service';

describe('EhrService', () => {
  let service: EhrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        EhrService,
      ],
    });
    service = TestBed.inject(EhrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
