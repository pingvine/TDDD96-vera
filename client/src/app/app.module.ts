import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { OversiktComponent } from './oversikt/oversikt.component';
import { SammanstallningComponent } from './sammanstallning/sammanstallning.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    OversiktComponent,
    SammanstallningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
