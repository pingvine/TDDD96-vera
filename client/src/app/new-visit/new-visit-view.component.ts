import {Component, Input, OnInit} from '@angular/core';
import { ViewNameService } from '../view-name.service';
import {HeaderName} from '../header-name';
import {EhrService, partyData} from '../ehr.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit-view.component.html',
  styleUrls: ['./new-visit-view.component.css']
})

export class NewVisitViewComponent extends HeaderName implements OnInit {

  visit: partyData;

  constructor(viewNameService: ViewNameService,
              private ehrService : EhrService,
              private router: Router) {
    super(viewNameService, 'Ny patient');
  }
  ngOnInit(): void {
    super.setView();
  }

  addVisit(): void {
    if (this.visit.firstNames != '' && this.visit.lastNames != '' && this.visit.additionalInfo.socialId != '') {
      this.ehrService.createPerson(this.visit);
      //  TODO check for valid response from ehr first
      this.router.navigate(['overview']);
    }
  }
  updateVisitor(visit: partyData) {
    console.log('reciving: ' + visit.firstNames + ' ' + visit.lastNames)
    this.visit = visit;
  }
  updateVisitorInformation(information: {key, value}) {
    this.visit.additionalInfo[information.key] = information.value;
    console.log(this.visit.additionalInfo.search)
  }

}
