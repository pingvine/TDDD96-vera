import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../fetch-data.service';

@Component({
  selector: 'app-sammanstallning',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [FetchDataService]
})
export class SummaryComponent implements OnInit {
  url = 'http://localhost:4201/summary';
  response = [];
  constructor(private service: FetchDataService) { }

  private getSammanstallning(): void {
    this.service.getData(this.url)
      .subscribe(response => {
      console.log(response);
      this.response = response;
    });
  }

  ngOnInit(): void {
    this.getSammanstallning();
  }
}
