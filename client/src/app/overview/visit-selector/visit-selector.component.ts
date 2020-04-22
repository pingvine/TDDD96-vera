import { Component, OnInit } from '@angular/core';

export interface Message {
  date: string;
  info: string;
}
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
  actions: Message[] = [
    {date: 'Idag kl. 14:35', info: 'Läk Beatrice: Ny ordination Voltaren 75mg'}
  ];
  constructor() {
    this.name = 'Josef Atoui';
    this.age = 22;
    this.personalId = '19970530-XXXX';
    this.priority = 'red';
    this.team = 'A';
  }
  toggleMenu() {
  }
  ngOnInit(): void {
  }

}
