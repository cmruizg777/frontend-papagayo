import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clientes : any[] = [];
  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {
    this.api.getClientes().subscribe((data:any) => {
      this.clientes = data;
    })
  }

}
