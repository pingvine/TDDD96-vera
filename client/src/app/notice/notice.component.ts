import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActionType} from "../models/ActionType";
import {MatDialog} from "@angular/material/dialog";
import {NoticeDialogComponent} from "./notice-dialog/notice-dialog.component";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit, OnChanges {
  @Input() notice: any;

  @Output() noticeSelector = new EventEmitter<any>();

  gender: string;

  type: ActionType;

  firstName: string;

  lastName: string;

  personalId: string;

  age: number;

  team: string;

  timeSent: Date;

  title: string;

  actionType = ActionType;

  preferredTimeMin: number;

  constructor(public dialog: MatDialog) {

    this.timeSent = new Date();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NoticeDialogComponent, {
      data: `${this.firstName} ${this.lastName} ${this.personalId}`
    });

    dialogRef.afterClosed().subscribe((preferredTimeMin) => {
      this.preferredTimeMin = preferredTimeMin;
      this.emitNotice();
    });
  }

  selectNotice(): void {
    if (this.notice.type === ActionType.Warning) {
      this.openDialog();
    }
    else this.emitNotice();
  }

  emitNotice(): void {
    this.noticeSelector.emit({notice: this.notice, preferredTimeMin: this.preferredTimeMin});
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gender = this.notice.gender;
    this.type = this.notice.type;
    this.firstName = this.notice.firstName;
    this.lastName = this.notice.lastName;
    this.personalId = this.notice.personalId;
    this.age = this.notice.age;
    this.team = this.notice.team;
    this.timeSent = this.notice.timeSent;
    this.title = this.notice.title;
    // TODO: Add prio of patient according to RETTS
  }

}
