import { Component } from '@angular/core';
import { Person } from './shared/interfaces/person';
import {PersonasService} from './personas.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  // template: ``,
  providers: [
    PersonasService
  ]
})
export class ComponentOne {
  title = 'app-dentistas';
  public Name = "Jorge Ortega";
  public Anos = 23;
  public Especialidad = "Ortodoncista";
  dato:string ="";

  public personas:Person[] = [];
  // public personaAPI;

  // public personas = [
  //   {id:1, nombre:"Ivan",apellido: "Chavez", ciudad:"Hermosillo", moneda: 10000},
  //   {id:2, nombre:"Carla",apellido: "Dominguez", ciudad:"Tecate", moneda: 4323232},
  //   {id:3, nombre:"Rodrigo",apellido: "Guillen", ciudad:"Nogales", moneda: 500},
  // ]

  constructor(private personasService: PersonasService){

  }

  ngOnInit(){
    // this.personas = this.personasService.getPersonas();
    // this.personasService.getPersonasAPI().subscribe({
    //   next: data => {
    //     this.personas = data.personas;
    //     console.log(`${this.personas}`)
    //     this.personaAPI = JSON.stringify(data.personas);
    //     console.log(this.personaAPI);
    //   }
    // });
    this.personasService.getPersonasAPI().subscribe( data => this.personas = data);

  }

  demo():void{
    this.Name = "Modificado por el click handler"
  }

  onClick($event){
    console.log($event)
    if($event)
      window.alert("se presiono bien el boton")
    else
      window.alert("se presionó mal el botón")
  }
}


