import {Subscription} from 'rxjs';
import {ViewNameService} from './view-name.service';
import {OnDestroy} from '@angular/core';


export class HeaderName implements OnDestroy {
  protected viewName: string;
  subscription: Subscription;

  constructor(protected viewNameService: ViewNameService, viewName: string) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.viewName = view);
    this.viewName = viewName;
  }

  setView() {
    this.viewNameService.changeView(this.viewName);
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('unsubscribed');
  }
}
