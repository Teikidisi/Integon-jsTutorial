import { Injectable } from '@angular/core';
import {Vuelo} from './vuelo'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VuelosComponent } from './vuelos/vuelos.component';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http: HttpClient) { }

  // getVuelo(){
    // let vuelos:Vuelo[] = [
    //   {NoVuelo:"001",Fecha:"03/03/22",Horario:"10:55",Origen:"Tijuana",Destino:"Guadalajara"},
    //   {NoVuelo:"002",Fecha:"25/04/22",Horario:"12:45",Origen:"Monterrey",Destino:"Tijuana"},
    //   {NoVuelo:"003",Fecha:"10/05/22",Horario:"09:20",Origen:"Tuxtla Gutierrez",Destino:"Puerto Vallarta"},
    //   {NoVuelo:"004",Fecha:"28/06/22",Horario:"01:00",Origen:"Morelia",Destino:"Ciudad de México"},
    //   {NoVuelo:"005",Fecha:"15/07/22",Horario:"23:40",Origen:"Mexicali",Destino:"Mérida"}
    // ]
    // return vuelos;
  // }
  getVuelo(): Observable<Vuelo[]> {
    return this.http.get<Vuelo[]>('http://localhost:3005/vuelos');
  }

  // addVuelo(vuelo:Vuelo, vuelos:Vuelo[]):void{
  //   vuelos.push(vuelo);
  // }
  addVuelo(vuelo:Vuelo): Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(vuelo)
    return this.http.post('http://localhost:3005/vuelos', body, {'headers':headers})
  }

}
