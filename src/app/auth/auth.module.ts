import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ForgetpassComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,

    MaterialModule,
    SharedModule,

    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ForgetpassComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AuthModule { }
