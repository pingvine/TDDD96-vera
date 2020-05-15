import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-visit-body',
  templateUrl: './visit-body.component.html',
  styleUrls: ['./visit-body.component.css']
})
export class VisitBodyComponent implements OnInit {

  @Output() onClickBody = new EventEmitter<any>();

  @Input() spo2: number;  // Blood saturation
  @Input() af: number;    // Airflow count per minute
  @Input() pulse: number; //Heartbeat per minute
  @Input() bt: number;    // Blood pressure
  @Input() conscious: string;   // Consciousness, GCS, RLS
  @Input() temp: number;  // Body temperature
  @Input() pain: number;  // Pain estimate // Todo validator
  @Input() weight: number;

  constructor() { }

  ngOnInit(): void {
  }

  onClicked($event: MouseEvent) {
    this.onClickBody.emit();
  }


}
