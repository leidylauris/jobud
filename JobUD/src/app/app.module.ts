import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { environment } from "../environments/environment";
import {AngularFireModule, FirebaseApp} from '@angular/fire';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { config } from 'rxjs';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { OlvidarContrasenaComponent } from './componentes/olvidar-contrasena/olvidar-contrasena.component';
import { CambioContrasenaComponent } from './componentes/cambio-contrasena/cambio-contrasena.component';
import { ModalFormularioComponent } from './componentes/modal-formulario/modal-formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    PublicacionComponent,
    OlvidarContrasenaComponent,
    CambioContrasenaComponent,
    ModalFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    //AngularFireModule.initializeApp(environment.firebaseConfi),
    FormsModule,
    FlashMessagesModule,
    //incializar firebase
    AngularFireModule.initializeApp(environment.firebaseConfi),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AngularFireAuth, FlashMessagesService],
  bootstrap: [AppComponent],
  entryComponents: [CambioContrasenaComponent]
})
export class AppModule { }
