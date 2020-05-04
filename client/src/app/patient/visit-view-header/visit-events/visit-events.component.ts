import { Component, OnInit } from '@angular/core';
import {EventComponent} from '../../../event/event.component';

@Component({
  selector: 'app-visit-events',
  templateUrl: './visit-events.component.html',
  styleUrls: ['./visit-events.component.css']
})
export class VisitEventsComponent implements OnInit {
  events: EventComponent[];

  constructor() { }

  ngOnInit(): void {
  }

}
