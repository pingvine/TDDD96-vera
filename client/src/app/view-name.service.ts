import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewNameService {
  private view = new BehaviorSubject('view name');
  view$ = this.view.asObservable();

  constructor() { }

  changeView(view: string) {
    this.view.next(view);
    console.log(this.view.value);
  }
}
