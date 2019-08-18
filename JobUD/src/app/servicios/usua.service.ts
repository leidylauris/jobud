import { Injectable, OnInit } from '@angular/core';
import { DocumentReference} from '@angular/fire/firestore';
import { AuthService } from '../servicios/auth.service';
import { DatosApiService } from '../servicios/datos-api.service';
import { Usuario }from '../Interface/usuario';
import {NgForm} from '@angular/forms'
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuaService {
  coleccionUsuario: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  constructor(private db: AngularFirestore,
    private auth: AuthService) {

      this.coleccionUsuario = this.db.collection('usuarios', ref => ref.orderBy('nombre', 'asc'));
     }

  
  private usuarioColeccion: AngularFirestoreCollection<Usuario>;
  
  private DatosApiService: DatosApiService;
  /*private seleccionarUsuario: Usuario = {
    nombre: null,
    apellido: null,
    email: null,
    rol: null
  }*/

  

  /*crear_usuario (usuario: Usuario): Promise<DocumentReference> {
    return this.db.collection('usuario').add(usuario);
  }*/

 nuevo_usuario (usuario: Usuario) {
    console.log("llegue");
    this.coleccionUsuario.add(usuario);
  }
}
