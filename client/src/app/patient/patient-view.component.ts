import {Component, OnInit} from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent extends HeaderName implements OnInit {
  url = 'http://localhost:4201/patient';
  constructor(private service: RequestService, viewNameService: ViewNameService) {
    super(viewNameService, 'Patientvy');
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
