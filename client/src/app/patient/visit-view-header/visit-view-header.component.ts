import {
  Component, Input, OnInit,
} from '@angular/core';
import { Visit } from "../../models/Visit";
import {
  getAgeFromSocialIdNumber, getGenderFromSocialIdString,
} from "../../util/helpers";
import { EhrService } from '../../ehr.service';

@Component({
  selector: 'app-visit-view-header',
  templateUrl: './visit-view-header.component.html',
  styleUrls: ['./visit-view-header.component.css']
})
export class VisitViewHeaderComponent implements OnInit {
  @Input() currentVisit: Visit;

  spo2: number;  //Oxygen saturation
  af: number;    // Airflow count per minute
  pulse: number; //Heartbeat per minute
  bt: number;    // Blood pressure
  conscious: string;   // Consciousness, GCS, RLS
  temp: number;  // Body temperature
  pain: number;  // Pain estimate // Todo validator
  weight: number;

  constructor(private ehrService: EhrService) {
  }

  ngOnInit(): void {
      this.getPatientHealthInfo();
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

  getGender() {
    if (this.currentVisit) {
      return getGenderFromSocialIdString(this.currentVisit.getPerson().getId().toString()) === 'female' ? 'Kvinna' : 'Man';
    }
  }

  //Retrieves health info connected to currentVisit from EHRScape.
  private getPatientHealthInfo(): void {
    this.ehrService.getSpo2(this.currentVisit.getehrId()).subscribe((answer: any) => {
        this.spo2 = answer.resultSet[0].value.numerator;
    });
    this.ehrService.getAf(this.currentVisit.getehrId()).subscribe((answer:any) => {
        this.af = answer.resultSet[0].value.magnitude;
    });
    this.ehrService.getPulse(this.currentVisit.getehrId()).subscribe((answer:any) => {
        this.pulse = answer.resultSet[0].value.magnitude;
    });
    this.ehrService.getBt(this.currentVisit.getehrId()).subscribe((answer:any) => {
        this.bt = answer.resultSet[0].value.magnitude;
    });
    this.ehrService.getTemp(this.currentVisit.getehrId()).subscribe((answer:any) => {
        this.temp = answer.resultSet[0].value.magnitude;
    });
    this.ehrService.getPain(this.currentVisit.getehrId()).subscribe((answer:any) => {
        this.pain = answer.resultSet[0].value.magnitude;
    });
    this.ehrService.getWeight(this.currentVisit.getehrId()).subscribe((answer:any) => {
        this.weight = answer.resultSet[0].value.magnitude;
    });
  }

}
