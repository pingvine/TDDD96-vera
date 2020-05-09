import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: './patient-status-view-dialog.component.html',
  styleUrls: ['./patient-status-view-dialog.component.css']
})
export class PatientStatusViewDialogComponent implements OnInit {
  header_title = "Statusbedömning"
  constructor() { }

  ngOnInit(): void {
  }

}
