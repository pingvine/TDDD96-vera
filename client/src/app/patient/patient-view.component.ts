import {Component, OnDestroy, OnInit} from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit, OnDestroy {
  url = 'http://localhost:4201/patient';
  subscription: Subscription;
  view: string;
  constructor(private service: RequestService, private viewNameService: ViewNameService) {
    this.subscription = this.viewNameService.view$.subscribe(view => this.view = view);

  }

  private getPatient(): void {
    this.service.getData(this.url)
      .subscribe(response => {
        console.log(response);
      });
  }

  setView() {
    this.viewNameService.changeView('Patientöversikt');
  }

  ngOnInit(): void {
    this.setView();
    this.getPatient();
  }

  // To prevent memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
