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

  onCommentChange(list: string): void {
    console.log(list);
    let html = this.convertToHtmlList(list);
    console.log(html)
    this.comment = html;
  }

  onRemarkChange(remark: boolean) {
    if (remark == true) {
      console.log("HEJ");
      this.comment += "Exponering";
    }
    console.log(":(")
  }

  convertToHtmlList(dict){
    let html = '';
    if(dict.active === '1'){
      html += '<ul><li>' + dict.name + '</li>';
      if(dict.skin !== undefined){
        html += '<ul><li>Anmärkning på hud</li>';
        html += '<ul><li>' + dict.skin.type + '</li>';
        if(dict.skin.comment !== '') {
          html += '<li>' + dict.skin.comment + '</li>';
        }
        html += '</ul></ul>';
      }
      if(dict.sfi !== '') {
        html += '<ul><li>Sfinktertonus</li>';
        html += '<ul><li>' + dict.sfi + '</li></ul></ul>';
      }
      if(dict.comment !== ''){
        html += '<ul><li>Kommentar</li>';
        html += '<ul><li>' + dict.comment + '</li></ul></ul>';
      }

      html += '</ul>';
    }
    return html;
  }
}
