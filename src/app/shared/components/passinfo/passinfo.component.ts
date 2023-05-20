import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-passinfo',
  templateUrl: './passinfo.component.html',
  styleUrls: ['./passinfo.component.css']
})

export class PassinfoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: ['', [Validators.required, this.multiplePatternValidator(this.getUrlPatterns())]],
      name: ['', Validators.required],
      username: ['', Validators.required],
      loginid: ['', Validators.required],
      password: ['', Validators.required],
      notes: ['']
      // Other form controls
    });
  }

  getUrlPatterns(): RegExp[] {
    return [
      /^(?:https?:\/\/)?(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?::[0-9]+)?(?:[/\w .-]*)*\/?$/, // pattern for "https://material.angular.io/components/form-field/examples"
      /^(?:https?:\/\/)?localhost(?::[0-9]+)?(?:[/\w .-]*)*\/?$/,  // pattern for "http://localhost:4200/home/passwords"
      /^(?:https?:\/\/)?(?:[0-9]{1,3}\.){3}[0-9]{1,3}(?::[0-9]+)?(?:[/\w .-]*)*\/?$/, // pattern for "http://192.168.0.1/index.html"
      // Add more patterns for different URL variations
    ];
  }

  multiplePatternValidator(patterns: RegExp[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const url = control.value;
      for (const pattern of patterns) {
        if (pattern.test(url)) {
          return null;
        }
      }
      return { invalidUrl: true };
    };
  }

  isUrlInvalid(): boolean {
    const urlControl = this.form.get('url');
    if (urlControl && urlControl.dirty && urlControl.invalid) {
      for (const pattern of this.getUrlPatterns()) {
        if (pattern.test(urlControl.value)) {
          return false;
        }
      }
      return true;
    }
    return false;
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
