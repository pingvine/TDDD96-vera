import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-notice-dialog',
  templateUrl: './notice-dialog.component.html',
  styleUrls: ['./notice-dialog.component.css']
})
export class NoticeDialogComponent implements OnInit {

  preferredTimeMin: number;

  constructor(public dialogRef: MatDialogRef<NoticeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public personalInfo: string) { }

  /**
   * Close dialog when cancel is clicked
   */
  onCancelClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
