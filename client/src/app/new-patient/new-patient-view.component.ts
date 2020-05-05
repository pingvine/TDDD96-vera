import { Component, OnInit } from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient-view.component.html',
  styleUrls: ['./new-patient-view.component.css']
})
export class NewPatientViewComponent extends HeaderName implements OnInit {
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
