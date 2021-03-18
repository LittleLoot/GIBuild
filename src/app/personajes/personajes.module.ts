// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';



// EXTERNAL IMPORTS: /MODULES /COMPONENTS /SERVICES

// @COMPONENTS
import { PersonajeComponent } from './personaje/personaje.component';

// @SERVICE
import { PersonajeService } from "./servicios/personaje.service";

// ##########################################################################################################

@NgModule({
  declarations: [PersonajeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PersonajeService],
  bootstrap: [PersonajesModule]
})
export class PersonajesModule { }
