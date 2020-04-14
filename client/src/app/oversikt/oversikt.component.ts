import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../fetch-data.service';

@Component({
  selector: 'app-overwatch',
  templateUrl: './oversikt.component.html',
  styleUrls: ['./oversikt.component.css'],
  providers: [FetchDataService]
})
export class OversiktComponent implements OnInit {
  url = 'http://localhost:4201/oversikt';
  response = [];
  responseOk = false;
  constructor(private service: FetchDataService) { }

  private getPatients(): void {
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
        this.response = response;
        this.responseOk = true;
      });
    setTimeout(() => {console.log(this.response); }, 2000);
  }

  ngOnInit(): void {
    this.getPatients();
  }
}
