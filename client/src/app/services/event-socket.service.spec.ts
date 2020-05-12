import { TestBed } from '@angular/core/testing';

import { EventSocketService } from './event-socket.service';

describe('EventSocketService', () => {
  let service: EventSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
