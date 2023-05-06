import { DatashearService } from './services/datashear.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NevbarComponent } from './components/nevbar/nevbar.component';
import { TableComponent } from './components/table/table.component';
import { MshortPipe } from './pipes/mshort.pipe';
import { MslicePipe } from './pipes/mslice.pipe';
import { WebapiService } from './services/webapi.service';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardviewComponent } from './components/cardview/cardview.component';
import { AtmcardComponent } from './components/atmcard/atmcard.component';
import { MaskingPipe } from './pipes/masking.pipe';
import { BankcardComponent } from './components/bankcard/bankcard.component';
import { CardpipePipe } from './pipes/cardpipe.pipe';
import { NotepipePipe } from './pipes/notepipe.pipe';
import { PasspipePipe } from './pipes/passpipe.pipe';
import { BankpipePipe } from './pipes/bankpipe.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    MshortPipe,
    MslicePipe,
    CardviewComponent,
    AtmcardComponent,
    MaskingPipe,
    BankcardComponent,
    CardpipePipe,
    NotepipePipe,
    PasspipePipe,
    BankpipePipe,

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
    CardviewComponent,
    AtmcardComponent,
    BankcardComponent,
  ],
  providers: [
    MshortPipe,
    MslicePipe,
    WebapiService,
    DatashearService,
    MaskingPipe,
    CardpipePipe,
    NotepipePipe,
    PasspipePipe,
    BankpipePipe,
  ],
})
export class SharedModule { }
