import { ServicioService } from './../servicio.service';
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
  constructor( public calculosService: ServicioService){
    
  }

ngOnInit() {
}

submit():void {
  alert("hola");
  /*
  if (this.form.valid) {
    this.form.value.firstname="";
  }
  else{
    alert("comlete todos los datos");
  }*/
}

}
