import { Injectable, OnInit } from '@angular/core';
import { Usuario }from '../Interface/usuario';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatosApiService  {
  private coleccionUsuario: AngularFirestoreCollection<Usuario>;
  public seleccionarUsuario: Usuario = {
    nombre: null,
    apellido: null,
    email: null,
    rol: null
  };

  constructor(private afs: AngularFirestore) { }

  agregar_usuario (usuario : Usuario  ): void {
    console.log("llegue");
    this.coleccionUsuario.add(usuario);
  }
}
