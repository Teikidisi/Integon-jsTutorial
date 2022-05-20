import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Person } from './shared/interfaces/person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getPersonas():Person[]{
    let personas:Person[] = [
      {id:'1', nombre:"Ivan",apellido: "Chavez", ciudad:"Hermosillo", moneda: 10000},
      {id:'2', nombre:"Carla",apellido: "Dominguez", ciudad:"Tecate", moneda: 4323232},
      {id:'3', nombre:"Rodrigo",apellido: "Guillen", ciudad:"Nogales", moneda: 500},
      {id:'4', nombre:"Juan",apellido: "Ermita", ciudad:"Ensenada", moneda: 50890},
      {id:'5', nombre:"Miranda",apellido: "Robles", ciudad:"Tijuana", moneda: 8900},
    ]
    return personas;
  }

  // getPersonasApi():any{
  //   const request$ = new Observable(observer => {
  //     const request = new XMLHttpRequest();

  //     request.addEventListener("load", () => {
  //       if (request.readyState === 4 && request.status === 200) {
  //         console.log('Success');
  //         observer.next(JSON.parse(request.responseText));
  //         observer.complete();
  //       } else {
  //         observer.error('An error has occured');
  //         console.log("Error")
  //       }
  //     });
  //     request.open("GET", "http://localhost:3005/personas");
  //     request.send();
  //   });

  //   // request$.toPromise().then((data) => console.log(data))
  //   return request$
  // }

  getPersonasAPI(): Observable<Person[]> {
    return this.http.get<Person[]>('http://localhost:3005/personas').pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(`Ocurrió un error ${error}`);
        return throwError(error);
      })
    );

  }


}
