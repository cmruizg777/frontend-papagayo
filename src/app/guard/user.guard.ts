import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ApiRequestService } from '../services/api-request.service';
import { AuthService } from './../services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private api: ApiRequestService,
    private auth: AuthService
    ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    //this.auth.checkStatus();
    /*
    if (!this.auth.state){
      this.router.navigate(['/login'])
      return false;
    }
    return true;*/
    return this.api.saludar().pipe(map((response:any) => {
      if (response.mensaje) {
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }), catchError((error) => {
      this.router.navigate(['/login']);
      return of(false);
  }));
    /*return this.auth.isLogged().pipe(map(isLogged=>{
      if (isLogged) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }), catchError((error) => {
      this.router.navigate(['/login']);
      return of(false);
    }));*/
  }
}
