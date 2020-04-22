import {Component, OnInit} from '@angular/core';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  url = 'http://localhost:4201/patient';
  constructor(private service: RequestService) { }

  private getPatient(): void {
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
      });
  }

  ngOnInit(): void {
    this.getPatient();
  }
}
