import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import {OversiktComponent} from './overview/oversikt.component';
import {SammanstallningComponent} from './summary/sammanstallning.component';
import {TeamComponent} from './team/team.component';
import {LogComponent} from './log/log.component';
import {SettingsComponent} from './settings/settings.component';
import {NewPatientComponent} from './new-patient/new-patient.component';
import {StartComponent} from './start/start.component';


const routes: Routes = [
  { path: 'patient/new',
    component: NewPatientComponent,
    pathMatch: 'full'
  },
  { path: 'settings',
    component: SettingsComponent
  },
  { path: 'log',
    component: LogComponent
  },
  { path: 'team',
    component: TeamComponent
  },
  { path: 'summary',
    component: SammanstallningComponent
  },
  { path: 'patient',
    component: PatientComponent
  },
  {
    path: 'overview',
    component: OversiktComponent,
    data: {}
  },
  { path: '',
    component: StartComponent,
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
