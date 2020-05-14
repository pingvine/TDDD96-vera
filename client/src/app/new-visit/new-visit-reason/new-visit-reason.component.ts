import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-visit-reason',
  templateUrl: './new-visit-reason.component.html',
  styleUrls: ['./new-visit-reason.component.css']
})
export class NewVisitReasonComponent implements OnInit {
  reason: string;
  ess: string;
  information: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateReason(reason: any): void {
    console.log(reason.target.value);
    this.reason = reason.target.value;
  }
  updateESS(ess: any): void {
    console.log(ess.target.value);
    this.ess = ess.target.value;
  }
  updateInformation(information: any): void {
    console.log(information.target.value);
    this.information = information.target.value;
  }
}
