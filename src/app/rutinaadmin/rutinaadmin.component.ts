import { ConexionService } from './../conexion.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


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

  constructor(private servicio: ConexionService){
    this.servicio.ListaItem().subscribe(item=>{
      this.items = item;
    });
  }

  ngOnInit(): void {
  }

  agregar() {
    this.servicio.agregarItem(this.itemadd);
    this.itemadd.name = '';
    this.itemadd.musculo = '';
    this.itemadd.rutina = '';
    this.itemadd.tipo = '';
  }

  eliminar(item){
    this.servicio.eliminarItem(item);
  }

  editar(item){

  }

}
