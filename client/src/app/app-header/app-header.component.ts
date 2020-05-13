import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import { Message } from '../models/Message';
import { EventSocketService } from '../services/event-socket.service';
import { EventVeraListener } from '../interfaces/event-vera-listener';
import { ActionType } from '../models/ActionType';
import { EventVera } from '../../../../shared/models/EventVera';
import { CareEvent } from '../models/CareEvent';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent extends EventVeraListener implements OnInit {
  currentView: string;

  notices = [{
    gender: 'male', type: ActionType.Warning, name: 'Johan Berglund', personalId: 199000000134, age: 62, team: 0, timeSent: new Date(), title: 'Titta till patient',
  }];

  constructor(private viewNameService: ViewNameService, protected eventService: EventSocketService) {
    super(eventService);
    this.viewNameService.view$.subscribe((view) => this.currentView = view);
  }

  getGender(socialId: string): string {
    const genderNum = socialId[socialId.length - 2];
    // Odd is male, even is female
    return (genderNum % 2 === 0 ? 'female' : 'male');
  }

  getAge(socialId: string): number {
    const year = parseInt(socialId.substring(0, 4));
    const today = new Date();
    return today.getFullYear() - year;
  }

  /**
   * Adds a notice to the view.
   * @param event CareEvent
   */
  addNotice(event: EventVera): void {
    // Unpack the event to fit the notice format
    const { careEvent } = event.data as CareEvent;
    const gender = this.getGender(careEvent.patient.socialId.toString());
    const age = this.getAge(careEvent.patient.socialId.toString());
    const notice = {
      gender,
      type: careEvent.actionType,
      name: careEvent.patient.firstName + careEvent.patient.lastName,
      personalId: careEvent.patient.socialId,
      age: age,
      timeSent: new Date(careEvent.creationTime),
      team: careEvent.receivers.team,
      title: careEvent.comment,
    };
    this.notices.push(notice);
  }

  removeNotice(notice: any): void {
    const index = this.notices.indexOf(notice);
    this.notices.splice(index, 1);
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
    this.addNotice(event);
  }

  ngOnInit(): void {
  }

  clearNotices() {
    this.notices = [];
  }
}
