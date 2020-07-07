import { ConexionService } from './../conexion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutinausuario',
  templateUrl: './rutinausuario.component.html',
  styleUrls: ['./rutinausuario.component.css']
})
export class RutinausuarioComponent implements OnInit {
  items: any;
  con: string;
  constructor(private conexion: ConexionService) {
  this.conexion.ListaItem().subscribe(item => {
  this.items = item;
})
  }



  ngOnInit(): void {
  }

  consu(consulta: HTMLInputElement){
    this.con = consulta.value;
  }

  
}
