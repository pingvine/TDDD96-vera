import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  gender: string;
  type: string;
  constructor() {
    this.gender = 'male';
    this.type = 'info';
  }

  ngOnInit(): void {
  }

}
