import {Component, EventEmitter, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-new-visit-reason',
  templateUrl: './new-visit-reason.component.html',
  styleUrls: ['./new-visit-reason.component.css']
})

export class NewVisitReasonComponent implements OnInit {

  @Output() search = new EventEmitter<{}>();

  constructor() {
  }

  ngOnInit(): void {
  }

  updateReason(reason: any): void {
    console.log(reason.target.value);

    this.search.emit({'search': reason});
  }

  updateESS(ess: any): void {
    console.log(ess.target.value);
    this.search.emit({'ess': ess});
  }

  updateInformation(information: any): void {
    console.log(information.target.value);
    this.search.emit({'information': information});
  }
}
