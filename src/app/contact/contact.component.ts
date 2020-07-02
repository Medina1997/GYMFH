import { ServicioService } from './../servicio.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( public servicioService: ServicioService){
    
  }

ngOnInit() {
}

contactForm(form, nombre: HTMLInputElement, apellido: HTMLInputElement, telefono: HTMLInputElement, correo: HTMLInputElement, asunt: HTMLInputElement, mensaje: HTMLInputElement) {
  if(nombre.value=='' || apellido.value=='' || telefono.value=='' || correo.value=='' || asunt.value=='' || mensaje.value==''){
    swal.fire('Formulario de contacto', 'Error, complete todos los datos', 'error');
  }else{
    this.servicioService.sendMessage(form).subscribe(() => {
      swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
      });
  }
  nombre.value='';
  apellido.value='';
  telefono.value='';
  correo.value='';
  asunt.value='';
  mensaje.value='';
  }

}
