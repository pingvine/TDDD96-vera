import {Component, OnInit} from '@angular/core';
import {EventSocketService} from '../services/event-socket.service';
import {EventType} from '../../../../shared/models/EventType';
import {EditEventData} from '../../../../shared/models/EditEventData';
import {EventVera} from '../../../../shared/models/EventVera';
import {ServerService} from "../services/server.service";


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

  activeUsers: string[] = [];

  senderId: string = 'default';

  constructor(private eventService: EventSocketService, private serverService: ServerService) { }

  ngOnInit(): void {

    this.serverService.getEvents().subscribe((events) => {
      events.forEach((event) => {
        if (event.eventType === EventType.EditEvent) {
          this.activeUsers.push(event.senderId);
        }
      })
    });

    this.eventService.connect();
    this.eventService.getEventObservable().subscribe((msg) => {
      console.log(`COMPoNENT RECEIVED MSG: ${msg.eventType}`);

      switch (msg.eventType) {
        case EventType.EditEvent:
          this.handleEditEvent(msg);
      }
    },
    (error) => {
      console.log('CMPNT Error');
    },
    () => {
      console.log('CMPNT Complete');
    });
  }

  handleEditEvent(event: EventVera) {
    console.log('EditEvent! :D');
    const data = event.data as EditEventData;
    this.messages.push(`${event.senderId} field: ${data.fieldId} start: ${data.status}`);

    // Check if the user wants to edit or stop edit, and add or remove from activeUsers depending on this,
    // avoids duplicates
    if (data.status && !this.activeUsers.includes(event.senderId)) {
      this.activeUsers.push(event.senderId);
    } else if (!data.status && this.activeUsers.includes(event.senderId)) {
      const index = this.activeUsers.indexOf(event.senderId);

      if (index > -1) {
        this.activeUsers.splice(index, 1);
      }
    }
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
