import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  currentView: string;
  notices = [{gender: 'male', type: 'important', name: 'Johan Berglund', personalId: '19580101-0102', age: 62, team: 'Team A', timeSent: '10.35', title: 'Titta till patient'}];
  alerts = this.notices.length;

  constructor(private viewNameService: ViewNameService) {
    this.viewNameService.view$.subscribe(view => this.currentView = view);
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

  ngOnInit(): void {
  }

}
