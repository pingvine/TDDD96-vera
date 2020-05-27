import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-patient-view-card-header',
  templateUrl: './patient-view-card-header.component.html',
  styleUrls: ['./patient-view-card-header.component.css']
})
export class PatientViewCardHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() iconPath: string;
  @Input() time: number;
  @Output() onClickFullScreen = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  onClick() {
    this.onClickFullScreen.emit();
  }


}
