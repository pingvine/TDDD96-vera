import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
  providers: [RequestService]
})
export class SummaryViewComponent extends HeaderName implements OnInit {
  url = 'http://localhost:4201/summary';
  response = [];
  constructor(private service: RequestService, viewNameService: ViewNameService) {
    super(viewNameService, 'Sammanställning');
  }

  private getSummary(): void {
    this.service.getData(this.url)
      .subscribe(response => {
      console.log(response);
      this.response = response;
    });
  }

  ngOnInit(): void {
    super.setView();
    this.getSummary();
  }
}
