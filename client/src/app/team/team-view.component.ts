import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewNameService } from '../view-name.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit, OnDestroy {
  view: string;
  subscription: Subscription;
  constructor(private viewNameService: ViewNameService) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.view = view);
  }

  setView() {
    this.viewNameService.changeView('Teamöversikt');
  }

  ngOnInit(): void {
    this.setView();
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
