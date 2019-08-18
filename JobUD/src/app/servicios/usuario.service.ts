import { Injectable } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import * as firebase from 'firebase/app';
import { Usuario }from '../Interface/usuario';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  coleccionUsuario: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;
  constructor(private db: AngularFirestore,
    private auth: AuthService) { 
      this.coleccionUsuario = this.db.collection('usuario', ref => ref.orderBy('nombre', 'asc'));
    }
  /*getIud() {
    if (this.auth.getAuth) {
      return firebase.auth().currentUser.uid;
    }
  }
  prueba() {
    console.log('llegue');
  }

  crear_Perfil (value:Usuario) {
    console.log(value);
    return this.db.collection('perfil').doc(this.getIud()).set(value);

     private seleccionarUsuario: Usuario = {
    nombre: null,
    apellido: null,
    email: null,
    rol: null
  }
  }*/
  
  nuevo_usuario (usuario: Usuario) {
    console.log("llegue");
    this.coleccionUsuario.add(usuario);
  }
  
}
