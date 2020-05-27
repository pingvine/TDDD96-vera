import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {Message} from '../../../overview/visit-selector/visit-selector.component';
import {ServerService} from "../../../services/server.service";

@Component({
  selector: 'app-visit-events',
  templateUrl: './visit-events.component.html',
  styleUrls: ['./visit-events.component.css']
})
export class VisitEventsComponent implements OnInit {
  @Input() events: Message[] = [
    {date: new Date(Date.now()), user: 'LäkBeatrice', info: 'Ny ordination Voltaren 75mg'}
  ];

  @Output() clickedEvents: EventEmitter<any> = new EventEmitter();

  constructor(private server: ServerService) {

  }

  ngOnInit(): void {

  }

  onClick() {
    this.clickedEvents.emit(null);
  }


}
