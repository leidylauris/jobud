import { Injectable } from '@angular/core';
import { Mensaje }from '../Interface/mensaje';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  coleccionMensaje: AngularFirestoreCollection<Mensaje>;
  mensajes: Observable<Mensaje[]>;
  constructor(private db: AngularFirestore) { 
    this.coleccionMensaje = this.db.collection('mensaje'); //aca!!jajaja aac da la ruta 
  }

  nuevo_mensaje(uid: string, mensaje: Mensaje){
    this.coleccionMensaje.doc(uid).set(mensaje);
  }
}
