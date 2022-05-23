import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(cred:Credentials): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(cred)
    return this.http.post<Credentials>('http://localhost:3005/cred', body, {'headers':headers, 'observe':'response', 'responseType':'json'});
  }

  loginUser(cred: { Password: any; Email: any; }): Observable<any>{
    return this.http.get<Credentials>('http://localhost:3005/cred/'+cred.Email+'/'+cred.Password)
  }

}
