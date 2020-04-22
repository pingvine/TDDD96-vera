import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitselector',
  templateUrl: './visit-selector.component.html',
  styleUrls: ['./visit-selector.component.css']
})
export class VisitSelectorComponent implements OnInit {
  priority: string;
  name: string;
  age: number;
  personalId: string;
  team: string;
  sex: string;



  constructor() {
    this.name = 'Josef Atoui';
    this.age = 22;
    this.personalId = '19970530-XXXX';
    this.priority = 'red';
    this.team = 'Team A';
    this.sex = 'Man';
  }

  toggleMenu() {

  }

  ngOnInit(): void {
  }

}
