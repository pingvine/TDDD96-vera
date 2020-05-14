import { Component, OnInit } from '@angular/core';
import { InstanceManager } from './Managers/InstanceManager';
import { EhrService } from './ehr.service';
import { RoleType } from './models/RoleType';
import { HealthManager } from './Managers/HealthManager';
import {LoginService} from "./services/login.service";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentComponent: any;

  currentUser: User;

  views = [{ name: 'Enhetsöversikt', url: '/overview' },
    // {name: 'Patientöversikt', url: '/patient', active: false},
    { name: 'Teamöversikt', url: '/team' },
    { name: 'Inställningar', url: '/settings' }];

  title = 'VERA 20';

  im = new InstanceManager();

  constructor(private ehrService: EhrService, private loginService: LoginService) {
    this.loginService.currentUser.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.ehrService.getActivePatients('MOTTAGNING').subscribe((resp: any) => {
      resp.parties.forEach((partyData) => {
        // eslint-disable-next-line max-len
        const pat = this.im.createPerson(partyData.additionalInfo.Personnummer, partyData.firstNames, partyData.lastNames);
        pat.setRoleType(RoleType.Patient);
        const vis = this.im.createVisit(pat);
        const healthManager = new HealthManager(partyData.additionalInfo.ehrId);
        vis.setHealthManager(healthManager);
        partyData.additionalInfo.gender = partyData.gender;
        vis.setVisitInfo(partyData.additionalInfo);
      });
    });
    // this.ehrService.createPerson('Anna', '987654-3210');
  }

  ngAfterViewInint() {
    // this.currentComponent.test();
  }

  onActivate(refComponent) {
    this.currentComponent = refComponent;
    setTimeout((_) => {
      refComponent.overviewTable.loadVisits(this.im.getVisits());
      console.log('Patients loaded');
    });
  }
}
