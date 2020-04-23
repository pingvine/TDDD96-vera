import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitSelectorComponent } from './overview/visit-selector/visit-selector.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
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
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    VisitSelectorComponent,
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
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); //
  }

 }
