import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form;
  bandera: boolean=true;
  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

ngOnInit() {
}

submit() {
  if (this.form.valid) {
    this.form.value.firstname="";
  }
  else{
    alert("comlete todos los datos");
  }
}

}
