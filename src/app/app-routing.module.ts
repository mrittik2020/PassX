import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ForgetpassComponent } from './auth/components/forgetpass/forgetpass.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { PasswordsComponent } from './pages/components/passwords/passwords.component';
import { NotesComponent } from './pages/components/notes/notes.component';
import { CardsComponent } from './pages/components/cards/cards.component';
import { BankComponent } from './pages/components/bank/bank.component';



const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  

  { path: 'forgot_password', component: ForgetpassComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'passwords', component: PasswordsComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'banks', component: BankComponent },

    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
