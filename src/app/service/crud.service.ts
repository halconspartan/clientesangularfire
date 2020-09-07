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

  // tslint:disable-next-line: typedef
  get_Allclientes(){
    return this.fireservices.collection('clientes').snapshotChanges();
  }

  // tslint:disable-next-line: typedef
  update_cliente(recordid, record)
  {
    this.fireservices.doc('clientes/' + recordid).update(record);
  }

  // tslint:disable-next-line: typedef
  delete_cliente(recordid)
  {
    this.fireservices.doc('clientes/' + recordid).delete();
  }
}
