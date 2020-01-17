import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule, SparklineModule, StockChartModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule, SparklineModule, StockChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
