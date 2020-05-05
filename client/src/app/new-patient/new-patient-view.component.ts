import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient-view.component.html',
  styleUrls: ['./new-patient-view.component.css']
})
export class NewPatientViewComponent implements OnInit {
  departments = [
    'Motala', 'Linköping', 'Norrköping'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
