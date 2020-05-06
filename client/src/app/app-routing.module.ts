import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientViewComponent } from './patient/patient-view.component';
import {OverviewViewComponent} from './overview/overview-view.component';
import {SummaryViewComponent} from './summary/summary-view.component';
import {TeamViewComponent} from './team/team-view.component';
import {SettingsViewComponent} from './settings/settings-view.component';
import {NewVisitViewComponent} from './new-visit/new-visit-view.component';

const routes: Routes = [
  { path: 'patient/new',
    component: NewVisitViewComponent,
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
  { path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
