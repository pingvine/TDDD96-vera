import { Component, OnInit } from '@angular/core';
import {FetchDataService} from '../fetch-data.service';

@Component({
  selector: 'app-sammanstallning',
  templateUrl: './sammanstallning.component.html',
  styleUrls: ['./sammanstallning.component.css'],
  providers: [FetchDataService]
})
export class SammanstallningComponent implements OnInit {
  url = 'http://localhost:4201/sammanstallning';
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
