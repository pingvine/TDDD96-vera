import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visit-body',
  templateUrl: './visit-body.component.html',
  styleUrls: ['./visit-body.component.css']
})
export class VisitBodyComponent implements OnInit {
  @Input() spo2: number;  // Blood saturation
  @Input() af: number;    // Airflow count per minute
  @Input() pulse: number;
  @Input() bt: number;    // Blood pressure
  @Input() rls: string;   // Consciousness
  @Input() temp: number;  // Body temperature
  @Input() pain: number;  // Pain estimate // Todo validator
  @Input() weight: number;

  constructor() { }

  ngOnInit(): void {
  }

}
