import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
  providers: [RequestService]
})
export class SummaryViewComponent implements OnInit {
  name = 'Sammanställning';
  url = 'http://localhost:4201/summary';
  response = [];
  constructor(private service: RequestService) { }

  private getSummary(): void {
    this.service.getData(this.url)
      .subscribe(response => {
      console.log(response);
      this.response = response;
    });
  }

  ngOnInit(): void {
    this.getSummary();
  }
}
