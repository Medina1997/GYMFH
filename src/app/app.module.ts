import { ConexionService } from './conexion.service';
import { ServicioService } from './servicio.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AyudaComponent } from './ayuda/ayuda.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule } from '@angular/fire/auth';
import { FormularioaltasComponent } from './formularioaltas/formularioaltas.component';
import { RutinaadminComponent } from './rutinaadmin/rutinaadmin.component';
import { RutinausuarioComponent } from './rutinausuario/rutinausuario.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PreguntasComponent,
    FooterComponent,
    AyudaComponent,
    HeaderComponent,
    SidenavListComponent,
    FormularioaltasComponent,
    RutinaadminComponent,
    RutinausuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [ConexionService, ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
