import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../overview/visit-selector/visit-selector.component';

@Component({
  selector: 'app-visit-events',
  templateUrl: './visit-events.component.html',
  styleUrls: ['./visit-events.component.css']
})
export class VisitEventsComponent implements OnInit {
  @Input() events: Message[] = [
    {date: new Date(Date.now()), user: 'LäkBeatrice', info: 'Ny ordination Voltaren 75mg'}
  ];

  constructor() { }

  ngOnInit(): void {

  }


}
