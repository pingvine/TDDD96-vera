import {
  AfterViewInit, Component, OnInit, ViewChild,
} from '@angular/core';
import { RequestService } from '../request.service';
import { DummyGet } from '../models/get.dummy.model';
import { ViewNameService } from '../view-name.service';
import { HeaderName } from '../header-name';
import { OverviewTableComponent } from './overview-table/overview-table.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.css'],
  providers: [RequestService],
})
export class OverviewViewComponent extends HeaderName implements OnInit, AfterViewInit {
  @ViewChild('table') overviewTable: any;

  selectedVisitor: any;

  visitorSelectorOpened: boolean;

  url = 'http://localhost:4200/overview';

  response: DummyGet[];

  responseOk = false;

  constructor(private service: RequestService, viewNameService: ViewNameService) {
    super(viewNameService, 'Enhetsöversikt');
  }

  private getPatients(): void {
    this.service.getData(this.url)
      .subscribe((response) => {
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


  ngOnInit(): void {
    // this.getPatients();
    super.setView();
  }

  ngAfterViewInit() {
    // this.overviewTable.viewLoaded();
  }
}
