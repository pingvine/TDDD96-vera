import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {WebSocketSubject} from "rxjs/internal-compatibility";
import {Message} from "../models/Message";
import {DatePipe} from "@angular/common";
import {EventType} from "../../../../shared/models/EventType";
import {EventSocketService} from "../services/event-socket.service";
import {EventVeraListener} from "../interfaces/event-vera-listener";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent extends EventVeraListener implements OnInit {

  currentView: string;
  notices = [{gender: 'male', type: 'important', name: 'Johan Berglund', personalId: '19580101-0102', age: 62, team: 'Team A', timeSent: '10.35', title: 'Titta till patient'}];

  constructor(private viewNameService: ViewNameService, protected eventService: EventSocketService) {
    super(eventService);
    this.viewNameService.view$.subscribe(view => this.currentView = view);
  }

  addNotice(event: any): void {
    const notice = event.data;
    this.notices.push(notice);
  }

  removeNotice(notice: any): void {
    const index = this.notices.indexOf(notice);
    this.notices.splice(index, 1);
  }


  createNotice(gender: string, type: string, name: string,
               personalId: string, age: number, team: string,
               currentTime: string, title: string, sender: string, receivers: string[]): any {
    const notice = {gender: gender, type: type, name:  name, personalId: personalId, age: age, team: team, timeSent: currentTime, title: title};
  }

  sendNotice(senderTeam: string, notice: any, receivers: string[]): void {
    const message = new Message(senderTeam, notice, receivers);

    //this.eventService.sendMessage(message);
  }

  handleEditEvent(event: import("../../../../shared/models/EventVera").EventVera): void {
    console.log(event);
  }
  handleCareEvent(event: import("../../../../shared/models/EventVera").EventVera): void {
    this.addNotice(event);
  }

  ngOnInit(): void {
  }

  clearNotices() {
    this.notices = [];
  }
}
