import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  cliente = new Cliente();
  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {
  }

  enviar(){
    this.api.nuevoCliente(this.cliente).subscribe((r:any) => console.log(r))
  }
}
