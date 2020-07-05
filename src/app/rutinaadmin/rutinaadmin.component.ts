import { ConexionService } from './../conexion.service';
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
  item:any = {
    name: '',
    musculo: '',
    rutina: '',
    tipo: '',
  }
  constructor(private servicio: ConexionService){

  }

  ngOnInit(): void {
  }

  agregar() {
    this.servicio.agregarItem(this.item);
    this.item.name = '';
    this.item.musculo = '';
    this.item.rutina = '';
    this.item.tipo = '';
  }

}
