import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {ExcelTableComponent} from './components/excel-table/excel-table.component'
import { ExcelInputComponent } from './components/excel-input/excel-input.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExcelInputComponent,
    ExcelTableComponent,
    PageFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
