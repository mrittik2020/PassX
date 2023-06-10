import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bankinfo',
  templateUrl: './bankinfo.component.html',
  styleUrls: ['./bankinfo.component.css']
})
export class BankinfoComponent {

  acc_type: string[] = ['Saving', 'Current'];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      b_name: ['', Validators.required],
      acc_type: ['', Validators.required],
      name: ['', Validators.required],
      acc_num: ['', Validators.required],
      ifsc: ['', Validators.required],
      rmn: ['', Validators.required],
      mirc: [''],
      notes: ['']
      // Other form controls
    });
  }

  onClear() {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
      // Form is valid, handle the submission
      console.log('Form submitted:', this.form.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log('Form is invalid');
    }
  }



}
