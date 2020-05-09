import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-patient-status-edit-view-e',
  templateUrl: './patient-status-edit-view-e.component.html',
  styleUrls: ['./patient-status-edit-view-e.component.css']
})
export class PatientStatusEditViewEComponent implements OnInit {
  @Output() commentChange: EventEmitter<string> = new EventEmitter();
  panelOpenState = false;
  sarskada = false;
  brannskada = false;
  hudutslag = false;
  kommentar = "";
  infoKlicka = "Klicka på kroppen där du vill anmärka";
  infoIcon = "info";
  warnIntegritet = "Tänk alltid på patientens integritet vid avklädning. Täck över den del av kroppen som för tillfället inte bedöms."
  warnIcon = "warning";
  header_title = "E - Exponering"
  constructor() { }

  ngOnInit(): void {
  }

  onCommentChange(event) {
    this.commentChange.emit(event);
  }

}
