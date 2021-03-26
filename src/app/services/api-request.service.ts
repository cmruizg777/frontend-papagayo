import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './../model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  //uri = 'https://grupoprosoft.net/sindicato-api/public/index.php/api';
  uri = 'http://localhost:8181';
  constructor(
    private http: HttpClient,
  ) { }

  obtenerToken(formData: any){
    const url = `${this.uri}/login`;
    return this.http.post(url,formData);
  }

  saludar(){
    const url = `${this.uri}/saludo`;
    return this.http.post(url, null);
  }

  getClientes(){
    const url = `${this.uri}/api/cliente`;
    return this.http.get(url);
  }
  nuevoCliente(cliente: any){
    const url = `${this.uri}/api/cliente`;
    return this.http.post(url, cliente);
  }
}
