import { Component, Input, OnInit } from '@angular/core';
import { Vuelo } from '../vuelo';
import {VueloService} from '../vuelo.service'

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass']
})
export class VuelosComponent implements OnInit {
  public noVuelo:string;
  public fecha:string;
  public horario:string;
  public origen:string;
  public destino:string;

  public vuelo:Vuelo;
  public vuelos:Vuelo[] = [];
  constructor( private vuelosService:VueloService) {
  }
  ngOnInit(){
    // this.vuelos = this.vuelosService.getVuelo();
    this.vuelosService.getVuelo().subscribe( data => {this.vuelos = data; console.log(this.vuelos)});

  }

  AddVuelo(){
    this.vuelo = {
      NoVuelo: this.noVuelo,
      Fecha: this.fecha,
      Horario: this.horario,
      Origen: this.origen,
      Destino: this.destino
    }
    this.vuelos.push(this.vuelo)
    // this.vuelosService.addVuelo(this.vuelo,this.vuelos);
    // this.vuelos.push(this.vuelo);
    this.vuelosService.addVuelo(this.vuelo).subscribe();

    document.getElementById('added').innerText="Nuevo vuelo añadido."

  }
}
