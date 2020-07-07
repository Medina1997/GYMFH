import { ConexionService } from './../conexion.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-rutinaadmin',
  templateUrl: './rutinaadmin.component.html',
  styleUrls: ['./rutinaadmin.component.css']
})
export class RutinaadminComponent implements OnInit {
  items: any;
  form;
  bandera: boolean=true;
  itemadd:any = {
    name: '',
    musculo: '',
    rutina: '',
    tipo: '',
  }

  editarItem:any = {
    name: '',
    musculo: '',
    rutina: '',
    tipo: '',
  }

  constructor(private servicio: ConexionService){
    this.servicio.ListaItem().subscribe(item=>{
      this.items = item;
    });
  }

  ngOnInit(): void {
  }

  agregar() {
    this.servicio.agregarItem(this.itemadd);
    swal.fire('Campo agregado exitosamente.', 'Se han agregado tus datos.', 'success');
    this.itemadd.name = '';
    this.itemadd.musculo = '';
    this.itemadd.rutina = '';
    this.itemadd.tipo = '';
  }

  eliminar(item){
    this.servicio.eliminarItem(item);
    swal.fire('Campo eliminado exitosamente.', 'Datos borrados.', 'success');
  }

  editar(item){
    this.editarItem = item;
  }

  agregarItemEditado(){
    this.servicio.EditarItem(this.editarItem);
    swal.fire('Campo editado exitosamente.', 'Cambios guardados.', 'success');
    this.editarItem.name = '';
    this.editarItem.musculo = '';
    this.editarItem.rutina = '';
    this.editarItem.tipo = '';
  }
}
