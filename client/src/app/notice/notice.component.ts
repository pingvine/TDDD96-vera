import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActionType} from "../models/ActionType";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit, OnChanges {
  @Input() notice: any;
  @Output() deleteNoticeSelector = new EventEmitter<any>();
  gender: string;
  type: ActionType;
  name: string;
  personalId: string;
  age: number;
  team: string;
  timeSent: Date;
  title: string;

  actionType = ActionType;
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
