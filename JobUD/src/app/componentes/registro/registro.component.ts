import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Usuario }from '../../Interface/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router,
    private AuthService: AuthService,
    private flashMensaje: FlashMessagesService,
    ) { }

  private UsuarioService: UsuarioService;
  private nombre : string = '';
  private apellido : string;
  private rol : string;
  private email : string;
  private contrasena : string;

  ngOnInit() {
  }
 
  agregarUsuario(){
   
    this.AuthService.registrarUsuario(this.email, this.contrasena)
    .then ((res) => {
      this.flashMensaje.show('Usuario creado correctamente.',
      { cssClass: 'alert-success', timeout: 4000 });
      debugger;
      let mensaje : Usuario = {
        nombre : this.nombre,
        apellido : this.apellido,
        rol : this.rol
      }
      console.log(mensaje);
      this.UsuarioService.prueba();
      this.router.navigate(['inicio']);
    }).catch((err) => {
        this.flashMensaje.show('Error:' && err.message,
          { cssClass: 'alert-danger', timeout: 4000 });
      });
  }
}
