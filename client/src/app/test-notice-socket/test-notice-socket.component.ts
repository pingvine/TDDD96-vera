import {Component, OnInit} from '@angular/core';
import {EventSocketService} from "../services/event-socket.service";
import {EventType} from "../../../../shared/models/EventType";

@Component({
  selector: 'app-test-notice-socket',
  templateUrl: './test-notice-socket.component.html',
  styleUrls: ['./test-notice-socket.component.css']
})
export class TestNoticeSocketComponent implements OnInit {
  senderId: string

  constructor(private eventService: EventSocketService) {
  }

  ngOnInit(): void {
    this.eventService.connect();

  }

  sendNotice() {
    const currentDate = new Date(Date.now());
    const currentTime = `${currentDate.getDate()}/${currentDate.getMonth() + 1} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const data = {
      gender: 'male',
      type: 'important',
      name: 'Johan Berglund',
      personalId: '19580101-0102',
      age: 62,
      team: 'Team A',
      timeSent: currentTime,
      title: 'Titta till patient'
    };

    const event = {
      senderId: this.senderId,
      eventType: EventType.CareEvent,
      data
    };

    console.log(currentTime);

    this.eventService.sendMessage(event);
  }


}
