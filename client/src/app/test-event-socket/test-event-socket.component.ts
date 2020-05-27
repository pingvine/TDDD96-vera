import {Component, OnInit} from '@angular/core';
import {EventSocketService} from '../services/event-socket.service';
import {EventType} from '../../../../shared/models/EventType';
import {EditEventData} from '../../../../shared/models/EditEventData';
import {EventVera} from '../../../../shared/models/EventVera';
import {ServerService} from '../services/server.service';
import {EventVeraListener} from '../interfaces/event-vera-listener';
import {User} from '../models/User';
import {LoginService} from '../services/login.service';


export class TestMessage {
  type: string;

  data: string;
}

@Component({
  selector: 'app-test-event-socket',
  templateUrl: './test-event-socket.component.html',
  styleUrls: ['./test-event-socket.component.css'],
})
export class TestEventSocketComponent extends EventVeraListener implements OnInit {
  messages: string[] = [];

  activeUsers: string[] = [];

  private currentUser: User;

  senderId: string = 'default';

  constructor(protected evService: EventSocketService, private serverService: ServerService,
              private loginService: LoginService) {
    super(evService);


    // In case we change the user
    loginService.currentUser.subscribe((user) => {
      this.senderId = user.getFirstName();
      this.currentUser = user;
    });
  }

  ngOnInit(): void {

    this.serverService.getEditEvents().subscribe((events) => {
      events.forEach((event) => {
        if (event.eventType === EventType.EditEvent) {
          this.activeUsers.push(event.senderId);
        }
      });
    });
  }

  handleEditEvent(event: EventVera) {
    console.log('Got edit event in test socket component.');
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

  sendStartEdit() {
    this.serverService.createEditEvent('1', true, this.senderId).subscribe((msg) => {
      console.log(msg);
    });
  }

  sendStopEdit() {
    this.serverService.createEditEvent('1', false, this.senderId).subscribe((msg) => {
      console.log(msg);
    });
  }

  handleCareEvent(msg: EventVera): void {
  }

  sendCareEvent() {
    console.log("USER:");
    console.log(this.currentUser)
    //this.serverService.createCareEvent(this.senderId, this.currentUser,
    // [this.currentUser.getRoleType()], 0, ActionType.Information,
    //'I manually added this').subscribe((msg) => {
    //   console.log(msg);
    //});
  }
}
