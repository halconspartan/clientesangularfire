import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(fireservices: AngularFirestore) { }

  // tslint:disable-next-line: typedef
  create_Newcliente()
  {
  }
}
