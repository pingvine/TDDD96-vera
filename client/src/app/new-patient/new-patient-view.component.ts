import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient-view.component.html',
  styleUrls: ['./new-patient-view.component.css']
})
export class NewPatientViewComponent implements OnInit, OnDestroy {
  view: string;
  subscription: Subscription;
  constructor(private viewNameService: ViewNameService) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.view = view);
  }

  setView() {
    this.viewNameService.changeView('Ny patient');
  }

  ngOnInit(): void {
    this.setView();
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
