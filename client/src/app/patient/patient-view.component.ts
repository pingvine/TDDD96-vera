import {Component, OnInit, Input} from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';
import { EhrService} from '../ehr.service';
import {Visit} from "../models/Visit";
import {PatientService} from "../services/patient.service";


@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent extends HeaderName implements OnInit {

  spo2: number;  // Blood saturation
  af: number;    // Airflow count per minute
  pulse: number;
  bt: number;    // Blood pressure
  conscious: string;   // Consciousness, GCS, RLS
  temp: number;  // Body temperature
  pain: number;  // Pain estimate // Todo validator
  weight: number;

  url = 'http://localhost:4201/patient';

  currentVisit: Visit;

  constructor(private service: RequestService, viewNameService: ViewNameService, private patientService: PatientService) {
      super(viewNameService, 'Patientvy');
      this.patientService.currentVisit.subscribe((visit) => {
        this.currentVisit = visit;
      })
  }



  ngOnInit(): void {
    super.setView();
    //this.getPatientHealthInfo();
  }
}
