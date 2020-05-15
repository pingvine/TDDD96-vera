import {Component, Input, OnInit} from '@angular/core';
import { Subject, Observable } from 'rxjs'
import {PatientService} from "../../services/patient.service";
import {Visit} from "../../models/Visit";
import {getAgeFromSocialIdNumber, getGenderFromSocialIdString, getNumberFromSocialString} from "../../util/helpers";
import { EhrService } from '../../ehr.service';

@Component({
  selector: 'app-visit-view-header',
  templateUrl: './visit-view-header.component.html',
  styleUrls: ['./visit-view-header.component.css']
})
export class VisitViewHeaderComponent implements OnInit {
  @Input() currentVisit: Visit;

  //spo2: Subject <number>;  // Blood saturation
  spo2: number;
  af: number;    // Airflow count per minute
  pulse: number;
  bt: number;    // Blood pressure
  conscious: string;   // Consciousness, GCS, RLS
  temp: number;  // Body temperature
  pain: number;  // Pain estimate // Todo validator
  weight: number;
  ehrId: string;

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

  //Retrieves helt info connected to visit from EHRScape.
  private getPatientHealthInfo(): void {

    this.ehrService.getPnr(this.getSocialId().toString()).subscribe((answer: any) =>{
        this.ehrId = answer.parties[0].additionalInfo.ehrId;
        //console.log('ehrId: ' + answer.parties[0].additionalInfo.ehrId)

    this.ehrService.getSpo2(this.ehrId).subscribe((answer: any) => {
        //this.spo2.next(answer.resultSet[0].value.numerator);
        this.spo2 = answer.resultSet[0].value.numerator;
        //console.log('SpO2: ' + this.spo2)
    });
    this.ehrService.getAf(this.ehrId).subscribe((answer:any) => {
        this.af = answer.resultSet[0].value.magnitude;
        //console.log('AF: ' + this.af)
    });
    this.ehrService.getPulse(this.ehrId).subscribe((answer:any) => {
        this.pulse = answer.resultSet[0].value.magnitude;
        //console.log('pulse: ' + this.pulse)
    });
    this.ehrService.getBt(this.ehrId).subscribe((answer:any) => {
        this.bt = answer.resultSet[0].value.magnitude;
        //console.log('BT: ' + this.bt)
    });
    this.ehrService.getTemp(this.ehrId).subscribe((answer:any) => {
        this.temp = answer.resultSet[0].value.magnitude;
        //console.log('Temp: ' + this.temp)
    });
    this.ehrService.getPain(this.ehrId).subscribe((answer:any) => {
        this.pain = answer.resultSet[0].value.magnitude;
        //console.log('Pain: ' + this.pain)
    });
    this.ehrService.getWeight(this.ehrId).subscribe((answer:any) => {
        this.weight = answer.resultSet[0].value.magnitude;
        //console.log('Weight: ' + this.weight)
    });
    });
  }
  getSpo2(): Observable <number>{
      return this.spo2.asObservable();
  }
  getAf(){
      return this.af;
  }
  getPulse(){
      return this.pulse;
  }
  getBt(){
      return this.bt;
  }
  getTemp(){
      return this.temp;
  }
  getPain(){
      return this.pain;
  }
  getWeight(){
      return this.weight;
  }


}
