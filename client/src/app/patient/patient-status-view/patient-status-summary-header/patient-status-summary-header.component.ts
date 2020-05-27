import {Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-patient-status-summary-header',
  templateUrl: './patient-status-summary-header.component.html',
  styleUrls: ['./patient-status-summary-header.component.css']
})
export class PatientStatusSummaryHeaderComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
