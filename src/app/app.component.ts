import { Component } from '@angular/core';
import {CrudService} from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anficlientes';

  cliente: any;
  clienteNombres: string;
  clienteApellidos: string;
  clienteTelefono: number;
  clienteDireccion: string;
  clienteFecha: string;
  clienteCorreos: string[];
  clienteComentarios: string;

  constructor(crudservice: CrudService){}

  // tslint:disable-next-line: typedef
  CrearRegistro(){
    alert('El formulario se envio');
  }
}
