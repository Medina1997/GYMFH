import { ServicioService } from './../servicio.service';
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
  id;
  datos: any;
  salto: string = ', ';
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

  constructor(private servicio: ConexionService, public servicioService: ServicioService) {
    this.servicio.ListaItem().subscribe(item => {
      this.items = item;
    });
  }

  ngOnInit(): void {
  }
  enviar(){
    let urlapi = `http://localhost:3000/i/${this.id}`;
    console.log(urlapi);
    console.log(this.id);
    this.servicioService.consulta(urlapi).subscribe((data: any) => {
      console.log(data);
      // this.estado = data['estado'];
      this.datos = [data.name, this.salto, data.rutina, this.salto, data.musculo,this.salto, data.tipo];
      console.log(this.datos);
    }, (err) => console.log(err));
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
