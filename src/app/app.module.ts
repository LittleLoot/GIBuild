// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


// EXTERNAL IMPORTS: /MODULES /COMPONENTS /SERVICES

// @SERVICE
import { PersonajesModule } from "./personajes/personajes.module";
import { ArmasModule } from "./armas/armas.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { AddBBDDModule } from "./addBBDD/add-bbdd.module";

// @COMPONENT
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from "./inicio/inicio.component";
import { PersonajeComponent } from "./personajes/personaje/personaje.component";
import { LogInComponent } from "./authentication/log-in/log-in.component";
import { AddpersComponent } from "./addBBDD/addpers/addpers.component";
import { EditpersComponent } from "./addBBDD/editpers/editpers.component";



// ##########################################################################################################


// Paths
const routes: Routes =
[

  { path: '',
    component: InicioComponent },

  { path: 'personajes',
    component: PersonajeComponent },

  { path: 'addpers',
    component: AddpersComponent },

  { path: 'editpers/:id',
    component: EditpersComponent },

  { path: 'login',
    component: LogInComponent },

  { path: '**',
    component: InicioComponent }

];

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PersonajesModule,
    ArmasModule,
    AuthenticationModule,
    AddBBDDModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
