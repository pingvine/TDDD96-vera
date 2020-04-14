import {Component, OnInit} from '@angular/core';
import {FetchDataService} from '../fetch-data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  url = 'http://localhost:4201/patient';
  constructor(private service: FetchDataService) { }

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
