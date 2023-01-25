import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  btnS=[false,false,true,true,false];

  hide = true;

  email = new UntypedFormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a Value';
    }

    return this.email.hasError('email') ? 'Not a valid Email Address' : '';
  }
  
  
}
