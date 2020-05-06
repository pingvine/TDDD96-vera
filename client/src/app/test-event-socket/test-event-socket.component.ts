import { Component, OnInit } from '@angular/core';
import { EventSocketService } from '../services/event-socket.service';

@Component({
  selector: 'app-test-event-socket',
  templateUrl: './test-event-socket.component.html',
  styleUrls: ['./test-event-socket.component.css'],
})
export class TestEventSocketComponent implements OnInit {
  constructor(private eventService: EventSocketService) { }

  ngOnInit(): void {
    this.eventService.connect();
  }

  sendMessage() {
    this.eventService.sendMessage('TestMessageFromClient');
  }
}
