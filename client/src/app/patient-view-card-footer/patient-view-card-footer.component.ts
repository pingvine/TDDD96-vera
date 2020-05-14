import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";

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
