import { Component, OnInit } from '@angular/core';
import {Credentials} from '../credentials';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Password: string;
  public Email:string;
  public loginBody = {
    Password:"",
    Email:""
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.Email && this.Password){
      if (this.Email !== "" && this.Password !== ""){
        this.loginBody = {
          Password: this.Password,
          Email: this.Email
        }

        this.authService.loginUser(this.loginBody).subscribe(data => {
          if(data.cred !== null){
            this.router.navigate(['/dashboard'])
          }else{
          alert("Credenciales invalidas");
        }
        });
      }
    }
  }
}
