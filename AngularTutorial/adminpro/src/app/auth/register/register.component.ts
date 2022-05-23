import { Component, OnInit } from '@angular/core';
import {Credentials} from '../credentials';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public User:string;
  public Password: string;
  public Email:string;
  public ConfirmPW:string

  public cred:Credentials;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async register():Promise<void>{
    if(this.User  && this.Password  && this.Email  && this.ConfirmPW){
      if(this.User !== '' && this.Password !== '' && this.Email !== '' && this.ConfirmPW === this.Password){
        console.log(this.User)
        console.log(this.Password)
        console.log(this.Email)
        this.cred =  {
          User:this.User,
          Password: this.Password,
          Email: this.Email
        }
        await this.authService.registerUser(this.cred).subscribe(data => {
          console.log(data)
          if (data === 200){
            this.router.navigate(['/login'])
          } else{
            alert("No se pudo registrar usuario");
          }
        });
      }
    }
  }

}
