import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewNameService } from '../view-name.service';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.css']
})
export class SettingsViewComponent implements OnInit, OnDestroy {
  view: string;
  subscription: Subscription;
  constructor(private viewNameService: ViewNameService) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.view = view);
  }

  setView() {
    this.viewNameService.changeView('Inställningar');
  }

  ngOnInit(): void {
    this.setView();
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
