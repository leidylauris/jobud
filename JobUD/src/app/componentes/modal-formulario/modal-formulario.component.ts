import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MensajeService } from '../../servicios/mensaje.service';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage'
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.css']
})
export class ModalFormularioComponent implements OnInit {

  constructor(private flashMensaje: FlashMessagesService,
    private MensajeService: MensajeService,
    private AngularFireStorage: AngularFireStorage,
    db: AngularFirestore) {}

  ngOnInit() {
  }

  private email : string = '';
  private tipo : string = '';
  private telefono : number = 0;
  private uid : string ;

  getIud() {
      return firebase.auth().currentUser.uid;
  }

  agregarMensaje(){
    const mensaje = {
      email : this.email,
      tipo : this.tipo,
      telefono: this.telefono
    };
    this.MensajeService.nuevo_mensaje(this.getIud(), mensaje); 
  }

  cargarRut(rut){
    const archivo = rut.target.files[0];
    const archivoRuta = 'rut/rut1.pdf';
    const ref = this.AngularFireStorage.ref(archivoRuta);
    const tarea = this.AngularFireStorage.upload(archivoRuta, archivo);
  }

  cargarCamara(camara){
    const id = Math.random().toString(36).substring(2);
    const archivo = camara.target.files[0];
    const archivoRuta = `rut/rut_${id}`;
    const ref = this.AngularFireStorage.ref(archivoRuta);
    const tarea = this.AngularFireStorage.upload(archivoRuta, archivo);
    //tarea.snapshotChanges().pipe(finalize(() => this.urlRut = ref.getDownloadURL())).subscribe();
  }

}
