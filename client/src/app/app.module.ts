import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PatientViewComponent } from './patient/patient-view.component';
import { OverviewViewComponent } from './overview/overview-view.component';
import { SummaryViewComponent } from './summary/summary-view.component';
import { SettingsViewComponent } from './settings/settings-view.component';
import { TeamViewComponent } from './team/team-view.component';
import { NewPatientViewComponent } from './new-patient/new-patient-view.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { EventComponent } from './event/event.component';
import { DatePipePipe } from './date-pipe.pipe';
import { NoticeComponent } from './notice/notice.component';
import { VisitReasonComponent } from './patient/visit-view-header/visit-reason/visit-reason.component';
import { VisitViewHeaderComponent } from './patient/visit-view-header/visit-view-header.component';
import { VisitTopicalComponent } from './patient/visit-view-header/visit-topical/visit-topical.component';
import { VisitInfoPersonalComponent } from './patient/visit-view-header/visit-info-personal/visit-info-personal.component';
import { VisitBodyComponent } from './patient/visit-view-header/visit-body/visit-body.component';
import { VisitEventsComponent } from './patient/visit-view-header/visit-events/visit-events.component';
import { VisitSelectorComponent } from './overview/visit-selector/visit-selector.component';
import { OverviewTableComponent } from './overview/overview-table/overview-table.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestEventSocketComponent } from './test-event-socket/test-event-socket.component';
import { TestNoticeSocketComponent } from './test-notice-socket/test-notice-socket.component';
import { LoginComponent } from './login/login.component';
import { EhrService } from './ehr.service';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CookieService} from "ngx-cookie-service";


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
    AppHeaderComponent,
    EventComponent,
    DatePipePipe,
    NoticeComponent,
    VisitReasonComponent,
    VisitViewHeaderComponent,
    VisitTopicalComponent,
    VisitInfoPersonalComponent,
    VisitBodyComponent,
    VisitEventsComponent,
    TestEventSocketComponent,
    TestNoticeSocketComponent,
    LoginComponent,
    SpinnerOverlayComponent,
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
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [EhrService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); //
  }
}
