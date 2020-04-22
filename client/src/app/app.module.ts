import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon'; 
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';  
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    OverviewTableComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry:MatIconRegistry, domSanitizer:DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')); // 
  }
  
 }
