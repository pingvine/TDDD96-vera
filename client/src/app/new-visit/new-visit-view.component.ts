import {Component, OnInit} from '@angular/core';
import {ViewNameService} from '../view-name.service';
import {HeaderName} from '../header-name';
import {EhrService, partyData} from '../ehr.service';
import {Router} from "@angular/router";
import {ServerService} from "../services/server.service";
import {LoginService} from "../services/login.service";
import {User} from "../models/User";
import {ActionType} from "../models/ActionType";
import {Person} from "../models/Person";
import {PrioTime} from "../models/PrioTime";


@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit-view.component.html',
  styleUrls: ['./new-visit-view.component.css']
})

export class NewVisitViewComponent extends HeaderName implements OnInit {

  visit: partyData;

  user: User;

  constructor(viewNameService: ViewNameService,
              private ehrService : EhrService,
              private router: Router,
              private server: ServerService,
              private loginService: LoginService) {
    super(viewNameService, 'Ny patient');
    this.loginService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
  ngOnInit(): void {
    super.setView();
  }

  addVisit(): void {
    this.ehrService.createPerson(this.visit);
    //  TODO check for valid response from ehr first
    this.server.createCareEvent(this.user.getFirstName(), this.user, [this.user.getRoleType()], 0,
      ActionType.Information, 'Ny patient', new Person(Number(this.visit.additionalInfo.socialId),
        this.visit.firstNames, this.visit.lastNames), 0).subscribe(() => {
    });
    this.server.createCareEvent(this.user.getFirstName(), this.user, [this.user.getRoleType()], 0,
      ActionType.Warning, 'Titta till patient', new Person(Number(this.visit.additionalInfo.socialId),
        this.visit.firstNames, this.visit.lastNames), Number(PrioTime[this.visit.additionalInfo.prio.toUpperCase()]))
      .subscribe(() => {
    });
    this.router.navigate(['overview']);


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
