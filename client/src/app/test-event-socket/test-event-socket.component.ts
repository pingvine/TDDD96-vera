import { Component, OnInit } from '@angular/core';
import { EventSocketService } from '../services/event-socket.service';
import { EventType } from '../../../../shared/models/EventType';
import { EditEventData } from '../../../../shared/models/EditEventData';
import { EventVera } from '../../../../shared/models/EventVera';


export class TestMessage {
  type: string;

  data: string;
}
@Component({
  selector: 'app-test-event-socket',
  templateUrl: './test-event-socket.component.html',
  styleUrls: ['./test-event-socket.component.css'],
})
export class TestEventSocketComponent implements OnInit {
  messages: string[] = [];

  activeUsers: [];

  senderId: string;

  constructor(private eventService: EventSocketService) { }

  ngOnInit(): void {
    this.eventService.connect();
    this.eventService.getEventObservable().subscribe((msg) => {
      console.log(`COMPoNENT RECEIVED MSG: ${msg.data}`);
      this.messages.push(msg.data);
    });
  }

  sendMessage() {
    this.eventService.sendMessage('TestMessageFromClient');
  }


  // TODO make this an interface to implement in other components
  // get uuid for fields from a service generator?
  sendStartEdit() {
    const data = {
      fieldId: '1',
      status: true,
    };

    const event = {
      senderId: this.senderId,
      eventType: EventType.EditEvent,
      data,
    };

    this.eventService.sendMessage(event);
  }

  sendStopEdit() {
    const data = {
      fieldId: '1',
      status: false,
    };

    const event = {
      senderId: this.senderId,
      eventType: EventType.EditEvent,
      data,
    };

    this.eventService.sendMessage(event);
  }
}
