import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-noteinfo',
  templateUrl: './noteinfo.component.html',
  styleUrls: ['./noteinfo.component.css']
})
export class NoteinfoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      tag: [''],
      notes: ['',  Validators.required]
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
