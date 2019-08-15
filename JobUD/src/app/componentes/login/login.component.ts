import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afireAuth: AngularFireAuth, 
    private router: Router, private AuthService: AuthService, 
    public flashMensaje: FlashMessagesService,
    public authService: AuthService) { }

  private email: string = '';
  private contrasena: string = '';
  private emailUsuario: string;
  
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
        this.authService.getAuth().subscribe(auth => {
          if (auth) {
            this.emailUsuario = auth.email;
              if (/^[a-zA-Z]+@correo.udistrital.edu.co*/.test(auth.email)) {
                this.onLoginRedireccionar();
              }else {
                this.router.navigate(['login']);
              }
          } 
        });
      }).catch (err => console.log(err));
  }
  
  salir(){
    this.authService.salirUsuario();
  }

  onLoginRedireccionar () : void {
    this.router.navigate(['inicio']);
  }
}
