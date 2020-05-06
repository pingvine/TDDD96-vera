import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  gender: string;
  type: string;
  name: string;
  socialId: string;
  age: number;
  team: string;
  timeSent: string;
  title: string;
  constructor() {
    this.gender = 'male';
    this.type = 'info';
    this.name = 'Johan Berglund';
    this.socialId = '19580101-0102';
    this.age = 62;
    this.team = 'Team A';
    this.timeSent = '10.35';
    this.title = 'Ny Patient';
  }

  ngOnInit(): void {
  }

}
