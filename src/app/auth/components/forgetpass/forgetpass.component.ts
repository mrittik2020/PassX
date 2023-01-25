import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {

  btnS=[true,false,true,false,false];

  hide = true;
  email = new UntypedFormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a Value';
    }

    return this.email.hasError('email') ? 'Not a valid Email Address' : '';
  }

  sEmail() {
    this.snackBer.open("Mail has been sent to your Email !", "Close", { duration: 2500});
  }


  constructor(private snackBer: MatSnackBar) { }

  
}
