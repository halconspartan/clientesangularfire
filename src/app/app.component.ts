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
  clienteCorreo1: string;
  clienteCorreo2: string;
  clienteComentarios: string;
  mensaje: string;

  constructor( public crudservice: CrudService){}

  // tslint:disable-next-line: typedef
  CrearRegistro(){
    // tslint:disable-next-line: prefer-const
    let Registro = {};

    // tslint:disable-next-line: prefer-const
    let correos: string[] = [this.clienteCorreo1, this.clienteCorreo2];
    // tslint:disable-next-line: no-string-literal
    Registro['nombres'] = this.clienteNombres;
    // tslint:disable-next-line: no-string-literal
    Registro['apellidos'] = this.clienteApellidos;
    // tslint:disable-next-line: no-string-literal
    Registro['telefono'] = this.clienteTelefono;
    // tslint:disable-next-line: no-string-literal
    Registro['direccion'] = this.clienteDireccion;
    // tslint:disable-next-line: no-string-literal
    Registro['fecha'] = this.clienteFecha;
    // tslint:disable-next-line: no-string-literal
    Registro['correos'] = correos;
    // tslint:disable-next-line: no-string-literal
    Registro['comentarios'] = this.clienteComentarios;

    this.crudservice.create_Newcliente(Registro).then(res => {
      this.clienteNombres = '';
      this.clienteApellidos = '';
      this.clienteTelefono = undefined;
      this.clienteDireccion = '';
      this.clienteFecha = '';
      this.clienteCorreo1 = '';
      this.clienteCorreo2 = '';
      this.clienteComentarios = '';
      console.log(res);
      this.mensaje = 'Datos cliente guardados';
    }).catch(error => {
      console.log(error);
    });
  }
}
