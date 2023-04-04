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
import { CardviewComponent } from './components/cardview/cardview.component';
import { AtmcardComponent } from './components/atmcard/atmcard.component';
import { MaskingPipe } from './pipes/masking.pipe';
import { BankcardComponent } from './components/bankcard/bankcard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    MshortPipe,
    MfilterPipe,
    MslicePipe,
    CardviewComponent,
    AtmcardComponent,
    MaskingPipe,
    BankcardComponent,

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
    CardviewComponent,
    AtmcardComponent,
    BankcardComponent,
  ],
  providers: [
    MshortPipe,
    MfilterPipe,
    MslicePipe,
    WebapiService,
    DatashearService,
    MaskingPipe,
  ],
})
export class SharedModule { }
