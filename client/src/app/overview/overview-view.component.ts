import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { DummyGet } from '../models/get.dummy.model';
import { ViewNameService } from '../view-name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.css'],
  providers: [RequestService]
})
export class OverviewViewComponent implements OnInit, OnDestroy {
  selectedVisitor: any;
  visitorSelectorOpened: boolean;
  view: string;
  url = 'http://localhost:4200/overview';
  response: DummyGet[];
  responseOk = false;
  subscription: Subscription;
  constructor(private service: RequestService, private viewNameService: ViewNameService) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.view = view);
    console.log(this.view);
  }

  private getPatients(): void {
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
        this.response = response;
        this.responseOk = true;
      });
  }

  selectVisitor(visitor: any): void {
    this.selectedVisitor = visitor;
    this.visitorSelectorOpened = true;
    console.log(this.selectedVisitor);
  }
  setVisitorSelectorState(state: boolean) {
    this.visitorSelectorOpened = state;
  }

  setView() {
    this.viewNameService.changeView('Enhetsöversikt');
  }

  ngOnInit(): void {
    this.getPatients();
    this.setView();
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
