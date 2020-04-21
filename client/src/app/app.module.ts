import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PatientComponent } from './patient/patient.component';
import { OverviewComponent } from './overview/overview.component';
import { SummaryComponent } from './summary/summary.component';
import { HttpClientModule } from '@angular/common/http';

import { SettingsComponent } from './settings/settings.component';
import { TeamComponent } from './team/team.component';
import { NewPatientComponent } from './new-patient/new-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    OverviewComponent,
    SummaryComponent,
    SettingsComponent,
    TeamComponent,
    NewPatientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
