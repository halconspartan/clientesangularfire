import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( public fireservices: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  create_Newcliente(Record)
  {
    return this.fireservices.collection('clientes').add(Record);
  }
}
