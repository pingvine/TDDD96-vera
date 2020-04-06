import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import {OversiktComponent} from './oversikt/oversikt.component';
import {SammanstallningComponent} from './sammanstallning/sammanstallning.component';


const routes: Routes = [
  { path: 'sammanstallning',
    component: SammanstallningComponent,
    pathMatch: 'full'
  },
  { path: 'patient',
    component: PatientComponent,
    pathMatch: 'full'
  },
  {
    path: 'oversikt',
    component: OversiktComponent,
    data: {}
  },
  { path: 'app',
    redirectTo: 'oversikt',
    pathMatch: 'full'
  },
  { path: '',
    redirectTo: 'oversikt',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
