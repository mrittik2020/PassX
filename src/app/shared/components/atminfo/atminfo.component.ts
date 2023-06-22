
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-atminfo',
  templateUrl: './atminfo.component.html',
  styleUrls: ['./atminfo.component.css'],

})
export class AtminfoComponent implements OnInit {

  title: string = 'Add Card Details';

  clickedIcons: boolean[] = [false, false, false, false, false]; 
  edit_mode: boolean = false;
  status: boolean[] = [true,true]; // Set to true for hide cvv

  form: FormGroup;

  years: any[];

  months: string[] = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12'
  ];

  type: boolean = true;




  onClear() {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
      // Form is valid, handle the submission
      // console.log('Form submitted:', this.form.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
      // console.log('Form is invalid');
    }
  }

  onUpdate() {
    if (this.form.valid) {
      // Form is valid, handle the submission
      // console.log('Form Updated:', this.form.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
      // console.log('Form is invalid');
    }
  }

  onDelete(id: string) {
    // console.log(id);
  }

  generateYearRange(currentYear: number, numYears: number): number[] {
    const years: number[] = [];
    for (let i = -numYears; i <= numYears; i++) {
      years.push(currentYear + i);
    }
    return years;
  }

  toggleClick(index: number): void {
    this.clickedIcons[index] = !this.clickedIcons[index];
  }

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      cardno: ['', Validators.required],
      name: ['', Validators.required],
      exp_month: ['', Validators.required],
      exp_year: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[0-9]{3}$')]]
    });

    const currentYear = new Date().getFullYear();
    this.years = this.generateYearRange(currentYear, 10);

    // console.log(data);
  }
  


  ngOnInit(): void {
    if (this.data.type === 'View') {
      this.title='View Card Details';
      this.form = this.fb.group({
        cardno: [this.data.cno],
        name: [this.data.cname, Validators.required],
        exp_month: [new Date(this.data.exp).getMonth().toString().padStart(2, '0')],
        exp_year: [new Date(this.data.exp).getFullYear()],
        cvv: [this.data.cvv, Validators.required],
      });
    }
  }


}



