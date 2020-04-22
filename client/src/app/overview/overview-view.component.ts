import { Component, OnInit } from '@angular/core';
import {RequestService} from '../request.service';
import {DummyGet} from '../models/get.dummy.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.css'],
  providers: [RequestService]
})
export class OverviewViewComponent implements OnInit {
  url = 'http://localhost:4201/overview';
  response: DummyGet[];
  responseOk = false;
  constructor(private service: RequestService) { }

  private getPatients(): void {
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
        this.response = response;
        this.responseOk = true;
      });
  }

  ngOnInit(): void {
    this.getPatients();
  }
}
