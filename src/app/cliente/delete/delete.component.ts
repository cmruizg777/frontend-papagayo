import { Component, Input, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  
  @Input() cedula: string = '';

  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {
    
  }
  eliminar(){
    this.api.borrarCliente(this.cedula).subscribe(()=>{
      location.reload();
    })
  }

}
