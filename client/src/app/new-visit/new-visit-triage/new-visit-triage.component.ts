import {Component, Input, OnInit} from '@angular/core';
import {partyData} from "../../ehr.service";

@Component({
  selector: 'app-new-visit-triage',
  templateUrl: './new-visit-triage.component.html',
  styleUrls: ['./new-visit-triage.component.css']
})
export class NewVisitTriageComponent implements OnInit {

  @Input() visit: partyData;
  currentPrio: string;
  constructor() { }

  ngOnInit(): void {
  }

  updatePrio(prio: string) {
    this.currentPrio = prio;

  }

  updateTriage(data: string, value: any) {
    if (data == 'spo2') {
    }
  }
}
