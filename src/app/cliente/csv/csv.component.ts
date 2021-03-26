import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/services/api-request.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  documento : any;
  errores: any[] = [];
  constructor(private api: ApiRequestService) { }

  ngOnInit(): void {
  }

  handleFileInput(target: any ) {
    this.documento = target.files.item(0);
  }
  enviar(){
    if(this.documento){
      let form = new FormData();
      form.append('csv', this.documento);
      this.api.cargaMaivaClientes(form).subscribe((r:any)=>{
        this.errores = r.errors;
        alert(r.message)
        //console.log(r.toString())
      },error=>{
        
      })
    }else{
      alert('¡Debe subir un documento!');
    }
  }
  downloadFormat(){
    this.api.downloadCSVFormat().subscribe( (r:any)=>{
      FileSaver.saveAs(r, "clientes.csv");
    })
  }

}
