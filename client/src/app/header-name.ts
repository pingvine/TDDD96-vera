import {Subscription} from 'rxjs';
import {OnDestroy} from '@angular/core';
import {ViewNameService} from './view-name.service';


export class HeaderName implements OnDestroy {
  protected viewName: string;
  subscription: Subscription;

  constructor(protected viewNameService: ViewNameService, viewName: string) {
    this.subscription = this.viewNameService.view$.subscribe((view) => {
      this.viewName = view;
    });
    this.viewName = viewName;
  }

  /**
   * Set the current view name to the child´s view name
   */
  setView() {
    this.viewNameService.changeView(this.viewName);
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('unsubscribed');
  }
}
