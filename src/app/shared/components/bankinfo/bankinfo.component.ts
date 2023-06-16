import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-bankinfo',
  templateUrl: './bankinfo.component.html',
  styleUrls: ['./bankinfo.component.css']
})
export class BankinfoComponent implements OnInit {

  title: string = "Add Bank Details"
  edit_mode: boolean = false;
  clickedIcons: boolean[] = [false, false, false, false, false, false, false, false, false,false];
  status: boolean[] = [true, true];

  acc_type: string[] = ['Saving', 'Current'];
  form: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
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

  onUpdate() {
    if (this.form.valid) {
      // Form is valid, handle the submission
      console.log('Form Updated:', this.form.value);
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log('Form is invalid');
    }
  }


  ngOnInit(): void {
    if (this.data.type === 'View') {
      this.title='View Bank Details';
      this.form = this.fb.group({
        id:[this.data.bid],
        b_name: [this.data.bname],
        acc_type: [this.data.acc_typ],
        name: [this.data.name],
        acc_num: [this.data.acc_num],
        ifsc: [this.data.ifsc],
        rmn: [this.data.rmn],
        mirc: [this.data.mirc],
        notes: [this.data.note]
      });
    }
    // console.log(this.data);
  }



}
