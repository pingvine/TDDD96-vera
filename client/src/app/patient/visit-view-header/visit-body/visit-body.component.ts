import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Visit} from "../../../models/Visit";
import { VisitViewHeaderComponent } from "../visit-view-header.component"


@Component({
  selector: 'app-visit-body',
  templateUrl: './visit-body.component.html',
  styleUrls: ['./visit-body.component.css']
})
export class VisitBodyComponent implements OnInit {

  @Output() onClickBody = new EventEmitter<any>();

  @Input() spo2: number;  // Blood saturation
  @Input() af: number;    // Airflow count per minute
  @Input() pulse: number;
  @Input() bt: number;    // Blood pressure
  @Input() conscious: string;   // Consciousness, GCS, RLS
  @Input() temp: number;  // Body temperature
  @Input() pain: number;  // Pain estimate // Todo validator
  @Input() weight: number;

  constructor(private visitViewHeaderComponent : VisitViewHeaderComponent) { }

  ngOnInit(): void {
  }

  onClicked($event: MouseEvent) {
    this.onClickBody.emit();
  }


}
