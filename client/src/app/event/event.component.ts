import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input() date: number = Date.now();
  @Input() info = 'Placeholder information';
  @Input() user = 'TestUser';
  constructor() { }

  ngOnInit(): void {
  }

}
