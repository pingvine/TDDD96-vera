import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PatientComponent } from './patient/patient.component';
import { OversiktComponent } from './oversikt/oversikt.component';
import { SammanstallningComponent } from './sammanstallning/sammanstallning.component';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    OversiktComponent,
    SammanstallningComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
