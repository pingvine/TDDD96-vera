import { NgModule } from '@angular/core';
import {
  Routes, RouterModule,
} from '@angular/router';
import { PatientViewComponent } from './patient/patient-view.component';
import { TestNoticeSocketComponent } from './test-notice-socket/test-notice-socket.component';
import { OverviewViewComponent } from './overview/overview-view.component';
import { SummaryViewComponent } from './summary/summary-view.component';
import { TeamViewComponent } from './team/team-view.component';
import { SettingsViewComponent } from './settings/settings-view.component';
import { NewVisitViewComponent } from './new-visit/new-visit-view.component';
import { TestEventSocketComponent } from "./test-event-socket/test-event-socket.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
  { path: 'patient/new',
    component: NewVisitViewComponent,
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsViewComponent,
  },
  {
    path: 'team',
    component: TeamViewComponent,
  },
  {
    path: 'patient',
    component: PatientViewComponent,
  },
  {
    path: 'patient/summary',
    component: SummaryViewComponent,
  },
  {
    path: 'overview',
    component: OverviewViewComponent,
    data: {},
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path : 'login',
    component: LoginComponent},
  {
    path: 'socket',
    component: TestEventSocketComponent,
  },
  {
    path: 'notice',
    component: TestNoticeSocketComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
