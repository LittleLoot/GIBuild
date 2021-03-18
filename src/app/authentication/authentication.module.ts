// ########################################## @IMPORTS #####################################################

// IMPORTS @ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

// @COMPONENT
import { LogInComponent } from './log-in/log-in.component';

// @SERVICE
import { AuthenticationService } from "./services/authentication.service";

// ##########################################################################################################


@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
