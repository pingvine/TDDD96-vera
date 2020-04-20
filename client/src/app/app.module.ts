import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";



@NgModule({
  declarations: [
    AppComponent,
    OverviewTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
