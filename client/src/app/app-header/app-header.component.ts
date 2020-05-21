import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import { EventSocketService } from '../services/event-socket.service';
import { EventVeraListener } from '../interfaces/event-vera-listener';
import { ActionType } from '../models/ActionType';
import { getAgeFromSocialIdString, getGenderFromSocialIdString } from '../util/helpers';
import { ServerService } from '../services/server.service';
import { LoginService } from '../services/login.service';
import { User } from '../models/User';
import { Person } from '../models/Person';

export interface Notice {
  gender: string,
  type: ActionType,
  firstName: string,
  lastName: string,
  socialId: number,
  age: number,
  team: number,
  timeSent: Date,
  title: string
}

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})

export class AppHeaderComponent extends EventVeraListener implements OnInit {
  currentView: string;

  notices = [{
    gender: 'male', type: ActionType.Warning, firstName: 'Johan', lastName: 'Berglund', socialId: 199000000134, age: 62, team: 0, timeSent: new Date(), title: 'Titta till patient',
  }] as Notice[];

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
    const { careEvent } = event.data;
    const gender = getGenderFromSocialIdString(careEvent.patient.socialId.toString());
    const age = getAgeFromSocialIdString(careEvent.patient.socialId.toString());
    const notice = {
      gender,
      type: careEvent.actionType,
      firstName: careEvent.patient.firstName,
      lastName: careEvent.patient.lastName,
      socialId: careEvent.patient.socialId,
      age,
      timeSent: new Date(careEvent.creationTime),
      team: careEvent.receivers.team,
      title: careEvent.comment,
    } as Notice;
    this.notices.push(notice);
  }

  /**
   * Removes a notice from the view
   * @param noticeWrapper {notice: Notice, preferredTimeMin: string}
   */
  removeNotice(noticeWrapper: any): void {
    if (noticeWrapper.notice.type === ActionType.Warning) {
      let preferredTimeMin;
      if (noticeWrapper.preferredTimeMin !== undefined) {
        preferredTimeMin = Number(noticeWrapper.preferredTimeMin);
      } else preferredTimeMin = 40; // TODO: Change to prio time according to RETTS
      console.log(preferredTimeMin);
      this.scheduleNewNotice(noticeWrapper.notice, noticeWrapper.preferredTimeMin);
    }
    const index = this.notices.indexOf(noticeWrapper.notice);
    this.notices.splice(index, 1);
  }

  /**
   * Schedules a new notice preferredTimeMin minutes in the future
   * @param notice Notice
   * @param preferredTimeMin number
   */
  scheduleNewNotice(notice: Notice, preferredTimeMin: number) {
    this.server.createCareEvent(this.user.getFirstName(), this.user, [this.user.getRoleType()],
      notice.team, notice.type, notice.title, new Person(notice.socialId, notice.firstName,
        notice.lastName), preferredTimeMin * 60).subscribe(() => {
    });
    // TODO: Send preferredTime to overview-table
  }

  /**
   * Handles received EditEvent from WebSocket
   * @param event EditEvent
   */
  handleEditEvent(event: import('../../../../shared/models/EventVera').EventVera): void {
    console.log(event);
  }

  /**
   * Handles received careEvent from WebSocket
   * @param event CareEvent
   */
  handleCareEvent(event: import('../../../../shared/models/EventVera').EventVera): void {
    this.addNotice(event);
  }

  ngOnInit(): void {
    this.server.getCareEvents().subscribe((events) => {
      events.forEach((event) => {
        console.log(event);
      });
    });
  }

  /**
   * Removes all notices from noticelist
   */
  clearNotices() {
    this.notices = [];
  }
}
