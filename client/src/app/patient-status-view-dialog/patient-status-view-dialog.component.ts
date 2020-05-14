import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: './patient-status-view-dialog.component.html',
  styleUrls: ['./patient-status-view-dialog.component.css']
})
export class PatientStatusViewDialogComponent implements OnInit, OnDestroy {
  /*@Output() editingPatientStatus: EventEmitter<boolean> = new EventEmitter<>();*/

  constructor() { }

  ngOnInit(): void {
    /*this.editingPatientStatus.emit(true);*/
  }

  ngOnDestroy(): void{
    /*this.editingPatientStatus.emit(false);*/
  }


}
