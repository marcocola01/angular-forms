import { Component, OnInit } from '@angular/core';

import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
 selector: 'app-form-demo',
 templateUrl: './form-demo.component.html',
 styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {
 myForm: FormGroup;
 
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'sku': ['', Validators.required],
     'AGOSTO':['', Validators.required],
     '65': ['', Validators.required]
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
  if(!this.myForm.invalid)
  {
   console.log('you submitted value: ', value);
  }
 }
}
