import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //   this.loginForm = new FormGroup({
    //     'firstname': new FormControl('', [Validators.required, Validators.minLength(5)]),
    //     'password': new FormControl('', Validators.required),
    //     'address': new FormGroup({
    //       'street': new FormControl(''),
    //       'pincode': new FormControl(''), 
    //    })
    // });

    // Using form Builder
    this.loginForm = this.fb.group({
      firstname: ['Vetri', Validators.required],
      password: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      address: this.fb.group({
        street: '',
        pincode: ''
      })
    });
  }

  get firstname() {
    return this.loginForm.get('firstname');
  }
  get password() {
    return this.loginForm.get('password');
  }

  autoFillForm() {
    this.loginForm.setValue({
      address: {
        street: 'Oxford',
        pincode: '600001'
      },
      firstname: 'Vetrivel Gunasekaran',
      password: 'dfsfsdfsdfsd'
    });

  }

  submitForm() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      console.log(this.loginForm.valid);
      console.log(this.loginForm.value);
    } else {

    }
  }

}
