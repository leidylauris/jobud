import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Usuario }from '../../Interface/usuario';
import {NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 
  public activeModal : NgbActiveModal;
  constructor(private router: Router,
    private AuthService: AuthService,
    private UsuarioService: UsuarioService,
    private flashMensaje: FlashMessagesService,
    db: AngularFirestore
    ) { }

  
  private nombre : string = '';
  private apellido : string;
  private rol : string;
  private ingreso : boolean;
  private email : string;
  private contrasena : string;
  private contrasena2 : string;
  

  ngOnInit() {
  }
 
  agregarUsuario() {
    if (this.contrasena == this.contrasena2){
    this.AuthService.registrarUsuario(this.email, this.contrasena)
    .then ((res: any) => {
      this.flashMensaje.show('Usuario creado correctamente',
      { cssClass: 'alert-success', timeout: 4000 });
      
      const usuario = {
        nombre : this.nombre,
        apellido : this.apellido,
        email : this.email,
        rol : this.rol,
        ingreso: true
      };

      this.UsuarioService.nuevo_usuario(res.user.uid, usuario); 
      
      //this.router.navigate(['inicio']);
     
    }).catch((err) => {
        this.flashMensaje.show('Error:' && err.message,
          { cssClass: 'alert-danger', timeout: 4000 });
      });
    }else{
      this.flashMensaje.show('Las contraseñas no coinciden',
          { cssClass: 'alert-danger', timeout: 4000 });
    }
  }

}
