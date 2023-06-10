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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardviewComponent } from './components/cardview/cardview.component';
import { AtmcardComponent } from './components/atmcard/atmcard.component';
import { MaskingPipe } from './pipes/masking.pipe';
import { BankcardComponent } from './components/bankcard/bankcard.component';
import { CardpipePipe } from './pipes/cardpipe.pipe';
import { NotepipePipe } from './pipes/notepipe.pipe';
import { PasspipePipe } from './pipes/passpipe.pipe';
import { BankpipePipe } from './pipes/bankpipe.pipe';
import { AtminfoComponent } from './components/atminfo/atminfo.component';
import { BankinfoComponent } from './components/bankinfo/bankinfo.component';
import { PassinfoComponent } from './components/passinfo/passinfo.component';
import { NoteinfoComponent } from './components/noteinfo/noteinfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';




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
    AtminfoComponent,
    BankinfoComponent,
    PassinfoComponent,
    NoteinfoComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
    

  ],
  exports: [
    HeaderComponent,
    NevbarComponent,
    TableComponent,
    CardviewComponent,
    AtmcardComponent,
    BankcardComponent,
    AtminfoComponent,
    BankinfoComponent,
    PassinfoComponent,
    NoteinfoComponent,
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
