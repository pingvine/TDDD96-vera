import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientmeny',
  templateUrl: './patientmeny.component.html',
  styleUrls: ['./patientmeny.component.css']
})
export class PatientmenyComponent implements OnInit {
  priority: string;
  name: string;
  age: number;
  personalId: string;
  team: string;
  constructor() {
    this.name = 'Josef Atoui';
    this.age = 22;
    this.personalId = '19970530-XXXX';
    this.priority = 'red';
    this.team = 'Team A';
  }

  ngOnInit(): void {
  }

}
