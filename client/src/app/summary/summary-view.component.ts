import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css'],
  providers: [RequestService]
})
export class SummaryViewComponent extends HeaderName implements OnInit {

  constructor(viewNameService: ViewNameService) {
    super(viewNameService, 'Sammanställning');
  }

  ngOnInit(): void {
    super.setView();
  }
}
