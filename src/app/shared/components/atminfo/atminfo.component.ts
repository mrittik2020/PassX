
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-atminfo',
  templateUrl: './atminfo.component.html',
  styleUrls: ['./atminfo.component.css'],

})
export class AtminfoComponent {

  form: FormGroup;

  years: any[];

  months: string[] = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ];


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cardno: ['', Validators.required],
      name: ['', Validators.required],
      exp_month: ['', Validators.required],
      exp_year: ['', Validators.required],
      cvv: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]{3}$')]]
    });

    const currentYear = new Date().getFullYear();
    this.years = this.generateYearRange(currentYear, 10);
    const year = new Date();
    console.log(year);
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

  generateYearRange(currentYear: number, numYears: number): number[] {
    const years: number[] = [];
    for (let i = -numYears; i <= numYears; i++) {
      years.push(currentYear + i);
    }
    return years;
  }
  

}



