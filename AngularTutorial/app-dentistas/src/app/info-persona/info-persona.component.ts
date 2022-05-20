import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../shared/interfaces/person';
import {PersonasService} from '../personas.service'

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {
  @Input() nombre:string;
  @Input() apellido: string;
  public personas:Person[] = [];
  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    console.log("se inicializó el component persona")
    this.personasService.getPersonasAPI().subscribe( data => this.personas = data);
  }
  ngOnDestroy(): void{
    console.log("se destruyó el component persona")
  }

  ngOnChanges(changes){
    console.log("Se recibieron datos de entrada...")
  }

}
