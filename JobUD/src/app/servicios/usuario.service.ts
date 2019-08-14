import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from '../servicios/auth.service';
import * as firebase from 'firebase/app';
import { Usuario }from '../Interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private db: AngularFirestore,
    private auth: AuthService) { }

  getIud() {
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
  }
   
  
}
