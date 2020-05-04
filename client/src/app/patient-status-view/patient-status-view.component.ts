import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-patient-status-view',
  templateUrl: './patient-status-view.component.html',
  styleUrls: ['./patient-status-view.component.css']
})

export class PatientStatusViewComponent implements OnInit {
  panelOpenState = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(PatientStatusViewDialog, {  width: '800px', height: '800px'
    });

    }
}

@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: '../patient-status-view-dialog/patient-status-view-dialog.component.html',
  styleUrls: ['../patient-status-view-dialog/patient-status-view-dialog.component.css']
})

export class PatientStatusViewDialog{}
