import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionType } from '../models/ActionType';
import { NoticeDialogComponent } from './notice-dialog/notice-dialog.component';
import { Notice } from '../app-header/app-header.component';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit, OnChanges {
  @Input() notice: Notice;

  @Output() noticeSelector = new EventEmitter<any>();

  gender: string;

  type: ActionType;

  firstName: string;

  lastName: string;

  socialId: number;

  age: number;

  team: number;

  timeSent: Date;

  title: string;

  actionType = ActionType;

  preferredTimeMin: number;

  constructor(public dialog: MatDialog) {
    this.timeSent = new Date();
  }

  /**
   * Open confirmation dialog
   */
  openDialog(): void {
    const dialogRef = this.dialog.open(NoticeDialogComponent, {
      data: `${this.firstName} ${this.lastName} ${this.socialId}`,
    });

    // forward the inputed time to parent
    dialogRef.afterClosed().subscribe((preferredTimeMin) => {
      this.preferredTimeMin = preferredTimeMin;
      this.emitNotice();
    });
  }

  /**
   * Handle clicks on notice
   */
  selectNotice(): void {
    if (this.notice.type === ActionType.Warning) {
      this.openDialog();
    } else this.emitNotice();
  }

  /**
   * Send the selected notice to parent
   */
  emitNotice(): void {
    this.noticeSelector.emit({ notice: this.notice, preferredTimeMin: this.preferredTimeMin });
  }

  ngOnInit(): void {
  }

  /**
   * Update information for notice upon received data
   * @param changes SimpleChanges
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.gender = this.notice.gender;
    this.type = this.notice.type;
    this.firstName = this.notice.firstName;
    this.lastName = this.notice.lastName;
    this.socialId = this.notice.socialId;
    this.age = this.notice.age;
    this.team = this.notice.team;
    this.timeSent = this.notice.timeSent;
    this.title = this.notice.title;
    // TODO: Add prio of patient according to RETTS
  }
}
