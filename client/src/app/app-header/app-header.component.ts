import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {WebSocketSubject} from "rxjs/internal-compatibility";
import {Message} from "../models/Message";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  currentView: string;
  notices = [{gender: 'male', type: 'important', name: 'Johan Berglund', personalId: '19580101-0102', age: 62, team: 'Team A', timeSent: '10.35', title: 'Titta till patient'}];
  alerts = this.notices.length;
  private socket$: WebSocketSubject<Message>;

  constructor(private viewNameService: ViewNameService) {
    this.viewNameService.view$.subscribe(view => this.currentView = view);
    this.socket$ = new WebSocketSubject('ws://localhost:80');

    this.socket$.subscribe(
      notice => this.addNotice(notice),
      error => console.error(error),
      () => console.warn('Notice received')
    );
  }

  addNotice(notice: any): void {
    this.notices.push(notice);
    this.updateAlerts();
  }

  removeNotice(notice: any): void {
    const index = this.notices.indexOf(notice);
    this.notices.splice(index, 1);
    this.updateAlerts();
  }

  updateAlerts(): void {
    this.alerts = this.notices.length;
  }

  createNotice(gender: string, type: string, name: string,
               personalId: string, age: number, team: string,
               currentTime: string, title: string, sender: string, receivers: string[]): any {
    const notice = {gender: gender, type: type, name:  name, personalId: personalId, age: age, team: team, timeSent: currentTime, title: title};
    this.sendNotice(sender, notice, receivers);
  }

  sendNotice(senderTeam: string, notice: any, receivers: string[]): void {
    const message = new Message(senderTeam, notice, receivers);

    this.socket$.next(message);
  }

  ngOnInit(): void {
  }

}
