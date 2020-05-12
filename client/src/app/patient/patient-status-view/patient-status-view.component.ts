import { Component, OnInit, Inject,Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitter } from 'events';
import {PatientStatusViewDialogComponent} from "./patient-status-view-dialog/patient-status-view-dialog.component";

@Component({
  selector: 'app-patient-status-view',
  templateUrl: './patient-status-view.component.html',
  styleUrls: ['./patient-status-view.component.css']
})

export class PatientStatusViewComponent implements OnInit {
  panelOpenState = false;
  @Input() activeUsers: string[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PatientStatusViewDialogComponent, {
      width: '1200px',
      height: '900px',
      panelClass: 'transparent'
    });
    this.panelOpenState = true;
    }
}

/*@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: '../patient-status-view-dialog/patient-status-view-dialog.component.html',
  styleUrls: ['../patient-status-view-dialog/patient-status-view-dialog.component.css']
})*/

//export class PatientStatusViewDialog{}
