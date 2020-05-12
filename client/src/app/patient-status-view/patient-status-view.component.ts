import { Component, OnInit, Inject,Input, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PatientStatusViewDialogComponent} from "../patient-status-view-dialog/patient-status-view-dialog.component";
import { EventEmitter } from 'events';

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
    const dialogRef = this.dialog.open(PatientStatusViewDialogComponent, {  width: '800px', height: '800px'
    });

    }
}

/*@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: '../patient-status-view-dialog/patient-status-view-dialog.component.html',
  styleUrls: ['../patient-status-view-dialog/patient-status-view-dialog.component.css']
})*/

//export class PatientStatusViewDialog{}
