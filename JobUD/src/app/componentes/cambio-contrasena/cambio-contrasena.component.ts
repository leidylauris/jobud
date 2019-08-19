import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.css']
})
export class CambioContrasenaComponent implements OnInit {
  private contrasena : string;
  private contrasena2 : string;
  constructor(public afireAuth: AngularFireAuth,
    public flashMensaje: FlashMessagesService,
    private router: Router,
    public db: AngularFirestore) { }

  ngOnInit() {
  }

  cambiarContrasena(){
    var uid = this.afireAuth.auth.currentUser.uid;
    var usuario = firebase.auth().currentUser;
    this.db.collection('usuario').doc(uid).update({
      ingreso: false});
    this.flashMensaje.show('La contraseña se ha cambiado exitosamente, ya puedes acceder a tu cuenta',
    { cssClass: 'alert-danger', timeout: 4000 });
    this.router.navigate(['login']);
    usuario.updatePassword(this.contrasena).then(function (error){
      console.log(error);
    });
  }

}
