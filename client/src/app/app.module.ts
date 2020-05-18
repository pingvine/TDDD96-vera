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
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PatientViewComponent } from './patient/patient-view.component';
import { OverviewViewComponent } from './overview/overview-view.component';
import { SummaryViewComponent } from './summary/summary-view.component';
import { SettingsViewComponent } from './settings/settings-view.component';
import { TeamViewComponent } from './team/team-view.component';
import { NewVisitViewComponent } from './new-visit/new-visit-view.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppHeaderComponent } from './app-header/app-header.component';
import { PatientStatusViewComponent } from './patient/patient-status-view/patient-status-view.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import { PatientStatusViewDialogComponent } from './patient/patient-status-view/patient-status-view-dialog/patient-status-view-dialog.component';
import { PatientStatusSummaryComponent } from './patient/patient-status-view/patient-status-summary/patient-status-summary.component';
import { PatientStatusSummaryHeaderComponent } from './patient/patient-status-view/patient-status-summary-header/patient-status-summary-header.component';
import { PatientStatusEditViewEComponent } from './patient/patient-status-view/patient-status-edit-view-e/patient-status-edit-view-e.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { StatusExpandSkinComponent } from './patient/patient-status-view/patient-status-edit-view-e/status-expand-skin/status-expand-skin.component';
import { PatientViewCardHeaderComponent } from './patient-view-card-header/patient-view-card-header.component';
import { PatientViewCardContentComponent } from './patient-view-card-content/patient-view-card-content.component';
import { PatientViewCardFooterComponent } from './patient-view-card-footer/patient-view-card-footer.component';
import { EventComponent } from './event/event.component';
import { DatePipePipe } from './date-pipe.pipe';
import { NoticeComponent } from './notice/notice.component';
import { VisitReasonComponent } from './patient/visit-view-header/visit-reason/visit-reason.component';
import { VisitViewHeaderComponent } from './patient/visit-view-header/visit-view-header.component';
import { VisitTopicalComponent } from './patient/visit-view-header/visit-topical/visit-topical.component';
import { VisitInfoPersonalComponent } from './patient/visit-view-header/visit-info-personal/visit-info-personal.component';
import { VisitBodyComponent } from './patient/visit-view-header/visit-body/visit-body.component';
import { VisitEventsComponent } from './patient/visit-view-header/visit-events/visit-events.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NewVisitInformationComponent } from './new-visit/new-visit-information/new-visit-information.component';
import { NewVisitReasonComponent } from './new-visit/new-visit-reason/new-visit-reason.component';
import {EhrService} from "./ehr.service";
import { VisitSelectorComponent } from './overview/visit-selector/visit-selector.component';
import { OverviewTableComponent } from './overview/overview-table/overview-table.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestEventSocketComponent } from './test-event-socket/test-event-socket.component';
import { TestNoticeSocketComponent } from './test-notice-socket/test-notice-socket.component';
import { LoginComponent } from './login/login.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";



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
    NewVisitViewComponent,
    AppHeaderComponent,
    PatientStatusViewComponent,
    PatientStatusViewDialogComponent,
    PatientStatusEditViewEComponent,
    InfoCardComponent,
    PatientStatusSummaryComponent,
    PatientStatusSummaryHeaderComponent,
    StatusExpandSkinComponent,
    PatientViewCardHeaderComponent,
    PatientViewCardContentComponent,
    PatientViewCardFooterComponent,
    EventComponent,
    DatePipePipe,
    NoticeComponent,
    VisitReasonComponent,
    VisitViewHeaderComponent,
    VisitTopicalComponent,
    VisitInfoPersonalComponent,
    VisitBodyComponent,
    VisitEventsComponent,
    NewVisitInformationComponent,
    NewVisitReasonComponent,
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
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatBadgeModule,
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    FormsModule,
    MatTooltipModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [EhrService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); //
  }
}
