import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profileForm: any;
  //profileForm : FormGroup
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      street: ['', [Validators.required]],
      phonenumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })  
  }


  get getControl(){
    return this.profileForm.controls;
  }

  onSubmit(){
    console.log(this.profileForm);
  }
}
