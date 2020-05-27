import {Component, Input, OnInit,} from '@angular/core';

@Component({
  selector: 'app-patient-view-card-content',
  templateUrl: './patient-view-card-content.component.html',
  styleUrls: ['./patient-view-card-content.component.css']
})
export class PatientViewCardContentComponent implements OnInit {
  @Input() summaryData: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
