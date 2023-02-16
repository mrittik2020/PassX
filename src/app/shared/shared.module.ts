import { DatashearService } from './services/datashear.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NevbarComponent } from './components/nevbar/nevbar.component';
import { TableComponent } from './components/table/table.component';
import { MshortPipe } from './pipes/mshort.pipe';
import { MfilterPipe } from './pipes/mfilter.pipe';
import { MslicePipe } from './pipes/mslice.pipe';
import { WebapiService } from './services/webapi.service';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    MshortPipe,
    MfilterPipe,
    MslicePipe,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    MshortPipe,
    MfilterPipe,
    MslicePipe,
  ],
  providers: [
    MshortPipe,
    MfilterPipe,
    MslicePipe,
    WebapiService,
    DatashearService,
  ],
})
export class SharedModule { }
