import { TestBed } from '@angular/core/testing';

import { ServerService } from './server.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ServerService
      ]
    });
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
