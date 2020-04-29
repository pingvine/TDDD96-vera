import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Priority} from '../../../models/Priority';

@Component({
  selector: 'app-visit-info-personal',
  templateUrl: './visit-info-personal.component.html',
  styleUrls: ['./visit-info-personal.component.css']
})
export class VisitInfoPersonalComponent implements OnInit, OnChanges {
  // TODO use user model
  @Input() priority = 0;
  @Input() firstName = 'firstName';
  @Input() lastName = 'lastName';
  @Input() socialId = 199801010101;
  // @Input() attention: AttentionData;

  @Output() prioChange: EventEmitter<number> = new EventEmitter();
  priorityColor = '';
  constructor() { }

  ngOnInit(): void {
    this.priorityColor = Priority[this.priority];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.priorityColor = Priority[changes.priority.currentValue];
  }

}
