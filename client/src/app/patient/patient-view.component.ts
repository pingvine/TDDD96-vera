import {Component, OnInit} from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';
import {Visit} from "../models/Visit";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent extends HeaderName implements OnInit {
  url = 'http://localhost:4201/patient';

  private currentVisit: Visit;

  constructor(private service: RequestService, viewNameService: ViewNameService, private patientService: PatientService) {
    super(viewNameService, 'Patientvy');
    this.patientService.currentVisit.subscribe((visit) => {
      this.currentVisit = visit;
    })
  }

  private getPatient(): void {
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit(): void {
    super.setView();
    this.getPatient();
  }
}
