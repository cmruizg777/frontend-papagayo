import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logged$ = new Subject<boolean>();

  state = false;
  constructor(
    private api: ApiRequestService,
    private router: Router
  ) {

  }

  userStatus(){
    return this.logged$.asObservable();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
    this.state=false;
    return this.logged$.next(this.state);
  }

  setState(state: boolean){
    this.state = state;
    this.logged$.next(state);
  }

  verifyState(){
    let token = localStorage.getItem('token');
    if(token){
      this.api.saludar().subscribe( r => {
        this.logged$.next(true);
      }, (err)=>{
        this.logged$.next(false);
      });
    }else{
      this.logged$.next(false);
    }
  }
  isLogged(){
    let token = localStorage.getItem('token');
    if(token){
      this.api.saludar().subscribe( r => {
        this.logged$.next(true);
      }, (err)=>{
        this.logged$.next(false);
      });
    }else{
      this.logged$.next(false);
    }
    //return this.logged$.asObservable();
  }
}

