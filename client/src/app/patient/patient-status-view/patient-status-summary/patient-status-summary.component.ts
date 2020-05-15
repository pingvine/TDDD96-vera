import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-patient-status-summary',
  templateUrl: './patient-status-summary.component.html',
  styleUrls: ['./patient-status-summary.component.css'],
})
export class PatientStatusSummaryComponent implements OnInit {
  @Input() comment;
  @Output() closeDialogEvent = new EventEmitter<any>();

  header_title = "Sammanfattning";

  constructor() {}

  ngOnInit(): void {
  }

  closeDialog() {
    this.closeDialogEvent.emit();
  }

}
