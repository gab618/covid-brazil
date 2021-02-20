import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CovidComponent } from './covid/covid.component';
import { ChartsModule } from 'ng2-charts';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CovidComponent, HistoryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
