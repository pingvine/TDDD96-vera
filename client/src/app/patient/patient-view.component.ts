import {Component, OnInit, Input} from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';
import { EhrService} from '../ehr.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent extends HeaderName implements OnInit {
  @Input() visit: any = '';

 /* @Input() spo2: number;  // Blood saturation
  @Input() af: number;    // Airflow count per minute
  @Input() pulse: number;
  @Input() bt: number;    // Blood pressure
  @Input() conscious: string;   // Consciousness, GCS, RLS
  @Input() temp: number;  // Body temperature
  @Input() pain: number;  // Pain estimate // Todo validator
  @Input() weight: number; */

  spo2: number;  // Blood saturation
  af: number;    // Airflow count per minute
  pulse: number;
  bt: number;    // Blood pressure
  conscious: string;   // Consciousness, GCS, RLS
  temp: number;  // Body temperature
  pain: number;  // Pain estimate // Todo validator
  weight: number;

  url = 'http://localhost:4201/patient';
  constructor(private service: RequestService, viewNameService: ViewNameService, private ehrService : EhrService) {
    super(viewNameService, 'Patientvy');
  }

  private getPatientHealthInfo(): void {
    /*
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
      });
    */
    /*let ehrId = this.ehrService.getPnr(this.visit.socialId).subscribe((answer: any) => {
        console.log('EhrId: ' + answer.parties[0].additionalInfo.ehrId)
        console.log('test');
    });*/
    let ehrId = "e8d1e125-1d80-4d5d-825a-359757375dc6";

    this.ehrService.getSpo2(ehrId).subscribe((answer: any) => {
        console.log('SpO2: ' + answer.resultSet[0].value.numerator)
        this.spo2 = answer.resultSet[0].value.numerator;
    });
    this.ehrService.getAf(ehrId).subscribe((answer:any) => {
        console.log('AF: ' + answer.resultSet[0].value.magnitude)
        this.spo2 = answer.resultSet[0].value;
    });
    this.ehrService.getPulse(ehrId).subscribe((answer:any) => {
        console.log('pulse: ' + answer.resultSet[0].value.magnitude)
        this.spo2 = answer.resultSet[0].value;
    });
    this.ehrService.getBt(ehrId).subscribe((answer:any) => {
        console.log('BT: ' + answer.resultSet[0].value.magnitude)
        this.spo2 = answer.resultSet[0].value;
    });
    this.ehrService.getTemp(ehrId).subscribe((answer:any) => {
        console.log('Temp: ' + answer.resultSet[0].value.magnitude)
        this.spo2 = answer.resultSet[0].value;
    });
    this.ehrService.getPain(ehrId).subscribe((answer:any) => {
        console.log('Pain: ' + answer.resultSet[0].value.magnitude)
        this.spo2 = answer.resultSet[0].value;
    });
    this.ehrService.getWeight(ehrId).subscribe((answer:any) => {
        console.log('Weight: ' + answer.resultSet[0].value.magnitude)
        this.spo2 = answer.resultSet[0].value;
    });
  }

  ngOnInit(): void {
    super.setView();
    this.getPatientHealthInfo();
  }
}
