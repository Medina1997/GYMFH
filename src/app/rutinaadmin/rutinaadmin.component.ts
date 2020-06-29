import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-rutinaadmin',
  templateUrl: './rutinaadmin.component.html',
  styleUrls: ['./rutinaadmin.component.css']
})
export class RutinaadminComponent implements OnInit {

  form;
  bandera: boolean=true;
  constructor(private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      email: ['', Validators.required],
      rutine: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  altas(correo: HTMLInputElement, rutina: HTMLInputElement, fecha: HTMLInputElement) {
    if (this.form.valid) {
      correo.value = '';
      rutina.value = '';
      fecha.value = '';
      alert("datos dados de alta");
    }
    else{
      alert("comlete todos los datos");
    }
  }

}
