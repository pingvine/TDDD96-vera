import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-status-edit-view-e',
  templateUrl: './patient-status-edit-view-e.component.html',
  styleUrls: ['./patient-status-edit-view-e.component.css']
})
export class PatientStatusEditViewEComponent implements OnInit {
  panelOpenState = false;
  sarskada = false;
  brannskada = false;
  hudutslag = false;
  kommentar = "";
  infoKlicka = "Klicka på kroppen där du vill anmärka";
  infoIcon = "info";
  warnIntegritet = "Tänk alltid på patientens integritet vid avklädning. Täck över den del av kroppen som för tillfället inte bedöms."
  warnIcon = "warning";
  constructor() { }

  ngOnInit(): void {
  }

  updateKommentar(event) {
    this.kommentar = event.target.value;
  }

}
