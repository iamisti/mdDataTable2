import { MdtFooter } from './table/components/mdt-footer.component';
import { MdtHeader } from './table/components/mdt-header.component';
import { MdtColumns } from './table/components/mdt-columns.component';
import { MdtRows } from './table/components/mdt-rows.component';
import { MdtCellAlign } from './table/directives/mdt-cell-align.directive';
import {MdIcon} from "@angular2-material/icon";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdtTable } from './table/components/mdt-table.component';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MdtTable,
    MdtCellAlign,
    MdIcon, MdtRows, MdtColumns, MdtHeader, MdtFooter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
