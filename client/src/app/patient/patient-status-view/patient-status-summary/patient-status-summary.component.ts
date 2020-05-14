import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient-status-summary',
  templateUrl: './patient-status-summary.component.html',
  styleUrls: ['./patient-status-summary.component.css']
})
export class PatientStatusSummaryComponent implements OnInit {
  @Input() comment;

  header_title = "Sammanfattning";

  constructor() {}

  ngOnInit(): void {
  }

}
