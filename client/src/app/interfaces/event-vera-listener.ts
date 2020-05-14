import { OnInit } from '@angular/core';
import { EventSocketService } from '../services/event-socket.service';
import { EventType } from '../../../../shared/models/EventType';
import { EventVera } from '../../../../shared/models/EventVera';

export abstract class EventVeraListener {
  constructor(protected eventService: EventSocketService) {
    this.eventService.connect();
    this.eventService.connect();
    this.eventService.getEventObservable().subscribe((msg) => {
      switch (msg.eventType) {
        case EventType.EditEvent:
          this.handleEditEvent(msg);
        case EventType.CareEvent:
          this.handleCareEvent(msg);
      }
    },
    (error) => {
      console.log(`EventListener error: ${error}`);
    }, () => {

    });
  }

  abstract handleEditEvent(event: EventVera): void;

  abstract handleCareEvent(event: EventVera): void;
}
