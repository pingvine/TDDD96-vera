import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-visit-info-personal',
  templateUrl: './visit-info-personal.component.html',
  styleUrls: ['./visit-info-personal.component.css']
})
export class VisitInfoPersonalComponent implements OnInit {
  // TODO use user model
  @Input() priority = 0;
  @Input() firstName = 'firstName';
  @Input() lastName = 'lastName';
  @Input() socialId = 199801010101;
  // @Input() attention: AttentionData;

  @Output() prioChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
