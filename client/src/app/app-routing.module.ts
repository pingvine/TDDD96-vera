import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientViewComponent } from './patient/patient-view.component';
import {OverviewViewComponent} from './overview/overview-view.component';
import {SummaryViewComponent} from './summary/summary-view.component';
import {TeamViewComponent} from './team/team-view.component';
import {SettingsViewComponent} from './settings/settings-view.component';
import {NewPatientViewComponent} from './new-patient/new-patient-view.component';

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
  { path: 'summary',
    component: SummaryViewComponent
  },
  { path: 'patient',
    component: PatientViewComponent
  },
  { path: 'overview',
    component: OverviewViewComponent,
    data: {}
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
