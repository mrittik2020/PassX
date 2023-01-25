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
import { TransformPipe } from './pipes/transform.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    MshortPipe,
    MfilterPipe,
    MslicePipe,
    TransformPipe,

  ],
  imports: [
    CommonModule,

    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    MshortPipe,
    MfilterPipe,
    MslicePipe,
    TransformPipe,
  ],
  providers: [
    TransformPipe,
    MshortPipe,
    MfilterPipe,
    MslicePipe,
    WebapiService
  ],
})
export class SharedModule { }
