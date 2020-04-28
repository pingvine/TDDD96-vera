import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
  providers: [RequestService]
})
export class SummaryViewComponent implements OnInit, OnDestroy {
  view: string;
  subscription: Subscription;
  url = 'http://localhost:4201/summary';
  response = [];
  constructor(private service: RequestService, private viewNameService: ViewNameService) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.view = view);
  }

  private getSummary(): void {
    this.service.getData(this.url)
      .subscribe(response => {
      console.log(response);
      this.response = response;
    });
  }

  setView() {
    this.viewNameService.changeView('Sammanställning');
  }

  ngOnInit(): void {
    this.setView();
    this.getSummary();
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
