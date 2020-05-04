import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-status-edit-view-e',
  templateUrl: './patient-status-edit-view-e.component.html',
  styleUrls: ['./patient-status-edit-view-e.component.css']
})
export class PatientStatusEditViewEComponent implements OnInit {
  panelOpenState = false;
  sarskada = false;
  brannskada = false;
  hudutslag = false;
  constructor() { }

  ngOnInit(): void {
  }

}
