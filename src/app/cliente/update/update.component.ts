import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  cedula = '';
  cliente = new Cliente();
  fecha = '';
  constructor(
    private api: ApiRequestService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cedula = this.activatedRoute.snapshot.params.id;
    if(this.cedula){
      this.api.buscarCliente(this.cedula).subscribe((cliente)=>{
        const str = (""+cliente.fechaNacimiento).split("T")[0];
        this.fecha = str;
        this.cliente = cliente;

      })
      
    }else{
      this.router.navigate(['/cliente/'])
    }
  }
  enviar(){
    if(this.cedula && this.cliente){
      this.cliente.cedula = this.cedula;
      this.api.editarCliente(this.cedula, this.cliente).subscribe((r:any) => this.router.navigate(['/cliente/']))
    }else{
      this.router.navigate(['/cliente/'])
    }
    
  }
}
