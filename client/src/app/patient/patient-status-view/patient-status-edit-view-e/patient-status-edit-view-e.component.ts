import {
  Component, EventEmitter, Input, OnInit, Output, SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-patient-status-edit-view-e',
  templateUrl: './patient-status-edit-view-e.component.html',
  styleUrls: ['./patient-status-edit-view-e.component.css'],
})
export class PatientStatusEditViewEComponent implements OnInit {
  @Output() remarkChange: EventEmitter<boolean> = new EventEmitter();

  @Output() commentChange: EventEmitter<any> = new EventEmitter();

  panelOpenState = false;

  remark = '';

  infoKlicka = 'Klicka på kroppen där du vill anmärka';

  infoIcon = 'info';

  warnIntegritet = 'Tänk alltid på patientens integritet vid avklädning. Täck över den del av kroppen som för tillfället inte bedöms.';

  warnIcon = 'warning';

  header_title = 'E - Exponering';

  isOn = true;

  sfinktertonus = '';

  comment = '';

  skin = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onCommentChange(event) {

    this.commentChange.emit(event);
  }

  onRemarkChange(event) {
    this.remarkChange.emit(event);
  }

  updateSummary() {
    const summary = {
      name: 'Exponering',
      active: this.remark,
      skin: this.skin,
      sfi: this.sfinktertonus,
      comment: this.comment
    };
    console.log(summary);
    this.commentChange.emit(summary);
  }

  setSkinValue(event){
    this.skin = event;
    this.updateSummary();
  }
}
