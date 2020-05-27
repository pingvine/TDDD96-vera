import {AfterViewInit, Component, OnInit, ViewChild,} from '@angular/core';
import {ViewNameService} from '../view-name.service';
import {HeaderName} from '../header-name';
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.css']
})
export class OverviewViewComponent extends HeaderName implements OnInit, AfterViewInit {
  @ViewChild('table') overviewTable: any;

  selectedVisitor: any;

  visitorSelectorOpened: boolean;

  constructor(viewNameService: ViewNameService, private patientService: PatientService) {
    super(viewNameService, 'Enhetsöversikt');
  }

  selectVisitor(visitor: any): void {
    this.selectedVisitor = visitor;
    this.visitorSelectorOpened = true;
    console.log(this.selectedVisitor);
    this.patientService.changePnr(visitor.socialId);
  }

  setVisitorSelectorState(state: boolean) {
    this.visitorSelectorOpened = state;
  }


  ngOnInit(): void {
    super.setView();
  }

  ngAfterViewInit() {
    // this.overviewTable.viewLoaded();
  }
}
