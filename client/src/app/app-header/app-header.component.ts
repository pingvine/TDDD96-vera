import {Component, OnInit} from '@angular/core';
import {ViewNameService} from '../view-name.service';
import {Message} from '../models/Message';
import {EventSocketService} from '../services/event-socket.service';
import {EventVeraListener} from '../interfaces/event-vera-listener';
import {ActionType} from '../models/ActionType';
import {getAgeFromSocialIdString, getGenderFromSocialIdString} from "../util/helpers";
import {ServerService} from "../services/server.service";
import {LoginService} from "../services/login.service";
import {User} from "../models/User";
import {Person} from "../models/Person";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent extends EventVeraListener implements OnInit {
  currentView: string;

  notices = [{
    gender: 'male', type: ActionType.Warning, firstName: 'Johan', lastName: 'Berglund', personalId: 199000000134, age: 62, team: 0, timeSent: new Date(), title: 'Titta till patient',
  }];

  user: User;

  constructor(private viewNameService: ViewNameService, protected eventService: EventSocketService,
              private server: ServerService, private loginService: LoginService) {
    super(eventService);
    this.viewNameService.view$.subscribe((view) => this.currentView = view);
    this.loginService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  /**
   * Adds a notice to the view.
   * @param event CareEvent
   */
  addNotice(event: any): void {
    // Unpack the event to fit the notice format
    const careEvent = event.data['careEvent'];
    const gender = getGenderFromSocialIdString(careEvent.patient.socialId.toString());
    const age = getAgeFromSocialIdString(careEvent.patient.socialId.toString());
    const notice = {
      gender,
      type: careEvent.actionType,
      firstName: careEvent.patient.firstName,
      lastName: careEvent.patient.lastName,
      personalId: careEvent.patient.socialId,
      age: age,
      timeSent: new Date(careEvent.creationTime),
      team: careEvent.receivers.team,
      title: careEvent.comment,
    };
    this.notices.push(notice);
  }

  removeNotice(nextNotice: any): void {
    console.log('Ska ta bort notis');
    if (nextNotice.preferredTimeMin!==undefined) {
      console.log('Ska planera ny notis');

      const preferredTimeMin = Number(nextNotice.preferredTimeMin);
      console.log(preferredTimeMin);
      const res = this.server.createCareEvent(this.user.getFirstName(), this.user, [this.user.getRoleType()], 0,
        ActionType.Warning, 'Titta till patient',
        new Person(nextNotice.notice.personalId, nextNotice.notice.firstName, nextNotice.notice.lastName), preferredTimeMin);
      console.log('Har planerat ny notis');
      console.log(res);
      // TODO: Send preferredTime to EHRScape
    }
    const index = this.notices.indexOf(nextNotice.notice);
    // this.notices.splice(index, 1);
  }


  createNotice(gender: string, type: string, name: string,
    personalId: number, age: number, team: string,
    currentTime: string, title: string, sender: string, receivers: string[]): any {
    const notice = {
      gender, type, name, personalId, age, team, timeSent: currentTime, title,
    };
  }

  sendNotice(senderTeam: string, notice: any, receivers: string[]): void {
    const message = new Message(senderTeam, notice, receivers);

    // this.eventService.sendMessage(message);
  }

  handleEditEvent(event: import('../../../../shared/models/EventVera').EventVera): void {
  }

  handleCareEvent(event: import('../../../../shared/models/EventVera').EventVera): void {
    console.log('Ny notis')
    this.addNotice(event);
  }

  ngOnInit(): void {
    this.server.getCareEvents().subscribe((events) => {
      events.forEach((event) => {
        console.log(event);
      })
    });
  }

  clearNotices() {
    this.notices = [];
  }
}
