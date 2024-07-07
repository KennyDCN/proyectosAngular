import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiloComponent } from './milo/milo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ 
  
  { path: 'milo', component: MiloComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/milo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
