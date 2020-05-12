import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: './patient-status-view-dialog.component.html',
  styleUrls: ['./patient-status-view-dialog.component.css']
})
export class PatientStatusViewDialogComponent implements OnInit {
  header_title = "Statusbedömning"
  comment = "";
  header_title_a = "A - Luftväg";
  header_title_b = "B - Andning";
  header_title_c = "C - Cirkulation";
  header_title_d = "D - Medvetandegrad";
  constructor() {
  }

  ngOnInit(): void {
  }

  onCommentChange(comment: string): void {
    this.comment = comment;
  }

  onRemarkChange(remark: boolean) {
    if (remark == true) {
      console.log("HEJ");
      this.comment += "Exponering";
    }
    console.log(":(")
  }
}
