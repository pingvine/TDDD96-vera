import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit-view.component.html',
  styleUrls: ['./new-visit-view.component.css']
})
export class NewVisitViewComponent extends HeaderName implements OnInit {
  departments = [
    'Motala', 'Linköping', 'Norrköping'
  ];
  constructor(viewNameService: ViewNameService) {
    super(viewNameService, 'Ny patient');
  }
  ngOnInit(): void {
    super.setView();
  }
}
