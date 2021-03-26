import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiRequestService } from '../services/api-request.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  subs = new Subscription();
  display = false;
  alert = {
    type: 'danger',
    message: 'Peligro !'
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private api: ApiRequestService
  ) { }

  ngOnInit(): void {
    if(this.auth.state){
      this.router.navigate(['/']);
    }
  }
  sendForm(){
    if(this.username && this.password){
      let form = {
        username: this.username,
        password: this.password
      }
      //this.auth.login(form);
      this.api.obtenerToken(form).subscribe((r:any)=>{
        localStorage.setItem('token', r.token);
        localStorage.setItem('user', this.username);
        this.auth.setState(true);
        this.router.navigate(['/'])
      }, (err:any)=>{
        if(err.status == 400){
          this.alert.message = 'Usuario no existe';
          this.alert.type = 'danger';
          this.display = true;
        }
        if(err.status == 401){
          this.alert.message = 'Clave incorrecta';
          this.alert.type = 'danger';
          this.display = true;
        }
        if(err.status == 500){
          this.alert.message = 'Ha ocurrido un error ! Intentelo mas tarde.';
          this.alert.type = 'danger';
          this.display = true;
        }
      })
    }else{
      this.alert.message = 'Username & Password son obligatorios';
      this.alert.type = 'danger';
      this.display = true;
    }
  }

}
