import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable<any>;
  constructor(private afireAuth: AngularFireAuth) { }

  registrarUsuario(email: string, cotrasena: string){
    return new Promise((resolve, reject) =>{
      this.afireAuth.auth.createUserWithEmailAndPassword(email, cotrasena)
      .then (userData => resolve(userData),  
      err => reject (err));
    });
  }

  loginEmailUsuario(email: string , contrasena: string){
    return new Promise((resolve, reject) => {
      this.afireAuth.auth.signInWithEmailAndPassword(email, contrasena)
      .then( userData =>  resolve(userData),
      err => reject (err));
    });
  }

  getAuth() {
    return this.afireAuth.authState.map( auth => auth);
  }

  loginGoogleUsuario(){
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afireAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  salirUsuario(){
    return this.afireAuth.auth.signOut();
  }
}
