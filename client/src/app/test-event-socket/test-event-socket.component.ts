import { Component, OnInit } from '@angular/core';
import { EventSocketService } from '../services/event-socket.service';


export interface TestMessage {
  type: string,
  data: string
}
@Component({
  selector: 'app-test-event-socket',
  templateUrl: './test-event-socket.component.html',
  styleUrls: ['./test-event-socket.component.css'],
})
export class TestEventSocketComponent implements OnInit {
  messages: string[] = [];
  activeUsers: [];

  constructor(private eventService: EventSocketService) { }

  ngOnInit(): void {
    this.eventService.connect();
    this.eventService.getEventObservable().subscribe((msg) => {
      console.log('COMPoNENT RECEIVED MSG: ' + msg.data);
      this.messages.push(msg.data);

    });
  }

  sendMessage() {
    this.eventService.sendMessage('TestMessageFromClient');
  }
}
