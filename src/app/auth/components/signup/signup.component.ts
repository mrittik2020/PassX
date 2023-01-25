import { Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {




  btnS = [true, false, false, true, false];
  hide = true;
  chide = true;

  email = new UntypedFormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a Value';
    }
    return this.email.hasError('email') ? 'Not a valid Email Address' : '';
  }


}
