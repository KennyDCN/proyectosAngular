import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiloComponent } from './milo/milo.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { DataDbService } from './services/data-db.service';


import { firebaseConfig } from '../environments/firebase-config';

@NgModule({
  declarations: [
    AppComponent,
    MiloComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync(),
    [DataDbService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
