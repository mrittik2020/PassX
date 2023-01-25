
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './components/bank/bank.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { PasswordsComponent } from './components/passwords/passwords.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BankComponent,
    CardsComponent,
    DashboardComponent,
    NotesComponent,
    PasswordsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    BankComponent,
    CardsComponent,
    DashboardComponent,
    NotesComponent,
    PasswordsComponent
  ]
})
export class PagesModule { }
