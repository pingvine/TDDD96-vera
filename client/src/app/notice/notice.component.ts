import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit, OnChanges {
  @Input() notice: any;
  @Output() deleteNoticeSelector = new EventEmitter<any>();
  gender: string;
  type: string;
  name: string;
  personalId: string;
  age: number;
  team: string;
  timeSent: string;
  title: string;
  constructor() {
  }

  deleteNotice(): void {
    this.deleteNoticeSelector.emit(this.notice);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gender = this.notice.gender;
    this.type = this.notice.type;
    this.name = this.notice.name;
    this.personalId = this.notice.personalId;
    this.age = this.notice.age;
    this.team = this.notice.team;
    this.timeSent = this.notice.timeSent;
    this.title = this.notice.title;
  }

}
