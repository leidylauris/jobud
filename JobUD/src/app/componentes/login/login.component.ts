import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from '../../servicios/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afireAuth: AngularFireAuth, 
    private router: Router, private AuthService: AuthService, 
    public flashMensaje: FlashMessagesService,
    public authService: AuthService,
    private UsuarioService: UsuarioService,
    db: AngularFirestore) { }

  private email: string = '';
  private contrasena: string = '';
  private emailUsuario: string;
  private nombre: string;
  private rol: string;

  
 
  
  ngOnInit() {
  }

  login() {
    this.authService.loginEmailUsuario(this.email, this.contrasena)
      .then((res) => {
        this.flashMensaje.show('Usuario logueado correctamente.',
          { cssClass: 'alert-success', timeout: 4000 });
          this.onLoginRedireccionar();
      }).catch((err) => {
        this.flashMensaje.show('Correo no registrado o contraseña invalida',
          { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['login']);
      });
  }

  loginGoogle(){
    this.authService.loginGoogleUsuario()
      .then ((res) => {
      

       if (/^[a-zA-Z]+@correo.udistrital.edu.co*/.test(firebase.auth().currentUser.email)){
        this.authService.getAuth().subscribe(auth => {
          this.nombre = auth.displayName;
          this.emailUsuario = auth.email;
          
          const usuario = {
            nombre : this.nombre,
            email : this.emailUsuario,
            rol : 'Estudiante'
          };
          this.UsuarioService.nuevo_usuario(usuario); 
          
          this.onLoginRedireccionar();
        })
       }else{
        this.router.navigate(['login']);
        this.flashMensaje.show('Correo invalido para el acceso',
          { cssClass: 'alert-danger', timeout: 4000 });
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
      }).catch (err => console.log(err));
  }
  
  salir(){
    this.authService.salirUsuario();
  }

  onLoginRedireccionar () : void {
    this.router.navigate(['publicacion']);
  }

}
