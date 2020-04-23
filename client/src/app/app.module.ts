import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewTableComponent } from './overview/overview-table/overview-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PatientViewComponent } from './patient/patient-view.component';
import { OverviewViewComponent } from './overview/overview-view.component';
import { SummaryViewComponent } from './summary/summary-view.component';
import { SettingsViewComponent } from './settings/settings-view.component';
import { TeamViewComponent } from './team/team-view.component';
import { NewPatientViewComponent } from './new-patient/new-patient-view.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    OverviewTableComponent,
    PatientViewComponent,
    OverviewViewComponent,
    SummaryViewComponent,
    SettingsViewComponent,
    TeamViewComponent,
    NewPatientViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); //
  }

 }
