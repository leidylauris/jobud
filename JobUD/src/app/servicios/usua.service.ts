import { Injectable, OnInit } from '@angular/core';
import { DocumentReference} from '@angular/fire/firestore';
import { AuthService } from '../servicios/auth.service';
import { DatosApiService } from '../servicios/datos-api.service';
import { Usuario }from '../Interface/usuario';
import {NgForm} from '@angular/forms'
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsuaService implements OnInit{
  constructor() { }

  private db: AngularFirestore;
  private usuarioColeccion: AngularFirestoreCollection<Usuario>;
  private auth: AuthService;
  private DatosApiService: DatosApiService;
  private seleccionarUsuario: Usuario = {
    nombre: null,
    apellido: null,
    email: null,
    rol: null
  }

  ngOnInit(): void {}

  /*crear_usuario (usuario: Usuario): Promise<DocumentReference> {
    return this.db.collection('usuario').add(usuario);
  }*/

 nuevo_usuario (usuario: NgForm): void {
    console.log("llegue");
    this.DatosApiService.agregar_usuario(usuario.value);
  }
}
