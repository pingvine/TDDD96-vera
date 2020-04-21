import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import {OverviewComponent} from './overview/overview.component';
import {SummaryComponent} from './summary/summary.component';
import {TeamComponent} from './team/team.component';
import {SettingsComponent} from './settings/settings.component';
import {NewPatientComponent} from './new-patient/new-patient.component';

const routes: Routes = [
  { path: 'patient/new',
    component: NewPatientComponent,
    pathMatch: 'full'
  },
  { path: 'settings',
    component: SettingsComponent
  },
  { path: 'team',
    component: TeamComponent
  },
  { path: 'summary',
    component: SummaryComponent
  },
  { path: 'patient',
    component: PatientComponent
  },
  { path: 'overview',
    component: OverviewComponent,
    data: {}
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
