import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './../model/Usuario';
import { Cliente } from '../model/Cliente';
@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  uri = 'http://makrocel.com:8001';
  //uri = 'http://localhost:8181';
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
  cargaMaivaClientes(form: any){
    const url = `${this.uri}/api/cliente/csv`;
    return this.http.post(url, form);
  }
  downloadCSVFormat(){
    const url = `${this.uri}/api/cliente/format`;
    return this.http.get(url, { responseType: 'blob' });
  }

  buscarCliente(cedula: any){
    const url = `${this.uri}/api/cliente/buscar/${cedula}`;
    return this.http.get<Cliente>(url);
  }
  borrarCliente(cedula: any){
    const url = `${this.uri}/api/cliente/${cedula}`;
    return this.http.delete(url);
  }
  editarCliente(cedula: any, cliente: any){
    const url = `${this.uri}/api/cliente/${cedula}`;
    return this.http.put(url, cliente);
  }
}
