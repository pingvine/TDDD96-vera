import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-patient-status-view-dialog',
  templateUrl: './patient-status-view-dialog.component.html',
  styleUrls: ['./patient-status-view-dialog.component.css']
})
export class PatientStatusViewDialogComponent implements OnInit {
  header_title = "Statusbedömning";
  comment = "";
  constructor(public dialogRef: MatDialogRef<PatientStatusViewDialogComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onCommentChange(list: string): void {
    console.log(list);
    let html = this.convertToHtmlList(list);
    console.log(html);
    this.comment = html;
  }

  convertToHtmlList(dict){
    let html = '';
    if(dict.active === '1'){
      html += '<ul><li><h2>' + dict.name + '</h2></li>';
      if(dict.skin !== undefined){
        html += '<ul><li>Anmärkning på hud</li>';
        html += '<ul><li>' + dict.skin.type + ': ' + dict.skin.comment + '</li>';
        html += '</ul></ul>';
      }
      if(dict.sfi !== '') {
        html += '<ul><li>Sfinktertonus</li>';
        html += '<ul><li>' + dict.sfi + ': ' + dict.comment + '</li></ul></ul>';
      }
      html += '</ul>';
    }
    else if(dict.active === '2') {
      html += '<ul><li><h2>' + dict.name + '</h2></li>';
      html += '<ul><li>Ingen anmärkning</li>';
    }
    return html;
  }
}
