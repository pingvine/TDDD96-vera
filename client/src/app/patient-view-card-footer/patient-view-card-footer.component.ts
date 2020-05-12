import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-view-card-footer',
  templateUrl: './patient-view-card-footer.component.html',
  styleUrls: ['./patient-view-card-footer.component.css']
})
export class PatientViewCardFooterComponent implements OnInit {
  @Input() activeUsers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
