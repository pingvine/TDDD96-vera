import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-visit-reason',
  templateUrl: './visit-reason.component.html',
  styleUrls: ['./visit-reason.component.css']
})
export class VisitReasonComponent implements OnInit {

  @Input() reason = '';
  @Output() reasonChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onReasonChange(event: string) {
    this.reasonChange.emit(event);
  }
}
