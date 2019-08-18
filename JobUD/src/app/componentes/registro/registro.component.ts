import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
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
  private email : string;
  private contrasena : string;
  

  ngOnInit() {
  }
 
  agregarUsuario(form: NgForm): void {
    this.AuthService.registrarUsuario(this.email, this.contrasena)
    .then ((res) => {
      this.flashMensaje.show('Usuario creado correctamente.',
      { cssClass: 'alert-success', timeout: 4000 });
      
      const usuario = {
        nombre : this.nombre,
        apellido : this.apellido,
        email : this.email,
        rol : this.rol
      };

      console.log(usuario);
      this.UsuarioService.nuevo_usuario(usuario); 
      
      //this.router.navigate(['inicio']);
     
    }).catch((err) => {
        this.flashMensaje.show('Error:' && err.message,
          { cssClass: 'alert-danger', timeout: 4000 });
      });
  }
}
