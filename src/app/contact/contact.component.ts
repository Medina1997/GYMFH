import { ServicioService } from './../servicio.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'formReactivo';
  form;

  constructor( public servicioService: ServicioService, private formBuilder: FormBuilder){
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

ngOnInit() {
}

contactForm(formulario, nombre: HTMLInputElement, apellido: HTMLInputElement, telefono: HTMLInputElement, correo: HTMLInputElement, asunt: HTMLInputElement, mensaje: HTMLInputElement) {
  if (this.form.valid){
    this.servicioService.sendMessage(formulario).subscribe(() => {
      swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
      });
      nombre.value='';
      apellido.value='';
      telefono.value='';
      correo.value='';
      asunt.value='';
      mensaje.value='';
  } else {
    swal.fire('Formulario de contacto', 'Error, complete todos los datos', 'error');
  }
  /*
  if(nombre.value=='' || apellido.value=='' || telefono.value=='' || correo.value=='' || asunt.value=='' || mensaje.value==''){
    swal.fire('Formulario de contacto', 'Error, complete todos los datos', 'error');
  }else{
    
  }
  nombre.value='';
  apellido.value='';
  telefono.value='';
  correo.value='';
  asunt.value='';
  mensaje.value='';*/
  }

}
