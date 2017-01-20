import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { SettingsComponent } from './settings/settings.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {
  TabViewModule,
  SharedModule,
  ButtonModule } from 'primeng/primeng'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxChartsModule,
    SharedModule,
    TabViewModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
