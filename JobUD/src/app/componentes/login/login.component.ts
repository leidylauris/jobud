import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from '../../servicios/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { Usuario } from '../../Interface/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afireAuth: AngularFireAuth,
    private router: Router,
    private AuthService: AuthService,
    public flashMensaje: FlashMessagesService,
    public authService: AuthService,
    private UsuarioService: UsuarioService,
    public db: AngularFirestore) { }

  private email: string = '';
  private contrasena: string = '';
  private emailUsuario: string;
  private nombre: string;
  private rol: string;
  private usuario: Usuario;

  ngOnInit() { }

  login() {
    /*let usuarioC = this.db.collection('usuario', ref => ref.where('email', '==', this.email));
    const id = firebase.auth().currentUser.uid;
    console.log(usuarioC);*/

    this.authService.loginEmailUsuario(this.email, this.contrasena)
      .then((res) => {
        this.onLoginRedireccionar();
      }).catch((err) => {
        this.flashMensaje.show('Correo no registrado o contraseña invalida',
          { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['login']);
      });
  }

  loginGoogle() {
    this.authService.loginGoogleUsuario()
      .then((res) => {

        if (/^[a-zA-Z]+@correo.udistrital.edu.co*/.test(firebase.auth().currentUser.email)) {
          this.authService.getAuth().subscribe(auth => {
            this.nombre = auth.displayName;
            this.emailUsuario = auth.email;

            const usuario = {
              nombre: this.nombre,
              email: this.emailUsuario,
              rol: 'Estudiante'
            };
            this.UsuarioService.nuevo_usuario(auth.uid, usuario); //aca tambien se llama la funcion

            this.onLoginRedireccionar();
          })
        } else {
          this.router.navigate(['login']);
          this.flashMensaje.show('Correo invalido para el acceso',
            { cssClass: 'alert-danger', timeout: 5000 });
          console.log(firebase.auth().currentUser.email)
          firebase.auth().currentUser.delete();
        }

        /*this.authService.getAuth().subscribe(auth => {
        
          if (auth) {
            this.emailUsuario = auth.email;
              if (/^[a-zA-Z]+@correo.udistrital.edu.co.test(auth.email)) {
                this.onLoginRedireccionar();
              }else {
                this.router.navigate(['login']);
              }
          } 
        });*/
      }).catch(err => console.log(err));
  }

  salir() {
    this.authService.salirUsuario();
  }

  onLoginRedireccionar(): void {
    var uid = this.afireAuth.auth.currentUser.uid;
    this.db.collection('usuario').doc(uid).get().subscribe((snapshot) => {
      if (snapshot.exists) {
        this.usuario = (snapshot.data() as Usuario);
        
        if (this.usuario.ingreso == true) {
          /*this.UsuarioService.recuperarContrasena(this.usuario.email);
          this.router.navigate(['login']);
          this.flashMensaje.show('El link para cambiar la contraseña se ha enviado, por favor para ingresar por primera vez debe realizar el cambio',
            { cssClass: 'alert-danger', timeout: 4000 });*/
          //Lo que sea :D gracias :D
          this.router.navigate(['cambio-contrasena']);
        }else{
          this.router.navigate(['publicacion']);
        }
      }

    });
  }

  /*abrirmodal(){
    const dialogRef = this.dialog.open(ModalFormularioComponent, {
      width: '400px',
    });
  }
  */

}
