import {Component, Input, OnInit, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';

export interface Message {
  date: number;
  user: string;
  info: string;
}
@Component({
  selector: 'app-visitselector',
  templateUrl: './visit-selector.component.html',
  styleUrls: ['./visit-selector.component.css']
})
export class VisitSelectorComponent implements OnInit, OnChanges {
  @Input() visit: any = '';
  @Output() closeVisitorSelector = new EventEmitter<boolean>();
  priority: string;
  name: string;
  age: number;
  personalId: string;
  team: string;
  sex: string;
  actions: Message[] = [
    {date: Date.now(), user: 'LäkBeatrice', info: 'Ny ordination Voltaren 75mg'}
  ];
  constructor() {}

  closeSideNav() {
    this.closeVisitorSelector.emit(true);
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    this.name = this.visit.name;
    this.age = this.visit.age;
    this.personalId = this.visit.social;
    this.priority = this.visit.prio;
    this.team = this.visit.team;
  }
}
