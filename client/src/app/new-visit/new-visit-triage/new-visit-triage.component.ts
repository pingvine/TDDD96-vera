import {Component, Input, OnInit} from '@angular/core';
import {partyData} from "../../ehr.service";

@Component({
  selector: 'app-new-visit-triage',
  templateUrl: './new-visit-triage.component.html',
  styleUrls: ['./new-visit-triage.component.css']
})
export class NewVisitTriageComponent implements OnInit {

  @Input() visit: partyData


  currentPrio: string;

  constructor() {
  }

  ngOnInit(): void {
    this.visit = {
      additionalInfo: {
        active: true,
        arrivalTime: '',
        arrivalMethod: '',
        socialId: '',
        projekt: 'VERA2020',
        search: '',
        team: 'X',
        ehrId: '',
        prio: '',
        age: '',
        tystnadsplikt: false,
        mottagning: '',
        remittance: false,
        idChecked: false,
      },
      firstNames: '',
      lastNames: '',

    }
    console.log(this.visit);
  }

  updatePrio(prio: string) {
    this.currentPrio = prio;

  }

  updateTriage(data: string, value: any) {
    //TODO form control for triage params use data as key to set specific value to corresponding field.

  }
}
