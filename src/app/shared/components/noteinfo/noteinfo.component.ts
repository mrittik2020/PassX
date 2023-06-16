import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-noteinfo',
  templateUrl: './noteinfo.component.html',
  styleUrls: ['./noteinfo.component.css']
})
export class NoteinfoComponent implements OnInit {

  title: string = 'Add Note';
  updateBtn: boolean = false;
  edit_mode: boolean = false;
  clickedIcons: boolean[] = [false, false, false, false, false];

  form: FormGroup;


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

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      tag: [''],
      notes: ['', Validators.required]
      // Other form controls
    });
  }

  ngOnInit(): void {
    if (this.data.type === 'View') {
      this.title='View Note';
      this.form = this.fb.group({
        title: [this.data.tit],
        tag: [this.data.tag],
        notes: [this.data.note]
      });
    }
  }

}
