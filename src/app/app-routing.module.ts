import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiloComponent } from './milo/milo.component';
import { ContactComponent } from './contact/contact.component';
import { PruebaCodigoComponent } from './prueba-codigo/prueba-codigo.component';
import { PruebaInputComponent } from './prueba-input/prueba-input.component';
import { PaginaPersonajesComponent } from './pagina-personajes/pagina-personajes.component';

const routes: Routes = [

  { path: 'milo', component: MiloComponent },
  { path: 'prueba-codigo', component: PruebaCodigoComponent },
  { path: 'prueba-input', component: PruebaInputComponent },
  { path: 'pagina-personajes', component: PaginaPersonajesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/milo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
