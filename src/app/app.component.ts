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


  // tslint:disable-next-line: use-lifecycle-interface
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.crudservice.get_Allclientes().subscribe(data => {

      this.cliente = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          // tslint:disable-next-line: no-string-literal
          nombres: e.payload.doc.data()['nombres'],
          // tslint:disable-next-line: no-string-literal
          apellidos: e.payload.doc.data()['apellidos'],
          // tslint:disable-next-line: no-string-literal
          telefono: e.payload.doc.data()['telefono'],
          // tslint:disable-next-line: no-string-literal
          direccion: e.payload.doc.data()['direccion'],
          // tslint:disable-next-line: no-string-literal
          fecha: e.payload.doc.data()['fecha'],
          // tslint:disable-next-line: no-string-literal
          correos: e.payload.doc.data()['correos'],
          // tslint:disable-next-line: no-string-literal
          comentarios: e.payload.doc.data()['comentarios'],
        };
      });
      console.log(this.cliente);

    });
  }


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

  // tslint:disable-next-line: typedef
  EditarRegistro(Record){
    Record.isedit = true;
    Record.editarnombres = Record.nombres;
    Record.editarapellidos = Record.apellidos;
    Record.editartelefono = Record.telefono;
    Record.editardireccion = Record.direccion;
    Record.editarfecha = Record.fecha;
    Record.editarcorreos = Record.correos;
    Record.editarcomentarios = Record.comentarios;
  }

  // tslint:disable-next-line: typedef
  Actualizarregistro(recorddata)
  {
    // tslint:disable-next-line: prefer-const
    let record = {};
    // tslint:disable-next-line: no-string-literal
    record['nombres'] = recorddata.editarnombres;
    // tslint:disable-next-line: no-string-literal
    record['apellidos'] = recorddata.editarapellidos;
    // tslint:disable-next-line: no-string-literal
    record['telefono'] = recorddata.editartelefono;
    // tslint:disable-next-line: no-string-literal
    record['direccion'] = recorddata.editardireccion;
    // tslint:disable-next-line: no-string-literal
    record['fecha'] = recorddata.editarfecha;
    // tslint:disable-next-line: no-string-literal
    record['correos'] = recorddata.editarcorreos;
    // tslint:disable-next-line: no-string-literal
    record['comentarios'] = recorddata.editarcomentarios;
    this.crudservice.update_cliente(recorddata.id, record);
    recorddata.isedit = false;
  }
  // tslint:disable-next-line: typedef
  Eliminarcliente(recordid)
  {
    this.crudservice.delete_cliente(recordid);
  }
}
