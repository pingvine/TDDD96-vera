import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientViewComponent } from './patient/patient-view.component';
import {OverviewViewComponent} from './overview/overview-view.component';
import {SummaryViewComponent} from './summary/summary-view.component';
import {TeamViewComponent} from './team/team-view.component';
import {SettingsViewComponent} from './settings/settings-view.component';
import {NewPatientViewComponent} from './new-patient/new-patient-view.component';
import {TestEventSocketComponent} from "./test-event-socket/test-event-socket.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'patient/new',
    component: NewPatientViewComponent,
    pathMatch: 'full'
  },
  { path: 'settings',
    component: SettingsViewComponent
  },
  { path: 'team',
    component: TeamViewComponent
  },
  { path: 'patient/:social-id',
    component: PatientViewComponent
  },
  {
    path: 'patient/:social-id/summary',
    component: SummaryViewComponent
  },
  { path: 'overview',
    component: OverviewViewComponent,
    data: {}
  },
  { path: 'patient',
    component: PatientViewComponent,
    data: {}
  },
  { path : 'login',
    component: LoginComponent},
  { path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  { path: 'socket',
    component: TestEventSocketComponent,}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
