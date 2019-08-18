import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../../servicios/auth.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-olvidar-contrasena',
  templateUrl: './olvidar-contrasena.component.html',
  styleUrls: ['./olvidar-contrasena.component.css']
})
export class OlvidarContrasenaComponent implements OnInit {
  private email : string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  recuperarContrasena(){

    var afs = firebase.auth(); 
    
    afs.sendPasswordResetEmail(this.email)
      .then(function () {
          alert('funciona');
      }, function(error) {
        console.log(error);
      })
  }
}
