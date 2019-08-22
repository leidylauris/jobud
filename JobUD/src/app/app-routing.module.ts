import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/componentes/login/login.component';
import {RegistroComponent} from '../app/componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PublicacionComponent } from './componentes/publicacion/publicacion.component';
import { OlvidarContrasenaComponent } from './componentes/olvidar-contrasena/olvidar-contrasena.component'; 
import { CambioContrasenaComponent } from './componentes/cambio-contrasena/cambio-contrasena.component'; 
import { ModalFormularioComponent } from './componentes/modal-formulario/modal-formulario.component'; 

 //se pasa por parametros la rutas que se van a trabajar
const routes: Routes = [];

export const rootRouterConfig: Routes = [

 
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'publicacion', component: PublicacionComponent },
  { path: 'olvidar-contrasena', component: OlvidarContrasenaComponent },
  { path: 'cambio-contrasena', component: CambioContrasenaComponent },
  { path: 'modal-formulario', component: ModalFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }