import {Component, Input, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Visit} from "../../models/Visit";
import {getAgeFromSocialIdNumber} from "../../util/helpers";

@Component({
  selector: 'app-visit-view-header',
  templateUrl: './visit-view-header.component.html',
  styleUrls: ['./visit-view-header.component.css']
})
export class VisitViewHeaderComponent implements OnInit {
  @Input() currentVisit: Visit;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAge() {
    if (this.currentVisit) {
      return getAgeFromSocialIdNumber(this.currentVisit.getPerson().getId());
    }
  }

  getFirstName() {
    if (this.currentVisit) {
      return this.currentVisit.getPerson().getFirstName();
    }
  }

  getLastName() {
    if (this.currentVisit) {
      return this.currentVisit.getPerson().getLastName();
    }
  }

  onReasonChange(reason: string) {
    console.log('Hello I am the header component and I received reasonChange event: ' + reason);
  }

  onTopicalChange(topicalText: string) {
    console.log('Topical change: ' + topicalText);
  }

  onClickedEvents($event: any) {
    console.log('Clicked the events. We want to open the view.');
  }

  onClickBody() {
    console.log('Open vital parameters view');

  }

  getSocialId() {
    if (this.currentVisit) {
      return this.currentVisit.getPerson().getId();
    }
  }
}
